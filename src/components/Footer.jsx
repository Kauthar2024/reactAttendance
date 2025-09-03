import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="style-1 bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-4 col-xs-12 text-center text-md-start mb-3 mb-md-0">
            <span className="copyright">
              © {new Date().getFullYear()} <a href="http://guardiantheme.com" target="_blank" rel="noopener noreferrer" className="text-light">GuardianTheme</a>
            </span>
          </div>
          
          <div className="col-md-4 col-xs-12">
            <div className="footer-social text-center">
              <ul className="list-inline m-0">
                <li className="list-inline-item mx-2">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer" className="text-light">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-light">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-4 col-xs-12 text-center text-md-end">
            <div className="footer-link">
              <ul className="list-inline m-0">
                <li className="list-inline-item mx-2">
                  <Link to="/privacy-policy" className="text-light">Privacy Policy</Link>
                </li>
                <li className="list-inline-item mx-2">
                  <Link to="/terms" className="text-light">Terms of Use</Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
