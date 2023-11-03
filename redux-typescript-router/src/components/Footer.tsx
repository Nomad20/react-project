import React from 'react'
import './footer.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const Footer: React.FC = () => {
  return (
    <footer className='footer-container'>
      <div className='top-row'>
      <div className="logo">Logo</div>

      <div className="grid">
          <div>
            <div className="column-header">Product</div>
            <div className="column-content">Features</div>
            <div className="column-content">Pricing</div>
          </div>
          <div>
            <div className="column-header">Resources</div>
            <div className="column-content">Blog</div>
            <div className="column-content">User guides</div>
            <div className="column-content">Webinars</div>
          </div>
          <div>
            <div className="column-header">Company</div>
            <div className="column-content">About Us</div>
            <div className="column-content">Contact Us</div>
          </div>
        </div>
      
      <div className="subscription-form">
        <h3 className='subscribe-text'>Subscribe to our newsletter</h3>
        <form className='subscription-form'>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </form>
      </div>
      </div>
      <div className="bottom-row">
        <select className="language-select">
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="German">German</option>
        </select>
        <div className="copyright-text">
          &copy; 2023 Learn, Inc&nbsp;
          <span className="copyright-link">Privacy</span>,&nbsp;
          <span className="copyright-link">Terms</span>
        </div>
        <div className="social-media-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer