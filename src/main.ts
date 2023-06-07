import './style.css';
import axios from 'axios';
const baseUrl = 'http://localhost:3000/';

const createMob = document.querySelector('#add-mob');
const getMob = document.querySelector('#get-mob');
const getMobMember = document.querySelector('#get-mobmember');

const fetchMobs = async () => {
  const mobs = (
    await axios({
      method: 'get',
      url: baseUrl + 'mobs',
    })
  ).data;

  console.log(mobs);
};

const fetchMobMember = async (id: string) => {
  const mobMember = (
    await axios({
      method: 'get',
      url: `${baseUrl}mobs/${id}`,
    })
  ).data;
  console.log(mobMember);
};

const createNewMob = async (mobName: string) => {
  const createdMob = await axios({
    method: 'post',
    url: `${baseUrl}mobs`,
    data: {
      name: mobName,
    },
  });
  console.log(createdMob);
};

if (createMob)
  createMob.addEventListener('click', () => {
    const textField = <HTMLInputElement>document.querySelector('#mobtext');
    const mobName = textField.value;
    // <HTMLInputElement>document.getElementById('mobtext')?.textContent || 'default';
    createNewMob(mobName);
  });
