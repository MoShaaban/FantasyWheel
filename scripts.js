document.addEventListener('DOMContentLoaded', () => {
    loadCards();
});

function loadCards() {
    const cardsGrid = document.getElementById('cardsGrid');
    const cardsData = getCardsData(); // This function should fetch card data from backend or blockchain

    cardsData.sort(() => Math.random() - 0.5); // Randomize cards

    cardsGrid.innerHTML = '';
    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.title}">
            <h3>${card.title}</h3>
            <p>${card.description.substring(0, 1000)}</p>
            <button onclick="viewScenes('${card.id}')">View List of Scenes</button>
            ${card.owned || card.free ? `<button onclick="startGame('${card.id}')">Start Game</button>` : `<button onclick="purchaseCard('${card.id}')">Purchase Card - ${card.price} Fanta</button>`}
        `;
        cardsGrid.appendChild(cardElement);
    });
}

function filterCards(filter) {
    // Implement filtering logic based on the filter parameter
}

function viewScenes(cardId) {
    const scenesPopup = document.getElementById('scenesPopup');
    const scenesList = document.getElementById('scenesList');
    const card = getCardById(cardId); // Fetch the card details using cardId

    scenesList.innerHTML = card.scenes.map(scene => `<p>${scene}</p>`).join('');
    scenesPopup.style.display = 'block';
}

function closePopup() {
    document.getElementById('scenesPopup').style.display = 'none';
}

function startGame(cardId) {
    // Implement start game logic
}

function purchaseCard(cardId) {
    // Implement purchase card logic
}

function getCardsData() {
    // Mock data
    return [
        { id: '1', image: 'image1.jpg', title: 'Card 1', description: 'Description 1', scenes: ['Scene 1.1', 'Scene 1.2'], owned: true, free: false, price: 10 },
        { id: '2', image: 'image2.jpg', title: 'Card 2', description: 'Description 2', scenes: ['Scene 2.1', 'Scene 2.2'], owned: false, free: true, price: 15 },
        // Add more cards here
    ];
}

function getCardById(cardId) {
    return getCardsData().find(card => card.id === cardId);
}
