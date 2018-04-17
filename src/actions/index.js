import axios from 'axios';
import { browserHistory } from 'react-router-3'
import { AUTH_USER, AUTH_ERROR, FETCH_USERS, USER_ERROR } from './types';

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

        axios.post(`${ ROOT_URL }/authenticate`, auth, config)
            .then(response => {
                dispatch({ type: AUTH_USER, payload: response.data });
                localStorage.setItem("PairinKey", response.data.api_key);
                browserHistory.push('/users');
            })
            .catch(() => {
                dispatch({ type: AUTH_ERROR, payload: "Bad login/password" })
            })

    }
}

export function fetchUsers() {
    console.log('here')
    return async function(dispatch){
        console.log('here')
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': await localStorage.getItem('PairinKey')
            }
        }

        axios.get(`${ ROOT_URL }/api/users`, config)
            .then(response => {
                console.log('resonse fetchusers', response);
                dispatch({ type: FETCH_USERS, payload: response.data });
            })
            .catch({ type: USER_ERROR, payload: 'There was an error fetching users'})
    }
}