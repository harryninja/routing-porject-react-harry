import React from "react";

function Home() {
  return (
    <div>
      <h1 className="bg-dark text-white p-3">Home</h1>
      <div className="row mt-5">
        <div className="col-md-6">
          <img
            src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            width="800"
          />
        </div>
        <div className="col-md-6">
          <p className="mt-5">
            Dolore est minim aliqua proident fugiat nisi irure. Elit occaecat
            tempor aliquip pariatur tempor minim tempor. Aliqua ex minim duis
            culpa eu est excepteur ut pariatur et aliqua nisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
