import React from 'react';
import CalculatorTitle from './calculatortitle.js';
import OutputScreen from './outputscreen';
import Button from './buttons.js';

class Calculator extends React.Component {

  constructor() {
  super();
    this.state = {
        result: ''
    }
  this.handleClick = this.handleClick.bind(this);
}


    render()
    {
    return (
    <div className="frame">
        <CalculatorTitle value="React Calculator"/>
        <div className="mainCalc">
            <OutputScreen result = {this.state.result} />
            <div className="button-row">
                <Button label={'Clr'} handleClick = {this.handleClick}/>
                <Button label={'Del'} handleClick = {this.handleClick}/>
                <Button label={'.'}  handleClick = {this.handleClick}/>
                <Button label={'/'} handleClick = {this.handleClick}/>
            </div>
            <div className="button-row">
                <Button label={'7'} handleClick = {this.handleClick}/>
                <Button label={'8'} handleClick = {this.handleClick}/>
                <Button label={'9'} handleClick = {this.handleClick}/>
                <Button label={'*'} handleClick = {this.handleClick}/>
            </div>
            <div className="button-row">
                <Button label={'4'} handleClick = {this.handleClick}/>
                <Button label={'5'} handleClick = {this.handleClick}/>
                <Button label={'6'} handleClick = {this.handleClick}/>
                <Button label={'-'} handleClick = {this.handleClick}/>
            </div>
            <div className="button-row">
                <Button label={'1'} handleClick = {this.handleClick}/>
                <Button label={'2'} handleClick = {this.handleClick}/>
                <Button label={'3'} handleClick = {this.handleClick}/>
                <Button label={'+'} handleClick = {this.handleClick}/>
            </div>
            <div className="button-row">
                <Button label={'0'} handleClick = {this.handleClick} />
                <Button label={'='} handleClick = {this.handleClick}/>
                <Button label={'('} handleClick = {this.handleClick} />
                <Button label={')'} handleClick = {this.handleClick}/>
            </div>
        </div>
    </div>
    );
  }

  handleClick(event){

    const value = event.target.value;

    switch (value) {
      case '=': {       
            if(this.state.result!=='')
            {
    			var res='';
    		    try
                    {
                        res = eval(this.state.result);
                    }
    			catch(err)
                    {
                        this.setState({result: "Math Error"});
                    }
    			if(res===undefined)
    				this.setState({result: "Math Error"});
    			else
                    this.setState({ result: res});
    			break;
    		}
      }
      case 'Clr': {
        this.setState({result: 0 });
        break;
      }

	  case 'Del': {
	    var str = this.state.result;
  		str = str.substr(0,str.length-1);
  		this.setState({result: str});
  		break;
	  }

    default: {
        this.setState({ result: this.state.result += value})
        break;
      }
    }
  }

}

export default Calculator;
