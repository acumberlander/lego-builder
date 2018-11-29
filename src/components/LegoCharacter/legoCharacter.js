import $ from 'jquery';
import 'bootstrap';
// import './legoCharacter.scss';
import partsData from '../../data/partsData';

const headBuilder = (headArray) => {
  let headString = '';
  let headString2 = '';
  // const randomItem = headArray[Math.floor(Math.random() * headArray.length)];
  headString += `
    <img class="head-pics"
      src="${headArray[0].imageUrl}" 
      height="200" width="200"
      />
  `;
  headString2 += `${headArray[0].name}`.toUpperCase();
  $('#legoHeads').html(headString);
  $('#name').append(headString2);
};

// const randomheadBuilder = (headArray) => {
//   let headString = '';
//   let headString2 = '';
//   const randomItem = headArray[Math.floor(Math.random() * headArray.length)];
//   headString += `
//     <img class="head-pics"
//       src="${randomItem.imageUrl}"
//       height="200" width="200"
//       />
//   `;
//   headString2 += `${randomItem.name}`.toUpperCase();
//   $('#legoHeads').html(headString);
//   $('#name').append(headString2);
// };

const gettingHeads = () => {
  partsData.getHeadsAxios()
    .then((heads) => {
      headBuilder(heads.data);
    })
    .catch((error) => {
      console.error('there was a problem fetching your data', error);
    });
};

const torsoBuilder = (torsoArray) => {
  let torsoString = '';
  let torsoString2 = '';
  // const randomItem = torsoArray[Math.floor(Math.random() * torsoArray.length)];
  torsoString += `
    <img class="head-pics"
      src="${torsoArray[0].imageUrl}" 
      height="200" width="200"
      />
  `;
  torsoString2 += `${torsoArray[0].name}`.toUpperCase();
  $('#legoTorsos').html(torsoString);
  $('#name').append(torsoString2);
};

const gettingTorsos = () => {
  partsData.getTorsosAxios()
    .then((torsos) => {
      torsoBuilder(torsos.data);
    })
    .catch((error) => {
      console.error('there was a problem fetching your data', error);
    });
};

const legBuilder = (legArray) => {
  let legString = '';
  let legString2 = '';
  // const randomItem = legArray[Math.floor(Math.random() * legArray.length)];
  legString += `
    <img class="head-pics"
      src="${legArray[0].imageUrl}" 
      height="200" width="200"
      />
  `;
  legString2 += `${legArray[0].name}`.toUpperCase();
  $('#legoLegs').html(legString);
  $('#name').append(legString2);
};

const gettingLegs = () => {
  partsData.getLegsAxios()
    .then((legs) => {
      legBuilder(legs.data);
    })
    .catch((error) => {
      console.error('there was a problem fetching your data', error);
    });
};


export default {
  headBuilder,
  torsoBuilder,
  legBuilder,
  gettingHeads,
  gettingTorsos,
  gettingLegs,
};
