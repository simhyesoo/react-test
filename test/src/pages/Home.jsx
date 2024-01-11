import React from 'react';

function Home() {
    return (
        <div>
            <article>
                <h2>프로젝트 생성 및 실행</h2>
                <ul>
                    <li>비주얼코드 react 폴더 열기</li>
                    <li>터미널 열기 (Ctrl + j)</li>
                    <li>window 10 에서 프로젝트 생성 에러 (npm i g create-react-app)</li>
                    <li>프로젝트 생성 (npx i create-react-app 프로젝트명)</li>
                    <li>만들어진 프로젝트로 이동 (cd 프로젝트명)</li>
                    <li>프로젝트를 실행 (npm start)</li>
                    <li>프로젝트 중지 (Ctrl + c)</li>
                </ul>
            </article>

            <article>
                <h2>프로젝트 폴더 구조</h2>
                <ul>
                    <li>node_modules (환경설정시 생성된 모듈 파일)</li>
                    <li>puplice (Static 자원이 위치하는 폴더)</li>
                    <li>src (작업폴더-js, css, component..)</li>
                    <li>package.json (version, dependencies, proxy, git 등의 정보 수록)</li>
                </ul>
            </article>

            <article>
                <h2>문법</h2>
                <ul>
                    <li>JSX (JavaScript XML) - JavaScript 확장한 문법 <br />
                        ㄴ클래스 속성 - className <br />
                        ㄴ태그 규칙 (열고, 닫고) <br />
                        ㄴJavaScript 구문 사용시 증가로 ({'{ }'}) 사용</li>
                    <li>return 은 하나의 엘리먼트로 반환 (필요시 Fragments 사용)</li>
                    <li>파일 가져오기 (import 별칭 from './파일명')</li>
                    <li>파일 내보내기 (export default 컨포넌트명)</li>
                </ul>
            </article>
        </div>
    );
}

export default Home;