import './App.css';
import { useState } from "react";
import { fetchRequest, fetchDelete, fetchUpdate, fetchList } from './utils';

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

  const submitDelete = (e) => {
    e.preventDefault();
    fetchDelete(setUser, username);
  };
  const submitUpdate = (e) => {
    e.preventDefault();
    fetchUpdate(setUser, username);
  };
  const submitList = (e) => {
    e.preventDefault();
    fetchList(setUser, username, email, password);
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
      <form onSubmit={submitDelete}>
  {/* Because our button is now in form we change type to submit */}
        <button type='submit'>Delete</button>
      </form>
      <form onSubmit={submitUpdate}>
  {/* Because our button is now in form we change type to submit */}
        <button type='submit'>Update</button>
      </form>
      <form onSubmit={submitList}>
  {/* Because our button is now in form we change type to submit */}
        <button type='submit'>List</button>
      </form>
    </div>
  );
}

export default App;
