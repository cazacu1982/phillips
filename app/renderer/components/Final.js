import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import styles from './Final.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Final extends Component {
    constructor (props) {
        super(props);
        this.state= {
            redirect: false
        }
    }

    render() {
        return (
            <div className={styles.bgFinal} style={{backgroundImage: 'url("./assets/images/bgFinal.png")'}}>
                <h1>Înscrierea a fost înregistrată. Mult succes!</h1>
                <p className={styles.finalP}>Mulțumim pentru participare, continuă să-ți îndrepți atenția
                    spre ceea ce contează, ca să reții doar ce e important.
                </p>
                {this.state.redirect && <Redirect to="/"/>}
            </div>
        );
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({redirect: true});
        }, 5000);
    }
}
