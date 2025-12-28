// Fallback für Profilbild
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profileImg');
    
    // Wenn kein Profilbild vorhanden ist, zeige einen Platzhalter
    profileImg.onerror = function() {
        // Erstelle ein Canvas-Element für den Avatar
        const canvas = document.createElement('canvas');
        canvas.width = 120;
        canvas.height = 120;
        const ctx = canvas.getContext('2d');
        
        // Zeichne einen schönen Gradient-Hintergrund
        const gradient = ctx.createLinearGradient(0, 0, 120, 120);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 120, 120);
        
        // Zeichne die Initialen
        ctx.fillStyle = 'white';
        ctx.font = 'bold 50px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('LO', 60, 60);
        
        // Setze das Canvas als Bild
        profileImg.src = canvas.toDataURL();
    };
    
    // Trigger error wenn Bild nicht existiert
    if (!profileImg.complete || profileImg.naturalHeight === 0) {
        profileImg.onerror();
    }

    // Smooth scroll für Links
    const links = document.querySelectorAll('.link-button');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Partikel-Effekt im Hintergrund (optional)
    createParticles();
});

function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
        `;
        particlesContainer.appendChild(particle);
    }

    // CSS Animation für Partikel
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}