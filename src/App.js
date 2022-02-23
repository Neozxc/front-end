import { useState } from "react";
import { fetchRequest, fetchDelete, fetchUpdate, fetchList } from './utils';
import { FrontPage } from './components/frontPage';
import { Route, Routes } from 'react-router-dom';
import { Messages } from './components/messagePage';

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
      {/* Front page */}
      {/* <FrontPage /> */}

      {/* <h1>{user ? `Welcome ${user}` : `Please sign up`}</h1> */}
      {/* <form onSubmit={submitHandler}>
        <input onChange={(e) => setUsername(e.target.value)} />
        <input onChange={(e) => setEmail(e.target.value)} />
        <input onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Sign up</button>
      </form> */}
      {/* <form onSubmit={submitDelete}>
        <button type='submit'>Delete</button>
      </form> */}
      {/* <form onSubmit={submitUpdate}>
        <button type='submit'>Update</button>
      </form> */}
      <form onSubmit={submitList}>
        {/* <button type='submit'>List</button> */}
      </form>


      <Routes>
        <Route path="/" element={<FrontPage />} exact/>
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </div>
  );
}

export default App;
