import React, { Component } from 'react';
import Button from '@atlaskit/button';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import logo from './logo.svg';
import './App.css';

import SampleStore from './store/sample.store.js';
import SampleAction from './actions/sample.action.js';

class App extends Component {
    _sampleStore;
    _sampleAction;
    constructor(props) {
        super(props);
        console.log('Hello');
        this.state = {data: ''};
        this._sampleAction = new SampleAction();
        SampleStore.createSampleStore({});
        this._sampleStore = SampleStore.getSampleStore();
        this._sampleStore.subscribe(() => {
            let sampleData = this._sampleStore.getState();
            console.log(sampleData);
            this.setState(sampleData);
            console.log(this.state);
        });
        console.log(this.props.projectId);
    }
    helloWorld() {
        alert('I am atlaskit button !');
    }
    getInfoForCloudFetch() {
        this._sampleStore.dispatch(this._sampleAction.getInfoForCloudFetch());
    }
    getInfoForCloudAJS() {
        this._sampleStore.dispatch(this._sampleAction.getInfoForCloudAJS());
    }
    getInfoForZFJFetch() {
        this._sampleStore.dispatch(this._sampleAction.getInfoForZFJFetch());
    }
    getInfoForZFJAJS() {
        this._sampleStore.dispatch(this._sampleAction.getInfoForZFJAJS());
    }
    render() {
        return (
          <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to ZFJCLOUD</h2>
            </div>
            {/*<Button onClick={this.helloWorld}>Click me !</Button>*/}
            <br />
            <br />
            <div>
                Click to get ZEPHYR Info&nbsp;&nbsp;
                <Button onClick={this.getInfoForCloudFetch.bind(this)}>Get Info for ZFJCloud Using Fetch</Button>
                &nbsp;&nbsp;
                <Button onClick={this.getInfoForCloudAJS.bind(this)}>Get Info for ZFJCloud Using AJS</Button>
                &nbsp;&nbsp;
                <Button onClick={this.getInfoForZFJFetch.bind(this)}>Get Info for ZFJ Using fetch</Button>
                &nbsp;&nbsp;
                <Button onClick={this.getInfoForZFJAJS.bind(this)}>Get Info for ZFJ Using AJS</Button>
            </div>
            <br />
            <div>
                {this.state.data.cloudmsg}
            </div>
            <div>
                {this.state.data.zfjmsg}
            </div>
            <br />
            <div>ProjectId: {this.props.projectId}</div>
            {/*<Page>
                <Grid>
                    <GridColumn medium={8}>
                        <h1>Atlaskit Grid Column 1</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatum
                            perspiciatis doloribus dignissimos accusamus commodi, nobis ut, error iusto,
                            quas vitae nesciunt consequatur possimus labore! Mollitia est quis minima asperiores.
                        </p>
                    </GridColumn>
                    <GridColumn medium={4}>
                        <h2>Atlaskit Grid Column 2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatum
                            perspiciatis doloribus dignissimos accusamus commodi, nobis ut, error iusto,
                            quas vitae nesciunt consequatur possimus labore! Mollitia est quis minima asperiores.
                        </p>
                    </GridColumn>
                    <GridColumn>
                        <h2>Content below which takes up remaining space</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatum
                            perspiciatis doloribus dignissimos accusamus commodi, nobis ut, error iusto,
                            quas vitae nesciunt consequatur possimus labore! Mollitia est quis minima asperiores.
                        </p>
                    </GridColumn>
                </Grid>
            </Page>*/}
          </div>
        );
    }
}

export default App;
