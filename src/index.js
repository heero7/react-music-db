import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Home from './components/home';
import Artist from './components/artist';


// contains all the routes
const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Route path="/" component={Home}/>
                <Route path="/artist/:artistid" component={Home}/>
            </div>
        </BrowserRouter>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));