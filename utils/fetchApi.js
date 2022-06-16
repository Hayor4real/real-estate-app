import axios from 'axios';

export const baseUrl = 'bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '4ce6b6f506mshb923b7c41dd5aecp175edfjsndf5568c2a6e5',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });
};
