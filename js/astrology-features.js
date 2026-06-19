// Astro90 Platform - Core Astrology Features Logic Engine

// ==========================================
// 1. ZODIAC CALCULATOR & EXPLORER DATA
// ==========================================

const zodiacData = {
    Aries: { element: "Fire", ruler: "Mars", symbol: "Ram", traits: "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate.", weaknesses: "Impatient, moody, short-tempered, impulsive, aggressive.", luckyNumber: "9", luckyColor: "Red", compatibility: "Leo, Sagittarius, Libra", predictions: { love: "An unexpected encounter might spark new feelings. If in a relationship, plan a surprise date to kindle the flame.", career: "A great day to take the lead on a new project. Your leadership qualities will be noticed by superiors.", health: "Energy levels are high, but avoid overexerting yourself. Stay hydrated and get plenty of sleep.", finance: "A good time to review your budget. Avoid impulsive purchases today." } },
    Taurus: { element: "Earth", ruler: "Venus", symbol: "Bull", traits: "Reliable, patient, practical, devoted, responsible, stable.", weaknesses: "Stubborn, possessive, uncompromising.", luckyNumber: "6", luckyColor: "Pink, Green", compatibility: "Virgo, Capricorn, Scorpio", predictions: { love: "Patience will resolve a minor misunderstanding with your partner. Single Taureans may find comfort in long-time friends.", career: "Focus on completing pending tasks rather than starting new ones. Your steady work will yield good results.", health: "Pay attention to your neck and throat. Warm beverages and gentle stretching will help.", finance: "Financial stability is indicated. A past investment may show positive returns." } },
    Gemini: { element: "Air", ruler: "Mercury", symbol: "Twins", traits: "Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas.", weaknesses: "Nervous, inconsistent, indecisive.", luckyNumber: "5", luckyColor: "Yellow, Light Green", compatibility: "Libra, Aquarius, Sagittarius", predictions: { love: "Communication is key today. Speak your heart out; your partner is ready to listen.", career: "Networking will open new doors. Share your innovative ideas in meetings.", health: "Your mind is hyperactive. Practice mindfulness or meditation to calm your nerves.", finance: "A moderate day for finances. Avoid lending money to acquaintances today." } },
    Cancer: { element: "Water", ruler: "Moon", symbol: "Crab", traits: "Tenacious, highly imaginative, loyal, sympathetic, persuasive.", weaknesses: "Moody, pessimistic, suspicious, insecure.", luckyNumber: "2, 7", luckyColor: "White, Silver", compatibility: "Scorpio, Pisces, Capricorn", predictions: { love: "A cozy evening at home will strengthen your relationship. Express your appreciation for loved ones.", career: "Your intuition will guide you through a complex work situation. Trust your gut feeling.", health: "Digestive issues might crop up. Eat light, home-cooked meals.", finance: "Slight increase in expenses related to family or home. Spend mindfully." } },
    Leo: { element: "Fire", ruler: "Sun", symbol: "Lion", traits: "Creative, passionate, generous, warm-hearted, cheerful, humorous.", weaknesses: "Arrogant, stubborn, self-centered, lazy, inflexible.", luckyNumber: "1", luckyColor: "Gold, Orange", compatibility: "Aries, Sagittarius, Aquarius", predictions: { love: "Your charm is irresistible today. It's a stellar day for romance, dating, and expressiveness.", career: "You will shine in presentations or client pitches. Your confidence is your biggest asset.", health: "Good vitality overall. Engage in a physical activity that you enjoy.", finance: "Wealth opportunities are arriving. Keep an eye out for minor investments." } },
    Virgo: { element: "Earth", ruler: "Mercury", symbol: "Virgin", traits: "Loyal, analytical, kind, hardworking, practical.", weaknesses: "Shyness, worry, overly critical of self and others.", luckyNumber: "5, 14", luckyColor: "Grey, Pale Yellow", compatibility: "Taurus, Capricorn, Pisces", predictions: { love: "Notice the little things your partner does for you. Appreciation will go a long way.", career: "Detail-oriented tasks will go smoothly today. Your organizational skills are unmatched.", health: "A good day to start a new fitness regime. Focus on balanced nutrition.", finance: "Smart budgeting will help you save more than expected. Good financial stability." } },
    Libra: { element: "Air", ruler: "Venus", symbol: "Scales", traits: "Cooperative, diplomatic, gracious, fair-minded, social.", weaknesses: "Indecisive, avoids confrontations, carries a grudge, self-pity.", luckyNumber: "6, 15", luckyColor: "Blue, Green", compatibility: "Gemini, Aquarius, Aries", predictions: { love: "Harmonious energy surrounds your love life. Perfect time to resolve past disputes.", career: "Collaborative efforts will succeed. Team work is highly favored today.", health: "Ensure proper hydration. Keep a balance between work and rest.", finance: "Avoid impulsive shopping. Focus on saving for long-term goals." } },
    Scorpio: { element: "Water", ruler: "Mars / Pluto", symbol: "Scorpion", traits: "Resourceful, powerful, brave, passionate, a true friend.", weaknesses: "Distrusting, jealous, secretive, violent.", luckyNumber: "9, 18", luckyColor: "Scarlet, Rust", compatibility: "Cancer, Pisces, Taurus", predictions: { love: "Intense romantic feelings are indicated. Deep conversations will bring you closer.", career: "Your focus is sharp. You can easily solve complicated problems at work.", health: "Excellent physical resilience. channel your energy into a workout.", finance: "Unexpected financial gains are possible. A good day for planning investments." } },
    Sagittarius: { element: "Fire", ruler: "Jupiter", symbol: "Archer", traits: "Generous, idealistic, great sense of humor.", weaknesses: "Promises more than can deliver, very impatient, undiplomatic.", luckyNumber: "3, 12", luckyColor: "Blue, Purple", compatibility: "Aries, Leo, Gemini", predictions: { love: "Adventure calls! Plan a quick getaway or try a new activity with your partner.", career: "An opportunity to expand your knowledge or learn a new skill will present itself.", health: "Spend some time in nature to recharge your mental energy.", finance: "Finances look positive. However, keep check of travel expenses." } },
    Capricorn: { element: "Earth", ruler: "Saturn", symbol: "Goat", traits: "Responsible, disciplined, self-control, good managers.", weaknesses: "Know-it-all, unforgiving, condescending, expecting the worst.", luckyNumber: "4, 8", luckyColor: "Brown, Black", compatibility: "Taurus, Virgo, Cancer", predictions: { love: "Stability and commitment are key. Show your partner they can count on you.", career: "Hard work pays off. Your dedication is likely to be recognized by senior management.", health: "Pay attention to your joints and bones. Keep active but do not strain.", finance: "A great day for making safe, long-term financial plans." } },
    Aquarius: { element: "Air", ruler: "Saturn / Uranus", symbol: "Water Bearer", traits: "Progressive, original, independent, humanitarian.", weaknesses: "Runs from emotional expression, temperamental, uncompromising, aloof.", luckyNumber: "4, 7", luckyColor: "Light-Blue, Silver", compatibility: "Gemini, Libra, Leo", predictions: { love: "You value freedom, but don't distance yourself. A friend might reveal romantic feelings.", career: "An unconventional approach will solve a stubborn workspace problem.", health: "Focus on your blood circulation. Take breaks to walk around if you sit for long hours.", finance: "Financial status is stable. Ideal time to research cutting-edge investment sectors." } },
    Pisces: { element: "Water", ruler: "Jupiter / Neptune", symbol: "Fish", traits: "Compassionate, artistic, intuitive, gentle, wise, musical.", weaknesses: "Fearful, overly trusting, sad, desire to escape reality.", luckyNumber: "3, 7", luckyColor: "Mauve, Lilac", compatibility: "Cancer, Scorpio, Virgo", predictions: { love: "Dreamy and romantic day. If single, your artistic nature will attract special attention.", career: "Your creativity is at an all-time high. Perfect time for creative brainstorming and design.", health: "Ensure you get enough sleep. Rest is vital for your emotional well-being.", finance: "A good day for charity or buying gifts for loved ones, but keep a budget in mind." } }
};

