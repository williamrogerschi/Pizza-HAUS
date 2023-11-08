import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  useEffect(() => {
   
    $('#loginModal').modal('show');
    $('[data-toggle="tooltip"]').tooltip();
  }, []); 

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-info btn-round"
        data-toggle="modal"
        data-target="#loginModal"
      >
        Login
      </button>
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-title text-center">
                <h4>Login</h4>
              </div>
              <div className="d-flex flex-column text-center">
                <form>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email1" placeholder="Your email address..." />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="password1" placeholder="Your password..." />
                  </div>
                  <button type="button" className="btn btn-info btn-block btn-round">Login</button>
                </form>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <div className="signup-section">Not a member yet? <a href="#a" className="text-info">Sign Up</a>.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
