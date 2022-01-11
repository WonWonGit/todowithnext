import css from "styled-jsx/css";

export const paginationStyle = css`
/*************하단 페이지넘버 내비게이션**************/
.page-no {width : 30%;margin: 0 auto;}
.page-no-wrap {display : flex; justify-content : space-evenly;}
.page-no-wrap .page-no-a {width : 30px; height : 30px; display : flex; justify-content: center; align-items: center;}
.page-no-wrap .page-no-a span {width : 100%; height : 100%; text-align: center; line-height: 30px;}
.page-no-wrap .page-no-a:hover span {background-color : #f3f3f3; border-radius : 50%;}
.page-no-wrap .page-no-a.active span {background-color : #040848; border-radius : 50%; color : #fff;}
.page-no-wrap .page-no-a:hover svg path {fill : #8E805B}
`