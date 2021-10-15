import { Fragment } from 'react/cjs/react.production.min';
import Backdrop from '../Backdrop/Backdrop';
import classes from './NotFound.module.css';
import logo from '../assets/graphics/logos/v1/1x/Asset 2.png';

const NotFound = () => {
    return (
        <Fragment>
            <Backdrop />
            <img src={logo} className={classes.logo} alt="logo" />
            <p className={classes.para}>Page Not Found! :P</p>
        </Fragment>
    );
};

export default NotFound;