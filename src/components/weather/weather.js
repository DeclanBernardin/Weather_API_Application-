import React, { Component } from 'react';
import { connect } from 'react-redux'; 



class weather extends Component {
        

    render() {
       
        return(
            <div>
                

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