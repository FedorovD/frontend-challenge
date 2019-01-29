import React, {Component} from 'react'
import './Project.css'
import { Card } from 'antd';


class ProjectComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (<div className="project-wrapper">
					<div className="image-wrapper">
						<img src={__dirname + this.props.data.imagePath} alt=""/>
					</div>
					<div className="project-info-wrapper">
						<div className="title">
							{this.props.data.title}
						</div>
						<div className="sub-title">
							{this.props.data.subtitle}
						</div>
						<div className="row-wrapper">
							<div className="_rating">
								<div className="rating-title">
									Rating
								</div>
								<div className="value">
									{this.props.data.rating}
								</div>	
							</div>
							<div className="_structure">
								<div className="structure-title">
									Structure
								</div>
								<div className="value">
									{this.props.data.structure}
								</div>
							</div>
							<div className="_projected-return">
							<div className="projected-return-title">
									Projected return
								</div>
								<div className="value">
									{this.props.data.projectedReturn}
								</div>
							</div>
						</div>
					</div>
				</div>)
	}
}

export default ProjectComponent