import React, { Component } from 'react';
import {GridContainer,Grid,Cell,Link,Button,Colors} from 'react-foundation';


import './recruiter.css';

class Recruiter extends Component {
  render() {
    return (
      <div className="Recruiter">
        <h1>I am recruiter</h1>

        <GridContainer>
            <Grid>
            <Cell>
                Test 1
            </Cell>
            <Cell>Test 2</Cell>
            </Grid>
        </GridContainer>
        <div className="button-basics-example">
          <Link>Learn More</Link>
          <Link>View All Features</Link>
          <Button color={Colors.SUCCESS}>Save</Button>
          <Button color={Colors.ALERT}>Delete</Button>
        </div>

      </div>
    );
  }
}

export default Recruiter;
