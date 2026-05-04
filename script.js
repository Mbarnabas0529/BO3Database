// Data extracted from PDF 
const gobblegums = [
    // MEGA GOBBLEGUMS [cite: 4]
    { name: "Aftertaste", type: "Mega", effect: "Keep all Perks after being revived. (Lasts 3 rounds)", command: "/modvar bgb_1 1" },
    { name: "Board Games", type: "Mega", effect: "Repairing one board at a window repairs them all. (Lasts 5 minutes)", command: "/modvar bgb_1 8" },
    { name: "Board to Death", type: "Mega", effect: "Zombies within 15 feet of a repaired board are killed. (Lasts 5 minutes)", command: "/modvar bgb_1 9" },
    { name: "Bullet Boost", type: "Mega", effect: "Re-rolls the Alternate Ammo Type on your current Pack-a-Punched weapon. (2 activations)", command: "/modvar bgb_1 10" },
    { name: "Burned Out", type: "Mega", effect: "The next time you take fire damage, nearby zombies burst into flames. (2 activations)", command: "/modvar bgb_1 11" },
    { name: "Cache Back", type: "Mega", effect: "Spawns a Max Ammo Power-Up.", command: "/modvar bgb_1 12" },
    { name: "Crate Power", type: "Mega", effect: "The next weapon you get from the Magic Box is Pack-a-Punched.", command: "/modvar bgb_1 14" },
    { name: "Crawl Space", type: "Mega", effect: "All nearby zombies become crawlers. (5 activations)", command: "/modvar bgb_1 15" },
    { name: "Dead of Nuclear Winter", type: "Mega", effect: "Spawns a Nuke Power-Up. (2 activations)", command: "/modvar bgb_1 17" },
    { name: "Disorderly Combat", type: "Mega", effect: "Gives a random gun every 10 seconds. (Lasts 5 minutes)", command: "/modvar bgb_1 18" },
    { name: "Ephemeral Enhancement", type: "Mega", effect: "Turns your current weapon into a Pack-a-Punched version for 60 seconds. (2 activations)", command: "/modvar bgb_1 19" },
    { name: "Extra Credit", type: "Mega", effect: "Spawns a personal points Power-Up worth 1,250 points. (4 activations)", command: "/modvar bgb_1 20" },
    { name: "Fatal Contraption", type: "Mega", effect: "Spawns a Death Machine Power-Up. (2 activations)", command: "/modvar bgb_1 22" },
    { name: "Fear in Headlights", type: "Mega", effect: "Zombies seen by players are frozen in place. (Lasts 2 minutes)", command: "/modvar bgb_1 23" },
    { name: "Flavor Hexed", type: "Mega", effect: "Transforms into a random Mega GobbleGum.", command: "/modvar bgb_1 25" },
    { name: "Head Drama", type: "Mega", effect: "Any bullet which hits a zombie damages its head.", command: "/modvar bgb_1 26" },
    { name: "Idle Eyes", type: "Mega", effect: "All zombies ignore players. (3 activations)", command: "/modvar bgb_1 27" },
    { name: "I'm Feelin' Lucky", type: "Mega", effect: "Spawns a random Power-Up. (2 activations)", command: "/modvar bgb_1 28" },
    { name: "Immolation Liquidation", type: "Mega", effect: "Spawns a Fire Sale Power-Up. (3 activations)", command: "/modvar bgb_1 29" },
    { name: "Kill Joy", type: "Mega", effect: "Spawns an Insta-Kill Power-Up. (2 activations)", command: "/modvar bgb_1 32" },
    { name: "Killing Time", type: "Mega", effect: "All zombies freeze in place for 20 seconds.", command: "/modvar bgb_1 33" },
    { name: "Licensed Contractor", type: "Mega", effect: "Spawns a Carpenter Power-Up. (3 activations)", command: "/modvar bgb_1 34" },
    { name: "Mind Blown", type: "Mega", effect: "Nearby zombies' heads explode. (3 activations)", command: "/modvar bgb_1 36" },
    { name: "Near Death Experience", type: "Mega", effect: "Revive or be revived by being near other players.", command: "/modvar bgb_1 37" },
    { name: "On the House", type: "Mega", effect: "Spawns a random Perk Bottle Power-Up.", command: "/modvar bgb_1 40" },
    { name: "Perkaholic", type: "Mega", effect: "Gives the player all Perk-a-Colas in the map.", command: "/modvar bgb_1 41" },
    { name: "Phoenix Up", type: "Mega", effect: "Revives all teammates. Teammates keep perks.", command: "/modvar bgb_1 42" },
    { name: "Pop Shocks", type: "Mega", effect: "Melee attacks trigger an electrostatic discharge.", command: "/modvar bgb_1 43" },
    { name: "Power Vacuum", type: "Mega", effect: "Power-Ups spawn more often. (Lasts 4 rounds)", command: "/modvar bgb_1 44" },
    { name: "Profit Sharing", type: "Mega", effect: "Points earned are received by nearby players.", command: "/modvar bgb_1 45" },
    { name: "Reign Drops", type: "Mega", effect: "Spawns all nine of the core Power-Ups.", command: "/modvar bgb_1 47" },
    { name: "Respin Cycle", type: "Mega", effect: "Re-spins the Magic Box to a new weapon.", command: "/modvar bgb_1 48" },
    { name: "Round Robbin'", type: "Mega", effect: "Ends the current round. Gives 1600 points.", command: "/modvar bgb_1 49" },
    { name: "Secret Shopper", type: "Mega", effect: "Any wall buy can buy ammo for current gun.", command: "/modvar bgb_1 50" },
    { name: "Self Medication", type: "Mega", effect: "Auto-revive yourself. Keep all perks.", command: "/modvar bgb_1 51" },
    { name: "Shopping Free", type: "Mega", effect: "All purchases are free. (Lasts 1 minute)", command: "/modvar bgb_1 52" },
    { name: "Slaughter Slide", type: "Mega", effect: "Create two lethal explosions by sliding.", command: "/modvar bgb_1 53" },
    { name: "Soda Fountain", type: "Mega", effect: "Perk purchase limit is ignored. Double perks.", command: "/modvar bgb_1 54" },
    { name: "Unbearable", type: "Mega", effect: "Box re-spins on Teddy Bear. Box won't move.", command: "/modvar bgb_1 59" },
    { name: "Undead Man Walking", type: "Mega", effect: "Slows down all zombies to a walk.", command: "/modvar bgb_1 60" },
    { name: "Unquenchable", type: "Mega", effect: "Can buy an extra Perk-a-Cola.", command: "/modvar bgb_1 61" },
    { name: "Wall Power", type: "Mega", effect: "Next wall weapon is Pack-a-Punched.", command: "/modvar bgb_1 62" },
    { name: "Who's Keeping Score?", type: "Mega", effect: "Spawns a Double Points Power-Up.", command: "/modvar bgb_1 63" },
    
    // CLASSIC GOBBLEGUMS [cite: 13]
    { name: "Alchemical Antithesis", type: "Classic", effect: "Every 10 points earned, 1 ammo is added to your stock. (2 activations, 60 seconds each)", command: "/modvar bgb_1 2" },
    { name: "Always Done Swiftly", type: "Classic", effect: "Walk faster while aiming. Raise and lower your weapon to aim more quickly. (Lasts 3 rounds)", command: "/modvar bgb_1 3" },
    { name: "Anywhere But Here!", type: "Classic", effect: "Instantly teleport to a random location. A concussive blast knocks back nearby zombies. (2 activations)", command: "/modvar bgb_1 4" },
    { name: "Armamental Accomplishment", type: "Classic", effect: "Switch weapons and recover from performing melee attacks faster. Reload weapons faster. (Lasts 3 rounds)", command: "/modvar bgb_1 5" },
    { name: "Arms Grace", type: "Classic", effect: "Respawn with the guns you had when you bled out.", command: "/modvar bgb_1 6" },
    { name: "Arsenal Accelerator", type: "Classic", effect: "Earn your Special Weapon faster. (Lasts 10 minutes)", command: "/modvar bgb_1 7" },
    { name: "Coagulant", type: "Classic", effect: "Longer bleed out time. (Lasts 20 minutes)", command: "/modvar bgb_1 13" },
    { name: "Danger Closest", type: "Classic", effect: "Zero explosive damage. (Lasts 3 rounds)", command: "/modvar bgb_1 16" },
    { name: "Eye Candy", type: "Classic", effect: "Overlays colors onto zombies based on their proximity. (4 activations)", command: "/modvar bgb_1 21" },
    { name: "Firing on All Cylinders", type: "Classic", effect: "Can fire weapons while sprinting. (Lasts 3 rounds)", command: "/modvar bgb_1 24" },
    { name: "Impatient", type: "Classic", effect: "Respawn near the end of the current round.", command: "/modvar bgb_1 30" },
    { name: "In Plain Sight", type: "Classic", effect: "All zombies ignore you for 10 seconds. (2 activations)", command: "/modvar bgb_1 31" },
    { name: "Lucky Crit", type: "Classic", effect: "Adds an additional chance for AAT to activate.", command: "/modvar bgb_1 35" },
    { name: "Newtonian Negation", type: "Classic", effect: "Zombies killed fall 'up'.", command: "/modvar bgb_1 38" },
    { name: "Now You See Me", type: "Classic", effect: "All zombies target you for 10 seconds.", command: "/modvar bgb_1 39" },
    { name: "Projectile Vomiting", type: "Classic", effect: "Zombies hit with projectiles vomit.", command: "/modvar bgb_1 46" },
    { name: "Stock Option", type: "Classic", effect: "Ammo is taken from stock instead of magazine.", command: "/modvar bgb_1 55" },
    { name: "Sword Flay", type: "Classic", effect: "Melee attacks deal 5x damage.", command: "/modvar bgb_1 56" },
    { name: "Temporal Gift", type: "Classic", effect: "Power-ups last longer. (Lasts 1 round)", command: "/modvar bgb_1 57" },
    { name: "Tone Death", type: "Classic", effect: "A silly sound plays when you kill a zombie. (Lasts for a certain amount of kills)", command: "/modvar bgb_1 58" }
];

