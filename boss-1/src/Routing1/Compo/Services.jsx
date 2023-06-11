import React,{Component} from 'react';

class Services extends Component
{
    render()
    {

        let styl = {
           backgroundColor:"green",
            padding:"20px",
            margin:"20px",
            fontFamily:"Sans-Serif",
            fontSize:"8rem",
            color:"blue"
        };
        return(
            <>
                <h2 style={styl}>   All kinds of complete photography.., </h2>
                <hr />
                <select name="" id="">
                    <option value=""> Wedding Events </option>
                    <option value=""> Pre-Wedding Events </option>
                    <option value=""> BirthDay Events </option>
                    <option value=""> Promotional Events </option>
                </select>
            </>
        );
    }
}
export default Services;