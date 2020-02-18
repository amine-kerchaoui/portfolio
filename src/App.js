import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="demo-big-content">
				<Layout>
					<Header
						style={{ background: 'white', boxShadow: '10px 1px 2px gray', fontFamily: 'lato' }}
						className="header-color"
						title={
							<Link style={{ textDecoration: 'none', color: '#002171', fontSize: '30px' }} to="/">
								A'K.
							</Link>
						}
						scroll
					>
						<Navigation>
							<Link to="/resume" style={{ color: '#002171' }}>
								Resume
							</Link>
							<Link to="/aboutme" style={{ color: '#002171' }}>
								About Me
							</Link>
							<Link to="/projects" style={{ color: '#002171' }}>
								Projects
							</Link>
							<Link to="/contact" style={{ color: '#002171' }}>
								contact
							</Link>
						</Navigation>
					</Header>

					<Content>
						<div className="page-content" />
						<Main />
					</Content>
				</Layout>
			</div>
		);
	}
}

export default App;
