// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
// import partsData from './data/partsData';
import legoCharacter from './components/LegoCharacter/legoCharacter';

const initializeApp = () => {
  legoCharacter.gettingHeads();
  legoCharacter.gettingTorsos();
  legoCharacter.gettingLegs();
};

initializeApp();
