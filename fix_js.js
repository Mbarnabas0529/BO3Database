const fs = require('fs');
let code = fs.readFileSync('randomizer.js', 'utf8');

// Find the corrupted index
let corruptIndex = code.indexOf("spinnerTrack.style.transition");
if(corruptIndex === -1) {
    console.log("Could not find line to repair");
    process.exit(1);
}

let goodCode = \spinnerTrack.style.transition = 'transform 4s cubic-bezier(0.1, 0.7, 0.1, 1)';
    spinnerTrack.style.transform = \\\	ranslateX(\\\px)\\\;
    
    setTimeout(() => {
        // Animation done
        const slot = loadoutSlots[spinsCount];
        slot.style.border = '3px solid var(--bo3-orange)';
        slot.innerHTML = \\\<img src="\\\" title="\\\">\\\;
        
        spinsCount++;
        spinBtn.textContent = \\\Pörgetés (\\\/5)\\\;
        spinBtn.disabled = false;
        
        if (spinsCount >= 5) {
            spinBtn.style.display = 'none';
            resetBtn.style.display = 'inline-block';
        }
    }, 4200);
});

resetBtn.addEventListener('click', () => {
    spinsCount = 0;
    spinBtn.style.display = 'inline-block';
    spinBtn.textContent = 'Pörgetés (0/5)';
    spinBtn.disabled = false;
    resetBtn.style.display = 'none';
    spinnerWrapper.style.display = 'none';
    
    loadoutSlots.forEach(slot => {
        slot.innerHTML = '';
        slot.style.border = '3px dashed #444';
    });
});\;

fs.writeFileSync('randomizer.js', code.substring(0, corruptIndex) + goodCode);
console.log("Fixed!");
