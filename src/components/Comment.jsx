import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../constant";
import { FaFire } from "react-icons/fa";
import { TiArrowBackOutline } from "react-icons/ti";
import ReviewItem from "./ReviewItem";

const Comment = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/movie/${id}?append_to_response=reviews&language=en-US`, options)
      .then((res) => setDetail(res.data))
      .catch(() => console.log("hata var"));
  }, []);

 // console.log(detail);

  return (
    <div className="">
      <div className="d-flex flex-column gap-1">
        <h1>Yorumlar</h1>
        {/**BAŞLIK */}
        <div className=" d-flex gap-1 border-bottom border-2 border-secondary">
          <div className="d-flex  justify-content-center bg-danger rounded-2 p-2 m-2">
            {detail?.reviews ? detail.reviews.total_results : "yok"}
          </div>
          <input
            className="form-control form-control-sm bg-secondary text-white wrap-text-area m-1 p-1 "
            id=""
            rows="1"
            placeholder=" Yorum ekleyin..."
          ></input>
        </div>
      </div>
      {/**YORUMLAR */}
      <div className=" ">
        {detail?.reviews?.results?.map((review, index) => (
          <div className="d-flex mt-5 row  ">
            <div className="d-flex col-1">
              <img
                className="rounded-circle"
                width={50}
                height={50}
                src="/default_actor.png"
              />
            </div>
            <div className="d-flex flex-column col-11   ">
              <div className="d-flex justify-content-between text-light fw-bold ">
                <p>{review.author_details?.username}</p>
                <p>
                  <ReviewItem key={review} review={review} />
                </p>
              </div>
              <div>
                <p className="fs-5 text-secondary">{review.content}</p>
              </div>
              <div className="d-flex gap-2">
                <button className="btn d-flex fs-4 align-items-center gap-1  ">
                  <FaFire />
                  <span>2</span>
                </button>
                <button className="btn d-flex fs-4 align-items-center gap-1  ">
                  <TiArrowBackOutline /> Cevapla
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Comment;
