import React from "react";
import styles from "./Button.module.scss";

export default function Button() {
  return (
    <div>
      <a className={styles.button} href="">
        I'm a Styled JSX Button
      </a>
      <style jsx>{`
        .button {
          border: 1px solid #ccc;
        }
      `}
      </style>
      <style global jsx>{`
        h1 {
          color: orange;
        }
      `}  
      </style>
    </div>
  );
}
