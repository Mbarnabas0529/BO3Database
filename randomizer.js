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

// Hamburger menü funkció
const hamburger = document.getElementById('hamburgerMenu');
const sideMenu = document.getElementById('sideMenu');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
    });

    // Ha a menün kívül kattintunk, zárja be
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !hamburger.contains(e.target) && sideMenu.classList.contains('open')) {
            sideMenu.classList.remove('open');
        }
    });
}

// -- Randomizer Logic --
const spinBtn = document.getElementById('spinBtn');
const resetBtn = document.getElementById('resetBtn');
const spinnerWrapper = document.getElementById('spinnerWrapper');
const spinnerTrack = document.getElementById('spinnerTrack');
const loadoutSlots = document.querySelectorAll('.slot');
const rolledCardsContainer = document.getElementById('rolledCardsContainer');

let spinsCount = 0;
let rolledGums = [];

function getRandomGum(excludeList = []) {
    const available = gobblegums.filter(gum => !excludeList.includes(gum.name));
    if (available.length === 0) return gobblegums[0]; // Biztonsági tartalék
    return available[Math.floor(Math.random() * available.length)];
}

function getGumImage(gumName) {
    return 'images/' + gumName.replace(/['?!]/g, '').split(' ').join('_') + '_GobbleGum_BO3.webp';
}

spinBtn.addEventListener('click', () => {
    if (spinsCount >= 5) return;
    
    spinBtn.disabled = true;
    spinnerWrapper.style.display = 'block';
    
    // Generate random gums for the track
    spinnerTrack.innerHTML = '';
    spinnerTrack.style.transition = 'none';
    spinnerTrack.style.transform = 'translateX(0)';
    
    const itemsCount = 40; // Number of items in track
    const winIndex = 35; // The one it lands on
    // Új gumi sorsolása, ami még nem volt
    const winnerGum = getRandomGum(rolledGums);
    rolledGums.push(winnerGum.name);
    
    for (let i = 0; i < itemsCount; i++) {
        // A többi háttérben pörgő ikon lehet akármi, de a winIndex kizárólagosan a mi új egyedi nyertesünk (illetve ha akarjuk, hogy a futószalagon is teljesen különbözőek legyenek, át is adhatjuk oda, de az effekt élménye nem csorbul ha ott ismétlődnek).
        // Itt most hagyjuk őket teljesen randomnak, amiben nincs benne fixen a rolledGums, kivéve ha winIndex.
        let gum = i === winIndex ? winnerGum : getRandomGum();
        let img = document.createElement('img');
        img.src = getGumImage(gum.name);
        img.onerror = () => { img.src = 'data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><rect width=\'100%\' height=\'100%\' fill=\'%23333\'/></svg>' };
        spinnerTrack.appendChild(img);
    }
    
    // Force reflow
    spinnerTrack.offsetWidth;
    
    // Távolság kiszámítása: rábízzuk a böngészőre a pontos matematikai helyzetét a nyertes elemnek!
    const winImg = spinnerTrack.children[winIndex];
    const wrapperCenter = spinnerWrapper.offsetWidth / 2;
    
    // Jitter: pici random mozgás az ikonon belül, hogy ne mindig hajszálpontosan a közepén álljon meg
    const jitter = Math.random() * (winImg.offsetWidth / 2) - (winImg.offsetWidth / 4); 
    
    // Eltoljuk a sávot úgy, hogy a wrapper közepe a kép közepére essen a bal margójától
    const offset = -(winImg.offsetLeft) + wrapperCenter - (winImg.offsetWidth / 2) + jitter;
    
    spinnerTrack.style.transition = 'transform 4s cubic-bezier(0.1, 0.7, 0.1, 1)';
    spinnerTrack.style.transform = `translateX(${offset}px)`;
    
    setTimeout(() => {
        // Finom igazítás a pontos közepére (Jitter eltávolítása)
        spinnerTrack.style.transition = 'transform 0.3s ease';
        spinnerTrack.style.transform = `translateX(${offset - jitter}px)`;
        
        setTimeout(() => {
            // Animation done
            const slot = loadoutSlots[spinsCount];
            slot.style.border = '3px solid var(--bo3-orange)';
            slot.innerHTML = `
                <img src="${getGumImage(winnerGum.name)}" title="${winnerGum.name}">
                <div class="slot-name">${winnerGum.name}</div>
            `;
            
            // Build the card to show below the slots, just like in collection
            const slotIndex = spinsCount + 1;
            const updatedCommand = winnerGum.command.replace('bgb_1', `bgb_${slotIndex}`);
            const typeClass = winnerGum.type === 'Mega' ? 'type-mega' : 'type-classic';
            const imageName = winnerGum.name.replace(/['?!]/g, '').split(' ').join('_') + '_GobbleGum_BO3.webp';

            const cardHTML = `
                <div class="gobblegum-card">
                    <div class="card-header">
                        <img src="images/${imageName}" alt="${winnerGum.name}" class="gg-image" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23333\\'/></svg>'">
                        <div class="gg-info">
                            <h2 class="gg-name">${winnerGum.name}</h2>
                            <span class="gg-type ${typeClass}">${winnerGum.type} GobbleGum</span>
                        </div>
                    </div>
                    <p class="gg-effect">${winnerGum.effect}</p>
                    <div class="command-box" onclick="navigator.clipboard.writeText('${updatedCommand}')" title="Click to copy!">
                        <span>${updatedCommand}</span>
                        <span class="copy-hint">Copy</span>
                    </div>
                </div>
            `;
            rolledCardsContainer.innerHTML += cardHTML;
            
            spinsCount++;
            spinBtn.textContent = `Spin (${spinsCount}/5)`;
            spinBtn.disabled = false;
            
            if (spinsCount >= 5) {
                spinBtn.style.display = 'none';
                resetBtn.style.display = 'inline-block';
            }
        }, 300);
    }, 4000);
});

resetBtn.addEventListener('click', () => {
    spinsCount = 0;
    rolledGums = [];
    spinBtn.style.display = 'inline-block';
    spinBtn.textContent = 'Spin (0/5)';
    spinBtn.disabled = false;
    resetBtn.style.display = 'none';
    spinnerWrapper.style.display = 'none';
    rolledCardsContainer.innerHTML = '';
    
    loadoutSlots.forEach(slot => {
        slot.innerHTML = '';
        slot.style.border = '3px dashed #444';
    });
});
