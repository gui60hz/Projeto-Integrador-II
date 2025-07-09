// app.js

// Inicialização do mapa
const map = L.map('map').setView([-20.4697, -54.6209], 13); // Coordenadas de Campo Grande, MS

// Adicionar tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Função para buscar o ponto de coleta com base no endereço
document.getElementById('endereco-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const endereco = document.getElementById('endereco').value;
  
  // Aqui, você pode integrar com uma API de geolocalização (como o Google Maps Geocoding API) para transformar o endereço em coordenadas
  // Simulando coordenadas de um ponto de coleta para o exemplo:
  const pontoColeta = { lat: -20.4697, lon: -54.6209 };  // Substitua pelas coordenadas reais obtidas
  
  // Limpar mapa de pontos anteriores
  map.eachLayer(function(layer) {
    if(layer !== map.tileLayer) {
      map.removeLayer(layer);
    }
  });
  
  // Marcar o ponto de coleta no mapa
  L.marker([pontoColeta.lat, pontoColeta.lon]).addTo(map)
    .bindPopup('Ponto de Coleta de Lixo')
    .openPopup();
});
