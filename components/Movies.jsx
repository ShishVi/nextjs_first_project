

export default function Movies (props) {

    let hrefImbd = `https://www.imdb.com/title/${props.item.imdbID}`;
    return <div>
        <a href={hrefImbd} target="_blank">
        <h2>{props.item.Title}({props.item.Year})</h2>
        <img src = {props.item.Poster}  />
        </a>
    </div>
}