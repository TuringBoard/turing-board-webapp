import { Fragment, useRef, useState } from 'react';
import classes from './Credentials.module.css';
import { useAuth } from '../store/auth-context';
import { useHistory } from 'react-router';

const SignUp = () => {
    const { signup, signupSuccess } = useAuth();
    const [submitted, setSubmitted] = useState(false);
    const [errorClass, setErrorClass] = useState(classes.inputBox);
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();

    let history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (passwordRef.current.value === confirmPasswordRef.current.value && (firstNameRef.current.value !== "" && lastNameRef.current.value !== "")) {
            setErrorClass(classes.inputBox);
            signup(emailRef.current.value, confirmPasswordRef.current.value, firstNameRef.current.value, lastNameRef.current.value);
            history.push("/dashboard");
        } else {
            if (firstNameRef.current.value !== null && lastNameRef.current.value !== null) {
                alert("First and Last names cannot be empty.")
            } else {
                setErrorClass(classes.inputBoxError);
            }
        }
    }

    const onSignInHandler = () => {
        window.location.reload(false);
    }
    return (
        <Fragment>
            <div className={classes.signup}>
                <div className={classes.header}>
                    <p><b>Create new account</b></p>
                </div>
                <div className={classes.form}>
                    <form>
                        <input className={classes.inputBox} type="text" placeholder="First Name" ref={firstNameRef} />
                        <input className={classes.inputBox} type="text" placeholder="Last Name" ref={lastNameRef} />
                        <div className={classes.gap}></div>
                        <input className={classes.inputBox} type="email" placeholder="E-mail Address" ref={emailRef} />
                        <div className={classes.gap}></div>
                        <input className={errorClass} type="password" placeholder="Password" ref={passwordRef} />
                        <input className={errorClass} type="password" placeholder="Confirm Password" ref={confirmPasswordRef} />
                        <div className={classes.gap}></div>
                        <button className={classes.submit} onClick={onSubmitHandler}><b>SIGN UP</b></button>
                    </form>
                    <div className={classes.footer}>
                        <u onClick={onSignInHandler}>Already have an account?</u>
                    </div>
                </div>
            </div>
            {(!signupSuccess && submitted) && <div className={classes.invalid}>
                Something went wrong, <br />please try again.
            </div>}
        </Fragment>
    );
}

export default SignUp;