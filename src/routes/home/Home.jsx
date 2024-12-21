import LandingPageTitle from "../../components/LandingPageTitle/LandingPageTitle";
import FloatingWelcomeText from "../../components/FloatingWelcomeText/FloatingWelcomeText";

import "./home.css";

export default function Home() {
  return (
    <>
      <section className="welcome-section">
        <LandingPageTitle />
        <FloatingWelcomeText />
      </section>
    </>
  );
}
