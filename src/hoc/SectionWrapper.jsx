//TODO: inderstending this this hoc
import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motions";
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amound: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
