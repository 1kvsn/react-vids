import React from 'react';
import { Icon } from 'antd';

export default class Footer extends React.Component {


	render() {
		return (
			<section className="footer-container">
				<div className="footer">
					<p>Follow me on</p>
					<a href="https://www.linkedin.com/in/kvsn/" >
						<Icon 
							type="linkedin" 
							style={{
								fontSize: '22px',
								color: '#0077b5'
							}} />
					</a>
					<a href="https://github.com/1kvsn/react-vids/" >
						<Icon 
							type="github" 
							style={{
								fontSize: '22px',
								color: '#24292e'
							}} />
					</a>
					<a href="https://twitter.com/kvsn_1" >
						<Icon 
							type="twitter" 
							style={{
								fontSize: '22px',
								color: 'rgba(29,161,242,1.00)'
							}} />
					</a>
				</div>
			</section>
		)
	}
}