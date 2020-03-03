import React from "react";
import Button from '@material-ui/core/Button';

const LightningButton = (props) => {
	console.log();
	const  {
		buttonClass,
		buttonColor,
		buttonText
	} = props;
	
	return(
		<Button 
			type="button" 
			variant="contained"
			color={buttonColor}
            className={buttonClass}
        >
			{props.	children}
        </Button>
	)
};

export default LightningButton;