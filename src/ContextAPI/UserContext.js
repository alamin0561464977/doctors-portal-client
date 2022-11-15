import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';

export const AuthContext = createContext();
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    };

    const logOut = () => {
        return signOut(auth);
    };


    useEffect(() => {
        const unSb = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => unSb();
    }, [])

    const userInfo = { user, signUp, login, googleLogin, logOut }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;