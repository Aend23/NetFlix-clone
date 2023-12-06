const key = "0a36f44d26be96a9ee9c4af98f510fb7";
const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=2`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=3`,
    geners : `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=`,
   requestName: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=the+`,
   search:`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=`
    // recommendation : `'https://api.themoviedb.org/3/movie/`,

  };

export {requests,key};