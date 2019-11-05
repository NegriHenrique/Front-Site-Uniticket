import React from 'react';

// import { Container } from './styles';

export default function Button(props) {
  
  const { disabled, content, onClick, className } = props

  return (
    <button 
      className={`btn text-uppercase ${className}`} 
      onClick={() => onClick()}
      disabled={disabled ? true : false}
      {...props}
    >
      <span> {content} </span>
    </button>
  );
}
