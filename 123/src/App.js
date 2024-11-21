import React, { useState } from 'react'; // useState import 추가
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SanupPage from './pages/sanup'; // 페이지 컴포넌트
import TongsinPage from './pages/tongsin'; // 페이지 컴포넌트
import LogPage from './pages/log'; // 로그인 페이지
import InfoPage from './pages/info'; // 페이지 컴포넌트
import WebPage from './pages/web'; // 페이지 컴포넌트
import ComPage from './pages/com'; // 페이지 컴포넌트
import WordPage from './pages/word'; // 페이지 컴포넌트
import CommuPage from './pages/CommuPage'; // 게시판 페이지 import
import SangiPage from './pages/sangi';
import SignUpPage from './pages/signup';

function App() {
  const [isStudying, setIsStudying] = useState(false); // 공부 상태 관리
  const [randomCourse, setRandomCourse] = useState('정보처리산업기사'); // 랜덤 자격증

  const courses = [
    { name: '정보처리산업기사', path: '/sanup' },
    { name: '정보통신산업기사', path: '/tongsin' },
    { name: '정보처리기능사', path: '/info' },
    { name: '웹디자인기능사', path: '/web' },
    { name: '컴퓨터활용능력', path: '/com' },
    { name: '워드프로세서', path: '/word' }
  ];

  const getRandomCourse = () => {
    const randomIndex = Math.floor(Math.random() * courses.length);
    setRandomCourse(courses[randomIndex].name);
  };

  const handleStartStudying = () => {
    setIsStudying(true); // 공부 상태 true로 변경
    getRandomCourse(); // 랜덤 자격증 선택
  };

  const handleCourseSelection = (course) => {
    setIsStudying(true);
    setRandomCourse(course.name);
  };

  return (
    <Router>
      <div className="App">
        {/* 상단 내비게이션 */}
        <nav className="top-nav">
          <div className="logo">
            {/* 로고 클릭 시 홈으로 돌아가도록 Link 사용 */}
            <Link to="/" onClick={() => { setIsStudying(false); getRandomCourse(); }}>
              <h1>세명마이맥</h1>
            </Link>
          </div>
          <div className="top-menu">
            {/* 게시판 버튼 클릭 시 현재 페이지가 바뀌어야 함 */}
            <Link to="/commu">게시판</Link>
            <Link to="/log">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </div>
        </nav>

        {/* 중간 네비게이션 */}
        <div className="main-nav">
          <ul className="menu">
            <li>
              <Link to="/sangi">산업기사</Link>
              <div className="submenu">
                {/* 산업기사 메뉴 클릭 시 해당 항목들이 화면에 나타나도록 라우팅 */}
                <Link to="/sanup" onClick={() => handleCourseSelection(courses[0])}>정보처리산업기사</Link>
                <Link to="/tongsin" onClick={() => handleCourseSelection(courses[1])}>정보통신산업기사</Link>
              </div>
            </li>
            <li>
              <Link to="#none">기능사</Link>
              <div className="submenu">
                <Link to="/info" onClick={handleStartStudying}>정보처리기능사</Link>
                <Link to="/web" onClick={handleStartStudying}>웹디자인기능사</Link>
              </div>
            </li>
            <li>
              <Link to="#none">서비스</Link>
              <div className="submenu">
                <Link to="/com" onClick={handleStartStudying}>컴퓨터활용능력</Link>
                <Link to="/word" onClick={handleStartStudying}>워드프로세서</Link>
              </div>
            </li>
          </ul>
        </div>

        {/* main 섹션 */}
        <main>
          <Routes>
            {/* 라우팅 설정 */}
            <Route path="/" element={
              !isStudying ? (
                <>
                  <section className="hero">
                    <h2>세명마이맥에 오신 것을 환영합니다!</h2>
                    <p>여기서는 각종 자격증 준비를 위한 다양한 자료와 정보를 제공합니다. 원하는 자격증을 선택하고, 필요한 공부를 시작하세요.</p>
                    <button onClick={handleStartStudying}>
                      <Link to={courses.find(course => course.name === randomCourse)?.path}>
                        {randomCourse} 공부하기
                      </Link>
                    </button>
                  </section>
                  <section className="about">
                    <p>세명마이맥은 자격증 준비생들을 위한 온라인 학습 플랫폼입니다.</p>
                    <p>다양한 자격증 시험 정보를 제공하며, 여러분이 꿈을 이룰 수 있도록 돕습니다.</p>
                  </section>
                </>
              ) : null
            } />
            <Route path="/sanup" element={<SanupPage />} />
            <Route path="/log" element={<LogPage />} />
            <Route path="/tongsin" element={<TongsinPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/web" element={<WebPage />} />
            <Route path="/com" element={<ComPage />} />
            <Route path="/word" element={<WordPage />} />
            <Route path="/commu" element={<CommuPage />} /> {/* 게시판 페이지 */}
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </main>

        {/* 푸터 */}
        <footer>
          <p>&copy; 2024 세명마이맥</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
