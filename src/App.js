import logo from './assets/images/logo.svg';
import {Button} from "antd";
import 'antd/dist/antd.css';
import './assets/css/App.css';

//引入组件
//import Todolist from './components/Todolist';
function App() {
  return (
      <div className="App">
        <Button type="primary">按钮</Button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;

/* 
 

*/
