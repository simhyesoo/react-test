import React from 'react';
import Logo from '../logo.svg';

function Image() {
    return (
        <div>
            <article>
                <h2>이미지 활용</h2>
                <ul>
                    <li>src 폴더 내에 이미지 호출<br />
                        ㄴ import log from '../logo/svg'; <br />
                        ㄴ &lt;img src={Logo} &gt;
                    </li>
                    <li>
                        public 폴더안에 있는 이미지 호출 <br />
                        ㄴ&lt;img src="./logo192.png" / &gt; <br />
                        ㄴindex.html 문서 기준으로 상대경로 작성
                    </li>
                </ul>
            </article>
        </div>
    )
}

export default Image;