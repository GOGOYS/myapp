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


#2023.09.09
## webPack이란?
 - 모듈(Module)을 위한 번들러(Bundler)이다.

### 모듈(module)은 무엇인가?
 - 재사용이 가능한 코드조각이다.(JS) 모듈은 자신만의 모듈스코프를 가지며 export, import 할 수 있다.
 - 보통 클래수 하나 또는 특정한 목적을 가진 복수의 함수로 구성된 라이브러리로 구성
 - 필요한 모듈을 언제든지 불러올 수 이게 해주거나, 코드를 모듈 단위로 구성해 주는 방법 등 다양한 라이브러리 존재
 - AMD, CommonJS, UMD 
 - 모듈 시스템을 사용하면 전역에 선언된 var의 사용으로 발생하는 부작용을 예방 할 수도 있다.

### 번들러(Bundler)는 무엇인가?
  - JS, CSS, Image 등의 파일을 묶어주는 작업을 번들링(Bundling)이라고 하며, 작업의 결과물을 번들(Bundle)이라고 한다.
  - 웹팩 자체는 묶어주는 역할을 하기때문에 번들러라고 한다.
  - 번들링 과정이 끝나면 기존 스크립트에서 import/export가 사라지기 때문에 type="module"이 필요 없어진다. 따라서 번들링 과정을 거친 스크립트는 일반 스크립트 처럼 취급한다.  

### WebPack 사용이유는 뭘까?
 - 여러개의 파일을 하나로 번들링하기 때문에 HTTP 요청 횟수를 줄일 수 있다. -> 빠른 응답
 - 자바스크립트 외의 리소스 포맷의 모듈도 사용할 수 있게 해 준다.
 - import를 해주기만 하면 웹팩이 알아서 빌드해준다.(빌드 자동화) -> 새로고침 없이 결과 바로확인
 - 코드 스플리팅으로 원하는 라이브러리도 통째로 로딩하지 않고 필요한 모듈만 로딩(Dynamic Loading, Lazy Loading)

#### 모듈 스코프(Module Scope)란?
 _ Export를 통해 함수나 객체를 다른 모듈에서 접할 수 있도록 만들어 주는것

#### 코드 스플리팅(Code Splitting)이란?
 - 필요한 부분만을 로딩하고, 현재 필요하지 않은 코드 부분은 분리시켜 나중에 로드함으로써 로딩시간을 개선하는 것

## 웹팩 설치 명령어
 - npm i -D webpack webpack-cli