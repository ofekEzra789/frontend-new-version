import React, { useContext } from 'react';
import { Container } from 'reactstrap';
import WizardDotHeader from '../wizardDotHeader/wizardDotHeader';

import SendSmsStart from '../sendSmsStart/sendSmsStart';
import SmsPincodeAuth from '../smsPincodeAuth/smsPincodeAuth';
import RegisterWizardUserDetails from '../registerWizardUserDetails/registerWizardUserDetails';
import { RegisterFormContext } from '../../contexts/registerForm.context';
import './volunteerRegisterWizard.scss';

function VolunteerRegisterWizard(props) {

    const { formView: stage, smsSent } = useContext(RegisterFormContext);
    const wizardStages = ['אישור טלפוני', 'קצת עלי', 'פרטי משתמש', 'נתחיל לעבוד!'];
    return (
        <React.Fragment>
            <WizardDotHeader Stages={wizardStages} />
            <Container className='mt-5 text-center'>
                {stage === 0 && (
                    <React.Fragment>
                        {!smsSent ? <SendSmsStart /> : <SmsPincodeAuth />}
                    </React.Fragment>
                )}
                {stage === 1 && (
                    <RegisterWizardUserDetails />
                )}
            </Container>
        </React.Fragment>
    )
};
export default VolunteerRegisterWizard;

