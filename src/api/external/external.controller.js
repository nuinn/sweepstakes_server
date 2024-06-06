import request from 'request';

async function get(req, res) {
  const url = `https://api.football-data.org${req.url}`;
  req.pipe(request(url, {
    headers: {
      'X-Auth-Token': 'e6b91cce9d4b4a04bca3f90ba325de5d',
    },
  })).pipe(res);
}

export default get;
