import React from 'react';
import '../styles/sanup.css';  // CSS 경로 수정

function SanupPage() {
    return (
        <div className="sanup-page-container">
            <h2 className="page-title">정보처리산업기사</h2>

            {/* 필기 섹션 */}
            <div className="content-section" id='one'>
                <h3>필기 강의 영상</h3>
                <div className="video-container">
                    {/* 필기 강의 영상 임베드 */}
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/xTUmj7ASLrA?list=PLz95GL3y9Hv3UVuzuK33Eo_6B2P_sQyWt" 
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p>필기 관련 기출문제를 확인하려면 아래 링크를 클릭하세요.</p>
                <ul className="links-list">
                    <li><a href="https://www.comcbt.com/xe/j3/4494879" target="_blank" rel="noopener noreferrer">20년 8월 22일 3회</a></li>
                    <li><a href="https://www.comcbt.com/xe/j3/4427201" target="_blank" rel="noopener noreferrer">20년 6월 6일 1,2회</a></li>
                    <li><a href="https://www.comcbt.com/xe/j3/3710092" target="_blank" rel="noopener noreferrer">19년 8월 4일 3회</a></li>
                </ul>
            </div>

            {/* 실기 섹션 */}
            <div className="content-section" id='two'>
                <h3>실기 강의 영상</h3>
                <div className="video-container">
                    {/* 실기 강의 영상 임베드 */}
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/h3b2DzTqzUQ?list=PLraQPczZnB1psSS5-CMsIAC06y5CBE3AC" 
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p>실기 관련 기출문제를 확인하려면 아래 링크를 클릭하세요.</p>
                <ul className="links-list">
                    <li><a href="https://complainrevolutionist.tistory.com/52" target="_blank" rel="noopener noreferrer">22년 1회 기출문제</a></li>
                    <li><a href="https://complainrevolutionist.tistory.com/53" target="_blank" rel="noopener noreferrer">22년 2회 기출문제</a></li>
                    <li><a href="https://complainrevolutionist.tistory.com/54" target="_blank" rel="noopener noreferrer">22년 3회 기출문제</a></li>
                </ul>
            </div>
        </div>
    );
}

export default SanupPage;
