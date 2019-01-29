import React, {Component} from 'react'
import './Portfolio.css'
import PositionsComponent from './Positions/Positions';
import ProjectsComponent from './Projects/Projects';

import graphicsImg from '../../assets/activity.png';

class PortfolioComponent extends Component {
	render() {
		return (<div className="portfolio-wrapper">
			<div className="_header">
				Portfolio
			</div>
			<div className="portfolio-content-wrapper">
				<div>
					<div className="positions-wrapper">
						<PositionsComponent />
					</div>
					<div className="projects-wrappper">
						<ProjectsComponent />
					</div>
				</div>
				<div>
					<div className="graphics-wrapper">
						<img src={graphicsImg} alt=""/>
					</div>
				</div>
			</div>
		</div>)
	}
}

export default PortfolioComponent