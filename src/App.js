import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useState } from 'react';
const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({});
  const providerGoogle = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, providerGoogle)
      .then(result => {
        const user = result.user
        setUser(user);
      }).catch(error => {
        console.log(error);
      })
  }
  return (
    <div >
      <h1>Practicing Google Firebase Authentication</h1>
      <button onClick={handleGoogleLogin}>Log In with Google</button>
      <p>Name:{user.displayName} </p>
    </div>
  );
}

export default App;
