import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config"
// import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOutUser = () => {
        return signOut(auth);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleprovider);
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, gitProvider);
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,currentUser => {
            if(currentUser){
                setUser(currentUser);
                setUserName(currentUser.displayName);
                setPhotoUrl(currentUser.photoURL);
            }
            else{
                setUser(null);
            }
            setLoading(false);
        });
        return()=>{unSubcribe();}
    },[])
    

    const authInfo = { user, loading, createUser, logInUser, logOutUser, signInWithGoogle, signInWithGithub, userName, setUserName, photoUrl, setPhotoUrl, userEmail, setUserEmail };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;