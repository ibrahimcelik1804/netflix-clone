import React from "react";

const Loading = () => {
  return (
    <>
      <p
        style={{ height: "200px" }}
        className="placeholder-glow col-md-6 d-flex flex-column align-items-center justify-content-center gap-3 "
      >
        <span className="placeholder w-50 placeholder-glow"></span>
        <span className="placeholder w-100 placeholder-glow"></span>
        <span className="placeholder w-100 placeholder-glow"></span>
        <div className="d-flex w-100 gap-2 justify-content-center">
          <span className="placeholder w-25 placeholder-glow"></span>
          <span className="placeholder w-25 placeholder-glow"></span>
        </div>
      </p>
      <span
        style={{ height: "300px" }}
        className="placeholder rounded col-md-6 placeholder-wave"
      >
       
    
      </span>
    </>
  );
};

export default Loading;
