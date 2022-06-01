import React from "react";

export default function NewsIntro(props) {
  return (
    <section className="article_intro_container">
      <div className="news_intro_overlay"></div>
      <div className="news_intro_content">
        <h1 data-aos="fade-up" data-aos-delay="200">
          {props.title}
        </h1>
      </div>
    </section>
  );
}
