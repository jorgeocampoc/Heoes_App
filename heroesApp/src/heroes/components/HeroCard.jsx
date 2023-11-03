import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imgSrc = `../../../assets/heroes/${id}.jpg`;
  return (
    <>
    {/* aniamcion fadeIn  */}
      <div className="rounded  animate__animated animate__fadeIn">
        <div className="card">
          <div className="row no gutters">
            <div className="col-4 m-1">
              <img src={imgSrc} alt="" className="card-img w-100 h-100" />
            </div>
            <div className="col-7">
              <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{characters}</p>
                <p className="card-text">
                  <small>{first_appearance}</small>
                </p>
                <Link to={`/hero/${id}`} className="btn btn-secondary">
                  More...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
