import React, { useContext } from 'react'
import { RegisterFormContext } from '../../contexts/registerForm.context';
import './wizardDotHeader.scss'



function WizardDotHeader(props) {
    const { formView: stage } = useContext(RegisterFormContext);

    return (
        <React.Fragment>
            <ul className="wizrdLine">
                {props.Stages.map((value, index) => (
                    <li key={value} className={stage === index ? 'active' : ''}>{value}</li>
                ))}
            </ul>
        </React.Fragment>
    )
};
export default WizardDotHeader;

