import "./signupPage.css"
import { Link } from 'react-router-dom'

export const Signup = ({ props }) => {
	return (
		<div>
			<h2>Sign Up</h2>
			<form className="regform" onSubmit={props.handleSignup}>
				<input
					onChange={(e) => props.setEmail(e.target.value)}
					placeholder="Email"
				/>
				<input
					onChange={(e) => props.setUsername(e.target.value)}
					placeholder="Username"
				/>
				<input
					onChange={(e) => props.setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button type="submit">Sign Up</button>
                <Link to="/"><button>Go back to main page</button></Link>

			</form>
		</div>
	);
};
