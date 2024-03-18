import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImgURL, options } from "../constant";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReactPlayer from "react-player";
import Comment from "../components/Comment";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  // url den filmin id alacağız
  const { id } = useParams();
  // film verisini Apiden al
  useEffect(() => {
    axios
      .get(
        `/movie/${id}?append_to_response=credits,videos&language=tr-TR`,
        options
      )
      .then((res) => setMovie(res.data));
  }, []);
  // oyuncuların verisini al
  console.log(movie);
  return (
    <div className="row">
      {!movie ? (
        <div className="spinner-border text-primary" role="status"></div>
      ) : (
        <>
          {/*ÜST ALAN*/}
          <div className="col-12 banner">
            <img
              className="w-100 h-100 object-fit-cover"
              src={baseImgURL + movie.backdrop_path}
            />
            <div className="banner-bg">
              <span>{movie.title}</span>
              
            </div>
            <div className="d-flex justify-content-center gap-2 fs-5 fw-bold">IMDB : <span className="text-success"> {movie.vote_average}</span></div>
            
          </div>
          <div className="container row p-4 p-md-5 ">
            {/**SOL TARAF*/}
            <div className="col-md-6 mt-4 ">
              {/** 1 şirketler */}
              <h3 className="mt-4">Yapımcı şirketler</h3>
              <div className=" d-flex flex-wrap gap-4 ">
                {movie.production_companies.map((i) => (
                  <div className="bg-white rounded p-2 d-flex align-items-center  ">
                    {i.logo_path ? (
                      <img
                        width={100}
                        height={50}
                        className="oject-fit-contain"
                        src={baseImgURL + i.logo_path}
                        alt=""
                      />
                    ) : (
                      <span className="company">{i.name}</span>
                    )}
                  </div>
                ))}
              </div>
              {/**2 diller*/}
              <h3 className="mt-4">Konuşulan Diller</h3>
              <div className=" d-flex flex-wrap gap-4 ">
                {movie.spoken_languages.map((i) => (
                  <div className="bg-white rounded py-1 px-2 d-flex align-items-center  ">
                    <span className="company">{i.name}</span>
                  </div>
                ))}
              </div>
              {/**3 ülkeler */}
              <h3 className="mt-4">Yapımcı ülkeler</h3>
              <div className=" d-flex flex-wrap gap-4 ">
                {movie.production_countries.map((i) => (
                  <div className="bg-white rounded py-1 px-2 d-flex align-items-center  ">
                    <span className="company">{i.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/** SAĞ TARAF */}
            <div className="col-md-6 mt-4 ">
              <p className="lead">{movie.overview}</p>
              <p className="fs-5">
                <span>Bütçe : </span>
                <span className="text-success">
                  {movie.budget === 0 ? "Bilinmiyor" : millify(movie.budget)} $
                </span>
              </p>
              <p className="fs-5">
                <span>Gelir : </span>
                <span className="text-success">
                  {movie.revenue === 0 ? "Bilinmiyor" : millify(movie.revenue)}{" "}
                  $
                </span>
              </p>
            </div>
            {/** OYUNCULAR */}
            <div className="col-12  my-3">
              <h2>Oyuncular</h2>
              <Splide
                options={{
                  height: "200px",
                  gap: "10px",
                  pagination: false,
                  autoWidth: true,
                }}
              >
                {movie.credits.cast.map((i) => (
                  <SplideSlide>
                    <div className="actor-card h-100">
                      <img
                        className="movie"
                        src={
                          i.profile_path
                            ? baseImgURL + i.profile_path
                            : "/default_actor.png"
                        }
                      />
                      <p>
                        <span>{i.character}</span>
                        <span>{i.name}</span>
                      </p>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            {/** VİDEOLAR */}
            <div className="my-5 ">
              <h1>Videolar</h1>
              <Splide
                ottions={{
                  height: "50vh",
                }}
              >
                {movie.videos.results.map((video) => (
                  <SplideSlide>
                    <ReactPlayer
                      width="100%"
                      height="500px"
                      url={`https://www.youtube.com/watch?v=${video.key}`}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            {/** YORUMLAR */}
            <Comment />
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
