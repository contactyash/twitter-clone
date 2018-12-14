import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
}
  body{
    font-family: "Segoe UI","Open Sans", sans-serif;
    background-color:${props => props.theme.bg};
    text-align:center;
    box-sizing:border-box;
    color: ${props => props.theme.generalTextColor};
    margin:0;
    padding:0;
    font-size:15px;
  }
  .paragraph-span,b {
   color: ${props => props.theme.blackColor};
  text-align:left;
  font-size:14px;
  }
  p {
   margin:0;
  }
  a {
    text-decoration:none;
    color: dodgerblue;
  }

  li {
    list-style:none;
  }
  ul {
    padding:0;
    margin:0;
  }
  svg {
    height: 25px;
    width: 25px;
    padding: 8px;
  }
  .fill {
    fill:dodgerblue;
  }
.aspect-ratio-outer {
position: relative;
    background-color: #eee;
    max-height: 200px;
  }
  .aspect-ratio-outer:before {
    display: block;
    content: "";
    width: 100%;
    padding-bottom: 33.33%;
  }
  .aspect-ratio-inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

`;
export default GlobalStyle;
