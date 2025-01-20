import React from "react";
import "./NossaHistoria.css";
import Banner from "../imgs/banner-historia.jpg";

const NossaHistoria = () => {
  return (
    <>
    <section id="nossa-historia" className="nossa-historia">
      <div className="banner">
        <div className="overlay">
          <h1>Nossa história</h1>
        </div>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
          amet volutpat mauris. Sed vel faucibus turpis. Curabitur est velit,
          facilisis id tristique accumsan, vulputate sit amet enim.
        </p>
        <div className="imagem-container">
          <img src={Banner} alt="Imagem de uma quadra com bola de futebol" className="imagem" />
        </div>
        <p>
          Sem condimentum nec. Sed tristique orci orci, eu finibus lorem
          consequat ac. Maecenas ac augue pretium, faucibus ex quis, scelerisque
          sapien.
        </p>
        <p>
          Proin pretium sapien vel diam porttitor, vel congue eros dignissim.
          Duis sed urna ultrices tortor porttitor accumsan.
        </p>
      </div>
    </section>
    </>
  );
};

export default NossaHistoria;
