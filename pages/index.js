import {useState,useEffect} from 'react';
import Movies from '../components/Movies';


export default function HomePage() {

    const[text, setText] = useState("War");
    const[arrMovies, setarrMovies] = useState([]);

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
          // get the data from the api
          const data = await fetch("https://www.omdbapi.com/?apikey=a2b07930&s=" + text);
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

      }, []);

    console.log(arrMovies);

return <>
<input value={text} onInput ={evt=>setText(evt.target.value)}/>
{arrMovies.map((item)=> <Movies item = {item} />)}

</>
}