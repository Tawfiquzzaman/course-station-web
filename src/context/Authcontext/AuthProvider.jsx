import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    //Register user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //sign in user with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Sign Out
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('user in the auth state change', currentUser);
        })
        return () => {
            unSubscribe();
        }

    }, [])

    const authInfo = {
        loading,
        user,
        createUser,
        signIn,
        signOutUser,

        

    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;