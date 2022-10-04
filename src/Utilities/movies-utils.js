let apiKey = "d368af55";

let getMoviesByName = async function (name) {
    console.log("Loop");
    let response = await fetch(`http://www.omdbapi.com/?s=${name}&apikey=${apiKey}`);
    let {Search: data} = await response.json();
    return data;
}

let getMovieDetailsById =  async function (id) {
    let response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
    if(response.ok) {
        console.log("Sucess!")
        let data = await response.json();
        return [[data], response.ok, null];
    }
    else {
        console.log("Failed");
        let error = await response.json()
        return [[], response.ok, error];
    }
}

export  { getMoviesByName, getMovieDetailsById };