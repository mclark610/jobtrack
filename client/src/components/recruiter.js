import React, { Component } from 'react';
import {
          GridContainer,Grid,Cell,
          Label,Link,Button,
          Colors,Switch
       } from 'react-foundation';
import Text from './text';


import './recruiter.css';

class Recruiter extends Component {
  render() {
    return (
      <div className="Recruiter">
        <h1>I am recruiter</h1>

        <GridContainer gridFrame>
            <Grid upOnMedium="2">
                <Cell>
                    <Label>Recruiter Name</Label>
                </Cell>
                <Cell>
                    <Text />
                </Cell>
                <Cell>
                    <Label>Recruiter URL</Label>
                </Cell>
                <Cell>
                    <Text />
                </Cell>
            </Grid>
            <Grid upOnMedium="2">
                <Cell>
                    <Label>Recruiter Phone</Label>
                </Cell>
                <Cell>
                    <Text />
                </Cell>
                <Cell>
                    <Label>Recruiter Email</Label>
                </Cell>
                <Cell>
                    <Text />
                </Cell>
            </Grid>
            <Grid upOnMedium="4">
                <Cell>
                    <Link>Learn More</Link>
                </Cell>
                <Cell>
                    <Link>View All Features</Link>
                </Cell>
                <Cell>
                    <Button color={Colors.SUCCESS}>Save</Button>
                </Cell>
                <Cell>
                    <Button color={Colors.ALERT}>Delete</Button>
                </Cell>
            </Grid>
            <Grid upOnMedium="4">
            <div className="switch-basics-example">
              <Switch/>
            </div>

            </Grid>
        </GridContainer>

      </div>
    );
  }
}

export default Recruiter;
