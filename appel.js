const fs = require('fs');

// Fonction pour convertir un objet JSON en chaîne URL-encodée
function toUrlEncoded(obj) {
  return Object.keys(obj).map(key => {
    if (typeof obj[key] === 'object') {
      return Object.keys(obj[key]).map(subKey => {
        return encodeURIComponent(`${key}[${subKey}]`) + '=' + encodeURIComponent(obj[key][subKey]);
      }).join('&');
    }
    return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
  }).join('&');
}

// Lire le fichier JSON
fs.readFile('C:/Users/Nathan/Documents/Projet/Opquast/test.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier JSON:', err);
    return;
  }

  // Convertir le contenu du fichier en objet JSON
  const jsonData = JSON.parse(data);

  // Convertir l'objet JSON en chaîne URL-encodée
  const urlEncodedData = toUrlEncoded(jsonData);

  // Effectuer la requête POST avec le contenu URL-encodé
  fetch("https://training-v6.certified.opquast.com/wp-admin/admin-ajax.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "application/json, text/javascript, */*; q=0.01",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://training-v6.certified.opquast.com",
      Referer: "https://training-v6.certified.opquast.com/irvaq/evaluations-finales/examen-blanc/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    },
    body: urlEncodedData
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});