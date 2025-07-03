import Hero from "../components/About/Hero";
import AboutSection from "../components/About/AboutSection";
import banner from "../images/logo/hero-banner.svg";
import { Helmet } from "react-helmet-async";
import { TeamContext } from "../components/About/team";

function About() {
  return (
    <TeamContext.Provider >
    <div>
      <Helmet>
        <title>About Best Point Savings & Loans – Licensed Financial Institution in Ghana</title>
        <meta
          name="description"
          content="Learn about Best Point’s mission, values, leadership, and regulatory licensing as a trusted Ghanaian savings and loans company."
        />
      </Helmet>

      <Hero image={banner} text1={"about us"} />
      <AboutSection />
    </div>
    </TeamContext.Provider>
  );
}

export default About;
