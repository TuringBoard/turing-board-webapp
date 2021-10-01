import { Fragment, useEffect, useState } from 'react';
import classes from './Throttle.module.css';
import GaugeChart from 'react-gauge-chart';
import './Throttle.scss';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../store/auth-context';

const db = getFirestore();

const Throttle = () => {
    const [throttle, setThrottle] = useState(0);
    const [firstName, setFirstName] = useState("");
    const colors = Array(30).fill("#FFFFFF")
    const { uid } = useAuth();
    const onThrottleHandler = (event) => {
        let value = event.target.value;
        if (value < 0) {
            value = 0
        }
        setThrottle(value);
    }

    const resetSpeed = () => {
        setThrottle(0)
    }

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
            <div style={{ overflow: "hidden" }}>
                <div className={classes.backdrop}></div>
                <div className={classes.gauge}>
                    <GaugeChart id="speedometer"
                        nrOfLevels={30}
                        cornerRadius={3}
                        percent={throttle / 20}
                        arcPadding={0.021}
                        arcWidth={0.05}
                        colors={colors}
                        formatTextValue={value => ''}
                        className={classes.gauge}
                    />
                    <p className={classes.gaugeReading}>{throttle} mph</p>
                    <p className={classes.odo}>Odometer</p>
                    <div className={classes.gaugeFooter}>
                        <div>☁️ &nbsp; 85 &#176; F</div>
                        <div>TRIP: 0.0 mi</div>
                    </div>

                    <div className={classes.throttle}>
                        <input id="throttle"
                            type="range"
                            min="-5"
                            max="18"
                            step="0.125"
                            value={throttle}
                            onChange={onThrottleHandler}
                            onTouchEnd={resetSpeed}
                        />
                    </div>
                </div>
                <div className={classes.welcome}>
                    <p>Welcome, {firstName}!</p>
                </div>
            </div>
        </Fragment >
    );
}

export default Throttle;