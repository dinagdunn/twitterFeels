import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Map from "./components/Map";
import DataView from "./components/DataView";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
            
                    <header className="App-header">
                        <h1 className="App-title">Twitter Feels</h1>
                    </header>
                        <Route exact path="/" component={Map} />
                        <Route path="/Data" component={DataView} />
                        
                </div>
            </Router>

        );
    }
}

export default App;