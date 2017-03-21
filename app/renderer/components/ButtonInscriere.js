import React, {Component} from "react";
import style from './ButtonInscriere.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
export default class ButtonInscriere extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showMe: false
        };
    }

    static propTypes = {};

    stepInscriere() {
        setTimeout(() => {
            this.setState({ showMe : true});
        },10000);
    }

    render() {
        var button = null;
        if(this.state.showMe) {
        button = ( <Link to='/inscriere'><button className={style.button}>INSCRIE-TE</button></Link>)
        }
        return button;
    }
    componentDidMount() {
        this.stepInscriere();
    }
}
