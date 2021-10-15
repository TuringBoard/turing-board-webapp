import { Fragment, useState, useEffect } from 'react';
import classes from './Dashboard.module.css';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../store/auth-context';
import { NavLink } from 'react-router-dom';
import logo from '../assets/graphics/logos/v1/1x/Asset 2.png';

const db = getFirestore();

const Dashboard = () => {
    const [firstName, setFirstName] = useState("");
    const { uid } = useAuth();
    const onWarningHandler = () => {
        alert("This feature is currently under construction.")
    };

    useEffect(() => {
        async function getData() {
            const q = query(collection(db, "users"), where("id", "==", uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setFirstName(doc.data().firstName)
            });
        }
        getData();
    }, [uid]);

    return (
        <Fragment>
            <div className={classes.backdrop}></div>
            <div className={classes.main}>
                <img src={logo} className={classes.logo} alt="logo" />
                <div className={classes.welcome}>
                    <p>Hello, {firstName}!</p>
                </div>
                <p className={classes.message}>What would you like to do today?</p>
                <div className={classes.dashOptions}>
                    <div tabIndex="0" className={classes.dashOption} onClick={onWarningHandler}>
                        SUMMON BOARD
                    </div>
                    <div tabIndex="1" className={classes.dashOption} onClick={onWarningHandler}>
                        FOLLOW ME
                    </div>
                    <NavLink className={classes.dashOption} to="/throttle">
                        <div tabIndex="2">
                            GO FOR A RIDE
                        </div>
                    </NavLink>
                </div>
                <NavLink className={classes.navlink} to="/settings">
                    <div className={classes.settings}>
                        <p>Manage Settings ⚙️</p>
                    </div>
                </NavLink>
            </div>
        </Fragment>
    );
}

export default Dashboard;
