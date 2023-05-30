import React,{Component} from "react";

class Cart3 extends Component 
{

    state = {
        product : {
            pname : "Iphone_15",
            price : 150000,
            qty :1,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5LwXkahv0jocLshxF1rxBRsbQbTKyC-8oUQF-V5VB-w&usqp=CAU&ec=48665701"
        }
    };

    // state handling 
        decr_Handler = () => {
            this.setState(
                {
                   product : {
                        ...this.state.product , qty : this.state.product.qty -1,
                   }
                }
            );
        }

    // incr_Handler
        incr_Handler = () => {
            this.setState(
                {
                    product : {
                        ...this.state.product ,qty : this.state.product.qty + 1,
                    }
                }
            );
        }

     
    render ()
    {

        return(
            <div className="container">
                <h1> Shopping Cart </h1>
                <div className="row">
                    <div className="col-10">
                        <table className="table table-hover">
                            <thead className="bg-success text-white">
                                    <th> Image </th>
                                    <th> Details </th>
                                    <th> Price </th>
                                    <th> Quantity </th>
                                    <th> Total </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <img src={this.state.product.img} alt="" /> </td>
                                    <td> {this.state.product.pname}</td>
                                    <td> {this.state.product.price}</td>
                                    {/* <td> <button onClick={this.decr_Handler}> - </button>{this.state.product.qty} <button onClick={this.incr_Handler}> + </button></td> */}
                                    <td> <i className="fa fa-minus-circle" onClick={this.decr_Handler}></i> {this.state.product.qty} <i className="fa fa-plus-circle" onClick={this.incr_Handler}></i></td>
                                    <td> {this.state.product.qty * this.state.product.price}</td><br />
                                </tr>
                                <tr>
                                        <center><td> <button  className="btn btn-warning"> CheckOut </button> </td></center> 
                                </tr>
                            </tbody>
                           
                        </table>
                    </div>
                </div>
            </div>                
        );
    }
}
export default Cart3;