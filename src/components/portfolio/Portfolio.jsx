import React from "react";
import "./portfolio.css";
import LneImage from "../../assets/LNE.png";
import TodoImage from "../../assets/todo.png";

const projets = [
  {
    id: 1,
    title: "Le Nouvel Ecuyer",
    description: "Application React réalisé durant mon année d'alternance",
    project_image: LneImage,
    github_link: null,
    demo_project_link: null,
  },

  {
    id: 2,
    title: "Todo List",
    description: "Liste de tâches effectué durant un exercice de formation",
    project_image: TodoImage,
    github_link: null,
    demo_project_link: null,
  },

  {
    id: 3,
    title: "Le Nouvel Ecuyer",
    description: "Application React réalisé durant mon année d'alternance",
    project_image: LneImage,
    github_link: null,
    demo_project_link: null,
  },

  {
    id: 4,
    title: "Le Nouvel Ecuyer",
    description: "Application React réalisé durant mon année d'alternance",
    project_image: LneImage,
    github_link: null,
    demo_project_link: null,
  },

  {
    id: 5,
    title: "Le Nouvel Ecuyer",
    description: "Application React réalisé durant mon année d'alternance",
    project_image: LneImage,
    github_link: null,
    demo_project_link: null,
  },

  {
    id: 6,
    title: "Le Nouvel Ecuyer",
    description: "Application React réalisé durant mon année d'alternance",
    project_image: LneImage,
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
