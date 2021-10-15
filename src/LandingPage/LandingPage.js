import { Fragment, useState } from 'react';
import classes from './LandingPage.module.css';
import Login from '../Credentials/Login';
import logo from '../assets/graphics/logos/v1/1x/Asset 2.png';
import LandingBg from './LandingBg';
import SignUp from '../Credentials/SignUp';

const LandingPage = () => {

    const onCreateUserHandler = () => {
        setContent(<SignUp />)
    }

    const [content, setContent] = useState(<Login content={onCreateUserHandler} />);

    return (
        <Fragment>

            <LandingBg />
            <div>
                <div className={classes.main}>
                    <img src={logo} className={classes.logo} alt="logo" />
                    {content}
                </div>
            </div>

        </Fragment>
    )
}

export default LandingPage;