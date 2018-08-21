import React, {Component} from 'react';
//import '../common/foundation.min.css';
import '../common/dataTables.foundation.min.css';
import './main_page.css';

const     $ = require('jquery')
$.DataTable = require('datatables.net')

const columns = [
    {
        title: 'ID',
        width: 120,
        data: 'id'
    },
    {
        title: 'Submital Date',
        width: 120,
        data: 'date_submit',
    },
    {
        title: 'Company Name',
        width: 120,
        data: 'company_name'
    }, {
        title: 'Company Contact',
        width: 180,
        data: 'company_contact'
    },{
        title: 'Company Phone',
        width: 180,
        data: 'company_phone'
    },
    {
        title:'Technologies',
        width:120,
        date:'technologies'
    }
]

class MainPage extends Component {
    componentDidMount() {
        $(this.refs.main).DataTable({
            dom: '<"data-table-wrapper"t>',
            data: this.props.names, columns,
            processing: true,ordering: false});
    }
    componentWillUnmount() {
        $('.data-table-wrapper').find('table').DataTable().destroy(true);
    }

    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
          <div>
            <table id="main" className="MainPage-main" ref="main" />
          </div>);
    }
}

export default MainPage;