// Zodiac Calculator Function
function calculateZodiacSign(day, month) {
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
    return "";
}

function initZodiacPage() {
    const calcForm = document.getElementById('zodiac-calc-form');
    const resultDiv = document.getElementById('zodiac-calc-result');
    const modal = document.getElementById('zodiac-modal');
    const closeModal = document.querySelector('.close-modal');

    if (calcForm) {
        calcForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const dobVal = document.getElementById('dob-input').value;
            if (!dobVal) return;

            const dob = new Date(dobVal);
            const day = dob.getDate();
            const month = dob.getMonth() + 1;

            const sign = calculateZodiacSign(day, month);
            const data = zodiacData[sign];

            if (data) {
                resultDiv.innerHTML = `
                    <div class="result-card animate-fade-in">
                        <h3>Your Sign is ${sign}</h3>
                        <div class="result-grid">
                            <div><strong>Element:</strong> ${data.element}</div>
                            <div><strong>Ruling Planet:</strong> ${data.ruler}</div>
                            <div><strong>Symbol:</strong> ${data.symbol}</div>
                            <div><strong>Lucky Number:</strong> ${data.luckyNumber}</div>
                            <div><strong>Lucky Color:</strong> ${data.luckyColor}</div>
                            <div><strong>Best Compatibility:</strong> ${data.compatibility}</div>
                        </div>
                        <p class="traits-text"><strong>Key Traits:</strong> ${data.traits}</p>
                        <div class="cta-buttons" style="margin-top: 1.5rem; justify-content: center;">
                            <button class="btn primary-btn view-sign-predictions" data-sign="${sign}">View Daily Forecast</button>
                        </div>
                    </div>
                `;
                resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                const predBtn = resultDiv.querySelector('.view-sign-predictions');
                if (predBtn) {
                    predBtn.addEventListener('click', () => {
                        openZodiacModal(sign);
                    });
                }
            }
        });
    }

    const signCards = document.querySelectorAll('.zodiac-grid-card');
    signCards.forEach(card => {
        card.addEventListener('click', () => {
            const sign = card.getAttribute('data-sign');
            openZodiacModal(sign);
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

function openZodiacModal(sign) {
    const modal = document.getElementById('zodiac-modal');
    if (!modal) return;

    const data = zodiacData[sign];
    if (!data) return;

    document.getElementById('modal-sign-title').innerText = sign;
    document.getElementById('modal-element').innerText = data.element;
    document.getElementById('modal-ruler').innerText = data.ruler;
    document.getElementById('modal-symbol').innerText = data.symbol;
    document.getElementById('modal-number').innerText = data.luckyNumber;
    document.getElementById('modal-color').innerText = data.luckyColor;
    document.getElementById('modal-compatibility').innerText = data.compatibility;
    document.getElementById('modal-traits').innerText = data.traits;
    document.getElementById('modal-weaknesses').innerText = data.weaknesses;

    document.getElementById('pred-love').innerText = data.predictions.love;
    document.getElementById('pred-career').innerText = data.predictions.career;
    document.getElementById('pred-health').innerText = data.predictions.health;
    document.getElementById('pred-finance').innerText = data.predictions.finance;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// ==========================================
// 2. KUNDLI SIMULATOR (D1, D9, D10) & HOUSE EXPLORER
// ==========================================

const houseMeanings = {
    1: { sanskrit: "Lagna Bhava (House of Self)", description: "Represents physical appearance, personality, nature, health, childhood, and basic constitution in life.", significance: "Body, Character, Outlook, Vitality, Self-identity." },
    2: { sanskrit: "Dhana Bhava (House of Wealth)", description: "Represents family, finances, accumulated money, speech, eyesight, food habits, and assets.", significance: "Family, Wealth, Speech, Assets, Food, Values." },
    3: { sanskrit: "Sahaja Bhava (House of Siblings & Courage)", description: "Represents younger siblings, courage, mental strength, short travels, communication, and hobbies.", significance: "Courage, Siblings, Communication, Travel." },
    4: { sanskrit: "Bandhu Bhava (House of Home & Mother)", description: "Represents mother, home environment, vehicles, land, happiness, peace of mind, and comfort.", significance: "Mother, Home, Happiness, Vehicles, Land." },
    5: { sanskrit: "Putra Bhava (House of Children & Creativity)", description: "Represents intelligence, higher education, creativity, romance, children, and past life good karma (Purva Punya).", significance: "Children, Intellect, Creativity, Speculation, Romance." },
    6: { sanskrit: "Ari Bhava (House of Obstacles & Health)", description: "Represents debts, diseases, enemies, daily routines, conflicts, service, and jobs.", significance: "Debts, Enemies, Disease, Service, Obstacles." },
    7: { sanskrit: "Yuvati Bhava (House of Partnerships)", description: "Represents marriage, spouse, business partners, public relations, and foreign travels.", significance: "Spouse, Marriage, Partnership, Trade." },
    8: { sanskrit: "Randhra Bhava (House of Longevity & Mysteries)", description: "Represents longevity, sudden events (accains, losses), inheritance, occult sciences, secrets, and transformation.", significance: "Longevity, Mysticism, Inheritance, Unexpected Changes." },
    9: { sanskrit: "Dharma Bhava (House of Fortune & Belief)", description: "Represents luck, father, higher knowledge, guru, long travels, righteousness, and philosophy.", significance: "Luck, Religion, Philosophy, Higher Studies, Father." },
    10: { sanskrit: "Karma Bhava (House of Career & Status)", description: "Represents profession, career, status in society, authority figures, fame, and primary actions.", significance: "Career, Status, Fame, Authority, Profession." },
    11: { sanskrit: "Labha Bhava (House of Gains)", description: "Represents desires fulfilled, gains, incoming wealth, elder siblings, and network circles.", significance: "Gains, Desires, Network, Income." },
    12: { sanskrit: "Vyaya Bhava (House of Losses & Liberation)", description: "Represents expenditures, spiritual liberation (Moksha), charity, isolation, hospitals, and foreign lands.", significance: "Losses, Moksha, Foreign lands, Isolation." }
};

function generatePlanetaryPlacements(seedString) {
    let hash = 0;
    for (let i = 0; i < seedString.length; i++) {
        hash = seedString.charCodeAt(i) + ((hash << 5) - hash);
    }
    const planets = ["Sun", "Moon", "Mars", "Mer", "Jup", "Ven", "Sat", "Rah", "Ket", "Asc"];
    const placements = {};
    planets.forEach((planet, idx) => {
        let val = Math.abs((hash + idx * 79) % 12) + 1;
        if (!placements[val]) placements[val] = [];
        placements[val].push(planet);
    });
    return placements;
}

// Generate D9 and D10 charts relative to D1 chart
function generateChartFromD1(d1Placements, multiplier) {
    const derived = {};
    for (let house = 1; house <= 12; house++) {
        const planets = d1Placements[house] || [];
        planets.forEach(p => {
            // Shift planets mathematically
            let newHouse = ((house - 1) * multiplier) % 12 + 1;
            if (!derived[newHouse]) derived[newHouse] = [];
            derived[newHouse].push(p);
        });
    }
    return derived;
}

function drawNorthIndianKundli(containerId, placements, labelPrefix) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let svgContent = `
        <svg viewBox="0 0 300 300" class="kundli-svg">
            <rect x="5" y="5" width="290" height="290" fill="none" stroke="var(--primary-color)" stroke-width="2.5" />
            <line x1="5" y1="5" x2="295" y2="295" stroke="var(--primary-color)" stroke-width="1.5" />
            <line x1="295" y1="5" x2="5" y2="295" stroke="var(--primary-color)" stroke-width="1.5" />
            <line x1="150" y1="5" x2="5" y2="150" stroke="var(--primary-color)" stroke-width="1.5" />
            <line x1="5" y1="150" x2="150" y2="295" stroke="var(--primary-color)" stroke-width="1.5" />
            <line x1="150" y1="295" x2="295" y2="150" stroke="var(--primary-color)" stroke-width="1.5" />
            <line x1="295" y1="150" x2="150" y2="5" stroke="var(--primary-color)" stroke-width="1.5" />
    `;

    const houseCoords = {
        1:  { numX: 150, numY: 80,   planetsX: 150, planetsY: 105 },
        2:  { numX: 105, numY: 40,   planetsX: 100, planetsY: 60 },
        3:  { numX: 45,  numY: 45,   planetsX: 50,  planetsY: 70 },
        4:  { numX: 85,  numY: 150,  planetsX: 80,  planetsY: 175 },
        5:  { numX: 45,  numY: 255,  planetsX: 50,  planetsY: 230 },
        6:  { numX: 105, numY: 260,  planetsX: 100, planetsY: 240 },
        7:  { numX: 150, numY: 220,  planetsX: 150, planetsY: 195 },
        8:  { numX: 195, numY: 260,  planetsX: 200, planetsY: 240 },
        9:  { numX: 255, numY: 255,  planetsX: 250, planetsY: 230 },
        10: { numX: 215, numY: 150,  planetsX: 220, planetsY: 175 },
        11: { numX: 255, numY: 45,   planetsX: 250, planetsY: 70 },
        12: { numX: 195, numY: 40,   planetsX: 200, planetsY: 60 }
    };

    // Invisible polygons for mouse hit testing
    svgContent += `
        <polygon class="house-g" data-house="1" points="150,5 5,150 150,150" fill="transparent" />
        <polygon class="house-g" data-house="2" points="5,5 150,5 150,150" fill="transparent" />
        <polygon class="house-g" data-house="3" points="5,5 5,150 150,150" fill="transparent" />
        <polygon class="house-g" data-house="4" points="5,150 150,150 150,295" fill="transparent" />
        <polygon class="house-g" data-house="5" points="5,295 5,150 150,150" fill="transparent" />
        <polygon class="house-g" data-house="6" points="5,295 150,295 150,150" fill="transparent" />
        <polygon class="house-g" data-house="7" points="150,295 295,150 150,150" fill="transparent" />
        <polygon class="house-g" data-house="8" points="295,295 150,295 150,150" fill="transparent" />
        <polygon class="house-g" data-house="9" points="295,295 295,150 150,150" fill="transparent" />
        <polygon class="house-g" data-house="10" points="295,150 150,150 150,5" fill="transparent" />
        <polygon class="house-g" data-house="11" points="295,5 295,150 150,150" fill="transparent" />
        <polygon class="house-g" data-house="12" points="295,5 150,5 150,150" fill="transparent" />
    `;

    for (let house = 1; house <= 12; house++) {
        const coords = houseCoords[house];
        const planetList = placements[house] || [];

        svgContent += `
            <text x="${coords.numX}" y="${coords.numY}" class="house-num" text-anchor="middle" font-size="12" font-family="Poppins" fill="var(--accent-color)" font-weight="bold">${house}</text>
        `;

        if (planetList.length > 0) {
            let joined = planetList.join(" ");
            svgContent += `
                <text x="${coords.planetsX}" y="${coords.planetsY}" class="house-planets" text-anchor="middle" font-size="10.5" font-family="Poppins" fill="#111" font-weight="600">${joined}</text>
            `;
        }
    }

    svgContent += `</svg>`;
    container.innerHTML = svgContent;

    const houses = container.querySelectorAll('.house-g');
    houses.forEach(h => {
        h.addEventListener('click', () => {
            const hNum = h.getAttribute('data-house');
            displayHouseInfo(hNum, placements[hNum] || [], labelPrefix);

            houses.forEach(oh => oh.style.fill = 'transparent');
            h.style.fill = 'rgba(247, 148, 29, 0.1)';
        });
    });

    if (houses[0]) {
        houses[0].dispatchEvent(new Event('click'));
    }
}

function displayHouseInfo(houseNum, planets, labelPrefix = "Chart") {
    const detailsDiv = document.getElementById('house-details-card');
    if (!detailsDiv) return;

    const info = houseMeanings[houseNum];
    let planetsText = planets.length > 0 ? planets.join(", ") : "No major planets";

    detailsDiv.innerHTML = `
        <div class="house-details-header">
            <span class="house-badge">${labelPrefix} - House ${houseNum}</span>
            <h3>${info.sanskrit}</h3>
        </div>
        <div class="divider-small">
            <span class="divider-line"></span>
            <span class="divider-icon"><i class="fas fa-star"></i></span>
            <span class="divider-line"></span>
        </div>
        <p class="house-descr">${info.description}</p>
        <div class="house-significance">
            <strong>Key Significance:</strong> ${info.significance}
        </div>
        <div class="house-planets-placement">
            <strong>Planets placed here:</strong> <span class="placements-highlight">${planetsText}</span>
        </div>
    `;
}

function initKundliPage() {
    const calcForm = document.getElementById('kundli-calc-form');
    const kundliSection = document.getElementById('kundli-chart-section');

    if (calcForm) {
        calcForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('kundli-name').value || "Seeker";
            const dob = document.getElementById('kundli-dob').value;
            const tob = document.getElementById('kundli-tob').value;
            const pob = document.getElementById('kundli-pob').value;

            if (!dob || !tob) return;

            const seed = `${name}-${dob}-${tob}-${pob}`;
            const d1Placements = generatePlanetaryPlacements(seed);
            const d9Placements = generateChartFromD1(d1Placements, 9);
            const d10Placements = generateChartFromD1(d1Placements, 10);

            kundliSection.style.display = 'block';

            // Draw charts side by side
            drawNorthIndianKundli('d1-svg-container', d1Placements, "Lagna Chart (D1)");
            
            const d9Tab = document.getElementById('d9-svg-container');
            if (d9Tab) drawNorthIndianKundli('d9-svg-container', d9Placements, "Navamsa Chart (D9)");
            
            const d10Tab = document.getElementById('d10-svg-container');
            if (d10Tab) drawNorthIndianKundli('d10-svg-container', d10Placements, "Dashamsha Chart (D10)");

            // Tab toggling logic if exists
            const tabButtons = document.querySelectorAll('.chart-tab-btn');
            const charts = document.querySelectorAll('.chart-svg-panel');
            tabButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const tabId = btn.getAttribute('data-chart-tab');
                    tabButtons.forEach(b => b.classList.remove('active'));
                    charts.forEach(c => c.classList.remove('active'));

                    btn.classList.add('active');
                    const targetChart = document.getElementById(tabId);
                    if (targetChart) {
                        targetChart.classList.add('active');
                        // Trigger click on 1st house to populate info
                        const firstHouse = targetChart.querySelector('.house-g');
                        if (firstHouse) firstHouse.dispatchEvent(new Event('click'));
                    }
                });
            });

            // Calculate signs
            const dobDate = new Date(dob);
            const day = dobDate.getDate();
            const month = dobDate.getMonth() + 1;
            const sunSign = calculateZodiacSign(day, month);
            const moonSignIdx = (day + month) % 12;
            const moonSign = Object.keys(zodiacData)[moonSignIdx];

            const birthHour = parseInt(tob.split(":")[0]) || 12;
            const ascIdx = (birthHour + month) % 12;
            const ascSign = Object.keys(zodiacData)[ascIdx];

            document.getElementById('chart-user-name').innerText = name;
            document.getElementById('val-ascendant').innerText = ascSign;
            document.getElementById('val-sun').innerText = sunSign;
            document.getElementById('val-moon').innerText = moonSign;

            // Generate Planetary Coordinates Table
            const planetaryCoordsBody = document.getElementById('planetary-coordinates-body');
            if (planetaryCoordsBody) {
                const degrees = [
                    { p: "Ascendant", deg: `${(hashString(seed) % 30)}° ${Math.floor(hashString(seed)%60)}' ${ascSign}` },
                    { p: "Sun", deg: `${(hashString(seed + "Sun") % 30)}° ${Math.floor(hashString(seed)%60)}' ${sunSign}` },
                    { p: "Moon", deg: `${(hashString(seed + "Moon") % 30)}° ${Math.floor(hashString(seed)%60)}' ${moonSign}` },
                    { p: "Mars", deg: `${(hashString(seed + "Mars") % 30)}° ${Math.floor(hashString(seed)%60)}' ${Object.keys(zodiacData)[(hashString(seed)%12)]}` },
                    { p: "Mercury", deg: `${(hashString(seed + "Mer") % 30)}° ${Math.floor(hashString(seed)%60)}' ${Object.keys(zodiacData)[((hashString(seed)+4)%12)]}` },
                    { p: "Jupiter", deg: `${(hashString(seed + "Jup") % 30)}° ${Math.floor(hashString(seed)%60)}' ${Object.keys(zodiacData)[((hashString(seed)+8)%12)]}` },
                    { p: "Venus", deg: `${(hashString(seed + "Ven") % 30)}° ${Math.floor(hashString(seed)%60)}' ${Object.keys(zodiacData)[((hashString(seed)+2)%12)]}` },
                    { p: "Saturn", deg: `${(hashString(seed + "Sat") % 30)}° ${Math.floor(hashString(seed)%60)}' ${Object.keys(zodiacData)[((hashString(seed)+6)%12)]}` },
                    { p: "Rahu", deg: `${(hashString(seed + "Rah") % 30)}° ${Math.floor(hashString(seed)%60)}' ${Object.keys(zodiacData)[((hashString(seed)+10)%12)]}` },
                    { p: "Ketu", deg: `${(hashString(seed + "Ket") % 30)}° ${Math.floor(hashString(seed)%60)}' ${Object.keys(zodiacData)[((hashString(seed)+4)%12)]}` }
                ];
                planetaryCoordsBody.innerHTML = degrees.map(d => `
                    <tr>
                        <td><strong>${d.p}</strong></td>
                        <td>${d.deg}</td>
                        <td>Direct</td>
                    </tr>
                `).join("");
            }

            // Generate Dosha analysis reports
            const doshaReportContainer = document.getElementById('dosha-report-container');
            if (doshaReportContainer) {
                const manglik = (hashString(seed) % 3 === 0) ? "Present (Mild)" : "Absent";
                const kalsarp = (hashString(seed + "ks") % 4 === 0) ? "Present (Partial)" : "Absent";
                const pitra = (hashString(seed + "pt") % 5 === 0) ? "Present" : "Absent";
                const sadhesati = (hashString(seed + "ss") % 2 === 0) ? "Active Phase" : "Not Active";

                doshaReportContainer.innerHTML = `
                    <div class="dosha-item">
                        <h4><i class="fas fa-fire"></i> Manglik Dosha: <span class="${manglik.includes("Present") ? 'dosha-alert' : 'dosha-safe'}">${manglik}</span></h4>
                        <p>${manglik.includes("Present") ? "Mars is placed in the 4th/8th house. Can create minor adjustments delay in marriage. Fasting on Tuesdays is recommended." : "No significant Mars afflictions found in your charts."}</p>
                    </div>
                    <div class="dosha-item">
                        <h4><i class="fas fa-biohazard"></i> Kaal Sarp Dosha: <span class="${kalsarp.includes("Present") ? 'dosha-alert' : 'dosha-safe'}">${kalsarp}</span></h4>
                        <p>${kalsarp.includes("Present") ? "Planets are hemmed in between Rahu and Ketu. Might cause initial struggles. Lord Shiva worship is beneficial." : "Your chart is free of Kaal Sarp Dosha."}</p>
                    </div>
                    <div class="dosha-item">
                        <h4><i class="fas fa-users-slash"></i> Pitra Dosha: <span class="${pitra.includes("Present") ? 'dosha-alert' : 'dosha-safe'}">${pitra}</span></h4>
                        <p>${pitra.includes("Present") ? "Indications of ancestors' unfulfilled deeds affecting career growth. Perform charity/donations on Amavasya." : "No Pitra Dosha affliction detected."}</p>
                    </div>
                    <div class="dosha-item">
                        <h4><i class="fas fa-balance-scale"></i> Shani Sadhe Sati: <span class="dosha-info">${sadhesati}</span></h4>
                        <p>${sadhesati.includes("Active") ? "Saturn transit is passing over your natal moon. Teaches discipline. Reciting Hanuman Chalisa is advised." : "You are currently not undergoing the Sadhe Sati phase."}</p>
                    </div>
                `;
            }

            kundliSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // PDF Download Simulation
    const downloadPdfBtn = document.getElementById('download-pdf-btn');
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', () => {
            downloadPdfBtn.innerText = "Generating PDF...";
            downloadPdfBtn.disabled = true;
            setTimeout(() => {
                alert("Your comprehensive Astro90 Kundli Report (45 Pages) has been generated and downloaded successfully!");
                downloadPdfBtn.innerText = "Download Free Kundli PDF Report";
                downloadPdfBtn.disabled = false;
            }, 2000);
        });
    }
}

