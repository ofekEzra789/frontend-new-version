import React, { useState, createContext } from 'react';
import { sendUserAuthSms, authUserPincodeSms } from '../api/registerApi';

const initialUser = {
    firstName: '',
    lastName: '',
    id: '',
    birthday: '',
    tel: ''
};

export const RegisterFormContext = createContext();
export const RegisterFormProvider = (props) => {

    const [formView, setFormView] = useState(0);
    const [userDetails, setUserDetails] = useState(initialUser);
    const [smsSent, setSmsSent] = useState(false);
    const [authSmsPincode, setAuthSmsPincode] = useState('');
    const [smsAuthed, setSmsAuthed] = useState(false);

    return (
        <RegisterFormContext.Provider value={{
            formView,
            setFormView,
            userDetails,
            setUserDetails,
            smsSent,
            setSmsSent,
            sendUserAuthSms,
            authUserPincodeSms,
            authSmsPincode,
            setAuthSmsPincode,
            smsAuthed,
            setSmsAuthed
        }}>
            {props.children}
        </RegisterFormContext.Provider>
    )
};
