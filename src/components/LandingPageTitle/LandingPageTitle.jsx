import LoginButton from "../Login/LoginButton/LoginButton";
import "./landingPageTitle.css";

const LandingPageTitle = () => {
  return (
    <>
      <LoginButton />
      <div className="main-title-container">
        <div className="main-title">
          <img
            src="../../public/assets/LandingPageTitle/title-logos/title-logo3.png"
            alt="main-logo-for-the-title"
            id="title-logo"
          />
        </div>
        <img
          src="../../public/assets/LandingPageTitle/gaussian-effect-for-tittle.png"
          alt="gaussian-effect-for-tittle"
          id="bg-tittle"
        />
        <div className="title-holder"></div>
      </div>
    </>
  );
};

export default LandingPageTitle;
