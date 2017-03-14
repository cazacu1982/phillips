import React from "react";


// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.PureComponent {

  static propTypes = {

  };

  render() {
    return (
      <div className="intro">
          <p>Antrenează-ți memoria pentru a reține ceea ce contează! Fiindcă, dincolo de obiective,
            realizări și satisfacții, un lucru esențial nu ar trebui să ne scape: viața are culoare.
          </p>
          <button>Start</button>
          <img src="../../assets/images/Philips_Becuri.png"/>
      </div>
    );
  }

}
