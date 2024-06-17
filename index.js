import express from 'express';
import cors from 'cors';
import request from 'request';
import './dB.js';
import apiRouter from './src/api/router.js';

const server = express();
const { PORT, API_TOKEN } = process.env;
// const PORT = 3000;

// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Auth-Token');
//   if (req.method === 'OPTIONS') {
//     res.sendStatus(204);
//   } else {
//     next();
//   }
// });

// server.use(express.json());
// server.use(cors({ origin: true }));
// server.use(apiRouter);

// server.use('/api', (req, res) => {
//   const url = `https://api.football-data.org${req.url}`;
//   req.pipe(request(url, {
//     headers: {
//       'X-Auth-Token': API_TOKEN,
//     },
//   })).pipe(res);
// });

server.use('/api', (req, res) => {
  const apiUrl = req.url.replace('/api', '');
  const url = `https://api.football-data.org${apiUrl}`;
  req.pipe(request(url, {
    headers: {
      'X-Auth-Token': API_TOKEN,
    },
  })).pipe(res);
});

server.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
  console.log(`PORT: ${PORT}, API_TOKEN: ${API_TOKEN}`);
});
