import { Fragment } from "react/cjs/react.production.min";
import Backdrop from "../Backdrop/Backdrop";
import classes from './Desktop.module.css';
import logo from '../assets/graphics/logos/v1/1x/Asset 2.png';

const Desktop = () => {
    return (
        <Fragment>
            <Backdrop />
            <img src={logo} className={classes.logo} alt="logo" />
            <div className={classes.mainText}>
                <h1>The Turing Board</h1>
                <p>The Turing Board is a concept autonomous longboard that is able to exhibit self-driving capabilities using computer vision.</p>
                <p>
                    This project is being carried out by the following members as part of the
                    CSE-4316-003/009 Senior Design instructed by Dr. Chris Conly under the
                    Department of Computer Science and Engineering at the University of Texas at Arlington.
                    <ul>
                        <li>Happy Ndikumana</li>
                        <li>Keaton Koehler</li>
                        <li>Kendall Buchanan</li>
                        <li>Lydia Sarver</li>
                        <li>Sarker Nadir Afridi Azmi</li>
                        <li>Sahaj Amatya</li>
                    </ul>
                </p>
                <p className={classes.warning}>To take advantage of the software behind this device, please visit this website from a handheld mobile device.
                    Thank you.
                </p>
            </div>
        </Fragment>
    );
};

export default Desktop;