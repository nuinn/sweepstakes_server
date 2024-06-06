import express from 'express';
import cors from 'cors';
import request from 'request';
import './dB.js';
import apiRouter from './src/api/router.js';

const server = express();
const { PORT } = process.env;
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

server.use(express.json());
server.use(cors({ origin: true }));
server.use(apiRouter);

server.use('/api', (req, res) => {
  const url = `https://api.football-data.org${req.url}`;
  req.pipe(request(url, {
    headers: {
      'X-Auth-Token': 'e6b91cce9d4b4a04bca3f90ba325de5d',
    },
  })).pipe(res);
});

server.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
