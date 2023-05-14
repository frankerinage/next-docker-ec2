import axios from 'axios';

export const fetchPosts = async () => {
  try {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res.data);
      });
  } catch (error) {
    console.log(error);
  }
};
