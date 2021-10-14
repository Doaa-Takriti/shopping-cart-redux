
import React from "react";

import ProductsApi from "../api/products";
import { Breadcrumb, Pagination } from 'antd';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/actions";


class Cart extends React.Component {





    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Link to="/">  <Breadcrumb.Item> Home</Breadcrumb.Item></Link>
                    <Breadcrumb.Item>shopping cart</Breadcrumb.Item>


                </Breadcrumb>
                <div id="cart">
                    <div id="table-responsive">
                        <h1 className="text-muted mb-10">shopping cart</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">product</th>
                                    <th scope="col">name</th>
                                    <th scope="col">count</th>
                                    <th scope="col">price</th>
                                    <th scope="col">other</th>
                                    <th scope="col">price total</th>


                                </tr>
                            </thead>
                            <tbody>
                                {this.props.cartItems.map((item, index) =>
                                    <tr key={item.product.id}>
                                        <th scope="row">
                                            <div style={{ width: '150px', height: '150px' }}>
                                                <img src={item.product.image} alt=" " style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                        </th>
                                        <td>{item.product.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.product.price}</td>
                                        <td id="icon-table">
                                            <a href={"/products/" + item.product.id}><i className="fa fa-edit text-success  "></i></a>
                                            {''}
                                            <i className="fa fa-trash text-danger"></i>
                                            <button onClick={() => this.props.removeFromCart(index)} className="btn btn-danger">
                                                <i className="fa fa-trash"></i> Delete
                                            </button>
                                        </td>
                                        <td>10</td>
                                    </tr>
                                )}
                                <tr>
                                    <th scope="row" colspan="4"></th>
                                    <td colspan="1" class="table-active">total price</td>
                                    <td> {this.props.total}</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <div className="row d-flex justify-content-end pt-8">
                            <div className="col-4">
                                <button className="btn btn-primary btn-block w-100">Pay</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (index) => dispatch(removeFromCart(index)),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);