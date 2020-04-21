import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => {
    return(
        <div>
            <button onClick={startLogin}>Login</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
};

export default connect(null, mapDispatchToProps)(LoginPage);