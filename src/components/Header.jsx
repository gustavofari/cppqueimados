import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Header.css";
import LogoVisao from "../assets/images/visao_logo-2.png";

const Header = () => {
  const headerControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const animateHeader = async () => {
      await headerControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      });

      // Animar os textos após a animação do cabeçalho
      textControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, staggerChildren: 0.4 },
      });
    };

    animateHeader();
  }, [headerControls, textControls]);

  return (
    <motion.div
      className="Header"
      initial={{ opacity: 0, x: -30 }}
      animate={headerControls}
    >
      <motion.div
        className="Navbar"
        initial={{ opacity: 0, x: -20 }}
        animate={textControls}
      >
        <img src={LogoVisao} alt="" className="logo" />
        <motion.ul>
          <motion.li className="menu-navbar">
            <a>SOBRE NÓS</a>
          </motion.li>
          <motion.li className="menu-navbar">
            <a>SOBRE O CURSO</a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Header;