function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
}

// ==========================================
// 3. GUNA MILAN (KUNDLI MATCHING) ALGORITHM
// ==========================================

function initMatchingPage() {
    const form = document.getElementById('matching-form');
    const resultSec = document.getElementById('matching-result-section');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const bName = document.getElementById('boy-name').value || "Groom";
            const bDob = document.getElementById('boy-dob').value;
            const gName = document.getElementById('girl-name').value || "Bride";
            const gDob = document.getElementById('girl-dob').value;

            if (!bDob || !gDob) return;

            const seed = `${bName}-${bDob}-${gName}-${gDob}`;
            const hash = hashString(seed);

            // Guna Milan Ashtakoot system (Max points = 36)
            // Varna (1), Vashya (2), Tara (3), Yoni (4), Maitri (5), Gana (6), Bhakoot (7), Nadi (8)
            const varna = hash % 2 === 0 ? 1 : 0;
            const vashya = (hash % 3 === 0) ? 2 : (hash % 3 === 1 ? 1 : 0);
            const tara = (hash % 4) === 0 ? 3 : (hash % 4 === 1 ? 1.5 : 0);
            const yoni = (hash % 5 === 0) ? 4 : (hash % 5 === 1 ? 2 : 1);
            const maitri = (hash % 6 === 0) ? 5 : (hash % 6 === 1 ? 3 : 1);
            const gana = (hash % 7 === 0) ? 6 : (hash % 7 === 1 ? 5 : 0);
            const bhakoot = (hash % 8 === 0) ? 7 : (hash % 8 === 1 ? 4 : 0);
            const nadi = (hash % 9 === 0) ? 8 : (hash % 9 === 1 ? 6 : 0);

            const totalScore = varna + vashya + tara + yoni + maitri + gana + bhakoot + nadi;
            const pct = Math.floor((totalScore / 36) * 100);

            // Manglik Check
            const bManglik = hash % 3 === 0;
            const gManglik = hash % 4 === 0;
            let manglikStatus = "Excellent Match (Both Non-Manglik)";
            let manglikClass = "dosha-safe";

            if (bManglik && gManglik) {
                manglikStatus = "Compatible Match (Both Manglik - Dosha Cancels)";
                manglikClass = "dosha-info";
            } else if (bManglik || gManglik) {
                manglikStatus = `High Friction! (${bManglik ? bName : gName} is Manglik. Remedies required.)`;
                manglikClass = "dosha-alert";
            }

            // Compatibility Advice
            let advice = "";
            if (totalScore >= 25) {
                advice = "Highly recommended marriage. Excellent understanding, mutual respect, and prosperous life together. Spiritual alignment (Nadi/Gana) is very strong.";
            } else if (totalScore >= 18) {
                advice = "Moderate compatibility. Auspicious marriage can be conducted after performing minor planetary remedies (Pujas/Mantras) for family harmony and finance.";
            } else {
                advice = "Low compatibility score. Expect high friction in communication, daily lifestyle, or progeny issues. Extensive astrological remedies or consultations are highly advised before proceeding.";
            }

            resultSec.style.display = 'block';
            resultSec.innerHTML = `
                <div class="gem-recommendation-card animate-fade-in" style="max-width: 800px; margin: 2rem auto;">
                    <h2 class="section-title">Ashtakoot Guna Milan Report</h2>
                    <div class="divider-small">
                        <span class="divider-line"></span>
                        <span class="divider-icon"><i class="fas fa-heart"></i></span>
                        <span class="divider-line"></span>
                    </div>

                    <div style="text-align: center; margin-bottom: 2.5rem;">
                        <span style="font-size: 1.5rem; font-weight: 500;">Match Score:</span>
                        <h3 style="font-size: 4rem; color: var(--accent-color); margin-bottom: 5px;">${totalScore} <span style="font-size: 2rem; color: var(--text-muted);">/ 36</span></h3>
                        <span class="zodiac-element-badge ${totalScore >= 18 ? 'earth' : 'fire'}" style="font-size: 1.1rem; padding: 6px 15px;">
                            ${totalScore >= 18 ? 'Compatible Match' : 'Remedies Recommended'}
                        </span>
                    </div>

                    <div class="chart-user-meta" style="margin-bottom: 2rem;">
                        <div class="chart-meta-item">
                            <span class="chart-meta-label">Match Percentage:</span>
                            <span class="chart-meta-val">${pct}%</span>
                        </div>
                        <div class="chart-meta-item">
                            <span class="chart-meta-label">Manglik Compatibility:</span>
                            <span class="chart-meta-val ${manglikClass}">${manglikStatus}</span>
                        </div>
                    </div>

                    <!-- Guna Breakdown Table -->
                    <table class="services-table" style="width: 100%; border-collapse: collapse; margin-bottom: 2.5rem; text-align: left;">
                        <thead>
                            <tr style="background-color: var(--primary-color); color: #fff;">
                                <th style="padding: 12px;">Koot (Category)</th>
                                <th style="padding: 12px;">Significance</th>
                                <th style="padding: 12px;">Max Points</th>
                                <th style="padding: 12px;">Scored Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Varna</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Ego / Work temperament</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">1</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">${varna}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Vashya</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Mutual attraction / Control</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">2</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">${vashya}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Tara</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Destiny / Longevity</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">3</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">${tara}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Yoni</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Intimacy / Biological compatibility</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">4</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">${yoni}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Maitri</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Friendship / Intellectual connection</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">5</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">${maitri}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Gana</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Temperament (Divine, Human, Demon)</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">6</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">${gana}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Bhakoot</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Emotional bond / Family wealth</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">7</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">${bhakoot}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Nadi</strong></td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Health / Progeny genetics</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">8</td>
                                <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">${nadi}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="gem-text-block">
                        <strong>Compatibility Summary & Expert Advice:</strong>
                        <p>${advice}</p>
                    </div>

                    <div class="cta-buttons" style="margin-top: 2.5rem; justify-content: center;">
                        <a href="book-online.html" class="btn primary-btn">Book Marriage Consultation with Sid</a>
                    </div>
                </div>
            `;
            resultSec.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// ==========================================
// 4. NUMEROLOGY ENGINE
// ==========================================

function initNumerologyPage() {
    const numForm = document.getElementById('numerology-form');
    const numResult = document.getElementById('numerology-result-section');

    if (numForm) {
        numForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('num-name').value || "Seeker";
            const dobVal = document.getElementById('num-dob').value;

            if (!dobVal) return;

            // Reduce date digits to single digit (Life Path)
            const dobClean = dobVal.replace(/-/g, "");
            const lifePath = getSingleDigitSum(dobClean);

            // Destiny Number (Chaldean grid system: A=1, B=2, C=3, D=4, E=5, U/V/W=6, O/Z=7, F/P=8, etc.)
            const charWeights = {
                A: 1, I: 1, J: 1, Q: 1, Y: 1,
                B: 2, K: 2, R: 2,
                C: 3, G: 3, L: 3, S: 3,
                D: 4, M: 4, T: 4,
                E: 5, H: 5, N: 5, X: 5,
                U: 6, V: 6, W: 6,
                O: 7, Z: 7,
                F: 8, P: 8
            };

            let nameSum = 0;
            const cleanName = name.toUpperCase().replace(/[^A-Z]/g, "");
            for (let char of cleanName) {
                nameSum += charWeights[char] || 0;
            }
            const destiny = getSingleDigitSum(nameSum.toString());

            // Get Details based on Life Path Number
            const numTraits = {
                1: { title: "The Leader / Initiator", luckyColor: "Yellow, Gold", luckyDay: "Sunday", desc: "You are highly independent, creative, ambitious, and possess strong leadership qualities. You thrive in pioneering new ventures but must manage your ego and impatience." },
                2: { title: "The Diplomat / Peacekeeper", luckyColor: "White, Silver", luckyDay: "Monday", desc: "Sensitive, cooperative, intuitive, and loving. You excel in mediating conflicts and teamwork. Beware of over-sensitivity and self-doubt." },
                3: { title: "The Creative / Communicator", luckyColor: "Yellow, Orange", luckyDay: "Thursday", desc: "Expressive, sociable, artistic, and cheerful. You possess excellent verbal or artistic skills. Keep a check on scattered energy and exaggerating." },
                4: { title: "The Builder / Planner", luckyColor: "Blue, Grey", luckyDay: "Saturday", desc: "Methodical, practical, trustworthy, disciplined, and hard working. You construct long-term success but must avoid rigid stubborness." },
                5: { title: "The Freedom Lover / Visionary", luckyColor: "Green, Turquoise", luckyDay: "Wednesday", desc: "Versatile, curious, dynamic, adventurous, and progress-oriented. You adapt easily to change. Manage impatience and restless tendencies." },
                6: { title: "The Nurturer / Caregiver", luckyColor: "Pink, Blue", luckyDay: "Friday", desc: "Responsible, loving, harmonious, protective, and family-oriented. You find joy in service and aesthetics. Avoid interfering in others' boundaries." },
                7: { title: "The Seeker / Analyst", luckyColor: "Light Green, White", luckyDay: "Monday", desc: "Analytical, spiritual, reserved, intellectual, and wisdom-oriented. You search for deeper patterns in life. Avoid isolating yourself or being overly critical." },
                8: { title: "The Powerhouse / Executive", luckyColor: "Black, Dark Blue", luckyDay: "Saturday", desc: "Ambitious, realistic, efficient, status-conscious, and financially strong. You excel in material abundance. Maintain balance between material and spiritual goals." },
                9: { title: "The Humanist / Philanthropist", luckyColor: "Red, Crimson", luckyDay: "Tuesday", desc: "Compassionate, generous, broad-minded, and creative. You seek to elevate humanity. You must learn to let go of the past and disappointments." }
            };

            const trait = numTraits[lifePath] || numTraits[1];

            numResult.style.display = 'block';
            numResult.innerHTML = `
                <div class="gem-recommendation-card animate-fade-in" style="max-width: 700px; margin: 2rem auto;">
                    <h2 class="section-title">Your Numerology Profile</h2>
                    <div class="divider-small">
                        <span class="divider-line"></span>
                        <span class="divider-icon"><i class="fas fa-calculator"></i></span>
                        <span class="divider-line"></span>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem; text-align: center;">
                        <div style="background-color: #fff; padding: 1.5rem; border-radius: var(--border-radius); border: 1.5px solid var(--primary-color);">
                            <span style="font-size: 0.95rem; color: var(--text-muted); display: block;">Life Path Number (DOB)</span>
                            <h3 style="font-size: 3.5rem; color: var(--accent-color); margin-top: 5px;">${lifePath}</h3>
                            <span style="font-weight: 500; font-size: 1rem; display: block; margin-top: 5px;">${trait.title}</span>
                        </div>
                        <div style="background-color: #fff; padding: 1.5rem; border-radius: var(--border-radius); border: 1.5px solid var(--primary-color);">
                            <span style="font-size: 0.95rem; color: var(--text-muted); display: block;">Destiny Number (Name)</span>
                            <h3 style="font-size: 3.5rem; color: var(--primary-dark); margin-top: 5px;">${destiny}</h3>
                            <span style="font-weight: 500; font-size: 1rem; display: block; margin-top: 5px;">Expression: ${numTraits[destiny]?.title.split(" / ")[0] || ""}</span>
                        </div>
                    </div>

                    <div class="gem-meta-grid" style="margin-bottom: 2rem;">
                        <div><strong>Lucky Color:</strong> ${trait.luckyColor}</div>
                        <div><strong>Lucky Day:</strong> ${trait.luckyDay}</div>
                        <div><strong>Compatibility:</strong> Numbers ${[3, 6, 9].filter(x => x !== lifePath)[0]}, ${[3, 6, 9].filter(x => x !== lifePath)[1]}</div>
                        <div><strong>Ruling Planet:</strong> ${lifePath === 1 ? 'Sun' : (lifePath === 2 ? 'Moon' : (lifePath === 3 ? 'Jupiter' : (lifePath === 4 ? 'Rahu' : (lifePath === 5 ? 'Mercury' : (lifePath === 6 ? 'Venus' : (lifePath === 7 ? 'Ketu' : (lifePath === 8 ? 'Saturn' : 'Mars')))))))}</div>
                    </div>

                    <div class="gem-text-block">
                        <strong>Core Characteristics & Career Advice:</strong>
                        <p>${trait.desc}</p>
                    </div>

                    <div class="cta-buttons" style="margin-top: 2rem; justify-content: center;">
                        <a href="book-online.html" class="btn primary-btn">Consult for Name Corrections</a>
                    </div>
                </div>
            `;
            numResult.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Phone / Vehicle Compatibility Analyzers
    const customForms = document.querySelectorAll('.custom-num-form');
    customForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputVal = form.querySelector('.custom-num-input').value;
            const resultBox = form.querySelector('.custom-num-result');
            if (!inputVal) return;

            const digitsOnly = inputVal.replace(/[^0-9]/g, "");
            if (digitsOnly.length === 0) {
                resultBox.innerHTML = "<p style='color: var(--accent-color); margin-top: 10px;'>Please enter valid digits.</p>";
                return;
            }

            const sumDigit = getSingleDigitSum(digitsOnly);
            let compatibility = "Neutral compatibility. Good for general activities.";
            if ([1, 5, 6].includes(sumDigit)) {
                compatibility = "Highly Fortunate! Relates to growth, status, business and luxury.";
            } else if ([3, 9].includes(sumDigit)) {
                compatibility = "Good compatibility. Stimulates activity, courage, and knowledge.";
            } else if ([8].includes(sumDigit)) {
                compatibility = "Requires patience. Attracts hard work, delayed gains, and Saturn's discipline.";
            }

            resultBox.innerHTML = `
                <div style="margin-top: 1.5rem; padding: 1.2rem; background-color: var(--light-bg); border-left: 4px solid var(--primary-color); text-align: left;">
                    <p><strong>Total Numeric Frequency:</strong> <span style="font-size: 1.5rem; color: var(--accent-color); font-weight: bold; margin-left: 5px;">${sumDigit}</span></p>
                    <p style="margin-top: 5px;"><strong>Compatibility status:</strong> ${compatibility}</p>
                </div>
            `;
        });
    });
}

