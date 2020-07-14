import React from "react";

export default function Button() {
  return (
    <div>
      <a className={'button'} href="#">
        I'm a Styled JSX Button
      </a>
      <style jsx>{`
        .button {
          border: 2px solid hotpink;
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
