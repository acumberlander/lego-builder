// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import partsData from './data/partsData';
import legoCharacter from './components/LegoCharacter/legoCharacter';

// $('#legoHead').append($(headData));


const initializeApp = () => {
  partsData
    .getHeads()
    .then((heads) => {
      legoCharacter.loadHeadCarousel(heads.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

initializeApp();