function getSingleDigitSum(numberStr) {
    let sum = 0;
    for (let digit of numberStr) {
        sum += parseInt(digit);
    }
    while (sum > 9) {
        // Master numbers check (optional, let's reduce all to single digit)
        let s = 0;
        for (let d of sum.toString()) {
            s += parseInt(d);
        }
        sum = s;
    }
    return sum;
}

// ==========================================
// 5. INTERACTIVE TAROT ENGINE (3 CARDS)
// ==========================================

const tarotCards = [
    { name: "The Fool", id: 0, upright: "New beginnings, free spirit, spontaneous adventure, faith in universe.", reversed: "Recklessness, fear, risk-taking, holding back.", icon: "fas fa-compass" },
    { name: "The Magician", id: 1, upright: "Manifestation, willpower, desire, resourcefulness, creation.", reversed: "Manipulation, poor planning, untapped talent.", icon: "fas fa-magic" },
    { name: "The High Priestess", id: 2, upright: "Intuition, sacred knowledge, divine feminine, subconscious mind.", reversed: "Secret motives, ignored intuition, surface knowledge.", icon: "fas fa-scroll" },
    { name: "The Empress", id: 3, upright: "Abundance, nature, femininity, nurture, fertility, art.", reversed: "Creative block, dependence, smothering.", icon: "fas fa-venus" },
    { name: "The Emperor", id: 4, upright: "Authority, structure, protective father, solid foundation.", reversed: "Tyranny, lack of control, rigid boundaries.", icon: "fas fa-mars" },
    { name: "The Hierophant", id: 5, upright: "Tradition, spiritual guidance, institutions, belief systems.", reversed: "Rebellion, personal beliefs, new paths.", icon: "fas fa-synagogue" },
    { name: "The Lovers", id: 6, upright: "Harmony, relationships, choices, value alignment.", reversed: "Disharmony, misaligned values, imbalance.", icon: "fas fa-heart" },
    { name: "The Chariot", id: 7, upright: "Control, willpower, victory, focus, determination.", reversed: "Lack of direction, loss of control, aggression.", icon: "fas fa-shuttle-van" },
    { name: "Strength", id: 8, upright: "Inner strength, courage, patience, compassion, control.", reversed: "Self-doubt, weakness, raw emotion.", icon: "fas fa-lion" },
    { name: "The Hermit", id: 9, upright: "Inner guidance, soul searching, solitude, self-reflection.", reversed: "Loneliness, withdrawal, paranoia.", icon: "fas fa-lightbulb" },
    { name: "Wheel of Fortune", id: 10, upright: "Good luck, destiny, change, turning point, karma.", reversed: "Bad luck, resistance to change, breaking cycles.", icon: "fas fa-dharmachakra" },
    { name: "Justice", id: 11, upright: "Fairness, truth, law, cause and effect, accountability.", reversed: "Dishonesty, unfairness, unaccountability.", icon: "fas fa-balance-scale" },
    { name: "The Hanged Man", id: 12, upright: "Pause, surrender, letting go, new perspectives.", reversed: "Stalling, indecision, delay, ego.", icon: "fas fa-hourglass" },
    { name: "Death", id: 13, upright: "Transformation, endings, change, transition, letting go.", reversed: "Resistance to change, decay, stagnation.", icon: "fas fa-skull" },
    { name: "Temperance", id: 14, upright: "Balance, moderation, patience, purpose, harmony.", reversed: "Imbalance, excess, self-healing.", icon: "fas fa-tint" },
    { name: "The Devil", id: 15, upright: "Materialism, addiction, playfulness, restriction.", reversed: "Detachment, freedom, restoring control.", icon: "fas fa-spider" },
    { name: "The Tower", id: 16, upright: "Sudden change, upheaval, revelation, breakdown.", reversed: "Averting disaster, delaying the inevitable.", icon: "fas fa-bolt" },
    { name: "The Star", id: 17, upright: "Hope, faith, purpose, renewal, spirituality.", reversed: "Lack of faith, despair, stagnation.", icon: "fas fa-star" },
    { name: "The Moon", id: 18, upright: "Illusion, fear, anxiety, intuition, mystery.", reversed: "Release of fear, truth revealed, clarity.", icon: "fas fa-moon" },
    { name: "The Sun", id: 19, upright: "Success, happiness, vitality, joy, warmth.", reversed: "Temporary depression, lack of focus, vanity.", icon: "fas fa-sun" },
    { name: "Judgement", id: 20, upright: "Reflection, reckoning, awakening, absolution.", reversed: "Self-doubt, refusal to learn, delay.", icon: "fas fa-gavel" },
    { name: "The World", id: 21, upright: "Completion, integration, travel, accomplishment.", reversed: "Lack of closure, short cuts, delays.", icon: "fas fa-globe-asia" }
];

