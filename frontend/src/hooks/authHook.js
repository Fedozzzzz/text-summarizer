import React, {
    createContext, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import {
    checkLoggedIn, login as signIn, logout as signOut, register as signUp,
} from '../ajax/users';

const authContext = createContext(null);

export const useAuth = () => useContext(authContext);

function useProvideAuth() {
    const [isAuthed, setIsAuthed] = useState(false);

    useEffect(async () => {
        const res = await checkLoggedIn();
        setIsAuthed(res.ok);
    }, []);

    return {
        isAuthed,
        async login(email, password) {
            const res = await signIn(email, password);
            if (res.ok) setIsAuthed(true);
            return res;
        },
        async logout() {
            const res = await signOut();
            if (res.ok) setIsAuthed(false);
            return res;
        },
        async register(email, password) {
            const res = await signUp(email, password);
            if (res.ok) setIsAuthed(true);
            return res;
        },
    };
}

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    // eslint-disable-next-line react/jsx-filename-extension,react/react-in-jsx-scope
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

ProvideAuth.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any,
};

ProvideAuth.defaultProps = {
    children: null,
};
