import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { LANGUAGES } from "./const/Languages";
import { initializeApp } from "firebase/app";
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

function App() {
  const [tab,setTab] = useState('List');
  const [langs,setLangs] = useState(LANGUAGES);

  const addLang = (lang) => {
    setLangs([...langs,lang]);
    setTab('list');
  }

  return (
    <div className='App'>
      <div>
        <header>
          <ul>
            <li onClick={()=>setTab('List')}>リスト</li>
            <li onClick={()=>setTab('Form')}>フォーム</li>
          </ul>
        </header>
        <hr/>
        React入門
        {
          tab === 'List' ? <List langs={langs}/> : <Form onAddLang={addLang}/>
        }
      </div>
    </div>
  );
}

export default App;
