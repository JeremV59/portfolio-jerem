import React from "react";
import "./portfolio.css";
import LneImage from "../../assets/LNE.png";
import TodoImage from "../../assets/todolist.png";
import QuizzImage from "../../assets/quizz.png";
import CocktailImage from "../../assets/cocktail.png";
import BlogImage from "../../assets/blog.png";

const projets = [
  {
    id: 1,
    title: "Todo List App",
    project_image: TodoImage,
    github_link: null,
    demo_project_link: null,
  },

  {
    id: 2,
    title: "Cocktail App",
    project_image: CocktailImage,
    github_link: null,
    demo_project_link: null,
  },

  {
    id: 3,
    title: "Blog App",
    project_image: BlogImage,
    github_link: null,
    demo_project_link: null,
  },

  {
    id: 4,
    title: "Quizz App",
    project_image: QuizzImage,
    github_link: null,
    demo_project_link: null,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes projets réalisés</h5>
      <h2>Portfolio</h2>

      <div className="container container_portfolio">
        {projets.map((projet) => {
          return (
            <article key={projet.id} className="portfolio_item">
              <div className="div portfolio_item_image">
                <img src={projet.project_image} alt=""></img>
              </div>
              <h3> {projet.title} </h3>
              <div className="portfolio_item_btnGroup">
                <a href={projet.github_link} target="_blank" className="btn">
                  GitHub
                </a>
                <a
                  href={projet.demo_project_link}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Demo Projet
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
