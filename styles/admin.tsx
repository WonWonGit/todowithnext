import css from "styled-jsx/css";

export const admin = css`


/************************** 서브컨테이너 내 공통 input, select 요소 css 가져옴 **********************/ 
/************************** 색상, 높이, 폭 일부 커스텀 **************************/
/********* cmn_input_style폴더 내 html, css 참고 ***********/

/* 공통 select */
.wrap__sel {width : 100%; display: flex; align-items: center; position : relative;}
.wrap__sel label {width : 10%;}
.wrap__sel select {box-sizing : border-box; border : 1px solid #ddd; padding : 0 16px; width : 12%; height : 40px; background : url(../img/dir.png) calc(100% - 10px) center no-repeat; background-size: 8%; border-radius : 8px; background-color: #fff;}
.wrap__sel select.wd-shrt {width : 26%;}
.wrap__sel.sel-lbl-hide label {width: 0; visibility: hidden; font-size: 0; display : inline-block;}


/* 공통 button */
.btn {padding : 6px 12px; background-color : #fff; border : 1px solid #c4c4c4; border-radius : 8px; box-sizing : border-box; cursor : pointer; height: 36px;  vertical-align: middle; width : auto; font-size : 12px;}
.btn.btn-prm {border: 0 none; background-color: #a2a2a2; color: #fff;}
.btn.btn-cxl {border : 1px solid #050404; background-color : #050404; color : #fff; vertical-align: middle;}
.btn.btn-dlt {border: 1px solid #c4c4c4; background-color: #fff; color: #a2a2a2;}



/* 공통 input[type="search"] */
.wrap__input input[type="search"] {background: url(../img/icon_sch_outline-blk.png) calc(100% - 10px) center no-repeat;}
.wrap__input.input-lbl-hide {display: flex; align-items: center; width : 100%;}
.wrap__input.input-lbl-hide label {width: 0; visibility: hidden; font-size: 0;}
.wrap__input.input-lbl-hide input {box-sizing : border-box; padding : 6px 16px; width : 16%; height : 40px; border : 0 none; background-color : #fff; border : 1px solid #ddd; border-radius : 8px;}
.wrap__input.input-lbl-hide input:focus {border : 1px solid #ddd;}
.wrap__input.input-lbl-hide input:focus-visible {background-color : #fff; outline : 0;}


/* 공통 input[type="checkbox"] */
.wrap__chk-dft {position: relative; display: inline-block; padding:10px;}
.wrap__chk-dft label:before {content : url(../img/icon/icon_chk_sq.png); display : inline-block; vertical-align : middle; width : 18px; height : 18px; position : relative;}
.wrap__chk-dft input[type="checkbox"] {box-sizing: border-box; width: 0; height: 0; opacity: 0;}
.wrap__chk-dft input[type="checkbox"]:checked + label:before {content: url('../img/icon/icon_chk_sq_chkd.png'); opacity : 1;}


/* 공통 textarea */
.wrap__input.input-rad textarea.input-txt {resize : none; padding : 6px 16px; box-sizing: border-box; height : 40px; border : 1px solid #ddd; border-radius : 8px;}
.wrap__input.input-rad textarea.input-txt:focus-visible {outline : 0 none;}

/*********   공통 어드민 테이블   *********/

table {width : 100%; table-layout: fixed;}
table thead tr {height : 46px; background-color : #242479; vertical-align : middle; color : #fff; text-align: center;}
table thead tr th {border-right : 1px solid #fff; vertical-align: middle; box-sizing :border-box;}
table thead tr th:last-child {border-right : 0 none;}

table tbody tr {border-bottom : 1px solid #fff; background-color : #F3F3F3;}
table tbody tr:hover {background-color : #b4b5e7;}
.wrap__tbl-row table tbody tr:hover {cursor : pointer;}

table tbody td {text-align : center; height : 46px; vertical-align : middle; border-right : 1px solid #fff; box-sizing: border-box;}
table tbody td:last-child {border-right : 0 none;}
table tbody td.td--left {text-align : left;}
table tbody td.tbl-ellipsis {padding : 0 16px;}

table tbody td.td--left span.secret-icon, span.hide-icon {height : 18px;}

/*********   공통 어드민 테이블 필터바   *********/

.filter-bar__admin {width: 100%; max-width : 1220px; margin: 0 auto; padding: 27px 0; box-sizing: border-box; display: flex; justify-content: space-between;}
.filter-bar__admin .filter-left {width : 49%; display : inline-block;}
.filter-bar__admin .filter-right {width : 49%; display : inline-block;}

.filter-bar__admin > div ul {width : 100%; display : flex;}
.filter-bar__admin > div ul li {width : 100%;}
.filter-bar__admin > div ul li button {height : 40px; box-sizing : border-box; vertical-align : middle;}

.filter-bar__admin .filter-left ul li {display : inline-block;}
.filter-bar__admin .filter-left ul li.filter-select .wrap__sel {width: 100%; display: inline-block; vertical-align: middle; position: relative;}
.filter-bar__admin .filter-left ul li.filter-select .wrap__sel.sel-lbl-hide .wd-shrt {width : 30%;}

.filter-bar__admin .filter-right ul {text-align : right;}
.filter-bar__admin .filter-right ul li {display : inline-block;}
.filter-bar__admin .filter-right ul li > div {width : 100%; display: flex; justify-content: space-between;}
.filter-bar__admin .filter-right ul li .wrap__sel.sel-lbl-hide .wd-shrt {width: 60%; margin-right: 2px;}
.filter-bar__admin .filter-right ul li .wrap__input.input-lbl-hide .wd-shrt {min-width : 78%;}

/*********  원단관리 필터바  *********/

.filter-bar__admin.adm-fbr-filter .filter-left ul li.filter-select .wrap__sel {width : 30%;}
.filter-bar__admin.adm-fbr-filter .filter-left ul li.filter-select .wrap__sel.sel-lbl-hide .wd-shrt {width: 98%;}



`