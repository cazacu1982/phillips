import React, {Component} from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import Start from './components/Start';
import Step1 from './components/Step1';
import Inscriere from './components/Inscriere';
import Final from './components/Final';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
 
    componentDidMount() {}

        render()
        {
            return (
            <Router>
                <div>
                    <Route exact path='/' component={Start} />
                    <Route path='/step1' component={Step1} />
                    <Route path='/inscriere' component={Inscriere} />
                    <Route path='/final' component={Final} />
                    
                </div>
            </Router>
            );
        }
    }
