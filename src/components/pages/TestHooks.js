import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
export default function TestHooks() {
const  {data, loading, error} = useFetch('https://api.themoviedb.org/3/movie/550?api_key=cd524ad267ee1be15d8602d5d5bdecad')

if(loading) {
   return 'Loading...'
}

if(error) {
   console.log('Произошла ошибка'); 
   return null
}

   return(
      <div>
        {JSON.stringify(data)}
        {console.log(data)}
      </div>
   )
}