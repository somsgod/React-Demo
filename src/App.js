import React,{Component} from "react";
import {LightningButton} from "./components";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  buttonClass: {
    margin: 8,
  },
});

const App = () => {
	
	const classes = useStyles();
	
	const mockData = [
		{'buttonColor':'primary','buttonText' : 'Button 1'},
		{'buttonColor':'secondary','buttonText' : 'Button 2'},
		{'buttonColor':'default','buttonText' : 'Button 3'},
	];
	
    return (
		<>
			{mockData.map((value, index) => 
				<LightningButton key={index} buttonClass={classes.buttonClass} buttonColor={value.buttonColor}> {value.buttonText} </LightningButton>
			)}
		</>
	);
};


export default App;