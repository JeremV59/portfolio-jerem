import React, { useRef } from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsMessenger } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_he8vmtv",
      "template_9at0bfn",
      form.current,
      "aR-QUbCW3OiS5MmMb"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Si vous avez besoin de moi</h5>
      <h2>Contactez-moi</h2>

      <div className="container container_contact">
        <div className="container_contact_options">
          <article className="contact_option">
            <MdEmail className="contact_option_icon"></MdEmail>
            <h4>Email</h4>
            <h5>jeremy.vaneste@free.fr</h5>
            <a href="mailto:jeremy.vaneste@free.fr" target="_blank">
              Envoyer un message
            </a>
          </article>

          <article className="contact_option">
            <BsLinkedin className="contact_option_icon"></BsLinkedin>
            <h4>LinkedIn</h4>
            <h5>Jérémy Vaneste</h5>
            <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-vaneste-78a84b22b/">
              Envoyer un message
            </a>
          </article>

          <article className="contact_option">
            <BsMessenger className="contact_option_icon"></BsMessenger>
            <h4>Messenger</h4>
            <h5>JeremyDev</h5>
            <a href="mailto:jeremy.vaneste@free.fr">Envoyer un message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            name="nometprenom"
            placeholder="Nom et prénom"
            type="text"
            required
          ></input>
          <input
            required
            name="email"
            placeholder="Adresse e-mail"
            type="email"
          ></input>
          <textarea
            name="message"
            rows="7"
            placeholder="Votre message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
