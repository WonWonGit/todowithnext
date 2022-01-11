import css from "styled-jsx/css";

export const headerStyle = css`
.header.adm-header {background-color : #040848; overflow :visible;}
.header.adm-header .userInfo ul li a {color : #fff;}

.header.adm-header .header-bottom .logo img {max-height : 100%;}
.header.adm-header .header-bottom nav .nav-menu li a {color : #fff;}
.header.adm-header .nav-menu > li:before {position: absolute; left: 50%; top : 88%; transform : translateX(-50%); display: block; content: ''; clear: both; width : 100%; height : 1px; background-color: #F2C551; opacity : 0;}
.header.adm-header .nav-menu > li.active:before {opacity :1;}
.header.adm-header .nav-menu > li:hover:before {opacity : 1;}

.header.adm-header .header-bottom nav .nav-menu > li {position : relative; margin : 0 12px; padding: 10px 16px;}

.header.adm-header .header-bottom nav .nav-menu > li:hover .nav-sub-menu {display : block;}
.header.adm-header .header-bottom nav .nav-menu li .nav-sub-menu {position : absolute; background-color : #040848; z-index : 99999; left : 50%; top : 98%; transform : translateX(-50%); display : none;}
.header.adm-header .header-bottom nav .nav-menu li .nav-sub-menu li {margin : 0;}
.header.adm-header .header-bottom nav .nav-menu li .nav-sub-menu li:hover {background-color : #242479;}
.header.adm-header .header-bottom nav .nav-menu li .nav-sub-menu li a {display : inline-block; padding: 6px 24px; font-size: 15px;}
`