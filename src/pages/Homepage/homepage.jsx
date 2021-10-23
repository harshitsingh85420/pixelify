import { HeaderTitle, HeroImage, HomepageContainer } from "./homepage.styles";
import lockIcon from "../../assets/lockIcon.svg";
import { useRef } from "react";
import MenuSection from "../../components/menuSection/menuSection";

const Homepage = () => {
  // refs
  const heroImageRef = useRef();

  // animation variants
  const titleVariants = {
    visible: {
      y: 0,
      transition: {
        duration: 2,
        delay: 1,
        type: "spring",
        dapming: 2,
        bounce: 0.5,
      },
    },
    hidden: {
      y: "60vh",
    },
  };
  const heroImageVariants = {
    visible: {
      y: "-350%",
      scale: "1500%",
      opacity: 0,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
    hidden: {
      y: "-10",
      scale: "100%",
      opacity: 1,
      display: "all",
    },
  };

  return (
    <HomepageContainer>
      {/* <HeroImage
        ref={heroImageRef}
        variants={heroImageVariants}
        initial="hidden"
        animate="visible"
        src={lockIcon}
        onAnimationComplete={() => {
          // removing the component from dom.. once the animation is finished
          heroImageRef.current.remove();
        }}
      />
      <HeaderTitle variants={titleVariants} initial="hidden" animate="visible">
        Pixelify
      </HeaderTitle> */}
      <MenuSection />
    </HomepageContainer>
  );
};

export default Homepage;
