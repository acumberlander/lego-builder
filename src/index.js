import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import { getHeads } from './data/partsData';

// $('#legoHead').append($(headData));


const initializeApp = () => {
  getHeads();
};

initializeApp();
