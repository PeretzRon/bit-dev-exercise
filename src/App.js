import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Users from "./containers/Users/Users";

function App() {
    return (
        <div className="App">
            <Header/>
            <Users/>
        </div>
    );
}

export default App;