function initTarotPage() {
    const dailyBtn = document.getElementById('draw-daily-tarot-btn');
    const dailyResult = document.getElementById('daily-tarot-result');

    // Daily Single Card Reading
    if (dailyBtn && dailyResult) {
        dailyBtn.addEventListener('click', () => {
            dailyBtn.disabled = true;
            dailyResult.innerHTML = `
                <div class="tarot-card-3d animate-pulse" style="margin: 2rem auto;">
                    <div class="tarot-card-inner">
                        <div class="tarot-card-front"><i class="fas fa-infinity" style="font-size: 3rem; color: #d4af37;"></i></div>
                    </div>
                </div>
            `;

            setTimeout(() => {
                const randCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
                const isReversed = Math.random() < 0.25;

                dailyResult.innerHTML = `
                    <div class="tarot-card-3d flipped" style="margin: 2rem auto;">
                        <div class="tarot-card-inner">
                            <div class="tarot-card-back">
                                <div style="font-size: 3.5rem; color: var(--primary-color); margin-bottom: 10px; ${isReversed ? 'transform: rotate(180deg);' : ''}">
                                    <i class="${randCard.icon}"></i>
                                </div>
                                <h3>${randCard.name} ${isReversed ? '(Reversed)' : ''}</h3>
                                <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 15px;">Upright: ${randCard.upright}</p>
                                <p style="font-size: 0.95rem; text-align: left; line-height: 1.6;">
                                    <strong>Cosmic Message:</strong> ${isReversed ? randCard.reversed : randCard.upright}
                                </p>
                            </div>
                        </div>
                    </div>
                `;
                dailyBtn.disabled = false;
            }, 1500);
        });
    }

    // 3-Card Tarot Reading (Past, Present, Future)
    const threeCardBtn = document.getElementById('draw-three-tarot-btn');
    const threeCardResult = document.getElementById('three-tarot-result');

    if (threeCardBtn && threeCardResult) {
        threeCardBtn.addEventListener('click', () => {
            threeCardBtn.disabled = true;
            threeCardResult.innerHTML = `
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem;">
                    <div class="tarot-card-3d animate-pulse"><div class="tarot-card-inner"><div class="tarot-card-front"><i class="fas fa-star" style="font-size: 2rem;"></i></div></div></div>
                    <div class="tarot-card-3d animate-pulse"><div class="tarot-card-inner"><div class="tarot-card-front"><i class="fas fa-star" style="font-size: 2rem;"></i></div></div></div>
                    <div class="tarot-card-3d animate-pulse"><div class="tarot-card-inner"><div class="tarot-card-front"><i class="fas fa-star" style="font-size: 2rem;"></i></div></div></div>
                </div>
            `;

            setTimeout(() => {
                // Draw 3 unique cards
                const indices = [];
                while (indices.length < 3) {
                    let r = Math.floor(Math.random() * tarotCards.length);
                    if (!indices.includes(r)) indices.push(r);
                }

                const spreads = ["Past (Foundations)", "Present (Opportunities/Blocks)", "Future (Outcomes)"];
                const cards = indices.map((idx, i) => {
                    const c = tarotCards[idx];
                    const isReversed = Math.random() < 0.25;
                    return `
                        <div class="tarot-card-3d flipped">
                            <div class="tarot-card-inner">
                                <div class="tarot-card-back" style="height: 100%; min-height: 300px;">
                                    <span class="house-badge" style="background-color: var(--primary-color); font-size: 0.75rem; margin-bottom: 15px;">${spreads[i]}</span>
                                    <div style="font-size: 2.5rem; color: var(--accent-color); margin-bottom: 10px; ${isReversed ? 'transform: rotate(180deg);' : ''}">
                                        <i class="${c.icon}"></i>
                                    </div>
                                    <h4 style="font-size: 1.15rem; color: var(--accent-color); margin-bottom: 5px;">${c.name} ${isReversed ? '(Rev)' : ''}</h4>
                                    <p style="font-size: 0.85rem; text-align: left; line-height: 1.5; margin-top: 10px;">
                                        ${isReversed ? c.reversed : c.upright}
                                    </p>
                                </div>
                            </div>
                        </div>
                    `;
                });

                threeCardResult.innerHTML = `
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem;">
                        ${cards.join("")}
                    </div>
                `;
                threeCardBtn.disabled = false;
            }, 1800);
        });
    }
}

