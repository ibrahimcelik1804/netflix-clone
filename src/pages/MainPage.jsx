import React, { useEffect } from "react";
import { getGenres, getPopular } from "./../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import MovieList from "./../components/MovieList";

const MainPage = () => {
  const state = useSelector((store) => store.genre);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);
 // console.log(state);
  return (
    <div className="text-light">
      <Hero />
      {state.isLoding ? (
        <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : state.isError ? (
        <p>Üzgünüz bir hata oluştu</p>
      ) : (
        state.genres.map((genre) => <MovieList key={genre.id} genre={genre}/>)
      )}
    </div>
  );
};

export default MainPage;
