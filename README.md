# 리액트로 게시판 만들기 연습

## 게시판 컴포넌트 분리 후 연결

## react-router-dom을 사용하여 게시판 URl이동
 - Routes, Route, BrowserRouter

### CSS module로 분리 했을때 클래스 하나만 적용되는 이유 찾기

#2023.08.22
### Q. 컴포넌트에 props로 함수를 넘길때 함수에 인자가 필요하면 어떻게 넘거야하는가?

## react-router-dom의 useNavigate로 페이지 이동을 함수처리하여 이동
- const movePage = useNavigate();
    function goTables(){
        movePage('/');
    }
## react-router-dom의 useSearchParams로 파라미터를 넘겨받아 데이터 사용
-   ex) URL -> localhost:3000/detailView.do?num=1
    const [searchParams, setSearchParams] = useSearchParams();
    const num = Number(searchParams.get('num'));
    console.log(num).  => 1출력