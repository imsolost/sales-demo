import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap');
@font-face {
        font-family: "Helvetica";
        src: url("/public/Helvetica.ttf");
        font-weight: 400;
      }
@font-face {
        font-family: "Helvetica";
        src: url("/public/Helvetica-Bold.ttf");
        font-weight: 700;
      }

    body {
      margin: 0; line-height: normal;
    }
`;
