

export const getApiMoviesDetails=async ({params})=>{
  const id=params.moviesId;
  console.log("id:"+id);

    try{
    const response=await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`)
    const data=response.json();
      return data;
    }catch(error){
     console.log(`Error is ${error}`);
 
    }
 }