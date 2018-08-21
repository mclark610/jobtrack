import React, { Component } from 'react';
import {
          GridContainer,Grid,Cell,
          Label,Link,Button,
          Colors
       } from 'react-foundation';
import Text from './text';
import './recruiter.css';

import '../common/foundation.min.css';

const     $ = require('jquery')
$.DataTable = require('datatables.net')

const columns = [
    {
        title: 'ID',
        width: 120,
        data: 'id'
    },
    {
        title: 'Recruiter Name',
        width: 120,
        data: 'name',
    },
    {
        title: 'Recruiter Company',
        width: 120,
        data: 'company'
    }, {
        title: 'URL',
        width: 180,
        data: 'url'
    },{
        title: 'Phone',
        width: 180,
        data: 'phone'
    }
]

class Recruiter extends Component {
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
        <GridContainer className="example">
            <Grid upOnMedium={4}>
            </Grid>
            <Grid upOnSmall={2}>
                <Cell>
                    <div>
                      <table id="main" className="MainPage-main" ref="main" />
                    </div>
                </Cell>
            </Grid>
            <Grid upOnMedium={4}>
                <Cell>
                    <Button color={Colors.SUCCESS}>Save</Button>
                </Cell>
                <Cell>
                    <Button color={Colors.ALERT}>Delete</Button>
                </Cell>
            </Grid>
            <Grid upOnMedium={4}>
            </Grid>
        </GridContainer>
    );
  }
}

export default Recruiter;
