import React, {Component} from 'react'
import './Portfolio.css'
import PositionsComponent from './Positions/Positions';
import ProjectsComponent from './Projects/Projects';

class PortfolioComponent extends Component {
	render() {
		return (<div className="portfolio-wrapper">
			<div className="_header">
				Portfolio
			</div>
			<div className="positions-wrapper">
				<PositionsComponent />
			</div>
			<div className="projects-wrappper">
				<ProjectsComponent />
			</div>
		</div>)
	}
}

export default PortfolioComponent