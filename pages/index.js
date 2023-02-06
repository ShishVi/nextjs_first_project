import {useState,useEffect} from 'react';
import Movies from '../components/Movies';


export default function HomePage() {

    const[text, setText] = useState("");
    const[arrMovies, setarrMovies] = useState([]);

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
          // get the data from the api
          const data = await fetch("https://www.omdbapi.com/?apikey=1a6a80c8&s=" + text);
          // convert the data to json
          const json = await data.json();
      
          // set state with the result
          setarrMovies(json.Search);
        };
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);
        console.log(text);

      }, [text]);

    console.log(arrMovies);

if (text=== null || arrMovies=== undefined) {
  return <> <input value={text} pattern= "[A-Za-zА-Яа-яЁё]{3,}" placeholder='Search movies' onInput ={evt=>setText(evt.target.value)} autoFocus />
  <p>Фильм не найден</p>
   </>
}


else if (arrMovies!== undefined) {

  return <>
  <input value={text} pattern= "[A-Za-zА-Яа-яЁё]{3,}" placeholder='Search movies' onInput ={evt=>setText(evt.target.value)} autoFocus/>
  {arrMovies.map((item)=> <Movies item = {item} />)}
  </>

}

}