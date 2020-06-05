import React from 'react';

import './components/Header/Header.css';
import './components/BlogPosts/BlogPosts.css';
import './components/BlogPost/BlogPost.css';
import { Header } from './components/Header/Header.js';
import { BlogPosts } from './components/BlogPosts/BlogPosts.js';

function App() {
  return (
    <div className="App">
      <Header />
      <BlogPosts />
    </div>
  );
}

export default App;
