import axios from 'axios';

const getHeads = () => axios.get('https://lego-builder-1b953.firebaseio.com/heads.json');
const getTorsos = () => axios.get('https://lego-builder-1b953.firebaseio.com/torsos.json');
const getLegs = () => axios.get('https://lego-builder-1b953.firebaseio.com/legs.json');

export default { getHeads, getTorsos, getLegs };
