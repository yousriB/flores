import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  About,
  Product,
  Contact,
  Testemonial,
  Footer,
} from "./components";
import "./assets/prod1.png";

const App = () => {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div>
        <Navbar />
      </div>

      <div className={`bg-black ${styles.flexStart} `}>
        <div className="w-full">
          <Hero />
        </div>
      </div>

      <div className={`bg-[#F3F4F6] ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Product />
          <Testemonial />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
