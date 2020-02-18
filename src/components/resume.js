import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Eduction from './eduction';
import Experience from './experience';
import Skills from './skills';
import AMine from './amine1.png';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: 'center' }}>
							<img
								src={AMine}
								alt="Amine"
								style={{
									height: '200px',
									border: '5px solid #1976d2',
									borderRadius: '50%',
									marginRight: '80px'
								}}
							/>
						</div>
						<h4 style={{ paddingTop: '2em' }}>Amine Kerchaoui</h4>
						<h4 style={{ color: 'grey' }}>Programmer</h4>
						<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
						</p>
						<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
						<h5>Address</h5>
						<p>1,Rue 8225 cité khadra -1003</p>
						<h5>Phone</h5>
						<p>(+216)93492512</p>
						<h5>Email</h5>
						<p>amine.kerchaoui93@gmail.com</p>
						<h5>Web Site</h5>
						<p>amine.kerchaoui.tn.com</p>
						<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h4>Education</h4>
						{/*  <Eduction /> to export eduction */}
						<Eduction
							startYear={2013}
							endYear={2014}
							schoolName="BAC-informatique"
							schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
						/>
						<Eduction
							startYear={2014}
							endYear={2017}
							schoolName="ESEN"
							schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
						/>
						<hr style={{ borderTop: '2px solid #e22947 ', width: '70%' }} />
						<h4>Experience</h4>
						<Experience
							startYear={2014}
							endYear={2014}
							job="el-baraka Bank"
							jobDescription="On sait depuis longtemps que travailler avec du texte lisible et contenant
							 du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.
							 L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte"
						/>
						<hr style={{ borderTop: '2px solid #e22947 ', width: '70%' }} />
						<h4>Skills</h4>

						<Skills skill="HTML" progress={100} />
						<Skills skill="CSS" progress={60} />
						<Skills skill="Bootstrap" progress={80} />
						<Skills skill="JavaScript" progress={60} />
						<Skills skill="React" progress={35} />
					</Cell>
				</Grid>
			</div>
		);
	}
}
export default Resume;
