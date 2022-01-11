import css from "styled-jsx/css";
import {headerStyle} from "@/styles/headerStyle";

const Header = () => (
    <>
        <header className="header adm-header">
            <div className="header-top">
                <div className="userInfo">
                    <ul>
                        <li><a href="" className="login">로그인</a></li>
                        <li><a href="" className="login-out">관리자 로그아웃</a></li>
                    </ul>
                </div>
            </div>

            <div className="header-bottom">
                <div className="inner">
                    <h1 className="logo">
                        <a href="#"></a>
                    </h1>
                    <nav>
                        <ul className="nav-menu">
                            <li><a href="#">주문관리</a></li>
                            <li><a href="#">회원관리</a></li>
                            <li><a href="#">문의관리</a></li>
                            <li><a href="#">후기관리</a></li>
                            <li className="active"><a href="#">원단관리</a></li>
                            <li>
                                <a href="">카테고리</a>
                                <ul className="nav-sub-menu">
                                    <li><a href="#">문의관리</a></li>
                                    <li><a href="#">스타일관리</a></li>
                                    <li><a href="#">원단관리</a></li>
                                </ul>
                            </li>
                            <li><a href="#">협력업체</a></li>
                            <li className="last"><a href="#">관리자</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <style jsx>{headerStyle}</style>
    </>
);

export default Header;