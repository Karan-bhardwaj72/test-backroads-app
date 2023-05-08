import React from "react";
import { serviceList } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {serviceList.map((article) => {
          return (
            <article className="service" key={article.id}>
            <span className="service-icon">
              <i className={article.icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{article.title}</h4>
              <p className="service-text">{article.des}</p>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
