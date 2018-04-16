import axios from 'axios';
import { browserHistory } from 'react-router-3'
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:3001';

export function signinUser(email, password) {
    return function(dispatch) {
        console.log('email', email, password);
        var auth = {
            username: email,
            password: password
        };
      
          let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        console.log(auth, config);

        axios.post(`${ ROOT_URL }/authenticate`, auth, config)
            .then(response => {
                console.log('response', response);
                dispatch({ type: AUTH_USER, payload: response.data });
                browserHistory.push('/projects');
            })
            .catch(() => {
                dispatch({ type: AUTH_ERROR, payload: "Bad login/password" })
            })

    }
}

// export function signinUser({ email, password }) {
//     return function(dispatch) {
//       // Submit email/password to the server
//       axios.post(`${ROOT_URL}/signin`, { email, password })
//         .then(response => {
//           // If request is good...
//           // - Update state to indicate user is authenticated
//           dispatch({ type: AUTH_USER });
//           // - Save the JWT token
//           localStorage.setItem('token', response.data.token);
//           // - redirect to the route '/feature'
//           browserHistory.push('/');
//         })
//         .catch(() => {
//           // If request is bad...
//           // - Show an error to the user
//         //   dispatch(authError('Bad Login Info'));
//         dispatch({ type: AUTH_ERROR, payload: "Bad login/password" })
//         });
//     }
//   }
  