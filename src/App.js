import './App.css';
import ListaTareas from './components/ListaTareas';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebaseConfig'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useState } from 'react';
import { useUser } from './hooks/useUser'

const firebaseApp = initializeApp(firebaseConfig);

function App() {
  const [ errorMessage, setErrorMessage] = useState('')
  const { user, setUser } = useUser();
  const handleLoggin = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth(firebaseApp)
    signInWithPopup(auth, provider)
      .then(useCredentials => {
        console.log(`Welcome ${useCredentials.user.displayName}`)
        setUser({ name: useCredentials.user.displayName, profileImage: useCredentials.user.photoURL })
      }).catch(error => {
        setErrorMessage(error.message)
      })
  }
  return (
    <Router>
      <Header 
      click={handleLoggin}
      error={errorMessage}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tareas" element={<ListaTareas/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
