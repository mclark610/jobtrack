import React, {Component} from 'react';

import MainPage from './components/main_page';
import MainMenu from './components/main_menu';
import Recruiter from './components/recruiter';
import './App.css';

class App extends Component {
    componentDidMount() {
    }

    render() {
        return (<div className="App">
            <MainMenu/>
            <h2>Hi-diddly do, Mark! This is the starting place for you!</h2>
            <MainPage/> {/* <Recruiter/> */}
        </div>);
    }
}

export default App;
