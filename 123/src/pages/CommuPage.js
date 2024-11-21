import React, { useState, useEffect } from 'react';
import '../styles/CommuPage.css';

const CommuPage = () => {
    // 게시물 배열 상태 관리
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({
        title: '',
        content: '',
    });

    // 페이지 로드 시 로컬 스토리지에서 게시물 불러오기
    useEffect(() => {
        const savedPosts = localStorage.getItem('posts');
        if (savedPosts) {
            setPosts(JSON.parse(savedPosts)); // 저장된 게시물이 있으면 상태에 설정
        }
    }, []);

    // 게시물 작성 처리 함수
    const handlePostSubmit = (e) => {
        e.preventDefault();

        // 새 게시물 추가
        const newPostData = {
            title: newPost.title,
            content: newPost.content,
            date: new Date().toLocaleString(), // 게시물 작성 일시
        };

        const updatedPosts = [...posts, newPostData];
        setPosts(updatedPosts);

        // 로컬 스토리지에 게시물 저장
        localStorage.setItem('posts', JSON.stringify(updatedPosts));

        // 폼 초기화
        setNewPost({
            title: '',
            content: '',
        });
    };

    // 게시물 삭제 처리 함수
    const handlePostDelete = (index) => {
        // 선택한 게시물 삭제
        const updatedPosts = posts.filter((_, i) => i !== index);
        setPosts(updatedPosts);

        // 로컬 스토리지에서 삭제된 게시물 반영
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    };

    return (
        <div className="commu-page">
            <div className="posts-list">
                <h3>게시판</h3>
                <ul>
                    {posts.map((post, index) => (
                        <li key={index} className="post-item">
                            <h4>{post.title}</h4>
                            <p>{post.content}</p>
                            <small>{post.date}</small>
                            {/* 삭제 버튼 추가 */}
                            <button className="delete-button" onClick={() => handlePostDelete(index)}>
                                삭제
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="new-post-form">
                <h3>새 게시물 작성</h3>
                <form onSubmit={handlePostSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">제목</label>
                        <input
                            type="text"
                            id="title"
                            value={newPost.title}
                            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">내용</label>
                        <textarea
                            id="content"
                            value={newPost.content}
                            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit">게시물 작성</button>
                </form>
            </div>
        </div>
    );
};

export default CommuPage;
