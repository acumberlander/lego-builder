// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import partsData from './data/partsData';
import legoCharacter from './components/LegoCharacter/legoCharacter';

// $('#legoHead').append($(headData));


const initializeApp = () => {
  partsData.getHeads()
    .then((heads) => {
      legoCharacter.headBuilder(heads.data);
    })
    .catch((error) => {
      console.error('there was a problem fetching your data', error);
    });
};

initializeApp();
