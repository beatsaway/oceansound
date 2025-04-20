// Visual effects for music player
class VisualEffects {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.zIndex = '-1';
        document.body.appendChild(this.canvas);
        
        this.ctx = this.canvas.getContext('2d');
        this.dots = [];
        this.waves = [];
        this.lastFrameTime = 0;
        this.animationId = null;
        
        // Configuration
        this.dotSpacing = 20;
        this.fps = 8;
        this.frameDelay = 1000 / this.fps;
        this.maxWaveRadius = 1000;
        this.waveSpeed = 5;
        this.maxDotSize = 3;
        this.minDotSize = 0.5; // Minimum dot size
        this.sizeRange = this.maxDotSize - this.minDotSize; // Total size range
        
        // Extended color palette with 12 colors
        this.waveColors = [
            '#4CAF50', // Green
            '#2196F3', // Blue
            '#FF9800', // Orange
            '#E91E63', // Pink
            '#9C27B0', // Purple
            '#00BCD4', // Cyan
            '#FFEB3B', // Yellow
            '#795548', // Brown
            '#607D8B', // Blue Grey
            '#F44336', // Red
            '#8BC34A', // Light Green
            '#3F51B5'  // Indigo
        ];
        
        this.init();
        this.startAnimation();
        
        // Handle window resize
        window.addEventListener('resize', () => this.init());
    }
    
    init() {
        // Set canvas size
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        // Calculate grid dimensions
        const cols = Math.ceil(this.canvas.width / this.dotSpacing);
        const rows = Math.ceil(this.canvas.height / this.dotSpacing);
        
        // Create dots array
        this.dots = [];
        
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * this.dotSpacing + this.dotSpacing/2;
                const y = row * this.dotSpacing + this.dotSpacing/2;
                
                this.dots.push({
                    x, y,
                    col, row,
                    baseSize: 1,
                    sizeModifier: 0,
                    activeEffects: {},
                    color: '#000' // Default color
                });
            }
        }
        
        // Clear any existing waves
        this.waves = [];
        
        // Draw initial grid
        this.drawGrid();
    }
    
    startAnimation() {
        const animate = (currentTime) => {
            this.animationId = requestAnimationFrame(animate);
            
            if (currentTime - this.lastFrameTime >= this.frameDelay) {
                this.update();
                this.lastFrameTime = currentTime;
            }
        };
        
        animate(0);
    }
    
    update() {
        // Update waves
        this.waves = this.waves.filter(wave => {
            if (wave.type === 'round') {
                wave.radius += this.waveSpeed;
                return wave.radius < this.maxWaveRadius;
            } else if (wave.type === 'square') {
                wave.size += this.waveSpeed;
                return wave.size < this.maxWaveRadius;
            } else if (wave.type === 'triangle') {
                wave.size += this.waveSpeed;
                return wave.size < this.maxWaveRadius;
            }
            return true;
        });
        
        // Update dots
        this.updateDots();
        this.drawGrid();
    }
    
    updateDots() {
        // Reset all dot modifiers and colors
        this.dots.forEach(dot => {
            dot.sizeModifier = 0;
            dot.activeEffects = {};
            dot.color = '#000';
            dot.activeWaves = [];
            dot.baseSize = this.minDotSize; // Start with minimum size
        });
        
        // Apply wave effects
        this.waves.forEach((wave, waveIndex) => {
            if (wave.type === 'round') {
                this.applyRoundWave(wave, waveIndex);
            } else if (wave.type === 'square') {
                this.applySquareWave(wave, waveIndex);
            } else if (wave.type === 'triangle') {
                this.applyTriangleWave(wave, waveIndex);
            }
        });
        
        // Update dot colors and finalize sizes
        this.dots.forEach(dot => {
            // Handle color blending
            if (dot.activeWaves.length > 0) {
                dot.activeWaves.sort((a, b) => b.intensity - a.intensity);
                let currentColor = this.waveColors[dot.activeWaves[0].colorIndex];
                
                for (let i = 1; i < dot.activeWaves.length; i++) {
                    const wave = dot.activeWaves[i];
                    const blendRatio = wave.intensity * 0.5;
                    currentColor = this.blendColors(currentColor, this.waveColors[wave.colorIndex], blendRatio);
                }
                
                dot.color = currentColor;
            }
            
            // Ensure size stays within range
            dot.sizeModifier = Math.max(-this.sizeRange, Math.min(this.sizeRange, dot.sizeModifier));
        });
    }
    
    applyRoundWave(wave, waveIndex) {
        const waveThickness = 50;
        const colorIndex = waveIndex % this.waveColors.length;
        
        this.dots.forEach(dot => {
            const dx = dot.x - wave.centerX;
            const dy = dot.y - wave.centerY;
            const distFromCenter = Math.sqrt(dx * dx + dy * dy);
            const distanceFromWave = Math.abs(distFromCenter - wave.radius);
            
            if (distanceFromWave < waveThickness) {
                const wavePosition = 1 - (distanceFromWave / waveThickness);
                
                // Calculate size effect based on wave position
                let effect;
                if (dot.baseSize + dot.sizeModifier >= this.maxDotSize) {
                    // If dot is at max size, make it shrink
                    effect = -this.sizeRange * wavePosition;
                } else {
                    // Normal wave effect
                    effect = this.sizeRange * wavePosition;
                }
                
                dot.sizeModifier += effect;
                
                if (wavePosition > 0.3) {
                    dot.activeWaves.push({
                        colorIndex,
                        intensity: wavePosition
                    });
                }
            }
        });
    }
    
    applySquareWave(wave, waveIndex) {
        const waveThickness = 50;
        const colorIndex = waveIndex % this.waveColors.length;
        
        this.dots.forEach(dot => {
            const dx = Math.abs(dot.x - wave.centerX);
            const dy = Math.abs(dot.y - wave.centerY);
            const manhDist = Math.max(dx, dy);
            const distanceFromWave = Math.abs(manhDist - wave.size);
            
            if (distanceFromWave < waveThickness) {
                const wavePosition = 1 - (distanceFromWave / waveThickness);
                
                // Calculate size effect based on wave position
                let effect;
                if (dot.baseSize + dot.sizeModifier >= this.maxDotSize) {
                    // If dot is at max size, make it shrink
                    effect = -this.sizeRange * wavePosition;
                } else {
                    // Normal wave effect
                    effect = this.sizeRange * wavePosition;
                }
                
                dot.sizeModifier += effect;
                
                if (wavePosition > 0.3) {
                    dot.activeWaves.push({
                        colorIndex,
                        intensity: wavePosition
                    });
                }
            }
        });
    }
    
    applyTriangleWave(wave, waveIndex) {
        const waveThickness = 50;
        const colorIndex = waveIndex % this.waveColors.length;
        
        this.dots.forEach(dot => {
            const dx = Math.abs(dot.x - wave.centerX);
            const dy = Math.abs(dot.y - wave.centerY);
            const dist = dx + dy;
            const distanceFromWave = Math.abs(dist - wave.size);
            
            if (distanceFromWave < waveThickness) {
                const wavePosition = 1 - (distanceFromWave / waveThickness);
                
                // Calculate size effect based on wave position
                let effect;
                if (dot.baseSize + dot.sizeModifier >= this.maxDotSize) {
                    // If dot is at max size, make it shrink
                    effect = -this.sizeRange * wavePosition;
                } else {
                    // Normal wave effect
                    effect = this.sizeRange * wavePosition;
                }
                
                dot.sizeModifier += effect;
                
                if (wavePosition > 0.3) {
                    dot.activeWaves.push({
                        colorIndex,
                        intensity: wavePosition
                    });
                }
            }
        });
    }
    
    drawGrid() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.dots.forEach(dot => {
            // Calculate final size, ensuring it stays within bounds
            const currentSize = Math.max(this.minDotSize, 
                Math.min(this.maxDotSize, dot.baseSize + dot.sizeModifier));
            
            this.ctx.beginPath();
            this.ctx.arc(dot.x, dot.y, currentSize, 0, Math.PI * 2);
            this.ctx.fillStyle = dot.color;
            this.ctx.fill();
        });
    }
    
    triggerWave(type) {
        const centerX = Math.random() * this.canvas.width;
        const centerY = Math.random() * this.canvas.height;
        
        this.waves.push({
            type,
            centerX,
            centerY,
            radius: 0,
            size: 0
        });
    }
    
    triggerRandomWave() {
        const types = ['round', 'square', 'triangle'];
        const randomType = types[Math.floor(Math.random() * types.length)];
        this.triggerWave(randomType);
    }
    
    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        if (this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
    
    // Helper function to blend colors
    blendColors(color1, color2, ratio) {
        const r1 = parseInt(color1.slice(1, 3), 16);
        const g1 = parseInt(color1.slice(3, 5), 16);
        const b1 = parseInt(color1.slice(5, 7), 16);
        
        const r2 = parseInt(color2.slice(1, 3), 16);
        const g2 = parseInt(color2.slice(3, 5), 16);
        const b2 = parseInt(color2.slice(5, 7), 16);
        
        const r = Math.round(r1 * (1 - ratio) + r2 * ratio);
        const g = Math.round(g1 * (1 - ratio) + g2 * ratio);
        const b = Math.round(b1 * (1 - ratio) + b2 * ratio);
        
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
} 