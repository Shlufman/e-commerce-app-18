import React from 'react';

import './App.css';

import Header from './module/header/presentation/Header';
import Menu from './module/menu/presentation/Menu';
import MenuContainer from './module/menu/presentation/MenuContainer';
import Main from './module/main/Main';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
            </header>
            <Main/>
        </div>
    );
}

export default App;
