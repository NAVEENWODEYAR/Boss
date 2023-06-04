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
                <h2 style={styl}>   All kinds of photography.., </h2>
            </>
        );
    }
}
export default Services;