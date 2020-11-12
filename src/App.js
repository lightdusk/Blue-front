import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './Components/ProductList';
import ProductRetriever from "./ProductRetriever";
import Paginator from "./Components/Paginator";
import 'bootstrap/dist/css/bootstrap.min.css';
import RangeSlider from 'react-bootstrap-range-slider';


class App extends Component {
    state = {
        products: [],
        productCount: 0,
        productsPerPage: 24,
        currentPage: 0
    }

    setProducts = (page, amount) => {

        ProductRetriever.getProductsPaginated(page, amount).then(list => this.setState({products: list}));
    }

    componentDidMount() {
        this.setProducts(0,this.state.productsPerPage);
        ProductRetriever.getProductCount().then(response => this.setState({productCount: response.count}));
    }
    getNewPage = (newPage) => {
        console.log("i have new na it is " + newPage);
        this.setState({currentPage: newPage});
        this.setProducts(newPage,this.state.productsPerPage);
    }

    render() {
        return (
            <div className="App">
                <div className="row justify-content-center">
                    <Paginator
                        currentPage={this.state.currentPage}
                        itemCount={this.state.productCount}
                        itemsPerPage={this.state.productsPerPage}
                        onPageUpdate={this.getNewPage}
                    />


                </div>
                <div className="row justify-content-center">
                    <RangeSlider
                        value={this.state.productsPerPage}
                        onChange={e => {
                            const productsPerPage = e.target.value;
                            this.setState({productsPerPage: productsPerPage});
                            this.setProducts(this.state.currentPage,productsPerPage);
                        }}
                    />
                </div>
                <ProductList products={this.state.products}/>
            </div>
        );
    }
}

export default App;
