import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/actions";

function CartItem(props) {
    const { item, index } = props;
    const { product } = item;

    return (
        <th scope="row">
        <div style={{ width: '150px', height: '150px' }}>
            <img src={product.image} alt=" " style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
    </th>
    <td>{product.name}</td>
    <td>{item.quantity}</td>
    <td>{product.price}</td>
    <td id="icon-table">
       <i className="fa fa-edit text-success  "></i>
        {''}
        <i className="fa fa-trash text-danger"></i>
        <button onClick={() => props.removeFromCart(index)} className="btn btn-danger">
                    <i className="fa fa-trash"></i> Delete
                </button>
    </td>
    <td>10</td>

    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (index) => dispatch(removeFromCart(index)),
    };
}

export default connect(null, mapDispatchToProps)(CartItem);