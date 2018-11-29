import axios from 'axios';

const getHeadsAxios = () => axios.get('https://lego-builder-1b953.firebaseio.com/heads.json');
const getTorsosAxios = () => axios.get('https://lego-builder-1b953.firebaseio.com/torsos.json');
const getLegsAxios = () => axios.get('https://lego-builder-1b953.firebaseio.com/legs.json');

export default {
  getHeadsAxios,
  getTorsosAxios,
  getLegsAxios,
};