const container = document.getElementById('gum-container');

gobblegums.forEach(gum => {
    // Generate image name based on gobblegum name
    const imageName = gum.name.replace(/['?!]/g, '').split(' ').join('_') + '_GobbleGum_BO3.webp';
    
    const typeClass = gum.type === 'Mega' ? 'type-mega' : 'type-classic';

    const cardHTML = `
        <div class="gobblegum-card" data-index="${gobblegums.indexOf(gum)}">
            <div class="card-header">
                <img src="images/${imageName}" alt="${gum.name}" class="gg-image" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23333\\'/></svg>'">
                <div class="gg-info">
                    <h2 class="gg-name">${gum.name}</h2>
                    <span class="gg-type ${typeClass}">${gum.type} GobbleGum</span>
                </div>
            </div>
            <p class="gg-effect">${gum.effect}</p>
            <div class="command-box" onclick="navigator.clipboard.writeText('${gum.command}')" title="Click to copy!">
                <span>${gum.command}</span>
                <span class="copy-hint">Copy</span>
            </div>
            <button class="select-btn" onclick="toggleSelection(${gobblegums.indexOf(gum)}, this)">Select</button>
        </div>
    `;
    container.innerHTML += cardHTML;
});

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.gobblegum-card');
    
    cards.forEach(card => {
        const name = card.querySelector('.gg-name').textContent.toLowerCase();
        const type = card.querySelector('.gg-type').textContent.toLowerCase();
        const effect = card.querySelector('.gg-effect').textContent.toLowerCase();
        
        if (name.includes(searchTerm) || type.includes(searchTerm) || effect.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// Hamburger menu functionality
const hamburger = document.getElementById('hamburgerMenu');
const sideMenu = document.getElementById('sideMenu');

hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});

// Close if clicked outside
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !hamburger.contains(e.target) && sideMenu.classList.contains('open')) {
        sideMenu.classList.remove('open');
    }
});


