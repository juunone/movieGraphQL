let movies = [
    {
        id:0,
        name:"star wars",
        score:10
    },
    {
        id:1,
        name:"avengers", 
        score:5
    },
    {
        id:2,
        name:"batman",
        score:3
    },
    {
        id:3,
        name:"superman",
        score:8
    }
];

export const getMovies = id => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}