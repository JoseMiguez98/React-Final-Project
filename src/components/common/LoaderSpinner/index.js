import React from 'react';
import Loader from 'react-loader-spinner';
import './style.css';

const LoaderSpinner = props => (
    <div className="spinner-wrapper">
    <Loader
     type= { props.type }
      color={ props.color }
       width={ props.width }
        height={ props.height } />
    </div>
)

export default LoaderSpinner;