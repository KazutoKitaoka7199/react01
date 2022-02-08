import React from "react";
import { List } from "./List";
import { Form } from "./Form";
import { initializeApp } from "firebase/app";
import { render } from "@testing-library/react";
const firebaseConfig = {
  apiKey: "AIzaSyByZKUtkmlvrSsJGDrw2WfRnkhbFZz8OM4",
  authDomain: "reactapp01-listapp.firebaseapp.com",
  projectId: "reactapp01-listapp",
  storageBucket: "reactapp01-listapp.appspot.com",
  messagingSenderId: "520838991472",
  appId: "1:520838991472:web:4f1e401e82e59b787aaeb5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { tab: 'list' };
  }
  render() {
    const { tab } = this.state;
    return (
      <div>
        <header>
          <ul>
            <li onClick={()=> this.setState({tab:'list'})}>リスト</li>
            <li onClick={()=> this.setState({tab:'form'})}>フォーム</li>
          </ul>
        </header>
        <hr/>
        {
          tab === 'list' ? <List /> : <Form />
        }
      </div>
    );
  }
}
export default App;
