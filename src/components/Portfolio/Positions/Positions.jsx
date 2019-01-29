import React, {Component} from 'react'
import './Positions.css'
import { Card, Menu, Table, Tag } from 'antd';



class PositionsComponent extends Component {
	
	render() {
		const SubMenu = Menu.SubMenu;

		const columns = [{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: text => <a href="javascript:;">{text}</a>,
		  },
		  {
			title: '% of portfolio',
			dataIndex: 'portfolioPercent',
			key: 'portfolioPercent',
		  }, {
			title: 'Est.value of shares',
			dataIndex: 'EVOS',
			key: 'EVOS',
		  }, {
			title: 'Position total',
			key: 'totalPosition',
			dataIndex: 'totalPosition'
		  }];
		  
		  const REOData = [{
			key: '1',
			name: 'Income eREIT',
			portfolioPercent: '28.2%',
			EVOS: '$23,609.12',
			totalPosition: '$23,692.66'
		  }, {
			key: '2',
			name: 'Growth eREIT',
			portfolioPercent: '13.7%',
			EVOS: '$11,447.62',
			totalPosition: '$11,478.70',
		  }
		];

		const FIPOData = [
			{
				key: '1',
				name: 'Income eREIT',
				portfolioPercent: '28.2%',
				EVOS: '$23,609.12',
				totalPosition: '$23,692.66'
			  }, {
				key: '2',
				name: 'Growth eREIT',
				portfolioPercent: '13.7%',
				EVOS: '$11,447.62',
				totalPosition: '$11,478.70',
			  }
		]
		  
		return (<div className="positions-wrapper">
			<Card
				title="Positions"
				style={{ width: 680 }}
				>
				<div className="menu-wrapper">
					<Table columns={columns} pagination={{position: "none"}} />
 					<Menu
						onClick={this.handleClick}
						defaultSelectedKeys={[]}
						defaultOpenKeys={['sub1']}
						mode="inline">
						<SubMenu key="sub1" title={<span>Real estate offerings</span>}>
							<Table columns={columns} dataSource={REOData} pagination={{position: "none"}} className="no-columns"/>
						</SubMenu>

						<SubMenu key="sub2" title={<span>Fundrise IPO</span>}>
							<Table columns={columns} dataSource={FIPOData} pagination={{position: "none"}} className="no-columns"/>
						</SubMenu>
					</Menu> 
				</div>
			</Card>
		</div>)
	}
}

export default PositionsComponent