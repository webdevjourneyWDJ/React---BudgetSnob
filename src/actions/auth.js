import {firebase, googleAuthProvider} from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = () => {
    return (dispatch) =>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout = (uid) => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return (dispatch) =>{
        return firebase.auth().signOut();
    }
}