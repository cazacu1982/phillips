import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import styles from './Start.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Start extends Component {
    constructor (props) {
        super(props);
    }

   /* static propTypes = {
        handleState: React.PropTypes.func
    };
*/
    render() {
        return (
            <div className={styles.intro} style={{backgroundImage: 'url("./assets/images/Philips_Becuri.png")'}}>
                <p>Antrenează-ți memoria pentru a reține ceea ce contează! Fiindcă, dincolo de obiective,
                    realizări și satisfacții, un lucru esențial nu ar trebui să ne scape: viața are culoare.
                </p>
                <Link to='/step1'><button>Start</button></Link>
            </div>
        );
    }
}
