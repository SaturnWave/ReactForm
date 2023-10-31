import React from 'react';
import './App.css';
import ShopProductForm from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Shop & Product Management</h1>
      </header>
      <main>
        <ShopProductForm />
      </main>
      <footer className="App-footer">
        <p>Thank you for using our platform!</p>
      </footer>
    </div>
  );
}

export default App;
