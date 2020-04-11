import React from "react";
// import "../../../assets/stylesheets/about.scss"

const About = () => {
  const SheaHannah = "https://findpeacebucket.s3.amazonaws.com/SheaHannah.jpg";
  const StRemySonia =
    "https://findpeacebucket.s3.amazonaws.com/StRemySonia.jpg";
  const KeranoraKrisi =
    "https://findpeacebucket.s3.amazonaws.com/KeranoraKrisi.jpg";
  const FavardTristan =
    "https://findpeacebucket.s3.amazonaws.com/FavardTristan.jpg";
  const github = "https://findpeacebucket.s3.amazonaws.com/github.jpeg";
  const linkedin = "https://findpeacebucket.s3.amazonaws.com/linkedin.png";
  const about =
    "https://findpeacebucket.s3.amazonaws.com/about-us-banner-plain.png";
  console.log(SheaHannah);
  return (
    <>
      {/* <div className="banner"></div> */}
      <img src={about} alt="about" className="about-us-banner" />
      <div>
        <p className="about-quote">
          "It doesn't take a lot of strength to hang on. It takes a lot of
          strength to let go."
          <p>-J.C. Watts</p>
        </p>
      </div>
      <div className="flex-picture-names">
        <div className="profile-block">
          <p className="names">Hannah Shea</p>
          <img src={SheaHannah} alt="Hannah" className="about-image" />
          <div className="inner-flex">
            <a href="https://github.com/hbshea" target="_blank">
              <img src={github} alt="github" className="github-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/hannah-shea-aba22b31/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" className="linkedin-logo" />
            </a>
          </div>
        </div>
        <div className="profile-block">
          <p className="names">Sonia St. Remy</p>
          <img src={StRemySonia} alt="Sonia" className="about-image" />
          <div className="inner-flex">
            <a href="https://github.com/stremysonia" target="_blank">
              <img src={github} alt="github" className="github-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/sonia-st-remy/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" className="linkedin-logo" />
            </a>
          </div>
        </div>
        <div className="profile-block">
          <p className="names">Krisi Keranova</p>
          <img src={KeranoraKrisi} alt="Krisi" className="about-image" />
          <div className="inner-flex">
            <a href="https://github.com/krisike" target="_blank">
              <img src={github} alt="github" className="github-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/krisi-keranova-9bbba819/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" className="linkedin-logo" />
            </a>
          </div>
        </div>
        <div className="profile-block">
          <p className="names">Tristan Favard</p>
          <img src={FavardTristan} alt="Tristan" className="about-image" />
          <div className="inner-flex">
            <a href="https://github.com/trsif" target="_blank">
              <img src={github} alt="github" className="github-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/tristan-favard-798453107/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" className="linkedin-logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default () => <About />;
