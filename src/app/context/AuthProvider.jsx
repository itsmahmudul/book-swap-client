"use client"

import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { auth } from '../../../firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false))

    }

    const updateUserProfile = (profileInfo) => {
        return updateProfile(auth.currentUser, profileInfo);

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => unsubscribe
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
