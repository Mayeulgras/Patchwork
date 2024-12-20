let currentIndex = 0;

function nextCard() {
    const cards = document.querySelectorAll('.profile-card');
    const totalCards = cards.length;

    // Supprimer les classes des cartes actuelles
    cards.forEach(card => {
        card.classList.remove('previous', 'next', 'active');
    });

    // Définir la carte active
    const activeCard = cards[currentIndex];
    activeCard.classList.add('active');

    // Définir la carte précédente
    const previousIndex = (currentIndex - 1 + totalCards) % totalCards;
    const previousCard = cards[previousIndex];
    previousCard.classList.add('previous');

    // Définir la carte suivante
    const nextIndex = (currentIndex + 1) % totalCards;
    const nextCard = cards[nextIndex];
    nextCard.classList.add('next');

    // Incrémente l'index pour passer à la carte suivante
    currentIndex = (currentIndex + 1) % totalCards;
}
