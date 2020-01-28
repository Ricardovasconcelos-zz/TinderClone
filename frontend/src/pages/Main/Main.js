import React from "react";
import "./Main.css";

import logo from "../../assets/logo.png";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} className="logo" alt="Tinder" />
      <ul>
        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt="photo"
          />
          <footer>
            <strong>Diego Schell</strong>
            <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de
              desenvolvimento web e
              mobile.dassssssssssssssssssssssssssssssssssssssssssasdasdasdasdsadasdasdasdasdasdasdasdasdasdsssssssssssssss
            </p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>
        </li>

        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt="photo"
          />
          <footer>
            <strong>Diego Schell</strong>
            <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de
              desenvolvimento web e mobile.
            </p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt="photo"
          />
          <footer>
            <strong>Diego Schell</strong>
            <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de
              desenvolvimento web e mobile.
            </p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt="photo"
          />
          <footer>
            <strong>Diego Schell</strong>
            <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de
              desenvolvimento web e mobile.
            </p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
