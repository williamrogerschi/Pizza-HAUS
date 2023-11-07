import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div>
           <div className="container">

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

      <div className="home-container">
        <div className="discounts-container">
          <h2>Discounts</h2>
          <div className="image-box">
            {/* Circular image with a border */}
            <img
              src="your_image_url1.jpg"
              alt="Discount 1"
              className="circular-image"
            />
          </div>
          <div className="image-box">
            <img
              src="your_image_url2.jpg"
              alt="Discount 2"
              className="circular-image"
            />
          </div>
          <div className="image-box">
            <img
              src="your_image_url3.jpg"
              alt="Discount 3"
              className="circular-image"
            />
          </div>
          <div className="image-box">
            <img
              src="your_image_url4.jpg"
              alt="Discount 4"
              className="circular-image"
            />
          </div>
        </div>

        <div className="featured-items-container">
          <h2>Featured Items</h2>
          <div className="image-box">
            <img
              src="your_image_url5.jpg"
              alt="Featured Item 1"
              className="circular-image"
            />
          </div>
          <div className="image-box">
            <img
              src="your_image_url6.jpg"
              alt="Featured Item 2"
              className="circular-image"
            />
          </div>
          <div className="image-box">
            <img
              src="your_image_url7.jpg"
              alt="Featured Item 3"
              className="circular-image"
            />
          </div>
          <div className="image-box">
            <img
              src="your_image_url8.jpg"
              alt="Featured Item 4"
              className="circular-image"
            />
          </div>
        </div>

        <div className="location-container">
          <h2>Location</h2>
          <div className="picture-frame">
            <img
              src="your_location_image.jpg"
              alt="Location Image"
              className="location-image"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
