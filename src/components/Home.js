import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Amine from './amine2.png';

class Landing extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto', height: '100%', backgroundColor: '#fafafa' }}>
				<Grid className="landing-grid">
					<Cell col={4}>
						<h1>Welcome</h1>
						<h2>I'm Amine </h2>
						<p>Junior web developer</p>
						<div className="div2">
							<a href="/LandingPage">Hire Me</a>
						</div>
					</Cell>
					<Cell col={8}>
						<img src={Amine} alt="amine" style={{ width: '600px', paddingLeft: '50px' }} />
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;
