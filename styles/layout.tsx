import css from "styled-jsx/css";

export const layout = css.global`

body {background-color : #f0f0f0;}

/********COMMON STYLE********/
.ll:before{ display: inline-block; content: ''; clear: both; margin-right: 8px; width: 1px; height: 12px; background-color: rgba(255,255,255,.4);}

.wrap{ position: relative; overflow: hidden;}
.main{ background: #f3f3f3;}
.header{overflow: hidden;width: 100%; margin: 0 auto;}
.header .header-top{ border-bottom: 1px solid rgba(196,196,196,.4);}
.header .header-top .userInfo{ margin: 0 auto; display: flex; align-items: center; justify-content: flex-end; max-width: 1400px; padding:10px 0;}
.header .header-top .userInfo ul{ display: flex; align-items: center; justify-content: center;}
.header .header-top .userInfo a{padding: 0 15px;}
.header .header-top .userInfo ul li{ font-size: 13px; color: #000; opacity: .6;}
.header .header-top .userInfo ul li:nth-child(2):before {display: inline-block; content: ""; clear: both;width: 1px;height: 10px; background-color: #c4c4c4;}
.header .header-bottom{ border-bottom: 1px solid rgba(196,196,196,.2);}
.header .header-bottom .inner{ position: relative;  max-width: 1400px; height: 98px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between;}
.header .header-bottom .logo a {width: 355px; height: 55px;  display: block;}
.header .header-bottom nav{ }
.header .header-bottom nav .nav-menu{ display: flex; align-items: center;}
.header .header-bottom nav .nav-menu li{position: relative; margin: 0 35px;}
.header .header-bottom nav .nav-menu li.last {padding: 0 15px; margin: 0 0 0 35px;}
.header .header-bottom nav .nav-menu li a{ font-size: 17px; font-weight: 400;}
.header .nav-menu li.active a, .header .nav-menu li:hover a{ color: #F2C551;}
.header .nav-menu li.active:before { position: absolute; left: 50%; top: -12px; display: block; content: ''; clear: both; width: 8px; height: 8px; border-radius: 50%; background-color: #F2C551;}
        
/*********  공통 어드민 레이아웃 *********/

.wrap__adm-cont {width : 100%; background-color : #fff; padding : 50px; border-radius : 20px; box-sizing : border-box;}

.wrap__adm-cont .inner__adm-cont {width : 100%;  margin : 0 auto; background-color :#fff; border-radius : 20px;}


.wrap__adm-cont .adm-cont-titl {max-width: 1220px; margin: 0 auto; padding-bottom: 20px; border-bottom: 1px solid #8d8ec4; font-size: 19px; font-weight: 700; display: flex; justify-content: space-between;}
.wrap__adm-cont .adm-cont-titl h1 {display : inline-block; line-height: 40px; color : #040848; font-weight : 700;}
.wrap__adm-cont .adm-cont-titl .btn-wr {background-color : #242479; border : 1px solid #242479;}
.adm-cont {width: 100%; max-width: 1220px; margin: 0 auto;}
.wrap__adm-cont .inner__adm-cont .filter-bar__admin .filter-right ul li .wrap__input .input-lbl-hide {display: flex; justify-content: space-between;}

/***************************************  어드민 서브컨테이너  ******************************************/


.sub-container {}
.sub-container .sub-banner .inner { max-width: 1400px; height: 100%; display: flex; flex-direction: column; justify-content: center; margin: 0 auto;  text-align: center;}
.sub-container .sub-banner .inner h3 { font-size: 55px; font-weight: 200; margin-bottom: 25px;}
.sub-container .sub-banner .inner div{ font-size: 20px; font-weight: 300;}
.sub-container .sub-wrap {width:100%; position: relative;padding: 70px 0 160px 0; min-height: 500px;}
.sub-container .sub-inner {max-width: 1400px;  margin: 0 auto;}

/*********   공통 어드민 테이블 페이지네이션   *********/

.wrap__adm-cont .inner__adm-cont .page-no {margin-top : 50px;}
.wrap__adm-cont .inner__adm-cont .page-no .page-no-wrap a.active span {background-color : #040848;}

`

