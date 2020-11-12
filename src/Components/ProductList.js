import React, {Component} from 'react';
import {Product} from "./Product";
import Prototypes from 'prop-types'


export default class ProductList extends Component {
    constructor(props) {
        super(props);
        //this.props.products = props.products;
    }

    // props = {
    //     products: []
    // }
    render() {
        return (
            <div>

                <div className="row">
                    {this.props.products.map(product =>
                        <Product product={product} key={product.id}></Product>
                    )}
                </div>
            </div>

        );
    }
}

ProductList.propTypes = {
    products: Prototypes.array.isRequired
}

//export default App;
