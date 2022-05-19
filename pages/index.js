import Hero from "../Components/sections/Hero";
import LandingLayout from "../Components/layouts/LandingLayout";


export default function Landing() {
  return (<>
    <LandingLayout>
      <Hero
        title="Store your passwords very safe on blockchain"
        subtitle="This is the first password manager based on web 3.0 and blockchain"
        image="https://i.ibb.co/52sVVCF/app.jpg"
        ctaText="open app"
        ctaLink="/application"
      />
    </LandingLayout>
  </>);
}