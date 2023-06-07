import React,{useState} from 'react';

const Message = () => {

    let [add,setAdd] = useState({no:67,street:"Well Street",district:"Kolar"});
    let [msg,setMsg] = useState("Hungry");
    return(
        <>
            <img src={"https://scwcontent.affino.com/AcuCustom/Sitename/DAM/027/shutterstock_564109159_canberra_smart_cities_one_use_only_rt.jpg"} height="100%" width="100%"  alt="" />
            <hr />
            <h2>{JSON.stringify(add)}</h2>
            <hr />
            <h2>{msg}</h2>
            <hr />
            <button className='btn btn-primary' onClick={()=> {setMsg("Go and Eat")}}> ???? </button>
            <button className='btn btn-danger' onClick={()=>{setAdd({no:6/7/4,street:"Wells Street",district:"Washington DC"})}}> Now </button>

        </>
    );
}
export default Message;