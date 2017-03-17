import React from "react";
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Start from './components/Start';
import Step1 from './components/Step1';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            showStart : true,
            showStep1 : false,
           
            showForm : false
        };
    }

  static propTypes = {};

    handleState() {
        this.setState({
            showStart : false,
            showStep1 : true
        });
    }

    componentDidMount() {
       // this.handleStep2();
    }
  render() {
    return (

        <div onClick = {this.handleState.bind(this)}>
            {this.state.showStart && <Start />}
            {this.state.showStep1 &&<Step1 />}
           
        </div>
    );
  }
}
