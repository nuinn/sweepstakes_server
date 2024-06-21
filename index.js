import express from 'express';
import cors from 'cors';
import request from 'request';
import './dB.js';
import apiRouter from './src/api/router.js';

const server = express();
const { PORT, API_TOKEN } = process.env;
// const PORT = 3000;

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Auth-Token');
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
});

server.use(express.json());
// server.use(cors({ origin: true }));
// server.use(cors({
//   origin: 'https://eurosweeps.vercel.app', // Allow your Vercel frontend
//   credentials: true,
// }));
server.use(apiRouter);

server.use('/api', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const url = `https://api.football-data.org${req.url}`;
  const response = await fetch(url, {
    headers: {
      'X-Auth-Token': API_TOKEN,
    },
  });
  const data = await response.json();
  res.json(data);
});

// server.use('/api', (req, res) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   console.log('rerouting, req.url', req.url);
//   const url = `https://api.football-data.org${req.url}`;
//   console.log('url', url);
//   req.pipe(request(url, {
//     headers: {
//       'X-Auth-Token': API_TOKEN,
//     },
//   })).pipe(res.header);
// });

server.listen(PORT, () => {
<<<<<<< HEAD
  console.log(`Proxy server is running on http://localhost:${PORT}`);
=======
  console.log(`Proxy server is running on port: ${PORT}`);
>>>>>>> 2c13422ff18c4f4681459ce167d64b427e6ab549
});
