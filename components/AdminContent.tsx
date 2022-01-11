import Wrap from "@/components/Wrap";
import {admin} from "@/styles/admin";
import Pagination from "@/components/Pagination";

export const AdminContent = () => (
    <>
        <div className="adm-cont-titl">
            <h1 className="">원단관리</h1>
            <button type="button" className="btn btn-prm btn-wr" >등록</button>
        </div>

        <div className="filter-bar__admin adm-fbr-filter">
            <div className="filter-left">
                <ul>
                    <li className="filter-select">
                        <div className="wrap__sel sel-lbl-hide">
                            <label className="label-tit">원단대분류</label>
                            <select name="" className=" wd-shrt" id="">
                                <option value="0" >원단대분류</option>
                                <option value="대분류01">대분류01</option>
                                <option value="대분류02">대분류02</option>
                                <option value="대분류03">대분류03</option>
                                <option value="대분류04">대분류04</option>
                                <option value="대분류05">대분류05</option>
                            </select>
                        </div>
                        <div className="wrap__sel sel-lbl-hide">
                            <label className="label-tit">원단소분류</label>
                            <select name="" className=" wd-shrt" id="">
                                <option value="0" >원단소분류</option>
                                <option value="소분류01">소분류01</option>
                                <option value="소분류02">소분류02</option>
                                <option value="소분류03">소분류03</option>
                                <option value="소분류04">소분류04</option>
                                <option value="소분류05">소분류05</option>
                            </select>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="filter-right">
                <ul>
                    <li>
                        <div className="wrap__sel sel-lbl-hide">
                            <label  className="label-tit">원단검색분류</label>
                            <select name="" className=" wd-shrt" id="">
                                <option value="0" >원단검색분류</option>
                                <option value="원단타입">원단타입</option>
                                <option value="원단코드">원단코드</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div className="wrap__input input-lbl-hide">
                            <label className="label-tit">문의검색</label>
                            <input type="search" id="" className=" input-sch wd-shrt" placeholder="검색어 입력" />
                                <button className="btn btn-prm">검색</button>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
        <div className="adm-cont adm-fbr-list">

            <div className="wrap__tbl-row">
                <table>
                    <colgroup>
                    <col width= "5%;" />
                    <col width= "10%;" />
                    <col width= "10%;"/>
                    <col width= "5%;"/>
                    <col width= "18%;"/>
                    <col width= "18%;"/>
                    <col width= "8%;"/>
                    <col width= "8%;"/>
                    <col width= "8%;"/>
                    <col width= "10%;"/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>원단대분류</th>
                        <th>원단소분류</th>
                        <th>이미지</th>
                        <th>원단타입</th>
                        <th>원단코드</th>
                        <th>단가</th>
                        <th>공임비</th>
                        <th>재고량</th>
                        <th>판매여부</th>
                    </tr>
                    </thead>

                    <tbody>

                    <tr>
                        <td lang="en">04</td>
                        <td>코튼</td>
                        <td>체크</td>
                        <td className="adm-fbr-img">
                            <div className="wrap__adm-fbr-img">
                            </div>
                        </td>
                        <td>코튼 체크 C-gr</td>
                        <td lang="en">CTN123</td>
                        <td lang="en">10,000</td>
                        <td lang="en">5,000</td>
                        <td lang="en">100</td>
                        <td>판매중</td>
                    </tr>

                    <tr>
                        <td lang="en">03</td>
                        <td>코튼</td>
                        <td>스트라이프</td>
                        <td className="adm-fbr-img">
                            <div className="wrap__adm-fbr-img">
                            </div>
                        </td>
                        <td>코튼 스트라이프 C-drkgr</td>
                        <td lang="en">CTN123</td>
                        <td lang="en">10,000</td>
                        <td lang="en">5,000</td>
                        <td lang="en">100</td>
                        <td>판매중</td>
                    </tr>

                    <tr>
                        <td lang="en">02</td>
                        <td>코튼</td>
                        <td>무지</td>
                        <td className="adm-fbr-img">
                            <div className="wrap__adm-fbr-img">
                            </div>
                        </td>
                        <td>코튼 무지 C-bg</td>
                        <td lang="en">CTN123</td>
                        <td lang="en">10,000</td>
                        <td lang="en">5,000</td>
                        <td lang="en">100</td>
                        <td>판매중지</td>
                    </tr>

                    <tr>
                        <td lang="en">01</td>
                        <td>실크</td>
                        <td>스트라이프</td>
                        <td className="adm-fbr-img">
                            <div className="wrap__adm-fbr-img">
                            </div>
                        </td>
                        <td>실크 스트라이프 C-iv</td>
                        <td lang="en">CTN123</td>
                        <td lang="en">10,000</td>
                        <td lang="en">5,000</td>
                        <td lang="en">100</td>
                        <td>판매중지</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Pagination />
        <style jsx>{admin}</style>
    </>
);
