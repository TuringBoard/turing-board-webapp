import { Fragment } from 'react/cjs/react.production.min';
import classes from './Settings.module.css';
import Backdrop from '../Backdrop/Backdrop';
import { useAuth } from '../store/auth-context';
const Settings = () => {
    const { logout } = useAuth();
    const onLogoutHandler = () => {
        logout();
    }
    return (
        <Fragment>
            <Backdrop />
            <div className={classes.goback} onClick={onLogoutHandler}>
                LOG OUT
            </div>
        </Fragment>
    );
};

export default Settings;