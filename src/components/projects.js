import React, { Component } from 'react';
import { Tabs, Tab, Cell, Grid, Card, CardTitle, CardText, CardMenu, CardActions, Button, IconButton } from 'react-mdl';
import HTML from './HTML5.jpg';
import BOOT from './Boot.jpg';
import MANGO from './mangodb3.jpg';

class Projects extends Component {
	constructor(props) {
		super();
		this.state = { activeTab: 0 };
	}
	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className="project-grid">
					{/*HTML Project #1 */}
					<Card shadow={5} style={{ width: '370px', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '200px',
								background: `url(${HTML})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover'
							}}
						>
							React Project #1
						</CardTitle>
						<CardText>Le Lorem Ipsum est simplement du faux texte employé dans la composition</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					{/*HTML Project #2 */}
					<Card shadow={5} style={{ width: '370px', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '200px',
								background: `url(${HTML})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover'
							}}
						>
							React Project #2
						</CardTitle>
						<CardText>Le Lorem Ipsum est simplement du faux texte employé dans la composition</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					{/*HTML Project #3 */}
					<Card shadow={5} style={{ width: '370px', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '200px',
								background: `url(${HTML})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover'
							}}
						>
							React Project #3
						</CardTitle>
						<CardText>Le Lorem Ipsum est simplement du faux texte employé dans la composition</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div className="project-grid">
					{/*bootstrap Project #1 */}
					<Card shadow={5} style={{ width: '370px', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '200px',
								background: `url(${BOOT})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat'
							}}
						>
							React Project #1
						</CardTitle>
						<CardText>Le Lorem Ipsum est simplement du faux texte employé dans la composition</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<div className="project-grid">
					{/*React Project #1 */}
					<Card shadow={5} style={{ width: '370px', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '200px',
								background: 'url(https://plint-sites.nl/images/expertise/react.jpg) center / cover'
							}}
						>
							React Project #1
						</CardTitle>
						<CardText>Le Lorem Ipsum est simplement du faux texte employé dans la composition</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					{/*React Project #2 */}
					<Card shadow={5} style={{ width: '370px', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '200px',
								background: 'url(https://plint-sites.nl/images/expertise/react.jpg) center / cover'
							}}
						>
							React Project #2
						</CardTitle>
						<CardText>Le Lorem Ipsum est simplement du faux texte employé dans la composition</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 3) {
			return (
				<div className="project-grid">
					{/*bootstrap Project #1 */}
					<Card shadow={5} style={{ width: '370px', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '200px',
								background: `url(${MANGO})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat'
							}}
						>
							Project #1
						</CardTitle>
						<CardText>Le Lorem Ipsum est simplement du faux texte employé dans la composition</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>HTML/CSS</Tab>
					<Tab>Bootstrap</Tab>
					<Tab>React</Tab>
					<Tab>MongoDB</Tab>
				</Tabs>

				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}
export default Projects;
