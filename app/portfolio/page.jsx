import { HyperText } from "@/components";
import joinCss from "@/scripts/joinCss";
import React from "react";
import styles from "./page.module.css";

const Portfolio = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <HyperText
        className={joinCss(
          styles.hyperText,
          "text-black text-center text-xl font-bold uppercase"
        )}
        text={"Nguyen Huynh Tat Dat"}
      />
    </div>
  );
};

export default Portfolio;
