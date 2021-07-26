import "@fontsource/indie-flower";
import React from 'react';
import './App.css';
import Header from "./components/Header";
import Routes from './routes';

function App() {
  return (

    <div>
      <header>
        <Header />
      </header>
      <main className="App-Main">
        <Routes />
      </main>

    </div>

  );
}

export default App;
