
import React from 'react';
// import './Person.css';
import styled from 'styled-components';
import classes from './Person.module.css';
// import Radium from 'radium';

const StyledDiv = styled.div`

            width: 60%;
            margin: 16px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;


        @media(min-width: 500px){
            width: 450px;
        } 
`;
const person = (props) => {
    // const style = {
    //     '@media (min-width:500px)' : {
    //         width: '450px'
    //     }
    // };
    return (
        <div className={classes.Person}>
          
            <p onClick={props.click}>I'm a {props.name} and I am {props.age}</p>
            <p> {props.children} </p>
            <input type="text" onChange={ props.change } value={props.name}/>  
        </div>
        // <StyledDiv>
        //     <p onClick={props.click}>I'm a {props.name} and I am {props.age}</p>
        //     <p> {props.children} </p>
        //     <input type="text" onChange={ props.change } value={props.name}/>
        // </StyledDiv>
    )
}

export default person;
// class Person extends Component{
//     render(){
//         return (

//         )
//     }
// }