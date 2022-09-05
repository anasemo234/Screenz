import React, { Fragment, useEffect, useState, useContext } from "react";
import { Container } from "./NavBar";
import axios from "axios";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import NoImg from "./no-image.png";
import "../Styles/Videos.css";

function Trends() {
  const { toggle } = useContext(Container);
  const Api = `https://api.themoviedb.org/3`;
  const TrendsShown = "/trending/all/week";
  const [trendArray, setTrendArray] = useState([]);
  const [trendTitle, setTrendTitle] = useState("");
  const [trailer, setTrailer] = useState(true);
  const Images = "https://image.tmdb.org/t/p/w500/";
  const Trends = async () => {
    const data = await axios.get(`${Api}${TrendsShown}`, {
      params: {
        api_key: "2b0ff7fb5247ceaf183dcd49092a2322",
      },
    });
    const results = data.data.results;
    setTrendArray(results);
  };

  useEffect(() => {
    setTimeout(() => {
      Trends();
    }, 50);
  }, []);

  const TrendTitle = (trend) => {
    setTrendTitle(trend.title);
    setTrailer(!trailer);
  };

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgcolor"}>
        <div className="movies-container">
          {trendArray.map((trend) => {
            return (
              <Fragment>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="white"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => TrendTitle(trend)}
                  />
                  <img
                    src={
                      trend.poster_path
                        ? `${Images}${trend.poster_path}`
                        : NoImg
                    }
                    alt=""
                    onClick={() => TrendTitle(trend)}
                  />
                  <h3
                    id="smaller-text"
                    className={toggle ? "mainColor" : "secondaryColor"}
                  >
                    {trend.title}
                  </h3>
                </div>
              </Fragment>
            );
          })}
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

export default Trends;
