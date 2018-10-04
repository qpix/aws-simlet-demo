import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class Answer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			value: null,
			color: 'primary',
			message: 'TRY YOUR LUCK...',
		};
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	submit = () => {
		if (this.state.value === '3')
			this.setState({
				color: 'default',
				message: 'CERTIFICATION PASSED...'
			});
		else
			this.setState({
				color: 'secondary',
				message: 'TRY AGAIN...'
			});
		
	};

	render() {
		return (
			<FormControl>
				<FormLabel>Answer</FormLabel>
				<RadioGroup
					name="answer"
					value={this.state.value}
					onChange={this.handleChange}
				>
					<FormControlLabel
						value="1"
						label="The administrator needs to change the active role for the EC2 instances."
						control={<Radio color="primary" />}
					/>
					<FormControlLabel
						value="2"
						label="The instances security group is dropping DynamoDB packets."
						control={<Radio color="primary" />}
					/>
					<FormControlLabel
						value="3"
						label="The Auto Scaling Groups Launch Configuration contains an IamInstanceProfile with insufficient permissions."
						control={<Radio color="primary" />}
					/>
					<FormControlLabel
						value="4"
						label="The administrator needs to increase the WriteCapacityUnits of the WebServerDB-table in DynamoDB."
						control={<Radio color="primary" />}
					/>
					<FormControlLabel
						value="5"
						label="The administrator needs to increase the WriteCapacityUnits of the VerySecretTable-table in DynamoDB."
						control={<Radio color="primary" />}
					/>
				</RadioGroup>
				<Button variant="contained" color={this.state.color} style={{marginTop:15}} onClick={() => {this.submit();}}>
					{this.state.message}<Icon>send</Icon>
				</Button>
			</FormControl>
		);
	}
}

export default Answer;
