import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ to = '#', image, name, small = false }) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const [src, setSrc] = useState(image);

  const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'><rect width='100%' height='100%' fill='%23f4f4f5'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-family='Arial,Helvetica,sans-serif' font-size='24'>Image unavailable</text></svg>`)}`;

  const handleError = (e) => {
    console.warn('Category image failed to load:', image, e);
    setErrored(true);
    setSrc(placeholder);
    setLoaded(true); // remove skeleton
  };

  return (
    <Link to={to} className="cat-link" aria-label={name}>
      <div className={`cat-item ${small ? 'small' : ''} ${loaded ? 'loaded' : 'loading'} ${errored ? 'errored' : ''}`}>
        <div className="image-wrap">
          <img
            src={src}
            alt={name}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={handleError}
            draggable={false}
          />
          {!loaded && <div className="skeleton" aria-hidden="true" />}
        </div>
        <h4>{name}</h4>
      </div>
    </Link>
  );
};

export default CategoryCard;