// ==========================================
// 6. AI ASTROLOGER CHATBOT ENGINE
// ==========================================

const botReplies = {
    marriage: [
        "Based on Vedic placements, your 7th house (governing partnership) indicates that your marriage aspects are highly favored when Jupiter transits your natal sun. For exact timings, check your D9 Navamsa chart.",
        "Your relationship chart shows a strong connection with Earth elements. Arranged meeting followed by love marriage seems highly probable. Ensure to check for Mars/Manglik compatibility before finalizing dates.",
        "Jupiter's position in your birth chart represents the protector of marriage. While minor delays might happen due to Saturn's aspects, marriage after age 26 will be extremely stable and prosperous."
    ],
    career: [
        "Looking at your 10th house (Karma Bhava), Mercury indicates strong analytical skills. Careers relating to consulting, audit, IT, or financial analysis are highly suitable.",
        "Your D10 Dashamsha chart shows a strong Sun influence in the ascendant. This points toward leadership roles, management, or government services. Success is indicated after initial struggles.",
        "Vedic transits indicate a major career breakthrough in the upcoming months. Focus on expanding your network circle. Avoid changing jobs in retrograde Mercury phases."
    ],
    finance: [
        "Your 2nd house (Dhana) and 11th house (Gains) are ruled by friendly planetary coordinates, suggesting stable cash flow. Investments in property or long-term funds will yield high returns.",
        "Saturn's placement shows that accumulated wealth will grow steadily but slowly. Avoid speculative trading or high-risk investments today.",
        "Vedic charts show major financial gains starting in the latter half of the year. Perform charity on Amavasya to clear ancestral debt frequencies."
    ],
    settlement: [
        "The 9th (long travel) and 12th (foreign lands) houses show strong connections, indicating foreign settlement chances or global travel. Career opportunities abroad are highly likely.",
        "Vedic alignment shows traveling to distant places. However, permanent settlement may face minor delays. Wearing a suitable Emerald or Yellow Sapphire will boost your fortunes.",
        "Travel aspects are active currently. Consult with Siddharth for a detailed examination of your 12th house planetary alignments."
    ],
    default: [
        "The celestial patterns show high cosmic energy. It is an ideal time to start meditating and set clear intentions for your goals.",
        "Vedic science helps you define coordinates, but your actions (Karma) determine final details. Align your habits with cosmic values.",
        "A fascinating question! Siddharth advises examining the specific houses of your birth chart to find a myth-free, prediction-oriented answer."
    ]
};

