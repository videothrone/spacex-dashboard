import axios from 'axios';

export const makeApiCall = async (path) => {
  try {
    const {data: response} = await axios.get('https://api.spacexdata.com/v4/launches/' + path);
    return response;
  } catch (error) {
    console.error(error.message);
  }
}
