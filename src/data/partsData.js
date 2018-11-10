import axios from 'axios';

const getHeads = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3001/heads')
    .then((data) => {
      const allHeads = data.data;
      resolve(allHeads);
    })
    .catch((error) => {
      reject(error);
    });
});

export default { getHeads };
