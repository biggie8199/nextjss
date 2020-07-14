import React from "react";

export default function Button() {
  return (
    <>
      <a href="#">
        I'm a Styled JSX Button
      </a>
      <style jsx>{`
        a {
          border: 2px solid hotpink;
        }
      `}
      </style>
      <style global jsx>{`
        h1 {
          color: #3f3f3f;
        }
      `}  
      </style>
    </>
  );
}
