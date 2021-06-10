import React from 'react';
import './App.css';
// import List from './components/movieList';
// import withListLoading from './components/withListLoading';

function App() {
  const apiData = fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt4154796&r=json", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "b162741cbdmshdcc8ec696378c2cp165bd9jsn1253f8eec74a",
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
  return apiData;
}

// function App() {
//   const ListLoading = withListLoading(List);
//   const [appState, setAppState] = useState({
//     loading: false,
//     movies: null,
//   });

//   useEffect(() => {
//     setAppState({ loading: true });
//     const apiUrl = `https://movie-database-imdb-alternative.p.rapidapi.com/`;
//     fetch(apiUrl)
//       .then((res) => res.json())
//       .then((movies) => {
//         setAppState({ loading: false, movies: movies });
//       });
//   }, [setAppState]);
//   return (
//     <div className='App'>
//       <div className='container'>
//         <h1>My Repositories</h1>
//       </div>
//       <div className='repo-container'>
//         <ListLoading isLoading={appState.loading} movies={appState.movies} />
//       </div>
//       <footer>
//         <div className='footer'>
//           Built{' '}
//           <span role='img' aria-label='love'>
//             💚
//           </span>{' '}
//           with by Shedrack Akintayo
//         </div>
//       </footer>
//     </div>
//   );
// }
export default App;
