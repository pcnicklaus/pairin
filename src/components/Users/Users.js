import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './Users.css';

class Users extends Component {

  async componentDidMount() {
    console.log('this. props', this.props);
    await this.props.fetchUsers();
  }

  render() {
    return (
      <div className="users">
        
        <nav className="users__nav">
          <svg className="users__nav-logo" width="35px" height="35px" x="0px" y="0px" viewBox="-275 367 60 60" enableBackground="new -275 367 60 60" >
              <path id="Shape" className="pairin_logo_0" d="M-245.2,397.8c-8.6,0-15.6,7-15.6,15.6v0.5c4.1,3.8,9.6,6.1,15.6,6.1s11.5-2.3,15.6-6.1v-0.5
                  C-229.6,404.8-236.6,397.8-245.2,397.8L-245.2,397.8z"></path>
              <ellipse id="Oval" className="pairin_logo_0" cx="-244.7" cy="387.6" rx="8.6" ry="8.6"></ellipse>
              <path className="pairin_logo_1" d="M-215,397.4c0-0.1,0-0.3,0-0.4c0-16.6-13.4-30-30-30c-0.1,0-0.1,0-0.2,0l0,4.2c0.1,0,0.1,0,0.2,0
                  c14.2,0,25.8,11.6,25.8,25.8c0,0.1,0,0.3,0,0.4L-215,397.4z"></path>
              <path className="pairin_logo_2" d="M-219.2,397.4c-0.2,14.1-11.7,25.4-25.8,25.4c-14.2,0-25.8-11.6-25.8-25.8c0-14.2,11.4-25.7,25.6-25.8l0-4.2
                  c-16.5,0.1-29.8,13.5-29.8,30c0,16.6,13.4,30,30,30c16.4,0,29.8-13.2,30-29.6L-219.2,397.4z"></path>
              <path className="pairin_logo_3" d="M-215,396.6c-0.2-16.2-13.2-29.2-29.4-29.6l0,4.2c13.8,0.3,24.9,11.5,25.2,25.4L-215,396.6z"></path>
          </svg>
          <div className="users__nav__verbiage">
            <h6 className="users__nav__verbiage-pairin">pairin</h6>
            <h3 className="users__nav__verbiage-personal">inform</h3>
          </div>
        </nav>

      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('shtate', state);
  return {
    users: state.users
  }
} 

export default connect(mapStateToProps, actions)(Users);
