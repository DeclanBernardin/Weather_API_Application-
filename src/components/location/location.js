import React, { Component } from 'react';
import { connect } from 'react-redux'; 




class location extends Component {
    render() {
        return (
            <div>
                {this.props.reduxStore.weatherData.location ? <p>{this.props.reduxStore.weatherData.location.name}, {this.props.reduxStore.weatherData.location.region}</p> : null}
                {this.props.reduxStore.weatherData.alert? <p> ALERT: {this.props.reduxStore.weatherData.alert.headline}</p> : null}
            </div>
        )
    }
}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(location); 