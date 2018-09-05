import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
      =>1. Đã thử edit file ngay trên Github và xem web chạy được không
      Kết quả không thấy cập nhật trên GUi
      =>2. cập nhật lại dưới local rồi commit và npm run deploy xem có thay đổi không
        </p>
      </div>
    );
  }
}

export default App;
