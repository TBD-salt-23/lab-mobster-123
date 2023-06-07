import './style.css';
import axios from 'axios';
const baseUrl = 'http://localhost:3000/';

const fetchMobs = async () => {
  const mobs = await axios({
    method: 'get',
    url: baseUrl + 'mobs',
  });
  console.log(mobs);
};

fetchMobs();
