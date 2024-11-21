import React, { useState } from 'react';
import '../styles/log.css';

function LogPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('로그인 시도', email, password);
        // 실제 로그인 로직을 추가하려면 여기서 API 호출 등을 처리해야 합니다.
    };

    const handleSignUpClick = () => {
        // 회원가입 페이지로 이동 (예시)
        console.log('회원가입 페이지로 이동');
        // 예를 들어, 회원가입 페이지로 리디렉션하려면 react-router를 사용해 리디렉션을 할 수 있습니다.
        // 예: history.push('/signup');
    };

    return (
        <div className="login-page">
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">이메일</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">로그인</button>
            </form>
            <div className="sign-up-link">
                <span>계정이 없으신가요? </span>
                <button type="button" onClick={handleSignUpClick}>회원가입</button>
            </div>
        </div>
    );
}

export default LogPage;
