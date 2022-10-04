let MovieCard = function ({title, type, posterUrl}) {
    return (
        <div>
            <img src={posterUrl}></img>
            <h1>{title}</h1>
            <h3>{type}</h3>
        </div>
    );
};

export default MovieCard ;



