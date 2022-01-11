import css from "styled-jsx/css";


export const reset = css.global`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
line-height: 1.75;
font-size: 100%;
letter-spacing: -1px;
word-break: keep-all;
vertical-align: baseline;
text-decoration: none;
font-style:normal; font-weight:normal;
}


/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section,address,caption,cite,code,dfn,em,var {
display: block;
}
body {
line-height: 1.5;
font-size: 14px; font-weight: normal;
}
body ::-moz-selection {background: #F2C551;  color: #fff}
body ::selection {background: #F2C551;color: #fff}

ol, ul, li {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
img{max-width: 100%;}
a{color: #333;}



input[type="number"]::-webkit-inner-spin-button, 
input[type="number"]::-webkit-outer-spin-button {height: auto;}

button[type="button"], [type="reset"], [type="submit"] {  -webkit-appearance: button;}
input[type="file"]{ position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden;clip: rect(0, 0, 0, 0);border: 0;}
input[type="radio"]{ position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden;clip: rect(0, 0, 0, 0);border: 0;}
input[type="checkbox"]{ position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden;clip: rect(0, 0, 0, 0);border: 0;}

input[type="text"],
input[type="tel"],
input[type="password"],
input[type="email"],
input[type="search"],
textarea { -webkit-border-radius : 0; -webkit-appearance : none;}
input::-webkit-textfield-decoration-container {-webkit-appearance: none;}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration {-webkit-appearance: none; display : none;}



/* 파이어폭스에서의 초기화 방법 */
 input { -moz-appearance: textfield; -webkit-text-size-adjust:none; /*-webkit-appearance: none;*/ -webkit-border-radius: 0;}
 input:focus,extarea:focus {-webkit-text-size-adjust: 100%;}


select{appearance: none;-webkit-appearance: none;-moz-appearance: none;}
select::-ms-expand{ display: none; }
select:active,
select:focus{border: 0; outline: none;}
`