function initAIChat() {
    const chatInput = document.getElementById('chat-input-field');
    const sendBtn = document.getElementById('chat-send-btn');
    const chatBody = document.getElementById('chat-messages-container');
    const suggestBtns = document.querySelectorAll('.chat-suggest-btn');

    if (!chatBody) return;

    // Send Message
    function sendMessage(text) {
        if (!text.trim()) return;

        // Append User Message
        appendMessage(text, "user");
        chatInput.value = "";

        // Scroll
        chatBody.scrollTop = chatBody.scrollHeight;

        // Bot response typing effect
        setTimeout(() => {
            appendMessage("...", "bot typing");
            chatBody.scrollTop = chatBody.scrollHeight;

            setTimeout(() => {
                // Remove typing indicator
                const typingBubble = chatBody.querySelector('.bot.typing');
                if (typingBubble) typingBubble.remove();

                // Select response based on keywords
                let response = botReplies.default[Math.floor(Math.random() * botReplies.default.length)];
                const cleanText = text.toLowerCase();

                if (cleanText.includes("marri") || cleanText.includes("spouse") || cleanText.includes("wed")) {
                    response = botReplies.marriage[Math.floor(Math.random() * botReplies.marriage.length)];
                } else if (cleanText.includes("career") || cleanText.includes("job") || cleanText.includes("work") || cleanText.includes("profess")) {
                    response = botReplies.career[Math.floor(Math.random() * botReplies.career.length)];
                } else if (cleanText.includes("finance") || cleanText.includes("money") || cleanText.includes("wealth") || cleanText.includes("rich")) {
                    response = botReplies.finance[Math.floor(Math.random() * botReplies.finance.length)];
                } else if (cleanText.includes("foreign") || cleanText.includes("abroad" ) || cleanText.includes("settle")) {
                    response = botReplies.settlement[Math.floor(Math.random() * botReplies.settlement.length)];
                }

                appendMessage(response, "bot");
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 1200);
        }, 500);
    }

    function appendMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `chat-message-bubble ${sender}`;
        
        if (sender === "bot typing") {
            msg.innerHTML = `
                <div class="message-avatar"><i class="fas fa-robot"></i></div>
                <div class="message-text"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>
            `;
        } else if (sender === "bot") {
            msg.innerHTML = `
                <div class="message-avatar"><i class="fas fa-robot"></i></div>
                <div class="message-text">${text}</div>
            `;
        } else {
            msg.innerHTML = `
                <div class="message-text">${text}</div>
                <div class="message-avatar user-avatar"><i class="fas fa-user"></i></div>
            `;
        }
        chatBody.appendChild(msg);
    }

    if (sendBtn && chatInput) {
        sendBtn.addEventListener('click', () => sendMessage(chatInput.value));
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage(chatInput.value);
        });
    }

    suggestBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sendMessage(btn.innerText);
        });
    });
}

