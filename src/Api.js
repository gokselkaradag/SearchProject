import axios from 'axios';

const searchImages = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos', {
       headers: {
         Authorization: 'Client-ID CdfavZf5T90JIkBLLrabpe1nixbKuNkVyFrMV3aImHs'
       },
       params:{
         query:term,
       },
     });
     return response.data.results;
   };

   export default searchImages;