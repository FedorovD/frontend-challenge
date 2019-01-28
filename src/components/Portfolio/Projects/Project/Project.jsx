import React, {Component} from 'react'
import './Project.css'
import { Card } from 'antd';


class ProjectComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (<div className="project-wrapper">
					<div className="title">
						{this.props.data.title}
					</div>
				</div>)
	}
}

export default ProjectComponent