import { Button } from "../../GlobalStyles";
import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroTitleText,
  HeroSubTitle,
  HeroText,
  HeroBtn,
} from "./Hero.styles";

const Hero = () => {
  return (
    <div>
      <HeroContainer>
        <HeroContent>
          <HeroContentText>
            {/* <HeroTitle>
              <HeroTitleText>MAKE EASY</HeroTitleText>
              <HeroTitleText>Get your services</HeroTitleText>
            </HeroTitle>
            <HeroSubTitle>For a longer Life</HeroSubTitle> */}
            <HeroText>
              <br />
              Get a service within seconds, just by using your phone.
            </HeroText>
            <HeroBtn to="/services">
              <Button primary big bigFont bigRadius>
                Book a service
              </Button>
            </HeroBtn>
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Hero;
