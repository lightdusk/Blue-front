import React, {Component} from 'react';
import Card from '@bit/react-bootstrap.react-bootstrap.card';


export class Product extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const product = this.props.product;
        return (
            <div className="col-2 p-4 h-25">
                <Card>
                    <Card.Img varient="top" src={product.imageURL} onError={i => i.target.style.display='none'}/>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.shortDescription}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
