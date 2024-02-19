import React, { useState } from 'react';

const Bundles = () => {
  const [bundles, setBundles] = useState([]);

  const addBundle = (bundle) => {
    setBundles([...bundles, bundle]);
  };

  return (
    <React.Fragment>
      <h2>Bundles</h2>
      <div className='bundlesContainer'>
      </div>
    </React.Fragment>
  );
};

export default Bundles;