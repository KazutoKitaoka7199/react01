import { useState } from "react";
import { List } from "./list";
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
  const [description,setDescrition] = useState('クリック前の表示');
  
  const changeDescription = () => {
    setDescrition('クリック後の表示です。');
  }
  
  return (
    <div className='App'>
      <div>
        React入門
        { description }
        <List title="取り扱い言語一覧"/>
        <button onClick={changeDescription}>ボタン</button>
      </div>
    </div>
  );
}

export default App;
