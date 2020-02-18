import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Textfield } from 'react-mdl';

class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<h1>Contact Me</h1>

				<Grid className="contact-grid">
					<Cell col={4}>
						<h4>Contact info</h4>
						<div className="content-list">
							<List>
								<ListItem>
									<ListItemContent style={{ fontSize: '16px', color: ' #59666d' }}>
										<i class="fa fa-map-marker" aria-hidden="true" />
										1,Rue 8225 cité khadra -1003
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '16px', color: ' #59666d' }}>
										<i class="fa fa-envelope" aria-hidden="true" />
										amine.kerchaoui93@gmail.com
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '16px', color: ' #59666d' }}>
										<i class="fa fa-phone" aria-hidden="true" />
										(+216)93492512
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '16px', color: ' #59666d' }}>
										<i class="fa fa-globe" aria-hidden="true" />
										WWW.Amine.kerchaoui.COM
									</ListItemContent>
								</ListItem>
							</List>
						</div>
						<h5>Follow Me</h5>
						<div className="follow-icon">
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i class="fa fa-facebook" aria-hidden="true" />
							</a>
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i class="fa fa-instagram" aria-hidden="true" />
							</a>
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i class="fa fa-github" aria-hidden="true" />{' '}
							</a>
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i class="fa fa-linkedin" aria-hidden="true" />
							</a>
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i class="fa fa-snapchat-ghost" aria-hidden="true" />
							</a>
						</div>
					</Cell>
					<Cell col={8} style={{ paddingLeft: '30px' }}>
						<p>Name</p>
						<Textfield onChange={() => {}} label="Taper your name..." style={{ width: '700px' }} />
						<p>Phone Number</p>
						<Textfield onChange={() => {}} label="Type your phone number..." style={{ width: '200px' }} />

						<p>Email</p>
						<Textfield onChange={() => {}} label="Type your email address..." style={{ width: '400px' }} />

						<p>Your message</p>
						<Textfield onChange={() => {}} label="Type your message..." style={{ width: '700px' }} />
					</Cell>
				</Grid>
			</div>
		);
	}
}
export default Contact;
