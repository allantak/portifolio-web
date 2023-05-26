import React, { useEffect, useRef } from "react";
import "./Hero.css";
import ImgBackground from "../../assets/background.jpg";
import ImgFolha from "../../assets/folha-bg.png";
import ImgMontanha from "../../assets/montanha.png";
import ImgSamurai from "../../assets/samurai.png";
import ImgGithub from "../../assets/github.png";
import ImgLinkdin from "../../assets/linkdin.png";
import ImgWhatzap from "../../assets/whatzap.png";
import { gsap } from "gsap/all";
import { Power1, Power3, Power4 } from "gsap";
import { TimelineMax } from "gsap/gsap-core";

function Hero(props) {
  useEffect(() => {
    const element = document.querySelectorAll(".parallax");
    let tl = gsap.timeline();

    Array.from(element)
      .filter((e) => !e.classList.contains("title-hero") || !e.classList.contains("folha") )
      .forEach((el) => {
        let distance = parseFloat(el.dataset.distance);
        let duration = parseFloat(el.dataset.duration);
        const styles = window.getComputedStyle(el);
        const valorTop = parseFloat(styles.getPropertyValue("top"));

        tl.fromTo(
          el,
          {
            top: distance,
          },
          {
            top: valorTop,
            duration: duration,
            ease: Power3.easeOut,
          },
          ".1"
        );
      });

    animateElement(".title-hero h1");
    animateElement(".title-hero p");

    gsap.fromTo(
      ".vignette",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      },
      "2"
    );

    gsap.fromTo(
      ".social-midia",
      {
        opacity: 0,
        y: 20,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      },
      "3"
    );  

    const folha = document.querySelector('.folha');
    const styleFolha = window.getComputedStyle(folha);
    const valorTopfolha = parseFloat(styleFolha.getPropertyValue("top"));
    const valorRightfolha = parseFloat(styleFolha.getPropertyValue("left"));

    gsap.fromTo(
      ".folha",
      {
        top: 260,
        left: 2300,
        opacity: 0,
      },
      {
        top: valorTopfolha,
        left: valorRightfolha,
        opacity: 1,
        duration: 1.5,
        ease: Power2.easeInOut
      },
      "3"
    );
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

  function animateElement(selector) {
    const element = document.querySelector(selector);
    const style = window.getComputedStyle(element);
    const valorTop = parseFloat(style.getPropertyValue("top"));

    gsap.fromTo(
      selector,
      {
        opacity: 0,
        y: selector === ".title-hero h1" ? -40 : 40,
      },
      {
        opacity: 1,
        y: valorTop,
        duration: 1.5,
				ease: Power1.easeOut
      },
      "1.8"
    );
  }

  return (
    <section className="container-hero">
      <div className="vignette"></div>
      <img
        src={ImgSamurai}
        alt="samurai"
        className="parallax samurai"
        data-speedx="0.144"
        data-speedy="0.1"
        data-distance="1500"
        data-duration="3.2"
      />
      <div
        className="parallax title-hero"
        data-speedx="0.07"
        data-speedy="0.04"
        data-duration="3"
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
        data-distance="1500"
        data-duration="3"
      />
      <img
        src={ImgMontanha}
        alt="montanha"
        className="parallax montanha"
        data-speedx="0.22"
        data-speedy="0.189"
        data-distance="1500"
        data-duration="2.5"
      />
      <img
        src={ImgBackground}
        alt="background"
        className="parallax bg-img"
        data-speedx="0.3"
        data-speedy="0.24"
        data-distance="1200"
        data-duration="3.3"
      />
    </section>
  );
}

export default Hero;
