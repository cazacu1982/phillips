import React from "react";
import Start from './components/Start';
import Step1 from './components/Step1';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            showStart : true,
            showStep1 : false,
            showStep2 : false,
            showForm : false
        };
        this.handleState = this.handleState.bind(this);
    }

  static propTypes = {};

    handleState() {
        this.setState({
            showStart : false
        });
    }
    componentDidMount() {
        this.handleState();
    }

  render() {
    return (
        <div>
            {this.state.showStart && <Start  /> }
            {this.state.showStep1 &&<Step1 />}
        </div>
    );
  }

}
