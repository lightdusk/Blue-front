import React, {Component} from 'react';
import Pagination from '@bit/react-bootstrap.react-bootstrap.pagination'


export default class Paginator extends Component {

    constructor(props) {
        super(props);
    }
    // props = {
    //     itemCount: 0,
    //     currentPage: 0,
    //     itemsPerPage: 0,
    // }
    pagechanged = (event) => {
        console.log(event);
        const page = +event.target.attributes["data-page"]?.value;
        console.log(page);
        if(typeof page === "number") {
            this.props.onPageUpdate(page);
        }
    }

    getLastPage = () => Math.floor(this.props.itemCount / this.props.itemsPerPage);

    render() {
        console.log(this.getLastPage());
        const currentPage = this.props.currentPage;
        console.log("the current page is " + currentPage)
        console.log("the last page is actually " + this.getLastPage());
        return (
            <Pagination onClick={this.pagechanged}>
                <Pagination.First data-page={0} disabled={currentPage === 0}/>
                <Pagination.Prev data-page={this.props.currentPage - 1} disabled={currentPage === 0}/>
                <Pagination.Ellipsis disabled/>

                {currentPage >= 2 && <Pagination.Item data-page={currentPage - 2}>{currentPage - 2}</Pagination.Item>}
                {currentPage >= 1 && <Pagination.Item data-page={currentPage - 1}>{currentPage - 1}</Pagination.Item>}
                <Pagination.Item active>{currentPage}</Pagination.Item>
                {currentPage <= this.getLastPage() - 1 && <Pagination.Item data-page={currentPage + 1}>{currentPage + 1}</Pagination.Item>}
                {currentPage <= this.getLastPage() - 2 && <Pagination.Item data-page={currentPage + 2}>{currentPage + 2}</Pagination.Item>}

                <Pagination.Ellipsis disabled/>
                <Pagination.Next data-page={this.props.currentPage + 1} disabled={currentPage === this.getLastPage()}/>
                <Pagination.Last data-page={this.getLastPage()} disabled={currentPage === this.getLastPage()}/>
            </Pagination>
        )
    }
}