import React, { Component } from 'react';
import { connect } from 'react-redux'; 



class weather extends Component {
    render() {
        return(
            <div>
                {this.props.reduxStore.weatherData.current ? <p>{JSON.stringify(this.props.reduxStore.weatherData.current.temp_c)}</p> : null}
            </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return {
       reduxStore
    };
};
export default connect(mapStateToProps)(weather); 