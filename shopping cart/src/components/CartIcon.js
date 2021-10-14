import React from "react";
import { Badge, Avatar } from 'antd';
import Icon from "./Icon";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


function CartIcon(Props) {
    return (
        <Link to="/cart"> <Badge count={Props.totalQuantity} showZero>
            <Icon />
        </Badge>
        </Link>
    )
}
const mapStateToProps = (state) => {
    return {
        totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0),
    };
}

export default connect(mapStateToProps)(CartIcon);