import React from 'react';

const Error = ({mensaje}) => {
  return (
    <div className="bg-red-600 mb-3 py-2 px-2 text-white uppercase text-center rounded">
    <p>
       {mensaje}
    </p>
  </div>
  );
}

export default Error;