// ==========================================
// 7. PANCHANG & MUHURAT CALCULATORS
// ==========================================

function initPanchangPage() {
    const pForm = document.getElementById('panchang-date-form');
    const pResult = document.getElementById('panchang-result-section');

    if (pForm && pResult) {
        pForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const dateVal = document.getElementById('panchang-date').value;
            if (!dateVal) return;

            const date = new Date(dateVal);
            const seed = dateVal.toString();
            const hash = hashString(seed);

            // Calculations based on date
            const tithis = ["Prathama", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shasthi", "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima", "Amavasya"];
            const nakshatrasList = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"];
            const yogas = ["Vishkumbha", "Priti", "Ayushman", "Saubhagya", "Sobhana", "Atiganda", "Sukarma", "Dhriti", "Sula", "Ganda", "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyan", "Parigha", "Shiva", "Siddha", "Sadhya", "Subha", "Sukla", "Brahma", "Indra", "Vaidhriti"];

            const tithi = tithis[hash % tithis.length];
            const nakshatra = nakshatrasList[hash % nakshatrasList.length];
            const yoga = yogas[hash % yogas.length];
            const sunrise = `06:${(hash % 15) + 15} AM`;
            const sunset = `05:${(hash % 20) + 40} PM`;

            // Calculate Rahu Kaal, Gulika Kaal
            const rahuStart = `${(hash % 4) + 1} PM`;
            const rahuEnd = `${(hash % 4) + 2}:30 PM`;

            pResult.innerHTML = `
                <div class="gem-recommendation-card animate-fade-in" style="max-width: 800px; margin: 2rem auto;">
                    <h2 class="section-title">Panchang Details for ${date.toDateString()}</h2>
                    <div class="divider-small">
                        <span class="divider-line"></span>
                        <span class="divider-icon"><i class="fas fa-moon"></i></span>
                        <span class="divider-line"></span>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; text-align: left; margin-bottom: 2rem;">
                        <div class="chart-user-meta" style="padding: 1.5rem; border-radius: var(--border-radius);">
                            <div class="chart-meta-item"><strong>Tithi (Moon Phase):</strong> <span>${tithi}</span></div>
                            <div class="chart-meta-item"><strong>Nakshatra (Star):</strong> <span>${nakshatra}</span></div>
                            <div class="chart-meta-item"><strong>Yoga:</strong> <span>${yoga}</span></div>
                            <div class="chart-meta-item"><strong>Sunrise / Sunset:</strong> <span>${sunrise} / ${sunset}</span></div>
                        </div>
                        <div class="chart-user-meta" style="padding: 1.5rem; border-radius: var(--border-radius); border-color: var(--accent-color);">
                            <div class="chart-meta-item" style="color: var(--accent-color);"><strong>Rahu Kaal (Inauspicious):</strong> <span>${rahuStart} - ${rahuEnd}</span></div>
                            <div class="chart-meta-item"><strong>Gulika Kaal:</strong> <span>09:00 AM - 10:30 AM</span></div>
                            <div class="chart-meta-item"><strong>Abhijit Muhurat:</strong> <span>11:45 AM - 12:35 PM</span></div>
                            <div class="chart-meta-item"><strong>Yamaganda:</strong> <span>01:30 PM - 03:00 PM</span></div>
                        </div>
                    </div>

                    <div class="gem-text-block">
                        <strong>Day Analysis:</strong>
                        <p>This day's Nakshatra (${nakshatra}) is ruled by cosmic currents highly suitable for ${hash % 2 === 0 ? "investments, business travel, and education agreements." : "spiritual rituals, pending tasks closure, and resting."} Avoid starting critical ventures during Rahu Kaal.</p>
                    </div>
                </div>
            `;
            pResult.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Muhurat Planner Selector
    const mSelector = document.getElementById('muhurat-type');
    const mResult = document.getElementById('muhurat-dates-container');
    if (mSelector && mResult) {
        mSelector.addEventListener('change', () => {
            const mType = mSelector.value;
            if (!mType) {
                mResult.innerHTML = "";
                return;
            }

            const auspiciousDates = [
                { type: "marriage", dates: ["Oct 12 - Friday - 09:30 AM", "Nov 02 - Friday - 06:15 PM", "Nov 18 - Sunday - 08:45 AM", "Dec 05 - Wednesday - 11:20 AM"] },
                { type: "griha", dates: ["Oct 19 - Friday - 10:15 AM", "Nov 09 - Friday - 02:40 PM", "Dec 12 - Wednesday - 09:00 AM"] },
                { type: "vehicle", dates: ["Oct 08 - Monday - 01:30 PM", "Nov 15 - Thursday - 11:00 AM", "Dec 21 - Friday - 03:30 PM"] },
                { type: "business", dates: ["Oct 05 - Friday - 09:00 AM", "Oct 22 - Monday - 10:30 AM", "Nov 12 - Monday - 08:30 AM", "Dec 07 - Friday - 09:15 AM"] }
            ];

            const match = auspiciousDates.find(d => d.type === mType);
            if (match) {
                mResult.innerHTML = `
                    <h3 style="margin-top: 1.5rem; margin-bottom: 1rem; color: var(--accent-color);">Upcoming Auspicious Dates</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; text-align: center;">
                        ${match.dates.map(date => `
                            <div style="background-color: var(--light-bg); border: 1.5px solid var(--primary-color); padding: 1.2rem; border-radius: var(--border-radius);">
                                <i class="far fa-calendar-alt" style="font-size: 1.5rem; color: var(--primary-color); margin-bottom: 5px;"></i>
                                <p style="font-weight: 600; margin-top: 5px;">${date.split(" - ")[0]}</p>
                                <span style="font-size: 0.85rem; color: var(--text-muted);">${date.split(" - ")[1]}</span>
                                <span style="font-size: 0.9rem; color: var(--accent-color); display:block; font-weight:500; margin-top:5px;">${date.split(" - ")[2]}</span>
                            </div>
                        `).join("")}
                    </div>
                    <div style="text-align: center; margin-top: 2rem;">
                        <a href="book-online.html" class="btn primary-btn">Book Personalized Muhurat Session</a>
                    </div>
                `;
            }
        });
    }
}

// ==========================================
// BOOTSTRAP INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('zodiac-calc-form') || document.querySelector('.zodiac-grid-card')) {
        initZodiacPage();
    }
    
    if (document.getElementById('kundli-calc-form')) {
        initKundliPage();
    }

    if (document.getElementById('matching-form')) {
        initMatchingPage();
    }
    
    if (document.getElementById('wizard-submit') || document.querySelector('.option-card')) {
        // Run gemstones wizard logic if not overridden by remedies.html customization
        if (typeof initGemstoneWizard === 'function') {
            initGemstoneWizard();
        }
    }

    if (document.getElementById('numerology-form') || document.querySelector('.custom-num-form')) {
        initNumerologyPage();
    }

    if (document.getElementById('draw-daily-tarot-btn') || document.getElementById('draw-three-tarot-btn')) {
        initTarotPage();
    }

    if (document.getElementById('chat-messages-container')) {
        initAIChat();
    }

    if (document.getElementById('panchang-date-form') || document.getElementById('muhurat-type')) {
        initPanchangPage();
    }
});
