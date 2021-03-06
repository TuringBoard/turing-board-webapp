import { Fragment, useRef, useState } from "react";
import classes from './Credentials.module.css';
import { useAuth } from '../store/auth-context';

const Login = (props) => {
    const { login, loginSuccess } = useAuth();

    const [submitted, setSubmitted] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);
        login(emailRef.current.value, passwordRef.current.value);
    }

    const onWarningHandler = () => {
        alert("This feature is currently under construction.")
    };

    return (
        <Fragment>
            <div className={classes.login}>
                <div className={classes.header}>
                    <p><b>SIGN IN</b></p>
                </div>
                <div className={classes.form}>
                    <form>
                        <input className={classes.inputBox} type="email" placeholder="E-mail address" ref={emailRef} />
                        <input className={classes.inputBox} type="password" placeholder="Password" ref={passwordRef} />
                        <button className={classes.submit} onClick={onSubmitHandler}><b>LOG IN</b></button>
                    </form>
                </div>
                <div className={classes.footer}>
                    <u onClick={onWarningHandler}>Forgot Password?</u> or <u onClick={props.content}>Sign Up!</u>
                </div>
            </div>
            {(!loginSuccess && submitted) && <div className={classes.invalid}>
                Invalid email address or password, <br />please try again.
            </div>}
        </Fragment>
    );
}

export default Login;