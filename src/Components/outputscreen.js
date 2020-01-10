import React from 'react'; 

const OutputScreen = (props) => { 
return ( 
	<div className="screen-row"> 
	    <input type="text" readOnly value={props.result}/>   
	</div> 
    ) 
} 

export default OutputScreen; 
