import React from "react";

export default function AnotherStyledButton() {
  return (
    <>
      <a href="#">
        I'm Another Styled JSX Button
      </a>
      <style jsx>{`
        a {
          border: 2px solid brown;
          padding: 15px;
        }
      `}
      </style>
      <style global jsx>{`
        h2 {
          color: #444;
        }
      `}  
      </style>
    </>
  );
}
