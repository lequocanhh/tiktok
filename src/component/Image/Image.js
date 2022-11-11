import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, bkfallback: customFallback = images.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleImageError = () => {
    setFallback(images.noImage);
  };
  return (
    // eslint-disable-next-line
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      className={cx('wrapper', className)}
      alt={alt}
      src={fallback || src}
      ref={ref}
      {...props}
      onError={handleImageError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  bkfallback: PropTypes.string,
};

export default Image;
