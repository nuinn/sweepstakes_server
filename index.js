import express from 'express';
import cors from 'cors';
import './dB.js';
import apiRouter from './src/api/router.js';

const server = express();
const { PORT, API_TOKEN } = process.env;

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Auth-Token');
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
});

server.use(express.json());
server.use(cors({ origin: true }));
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
  console.log(`Proxy server is running on port: ${PORT}`);
});
