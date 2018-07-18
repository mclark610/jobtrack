import React, { Component } from 'react';
import {Cell} from 'react-foundation';

import '../common/foundation.min.css';

class Text extends Component {
    constructor() {
        super();
      this.state = {value: ''}
      this.change = this.change.bind(this)
    }

    change(event) {
      this.setState({value: event.target.value.replace(/[^0-9]/ig, '')})
    }

    render() {
      return (<Cell>
         <input type="text"
          onChange={this.change}
          placeholder="123456"
          value={this.state.value}/>
        <br/>
        <span>{this.state.value.length>0 ? 'You entered: ' +
         this.state.value: ''}</span>
      </Cell>);
    }
}

export default Text;
