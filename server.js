// Сервер сигналов PeerJS: помогает игрокам найти друг друга.
// Сами игровые данные через него не идут — они передаются напрямую между устройствами.
const { PeerServer } = require('peer');

const port = process.env.PORT || 9000;

PeerServer({
  port,
  path: '/',
  proxied: true,            // сервер стоит за прокси хостинга (Render, Railway и т.п.)
  allow_discovery: false,   // не показывать список подключённых игроков
  corsOptions: {            // принимать подключения только с адресов игры
    origin: [
      'https://informatika-avtuskova.github.io',
      'https://svet-nad-dvinoy.netlify.app',
    ],
  },
});

console.log('PeerJS-сервер запущен на порту', port);
