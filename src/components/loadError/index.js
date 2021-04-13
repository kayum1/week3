import React from 'react';
import loadingError from './loadingError.svg';
import { LoadError } from './styles';
const Loading = () => {
  return (
    <LoadError className='loading'>
      <img src={loadingError} alt='Loading Error' />
    </LoadError>
  );
};
export default Loading;
