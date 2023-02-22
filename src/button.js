import React from "react";
class Calculate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            r:2,
            h:3,
            Pi:3.14,
            num:0.33

        };
    }
    b1=()=>{
        this.setState({r:1});
    }
    b2=()=>{
        this.setState({h:5})
    }
    b3=()=>{
        this.setState({Pi:4})
    }
    b4=()=>{
        this.setState({num:0.22})
    }
    
    render(){
        return(
        <>
        <button onClick={this.b1}>change_b1</button><br></br>
        <button onClick={this.b2}>change_b2</button><br></br>
        <button onClick={this.b3}>change_b3</button><br></br>
        <button onClick={this.b4}>change_b4</button><br></br>
        
        
        <h1>The Result is:{this.state.num*this.state.Pi*this.state.r*this.state.r*this.state.h}</h1>
        <h1>Value of r:{this.state.r}</h1>
            <h1>Value of h:{this.state.h}</h1>
            <h1>Value of Pi:{this.state.Pi}</h1>
            <h1>Value of num:{this.state.num}</h1>
    
        </>
        );
    }
}
export default Calculate;
