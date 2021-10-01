import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const AuthContext = React.createContext()
const db = getFirestore();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [uid, setUid] = useState("")

    const signup = (email, password, firstName, lastName) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(cred => {
                return setDoc(doc(db, 'users', cred.user.uid), {
                    id: cred.user.uid,
                    firstName,
                    lastName
                })
            }).catch(error => {
                setSignupSuccess(false);
            });
        setSignupSuccess(true);
    }

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                setLoginSuccess(false)
            });
        setLoginSuccess(true);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            user && setUid(user.uid);
            setCurrentUser(user)
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        loginSuccess,
        signupSuccess,
        uid
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};
