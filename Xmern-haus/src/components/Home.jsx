import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="image-container">
      <a href="page1.html" className="image-link">
        <img
          src="https://i0.wp.com/www.theeverydayhostess.com/wp-content/uploads/2018/04/Lauren-Conrad-Pizza-Bar.jpg?resize=675%2C791"
          alt="Image 1"
          className="image"
        />
      </a>
      <a href="page2.html" className="image-link">
        <img
          src="https://d1ralsognjng37.cloudfront.net/5d70915c-a75c-49f4-884a-a82f4addfa4a"
          alt="Image 2"
          className="image"
        />
      </a>
    </div>
  );
};

export default Home;
