import React from "react";
import "./competences.css";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiMaterialui,
  SiCss3,
  SiReact,
  SiGraphql,
  SiHasura,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineAntDesign } from "react-icons/ai";

const Competences = () => {
  return (
    <section id="competences">
      <h2>Mes compétences techniques</h2>

      <div className="container container_competences">
        <div className="experience_frontend">
          <h3>Front End</h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoLogoJavascript className="logo_style"></IoLogoJavascript>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Expérimenté</small>
              </div>
            </article>

            <article className="experience_details">
              <SiReact className="logo_style"></SiReact>
              <div>
                <h4>React</h4>
                <small className="text-light">Expérimenté</small>
              </div>
            </article>

            <article className="experience_details">
              <FaHtml5 className="logo_style"></FaHtml5>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Expérimenté</small>
              </div>
            </article>

            <article className="experience_details">
              <SiCss3 className="logo_style"></SiCss3>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>

            <article className="experience_details">
              <SiMaterialui className="logo_style"></SiMaterialui>
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>

            <article className="experience_details">
              <AiOutlineAntDesign className="logo_style"></AiOutlineAntDesign>
              <div>
                <h4>Ant Design</h4>
                <small className="text-light">Débutant</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Back End</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiGraphql className="logo_style"></SiGraphql>
              <div>
                <h4>GraphQL</h4>
                <small className="text-light">Expérimenté</small>
              </div>
            </article>

            <article className="experience_details">
              <SiHasura className="logo_style"></SiHasura>
              <div>
                <h4>Hasura</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>

            <article className="experience_details">
              <SiPostgresql className="logo_style"></SiPostgresql>
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>

            <article className="experience_details">
              <FaNodeJs className="logo_style"></FaNodeJs>
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>

            <article className="experience_details">
              <SiExpress className="logo_style"></SiExpress>
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;
