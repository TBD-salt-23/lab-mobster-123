import './style.css';
import axios from 'axios';
const baseUrl = 'http://localhost:3000/';

const createMobBtn = document.querySelector('#add-mob');
const getMobsBtn = document.querySelector('#get-mobs');
const getMobBtn = document.querySelector('#get-mob');
const createMobMemberBtn = document.querySelector('#add-mob-member');
const getMobMemberBtn = document.querySelector('#get-mobmember');
const deleteMobBtn = document.querySelector('#delete-mob');
const deleteMobMemberBtn = document.querySelector('#delete-mobmember');
const resultParagraph = <HTMLElement>document.querySelector('.res-paragraph');

const fetchMobs = async () => {
  const mobs = (
    await axios({
      method: 'get',
      url: baseUrl + 'mobs',
    })
  ).data;

  if (mobs.length === 0) {
    resultParagraph.textContent = "Hey it would seem like there are no mobs. Maybe add some?";
  } else {
    resultParagraph.textContent = mobs;
  }

  console.log(mobs);
};

const fetchMob = async (id: string) => {
  const mob = (
    await axios({
      method: 'get',
      url: `${baseUrl}mobs/${id}`,
    })
  ).data;
  document.body.append(mob);
  console.log(mob);
};

const createMob = async (mobName: string) => {
  const createdMob = await axios({
    method: 'post',
    url: `${baseUrl}mobs`,
    data: {
      name: mobName,
    }
  });
  console.log(createdMob);
};

const fetchMobMember = async (mobId: string, memberId: string) => {
  const mobMember = (await axios({
    method: 'get',
    url: `${baseUrl}mobs/${mobId}/${memberId}`
  })).data;
  document.body.append(mobMember);
  console.log(mobMember);
};

const createMobMember = async (mobId: string, name: string) => {
  const createdMember = await axios({
    method: 'post',
    url: `${baseUrl}mobs/${mobId}`,
    data: {
      memberName : name,
    }
  });
  console.log(createdMember);
};

const deleteMob = async (mobId: string) => {
  const deletedMob = await axios({
    method: 'delete',
    url: `${baseUrl}mobs/${mobId}`
  });
  console.log(deletedMob);
};

const deleteMobMember = async (mobId: string, memberId: string) => {
  const deletedMember = await axios({
    method: 'delete',
    url: `${baseUrl}mobs/${mobId}/${memberId}`
  });
  console.log(deletedMember);
};

if (createMobBtn)
  createMobBtn.addEventListener('click', () => {
    const textField = <HTMLInputElement>document.querySelector('#mobtext');
    const mobName = textField.value;
    createMob(mobName);
  });

if (getMobsBtn) getMobsBtn.addEventListener('click', fetchMobs);

if (getMobBtn) getMobBtn.addEventListener('click', () => {
  const textField = <HTMLInputElement>document.querySelector('#mobtext');
  const mob = textField.value;
  fetchMob(mob);
});

if (createMobMemberBtn) createMobMemberBtn.addEventListener('click', () => {
  const textField = <HTMLInputElement>document.querySelector('#mobtext');
  const textFieldMember = <HTMLInputElement>document.querySelector('#membertext');
  const mobName = textField.value;
  const memberName = textFieldMember.value;
  createMobMember(mobName, memberName);
});

if (getMobMemberBtn) getMobMemberBtn.addEventListener('click', () => {
  const textField = <HTMLInputElement>document.querySelector('#mobtext');
  const textFieldMember = <HTMLInputElement>document.querySelector('#membertext');
  const mobName = textField.value;
  const memberName = textFieldMember.value;
  fetchMobMember(mobName, memberName);
});

if (deleteMobBtn) deleteMobBtn.addEventListener('click', () => {
  const textField = <HTMLInputElement>document.querySelector('#mobtext');
  const mob = textField.value;
  deleteMob(mob);
});

if (deleteMobMemberBtn) deleteMobMemberBtn.addEventListener('click', () => {
  const textField = <HTMLInputElement>document.querySelector('#mobtext');
  const textFieldMember = <HTMLInputElement>document.querySelector('#membertext');
  const mobName = textField.value;
  const memberName = textFieldMember.value;
  deleteMobMember(mobName, memberName);
})

