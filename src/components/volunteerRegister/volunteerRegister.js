import React from 'react';
import PageHeader from '../pageHeader/pageHeader'
import VolunteerRegisterWizard from '../volunteerRegisterWizard/volunteerRegisterWizard';
import { RegisterFormProvider } from '../../contexts/registerForm.context';
import './volunteerRegister.scss';

function VolunteerRegister(props) {
    return (
        <React.Fragment>
            <PageHeader Title="הרשמה להתנדבות" Text="הצטרפו אלינו! זה component אז אפשר לשים כאן מה שרוצים!" />
            <RegisterFormProvider>
                <VolunteerRegisterWizard />
            </RegisterFormProvider>
        </React.Fragment>
    )
};
export default VolunteerRegister;

