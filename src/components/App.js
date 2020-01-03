import React from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import { withFirebase } from './Firebase';

import Header from './Header';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import HomePage from './Home';
import VideoPlayer from './VideoPlayer';
import Footer from './Footer';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			authUser: null,
		};
	}

	componentDidMount() {
		this.listener = this.props.firebase.auth.onAuthStateChanged(
			authUser => {
				authUser
					? this.setState({ authUser })
					: this.setState({ authUser: null });
			});
	}

	componentWillUnmount() {
		this.listener();
	}

	render() {
		return (
			<Router>
				<div>
					<Header authUser={this.state.authUser} />
					{/* '/' route should have Landing page for non-auth users */}
					<Route exact path={'/'} component={HomePage} />
					<Route path={'/signup'} component={SignUpPage} />
					<Route path={'/signin'} component={SignInPage} />
					<Route path={'/home'} component={HomePage} />
					<Route path={'/videos/:id'} component={VideoPlayer} />
				</div>
				<Footer />
			</Router>
		);
	}
}

export default withFirebase(App);