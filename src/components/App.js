import React from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import { withFirebase } from './Firebase';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import HomePage from './Home';
import VideoPlayer from './VideoPlayer';

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
					<Navigation authUser={this.state.authUser} />
					<hr />
					<Route exact path={'/'} component={LandingPage} />
					<Route path={'/signup'} component={SignUpPage} />
					<Route path={'/signin'} component={SignInPage} />
					<Route path={'/home'} component={HomePage} />
					<Route path={'/videos/:id'} component={VideoPlayer} />
				</div>
			</Router>
		);
	}
}

export default withFirebase(App);