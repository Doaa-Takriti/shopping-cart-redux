import React from "react";
import Star1 from './Star1';
import Star2 from './Star2';
import { Switch, Case, Default } from 'react-if';
export default function ProductItem(props) {
    const { product } = props;

    return (
        <div className="card shadow-drop-tb" id="card-tshirt">
            <div class="img-tshirt">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="overlay1"></div>
            </div>
            <div className="card-body">
                <h5 className="card-title text-muted">
                    {product.name}
                </h5>
                <div>
                    <Switch>
                        <Case condition={product.rating === 5}><Star1 /></Case>
                        <Case condition={product.rating === 4}><Star2 /></Case>

                        <Default>This will be displayed if no Case have matching condition</Default>
                    </Switch>
                </div>
                <p className="card-text">
                    Price {product.price}$
                </p>

                <a href={"/products/" + product.id} className="btn btn-primary">Details</a>
            </div>
        </div>
    );
}