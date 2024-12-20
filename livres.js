// Utilisation de fetch pour récupérer les données de l'API
fetch('https://openlibrary.org/search.json?q=crime+and+punishment&fields=key,title,author_name,editions')
  .then(response => response.json()) // Convertir la réponse en JSON
  .then(data => {
    // Sauvegarder les données dans un fichier JSON
    const fs = require('fs'); // Le module fs permet d'écrire dans un fichier
    fs.writeFile('livre.json', JSON.stringify(data), (err) => {
      if (err) {
        console.error('Erreur lors de l\'écriture du fichier JSON', err);
      } else {
        console.log('Données sauvegardées dans categories.json');
      }
    });
  })
  .catch(error => {
    console.error('Erreur de récupération des données:', error);
  });