// Generator Functionality
let selectedGums = [];
const maxSelection = 5;
const toggleGeneratorBtn = document.getElementById('toggleGeneratorBtn');
const generatorPanel = document.getElementById('generatorPanel');
const selectedGumsGrid = document.getElementById('selectedGumsGrid');
const generatedCommandOutput = document.getElementById('generatedCommandOutput');
const selectedCount = document.getElementById('selectedCount');
const copyGeneratedBtn = document.getElementById('copyGeneratedBtn');

if (toggleGeneratorBtn) {
    toggleGeneratorBtn.addEventListener('click', () => {
        const isGenerator = container.classList.toggle('generator-active');
        if (isGenerator) {
            generatorPanel.style.display = 'block';
            toggleGeneratorBtn.innerText = 'Exit Generator';
            toggleGeneratorBtn.style.background = 'var(--bo3-orange)';
            toggleGeneratorBtn.style.color = '#000';
        } else {
            generatorPanel.style.display = 'none';
            toggleGeneratorBtn.innerText = 'Pack Generator';
            toggleGeneratorBtn.style.background = '#222';
            toggleGeneratorBtn.style.color = 'var(--text-main)';
        }
    });
}

function toggleSelection(index, btnElement) {
    const gum = gobblegums[index];
    const gumIndex = selectedGums.findIndex(g => g.name === gum.name);
    
    if (gumIndex > -1) {
        // Remove from selection
        selectedGums.splice(gumIndex, 1);
        btnElement.classList.remove('selected');
        btnElement.innerText = 'Select';
    } else {
        if (selectedGums.length >= maxSelection) {
            alert('You can only select up to 5 GobbleGums!');
            return;
        }
        // Add to selection
        selectedGums.push(gum);
        btnElement.classList.add('selected');
        btnElement.innerText = 'Selected';
    }
    
    updateGeneratorPanel();
}

