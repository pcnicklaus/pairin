import { AUTH_USER, AUTH_ERROR } from '../actions/types';

export default function( state={}, action) {
    switch(action.type) {
        case AUTH_USER: 
            console.log('action.payload', action)
            return { ...state, authenticated: true, header: action.payload };
        case AUTH_ERROR:
            return { ...state, authenticated: false }
    }
}