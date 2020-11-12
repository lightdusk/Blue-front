import React, {Component} from 'react';
import Pagination from 'react-bootstrap/pagination'


export default class Paginator extends Component {

    constructor(props) {
        super(props);
    }
    pagechanged = (event) => {
        const page = +event.target.attributes["data-page"]?.value;
        if(typeof page === "number") {
            this.props.onPageUpdate(page);
        }
    }

    getLastPage = () => Math.floor(this.props.itemCount / this.props.itemsPerPage);

    render() {
        const currentPage = this.props.currentPage;
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