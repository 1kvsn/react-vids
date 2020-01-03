import React from 'react';
import Navigation from './Navigation';
import { startIcon } from '../assets'

export default class Header extends React.Component {


	render() {
		return (
			<section className="header-container">
				<div className="header">
					<div className="logo">
						<img src={startIcon} alt="logo" />
						<h1>React-Vids</h1>
					</div>
					<Navigation authUser={this.props.authUser} />
				</div>
			</section>
		)
	}
}