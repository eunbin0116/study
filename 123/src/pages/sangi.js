import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sangi.css';

function SangiPage() {
    return (
        <div className="sanup-page">
            <h2>산업기사 자격증 목록</h2>
            <div className="certificate-list">
                <ul>
                    <li>
                        <Link to="/sanup">
                            <button>정보처리산업기사</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tongsin">
                            <button>정보통신산업기사</button>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="resources">
                <h3>학습 자료</h3>
                <ul>
                    <li><a href="https://example.com/material1" target="_blank" rel="noopener noreferrer">학습 자료 1</a></li>
                    <li><a href="https://example.com/material2" target="_blank" rel="noopener noreferrer">학습 자료 2</a></li>
                    <li><a href="https://example.com/material3" target="_blank" rel="noopener noreferrer">학습 자료 3</a></li>
                </ul>
            </div>

            <div className="exam-info">
                <h3>시험 정보</h3>
                <p>각 자격증의 시험 일정 및 자세한 정보는 아래 링크에서 확인하세요.</p>
                <Link to="https://example.com/exam" target="_blank" rel="noopener noreferrer">시험 일정 확인</Link>
            </div>

            <div className="start-study">
                <Link to="/sanup">
                    <button>학습 시작</button>
                </Link>
            </div>
        </div>
    );
}

export default SangiPage;
