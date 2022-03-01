import { useState } from "react";
import { fetchSignup } from './utils';
import { FrontPage } from './components/frontPage';
import { Route, Routes } from 'react-router-dom';
import { Messages } from './components/messagePage';
import { Signup } from "./components/signupPage";

const App = () => {

	const [user, setUser] = useState();
	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleSignup = async (e) => {
		e.preventDefault();
		fetchSignup(setUser, email, username, password);
	};

  return (
    <div>

      <Routes>
        <Route path="/" element={<FrontPage />} exact/>
        <Route path="/messages" element={<Messages />} />
        <Route path="/register" element={<Signup props={{ handleSignup, setEmail, setUsername, setPassword }} />} />
      </Routes>
    </div>
  );
}

export default App;
