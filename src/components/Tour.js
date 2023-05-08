import React from "react";
import { tourList } from "../data";
const Tour = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
      {tourList.map((links) => {
        return (
          <article className="tour-card">
          <div className="tour-img-container">
            <img src={links.img} className="tour-img" alt={links.title} />
            <p className="tour-date">{links.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{links.title}</h4>
            </div>
            <p>{links.des}</p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                {links.country}
              </p>
              <p>{links.days}</p>
              <p>{links.package}</p>
            </div>
          </div>
        </article>
        );
      })};
      </div>
    </section>
  );
};

export default Tour;
