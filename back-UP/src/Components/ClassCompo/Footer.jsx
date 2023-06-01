// import React from "react";
import React,{Component} from 'react';
import nimage from './Images/n.png';


// class Footer extends React.Component 
class Footer extends Component 
{
    constructor()
    {
        super();
        console.log("Constructor executed ");
    }

    name = "Naveen Kumar K";
    location = "Bengaluru";
    designation = "Technical Manager";
    e_ID = 100;
    address = {Village:"Pacharlahalli",Post:"Budikote",Taluk:"Bangarpet",District:"Kolar",PIN:563114};
    skills = ["Java","JavaScript","HTML","CSS","BootStrap","React JS","C","C++"];
    render()
    {
        return ( <div>
                <h3> Employee-Details </h3>
                <hr />
                <h2> Employee Name: {this.name}</h2>
                <h2> Employee Location: {this.location}</h2>
                <h2> Employee ID: {this.e_ID}</h2>
                <h2> Employee Skill: {this.skills[0]}</h2>
                <h2> Employee Address: {this.address.District}</h2>
                <h3> Address : {JSON.stringify(this.address)}</h3>
                <a href="https://www.google.com/search?gs_ssp=eJzj4tTP1TdIzjVKyzJg9GLNzs9JLAIAMcoFeg&q=kolar&rlz=1C1CHBF_enIN1047IN1047&oq=Kolar&aqs=chrome.1.69i57j46i340i433i512j0i433i512j46i175i199i433i512j0i512j46i433i512j0i131i433i512j46i175i199i512j0i131i433i512.25832j1j7&sourceid=chrome&ie=UTF-8"> <img src={nimage} alt="" /></a>
        </div>);
    }
}

export default Footer