import React from 'react';
import './Copyright.css';
import love from './like.png';

export default function Copyright() {
  return (
    <div className='Copyright'>
      &copy; Made with <img src={love} alt="" /> by Utkarsh Sarkari
    </div>
  )
}
