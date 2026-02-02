import React from 'react';

const Preloader = ({ loading = true }) => {
  if (!loading) return null;
  return (
    <div className="preloader" role="status" aria-hidden={!loading}>
      <div className="preloader-inner">
        <div className="spinner" />
        <div className="brand">Lathish Photography</div>
      </div>
    </div>
  );
};

export default Preloader;
