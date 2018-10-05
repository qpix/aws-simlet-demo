import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Question from './Question';
import Answers from './Answers';
import Header from './header.jpg';

const styles = {
	card: {
		margin: '30px 100px',
		minWidth: 1200,
	},
	cardTable: {
		height: '100%',
	},
	column: {
		width: '50%',
		height: '100%',
		flexGrow: 1,
		border: '1px solid black',
	},
	terminal: {
		boxShadow: '5px 5px 10px black',
		width: '100%',
		height: '100%',
	},
	media: {
		height: 100,
		overflow:'auto'
	}
}

function SimpleCard(props) {
	const { classes } = props;

	return (
		<div>
			<Card className={classes.card} raised={true}>
					<CardMedia
						className={classes.media}
						image={Header}
						title='aws-simlet'
					/>
					<table className={classes.cardTable}>
						<tbody>
							<tr>
								<td style={{width:'50%'}}>
									<CardContent>
										<Question />
										<Answers />
									</CardContent>
								</td>
								<td style={{width:'50%',height:'100%',padding:20}}>
									<iframe title="terminal" className={classes.terminal} width="100%" height="100%" frameBorder="0" src="http://aws-simlet.s3-website-us-east-1.amazonaws.com/demo-build/"></iframe>
								</td>
							</tr>
						</tbody>
					</table>
			</Card>
			<div style={{textAlign:'center'}}>
			<Typography paragraph={true}>Copyright 2019 &copy; Christian Åberg</Typography>
			<Typography paragraph={true}><a href="https://pixabay.com/en/fall-autumn-red-season-woods-1072821/">Header image</a> released under CC0 Creative Commons</Typography>
			</div>
		</div>
	);
	
}

export default withStyles(styles)(SimpleCard);
