import React, { Component } from 'react';
import './App.css';
import Callout from './components/callout';

class App extends Component {
  render() {
    return (
      <div className="cs-container">

        <Callout heading="Lorem ipsum" text="In a vulputate arcu. Donec rutrum sapien nisi, et laoreet justo ullamcorper sit amet. Nam commodo sit amet nisi eu iaculis. Phasellus pharetra nibh ac libero auctor egestas non non ex. Nunc at fringilla metus, ut elementum erat. Ut vulputate suscipit magna ut porta. Curabitur sit amet dolor ullamcorper, maximus tortor nec, ullamcorper nisi."/>

      </div>
    );
  }
}

export default App;
