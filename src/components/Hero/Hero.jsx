import React, { useEffect, useRef } from "react";
import "./Hero.css";
import ImgBackground from "../../assets/background.jpg";
import ImgFolha from "../../assets/folha-bg.png";
import ImgMontanha from "../../assets/montanha.png";
import ImgSamurai from "../../assets/samurai.png";
import ImgGithub from "../../assets/github.png";
import ImgLinkdin from "../../assets/linkdin.png";
import ImgWhatzap from "../../assets/whatzap.png";

function Hero(props) {

  useEffect(() => {
    const element = document.querySelectorAll(".parallax");

    element.forEach((el) => {
      let distance = parseFloat(el.dataset.distance);
      let duration = parseFloat(el.dataset.duration);
      const styles = window.getComputedStyle(el);
      const valorTop = parseFloat(styles.getPropertyValue("top"));

      let tl = gsap.timeline();
      tl.fromTo(
        el,
        {
          top: distance,
        },
        {
          top: valorTop,
          duration: duration
        }
      );
    });
  });

  useEffect(() => {
    const parallax = document.querySelectorAll(".parallax");

    const handleMouseMove = (event) => {
      let xValue = event.clientX - window.innerWidth / 2;
      let yValue = event.clientY - window.innerHeight / 2;

      parallax.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;

        el.style.transform = `translateX(calc(-50% + ${
          -xValue * speedx
        }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="container-hero">
      <div className="vignette"></div>
      <img
        src={ImgSamurai}
        alt="samurai"
        className="parallax samurai"
        data-speedx="0.144"
        data-speedy="0.1"
        data-distance="2450"
        data-duration="2.3"
      />
      <div
        className="parallax title-hero"
        data-speedx="0.07"
        data-speedy="0.04"
        data-distance="-200"
        data-duration="2.3"
      >
        <h1>Allan Takeuchi</h1>
        <p>web & mobile developer</p>
        <div className="social-midia">
          <img src={ImgGithub} />
          <img src={ImgWhatzap} />
          <img src={ImgLinkdin} />
        </div>
      </div>
      <img
        src={ImgFolha}
        alt="folha"
        className="parallax folha"
        data-speedx="0.166"
        data-speedy="0.144"
        data-distance="2450"
        data-duration="2.4"
      />
      <img
        src={ImgMontanha}
        alt="montanha"
        className="parallax montanha"
        data-speedx="0.22"
        data-speedy="0.189"
        data-distance="1500"
        data-duration="1.8"
      />
      <img
        src={ImgBackground}
        alt="background"
        className="parallax bg-img"
        data-speedx="0.3"
        data-speedy="0.24"
        data-distance="-300"
        data-duration="2.3"
      />
    </section>
  );
}

export default Hero;
