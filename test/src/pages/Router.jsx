import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Router() {
    const str = `
    function App() {
        return (
          <BrowserRouter>
            <header>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/css">Css 활용</Link>
                <Link to="/image">Image 활용</Link>
                <Link to="/router?num=1000" state={{ num: 100 }}>Router (페이지이동)</Link>
                <Link to="/props">State&Props</Link>
                <Link to="/deploy">Github Deploy</Link>
              </nav>
            </header>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/css" element={<Css />} />
                <Route path="/image" element={<Image />} />
                <Route path="/router" element={<Router />} />
                <Route path="/props" element={<Props />} />
                <Route path="/deploy" element={<Deploy />} />
                <Route path="/*" element={<Not />} />
              </Routes>
            </main>
          </BrowserRouter>
        );
      }
  `;

    const locate = useLocation();
    const navigate = useNavigate();
    console.log(locate);
    // console.log(navigate);

    return (
        <div>
            <article>
                <h2>Router</h2>
                <p>새로운 페이지를 로드하지 않고 페이지 안에서 필요한 데이터만 가져오는 형태</p>
                <ul>
                    <li>모듈설치 (npm i react-router-dom)</li>
                    <li>App.js <br />
                        ㄴimport &#123;BrowserRouter, Route, Routes, Link&#125;from 'react-router-dom';
                    </li>
                    <li><br />
                        ㄴ메뉴를 Link 컨포넌트를 이용하여 설정(브라우저 주소값 변경) <br />
                        ㄴRoute컨포넌트를 이용하여 컨포넌트 분리 (Link값과 path값을 일치시킴)<br />
                        <textarea defaultValue={str} cols="100" rows="10">
                        </textarea>
                    </li>
                </ul>
            </article>
            <button onClick={() => { navigate('/') }}>홈으로 이동</button>
        </div>
    )
}

export default Router