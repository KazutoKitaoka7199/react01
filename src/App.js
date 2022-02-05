import './App.css';
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
  return (
    <div className='App'>
      <div>React入門</div>
    </div>
  );
}

export default App;
