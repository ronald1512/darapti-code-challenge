import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Navbar } from '../components/Navbar/Navbar';
import {Task1Screen} from '../components/Task1Screen/Task1Screen';
import {Task2Screen} from '../components/Task2Screen/Task2Screen';
import {Task3Screen} from '../components/Task3Screen/Task3Screen';

export const AppRouter = () => { 
 
    return (
        <Router>
            <Navbar/>
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/task1" component={Task1Screen}/>
                    <Route exact path="/task2" component={Task2Screen}/>
                    <Route exact path="/task3" component={Task3Screen}/>
                    <Redirect to="/task1" />
                </Switch>
            </div>
        </Router>
    )
}
