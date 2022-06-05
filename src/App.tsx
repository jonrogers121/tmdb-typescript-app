import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './global.css';
import Movie from './pages/Movie';
import Search from './pages/Search';
import NavBar from './organisms/NavBar';

/**
 * The starting page for your App
 */

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <main>
            <section>
              <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/home'} element={<Home />} />
                <Route path={'/movie'} element={<Movie />} />
                <Route path="/movie" element={<Movie />}>
                  <Route path=":movieId" element={<Movie />} />
                </Route>
                <Route path="/search" element={<Search />}>
                  <Route path=":searchTerm" element={<Search />} />
                </Route>
              </Routes>
            </section>
          </main>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
