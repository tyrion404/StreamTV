import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '15px' }}>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(
    null,
    {
        createStream
    }
)(StreamCreate);