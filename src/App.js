import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useState } from 'react';
const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({});
  const providerGoogle = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider()

  // Google Log in button 
  const handleGoogleLogin = () => {
    signInWithPopup(auth, providerGoogle)
      .then(result => {
        const user = result.user
        setUser(user);
      }).catch(error => {
        console.log(error);
      })
  }
  // Handle Github login 
  const handleGithubLogin = () => {
    signInWithPopup(auth, providerGithub)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div >
      <h1>Practicing Google Firebase Authentication</h1>
      <button onClick={handleGoogleLogin}>Log In with Google</button>
      <button onClick={handleGithubLogin}>Log In with Github</button>
      <h1>Welcome {user.displayName}</h1>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
