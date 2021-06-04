describe('Wishlist', () => {

  beforeEach(() => {
    cy.intercept('https://api.boardgameatlas.com/api/search?client_id=hesvHSCpmf', {
      "games": [
        {
          "id": "TAAifFP590",
          "handle": "root",
          "url": "https://www.boardgameatlas.com/game/TAAifFP590/root",
          "name": "Root",
          "price": "104.98",
          "msrp": 60,
          "min_players": 2,
          "max_players": 4,
          "min_playtime": 60,
          "max_playtime": 90,
          "min_age": 10,
          "thumb_url": "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/root-board-game.jpg?v=1611089915",
          "image_url": "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/root-board-game.jpg?v=1611089915",
          "rules_url": "https://drive.google.com/drive/folders/1i9-iCUDzfGMs7HjFHhahwMS6efvvfX5w",
          "amazon_rank": 16636,
          "official_url": "http://ledergames.com/root/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
          "images": {
            "thumb": "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/root-board-game.jpg?v=1611089915",
            "small": "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/root-board-game.jpg?v=1611089915",
            "medium": "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/root-board-game.jpg?v=1611089915",
            "large": "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/root-board-game.jpg?v=1611089915",
            "original": "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/root-board-game.jpg?v=1611089915"
          },
          "primary_publisher": {
            "id": "jyc9bV7f9D",
            "name": "Leder Games",
            "url": "https://www.boardgameatlas.com/publisher/jyc9bV7f9D/leder-games"
          },
            "primary_designer": {
            "id": "DJCmDFXmsh",
            "name": "Cole Wehrle",
            "url": "https://www.boardgameatlas.com/designer/DJCmDFXmsh/cole-wehrle"
          },
          "description_preview": " Find adventure in this marvelous asymmetric game. Root provides limitless replay value as you and your friends explore the unique factions all wanting to rule a fantastic forest kingdom. Play as the Marquise de Cat and dominate the woods, extracting its riches and policing its inhabitants, as the Woodland Alliance, gathering supporters and coordinate revolts against the ruling regime, the Eyrie Dynasties, regaining control of the woods while keeping your squabbling court at bay, or as the Vagabond, seeking fame and fortune as you forge alliances and rivalries with the other players. Each faction has its own play style and paths to victory, providing an immersive game experience you will want to play again and again. "
        }
      ]
    })
      cy.visit('http://localhost:3000/')
        .get('button').should('have.text', 'Add to wishlist').click({force: true})
        .get('.wishlist_title').click()
  })
})
