let MovieDetails = function ({posterUrl, title, rated, runtime, genre, plot, actors, rating}) {
    return (
        <div>
            <img src={posterUrl}></img>
            <h1>{title}</h1>
            <h3>{rated}</h3>
            <h3>{runtime}</h3>
            <h3>{genre}</h3>
            <h3>{plot}</h3>
            <h3>{actors}</h3>
            <h3>{rating}</h3>
        </div>
    );
};

export default MovieDetails