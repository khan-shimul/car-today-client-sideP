import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";

// ini
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // register brand new user
    const registerNewUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                // send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/');
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // login user
    const loginUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false));
    };

    // sign in with google
    const signInUsingGoogle = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // observer user state changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);


    // logout
    const logoutUser = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false));
    }

    return {
        user,
        setError,
        error,
        loading,
        registerNewUser,
        loginUser,
        signInUsingGoogle,
        logoutUser
    }
}

export default useFirebase;