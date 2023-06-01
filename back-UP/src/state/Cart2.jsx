import React from 'react';

class Cart1 extends React.Component 
{
    state = {
            product : {
                    pname : "Iphone 15",
                    price : 150000,
                    qty : 2,
                    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8di3Ww2Ny30lHcqRbHvVVIXzYxOlSTKA0sUnXNIMLyQ&usqp=CAU&ec=48665701'
            }
    }

        decr_Handler = ()=> {
            this.setState({
                product : {
                    ...this.state.product, qty : this.state.product.qty -1,
                }
            })
        }

        incr_Handler = () => {
            this.setState({
                product : {
                    ...this.state.product, qty : this.state.product.qty +1,
                }
            })
        }
    render()
    {
        return(
           <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <table className='table table-hover'>
                            <thead className='bg-primary text-white'>
                                <tr>
                                <th> Image </th>
                                <th> Name </th>
                                <th> Price </th>
                                <th> Qty </th>
                                <th> Total </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <img src={this.state.product.image} alt="" /></td>
                                    <td> {this.state.product.pname}</td>
                                    <td> {this.state.product.price}</td>
                                    <td> <i className='fa fa-minus-circle' onClick={this.decr_Handler}></i>{this.state.product.qty}<i className='fa fa-plus-circle' onClick={this.incr_Handler}></i></td>
                                    <td> {this.state.product.qty * this.state.product.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
           </div>
        );
    }
}
export default Cart1;