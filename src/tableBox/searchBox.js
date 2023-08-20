
const width30 = {
    width : "30%"
}
const width60 = {
    width : "60%"
}

const width100 = {
    width : "100%"
}

function SearchBox() {
    return(
        <div className="search_wrap">
            <form id="defaultFrm" name="defaultFrm" action="/ma/sys/tblbt/list.do" method="post" onsubmit="return false">
                <input id="currentPageNo" name="currentPageNo" type="hidden" value="1"/>
                <input id="recordCountPerPage" name="recordCountPerPage" type="hidden" value="10"/>
                <input id="tblBltnbSn" name="tblBltnbSn" type="hidden" value=""/>
                <div class="search_box">
                <table>
                    <caption>검색</caption>
                    <colgroup>
                    <col style={width100}/>
                    <col/>
                    <col style={width100}/>
                    <col/>
                    </colgroup>
                    <tbody>
                    <tr className="search_fixed">
                        <th scope="row"><strong className="search_tit">영역</strong></th>
                        <td>
                        <select id="schEtc00" name="schEtc00" className="selec w30p" style={width30}>
                            <option value="">선택</option>
                            <option value="MA">관리자</option>
                            <option value="FT">사용자</option>
                        </select>
                        </td>
                        <th scope="row"><strong className="search_tit">검색</strong></th>
                        <td>
                             <select id="_searchCondition" className="selec w30p" style={width30}>
                                <option value="">전체</option>
                                <option value="1">메뉴명</option>
                                <option value="2">테이블명</option>
                            </select>
                            <input type="text" id="_searchKeyword" className="text w60p" placeholder="검색어를 입력하세요." style={width60}/>
                            <input id="searchCondition" name="searchCondition" data-type="select-one" type="hidden" value=""/>
                            <input id="searchKeyword" name="searchKeyword" data-type="text" type="hidden" value="슽"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button type="button" className="btn btn_search" id="btn_search" value="">
                    <span>검색</span>
                </button>
                
                <button type="button" className="btn btn_reset" id="btn_reset" value="">
                    <span>초기화</span>
                </button>
                </div>
            </form>
        </div>
    )
}    

export default SearchBox;