function updateGeneratorPanel() {
    selectedCount.innerText = selectedGums.length;
    
    // Update grid images
    selectedGumsGrid.innerHTML = '';
    selectedGums.forEach((gum) => {
        const imageName = gum.name.replace(/['?!]/g, '').split(' ').join('_') + '_GobbleGum_BO3.webp';
        selectedGumsGrid.innerHTML += `
            <div class="selected-gum-item">
                <img src="images/${imageName}" alt="${gum.name}">
                <span>${gum.name}</span>
            </div>
        `;
    });
    
    // Generate command string
    // Modifies base command ID to bgb_1, bgb_2, etc.
    let fullCommand = '';
    selectedGums.forEach((gum, i) => {
        // extract the value from '/modvar bgb_1 XX'
        const parts = gum.command.split(' ');
        const valueId = parts[2];
        fullCommand += `/modvar bgb_${i + 1} ${valueId}; `;
    });
    
    generatedCommandOutput.value = fullCommand.trim();
}

if (copyGeneratedBtn) {
    copyGeneratedBtn.addEventListener('click', () => {
        if (generatedCommandOutput.value) {
            navigator.clipboard.writeText(generatedCommandOutput.value);
            const originalText = copyGeneratedBtn.innerText;
            copyGeneratedBtn.innerText = 'Copied!';
            setTimeout(() => {
                copyGeneratedBtn.innerText = originalText;
            }, 2000);
        }
    });
}

// Modal Popup Functionality
const gumModal = document.getElementById('gumModal');
const closeModal = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalType = document.getElementById('modalType');
const modalEffect = document.getElementById('modalEffect');

if (container) {
    container.addEventListener('click', (e) => {
        const card = e.target.closest('.gobblegum-card');
        if (!card) return;
        
        // Prevent opening modal if clicking select button or command box in standard mode
        if (e.target.closest('.select-btn') || 
           (e.target.closest('.command-box') && !container.classList.contains('generator-active'))) {
            return;
        }

        const index = card.getAttribute('data-index');
        const gum = gobblegums[index];
        const imageName = gum.name.replace(/['?!]/g, '').split(' ').join('_') + '_GobbleGum_BO3.webp';

        modalImage.src = `images/${imageName}`;
        modalName.innerText = gum.name;
        
        modalType.innerText = `${gum.type} GobbleGum`;
        modalType.className = `gg-type ${gum.type === 'Mega' ? 'type-mega' : 'type-classic'}`;
        
        modalEffect.innerText = gum.effect;
        
        gumModal.style.display = 'flex';
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        gumModal.style.display = 'none';
    });
}

if (gumModal) {
    gumModal.addEventListener('click', (e) => {
        if (e.target === gumModal) {
            gumModal.style.display = 'none';
        }
    });
}
