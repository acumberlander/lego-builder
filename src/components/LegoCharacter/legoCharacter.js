import $ from 'jquery';
import 'bootstrap';
import './legoCharacter.scss';

const headBuilder = (headArray) => {
  let headString = '';
  headArray.forEach((head) => {
    headString += `
    <div class="crousel-item" id="${head.id}">
      <img
        class="card-media"
        src="${head.imageUrl}"
        />
        </div>
    `;
  });
  $('#legoHead').append(headString);
};

export default { headBuilder };
