import React, {Component} from 'react'
import './Projects.css'
import { Card, Select, Radio, Icon, Pagination } from 'antd';
import ProjectComponent from './Project/Project';


class ProjectsComponent extends Component {
	render() {
		const Option = Select.Option;
		const RadioButton = Radio.Button;
		const RadioGroup = Radio.Group;

		const projectsData = [
			{
				title: 'Single-family rental house',
				subtitle: 'Los Angeles, CA',
				rating: 82,
				structure: 'Equity',
				projectedReturn: '5.3 - 10.8%',
				imagePath: ''
			},
			{
				title: 'Single-family rental house',
				subtitle: 'Los Angeles, CA',
				rating: 82,
				structure: 'Equity',
				projectedReturn: '5.3 - 10.8%',
				imagePath: ''
			},
			{
				title: 'Commercial renovation',
				subtitle: 'Los Angeles, CA',
				rating: 83,
				structure: 'Equity',
				projectedReturn: '6.2 - 13.5%',
				imagePath: ''
			},
			{
				title: 'Single-family rental house',
				subtitle: 'Los Angeles, CA',
				rating: 82,
				structure: 'Equity',
				projectedReturn: '5.3 - 10.8%',
				imagePath: ''
			},
			{
				title: 'Single-family rental house',
				subtitle: 'Los Angeles, CA',
				rating: 82,
				structure: 'Equity',
				projectedReturn: '5.3 - 10.8%',
				imagePath: ''
			},
			{
				title: 'Commercial renovation',
				subtitle: 'Los Angeles, CA',
				rating: 83,
				structure: 'Equity',
				projectedReturn: '6.2 - 13.5%',
				imagePath: ''
			},
			{
				title: 'Single-family rental house',
				subtitle: 'Los Angeles, CA',
				rating: 82,
				structure: 'Equity',
				projectedReturn: '5.3 - 10.8%',
				imagePath: ''
			},
			{
				title: 'Single-family rental house',
				subtitle: 'Los Angeles, CA',
				rating: 82,
				structure: 'Equity',
				projectedReturn: '5.3 - 10.8%',
				imagePath: ''
			},
			{
				title: 'Commercial renovation',
				subtitle: 'Los Angeles, CA',
				rating: 83,
				structure: 'Equity',
				projectedReturn: '6.2 - 13.5%',
				imagePath: ''
			}
		]

		return (<div className="projects-wrapper">
			<Card
				title="Projects"
				style={{ width: 680 }}
				>
				<div className="controls-wrapper">
					<div className="projects-number-wrapper">
						{147} active projects
					</div>

					<div>
						<div className="sort-wrapper">
							<Select defaultValue="ra" style={{ width: 160 }}>
								<Option value="ra">Recently acquired</Option>
								<Option value="lorem1">Lorem ipsum</Option>
								<Option value="lorem2">Lorem ipsum</Option>
							</Select>
						</div>

						<div className="view-wrapper">
							<RadioGroup defaultValue="a">
								<RadioButton value="a"><Icon type="appstore" /></RadioButton>
								<RadioButton value="b"><Icon type="bars" /></RadioButton>
								<RadioButton value="c"><Icon type="environment" /></RadioButton>
							</RadioGroup>
						</div>
					</div>
				</div>
				<div className="content-wrapper">
					{projectsData.map(project => {
						return (<ProjectComponent data={project}/>)
					})}
				</div>
				<div className="pagination-wrapper">
					<Pagination current={1} total={13} />
				</div>
			</Card>
		</div>)
	}
}

export default ProjectsComponent