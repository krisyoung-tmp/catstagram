import React from 'react';
import { LazyImage, LazyImageProps } from './lazy-image';

export default {
  component: LazyImage,
  title: 'LazyImage',
};

export const primary = () => {
  const props: LazyImageProps = {
    url: 'https://www.placecage.com/200/200',
    width: '200px',
    height: '200px',
  };
  return <LazyImage {...props} />;
};
