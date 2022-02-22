import './App.css';
import { useState } from "react";
import { fetchRequest } from './utils';

const App = () => {

  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const submitHandler = (e) => {
    // Stop from re-rendering.
    e.preventDefault();
    fetchRequest(setUser, username, email, password);
  };

  return (
    <div>
      <h1>{user ? `Welcome ${user}` : `Please sign up`}</h1>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setUsername(e.target.value)} />
        <input onChange={(e) => setEmail(e.target.value)} />
        <input onChange={(e) => setPassword(e.target.value)} />
  {/* Because our button is now in form we change type to submit */}
        <button type='submit'>Sign up</button>
      </form>
    </div>
  );
}

export default App;
