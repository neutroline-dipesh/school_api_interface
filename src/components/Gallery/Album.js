import React, { Component } from "react";
import "./Album.css";
import { Link } from "react-router-dom";

class Album extends Component {
  render() {
    return (
      <div className="Album">
        <div className="container my-4 text-center">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="Album-cover">
                <Link to={"/gallery/photos"}>
                  <img src="https://source.unsplash.com/2ShvY8Lf6l0/800x599" />
                </Link>
              </div>
              <div className="Album-title m-2">
                <h5 className="Album-heading">Album title 1</h5>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="Album-cover">
                <Link to={"/gallery/photos"}>
                  <img src="https://source.unsplash.com/Dm-qxdynoEc/800x799" />
                </Link>
              </div>
              <div className="Album-title m-2">
                <h5 className="Album-heading">Album title 2</h5>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="Album-cover">
                <Link to={"/gallery/photos"}>
                  <img src="https://source.unsplash.com/qDkso9nvCg0/600x799" />
                </Link>
              </div>
              <div className="Album-title m-2">
                <h5 className="Album-heading">Album title 3</h5>
              </div>
            </div>
            <div className=" col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="Album-cover">
                <Link to={"/gallery/photos"}>
                  <img src="https://source.unsplash.com/iecJiKe_RNg/600x799" />
                </Link>
              </div>
              <div className="Album-title m-2">
                <h5 className="Album-heading">Album title 4</h5>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="Album-cover">
                <Link to={"/gallery/photos"}>
                  <img src="https://source.unsplash.com/NQSWvyVRIJk/800x599" />
                </Link>
              </div>
              <div className="Album-title m-2">
                <h5 className="Album-heading">Album title 5</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;