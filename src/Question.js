import React from 'react';
import Typography from '@material-ui/core/Typography';
import Topology from './AWS.png';

function Question(props) {
	return (
		<div>
			<p style={{textAlign:'center'}}><img src={Topology} style={{width: 400}} alt='Topology' /></p>
			<Typography paragraph={true}>A junior cloud developer is trying to set up a web service solution as visualised by the figure above.</Typography>
			<Typography paragraph={true}>The developer has created a web application in Node.js. The web application is deployed automatically across a fleet of EC2 Auto Scaling instances running Amazon Linux 2. An Elastic Load Balancer is configured to load balance between the instances. The web applications state is stored in a DynamoDB table named WebServerDB.</Typography>
			<Typography paragraph={true}>The web application follows AWS Security Best Practices in regards to how it receives credentials for accessing DynamoDB.</Typography>
			<Typography paragraph={true}>When testing the solution, the developer notice that the web application can not access DynamoDB properly. The web application crashes whenever it tries to insert items into the WebServerDB-table. However, reading from the table work without any issues.</Typography>
			<Typography paragraph={true}>Use the shell to determine the cause of the web applications issues with DynamoDB. What is the most likely reason for the problems?</Typography>
		</div>
	);
	
}

export default Question;
