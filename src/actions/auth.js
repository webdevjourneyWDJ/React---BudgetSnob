import {firebase, googleAuthProvider} from '../firebase/firebase';

export const startLogin = () => {
    return (dispatch) =>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startLogout = () => {
    return (dispatch) =>{
        return firebase.auth().signOut();
    }
}