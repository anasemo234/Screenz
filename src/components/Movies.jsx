import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Container } from "./NavBar";
import "../Styles/Videos.css";
import NoImg from "./no-image.png";
import TrailerMovies from "../Trailers/TrailerMovies";

function Movies() {
  const { toggle, inputValue } = useContext(Container);
  const input = inputValue;
  const [moviesData, setMoviesData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const [movieTitle, setMovieTitle] = useState("");
  const Shown = input ? "search" : "discover";
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`;
  const Images = "https://image.tmdb.org/t/p/w500/";
  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "2b0ff7fb5247ceaf183dcd49092a2322",
        query: input,
      },
    });
    const results = data.data.results;
    setMoviesData(results);
  };
  useEffect(() => {
    setTimeout(() => {
      MovieCall();
    }, 50);
  }, [input]);

  const MoviesTitle = (movie) => {
    setMovieTitle(movie.title);
    setTrailer(!trailer);
  };

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgcolor"}>
        <div className="movies-container">
          {moviesData.map((movie) => {
            return (
              <Fragment>
                <div id={trailer ? "container" : "NoContainer"}>
                  {/* <AiFillPlayCircle
                    color="white"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => MoviesTitle(movie)}
                  /> */}
                  <img
                    src={
                      movie.poster_path
                        ? `${Images}${movie.poster_path}`
                        : NoImg
                    }
                    alt=""
                    onClick={() => MoviesTitle(movie)}
                  />
                  <h3
                    id={movie.title.length > 28 ? "smaller-Text" : ""}
                    className={toggle ? "mainColor" : "secondaryColor"}
                  >
                    {movie.title}
                  </h3>
                </div>
              </Fragment>
            );
          })}
          {trailer ? (
            console.log
          ) : (
            <TrailerMovies moviesTitle={movieTitle} toggle={toggle} />
          )}
          <AiOutlineClose
            id={trailer ? "Nothing" : "Exit1"}
            className={toggle ? "DarkTheme" : "LightThemeClose"}
            fontSize={55}
            color="red"
            cursor={"pointer"}
            onClick={() => setTrailer(true)}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Movies;
