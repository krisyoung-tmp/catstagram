import React from 'react';
import { LazyImage } from '../lazy-image/lazy-image';
import { ImageList, ImageListProps } from './image-list';

export default {
  component: ImageList,
  title: 'ImageList',
};

export const primary = () => {
  const images = [
    `https://www.placecage.com/200/${100 + Math.floor(Math.random() * 100)}`,
    `https://www.placecage.com/200/${100 + Math.floor(Math.random() * 100)}`,
    `https://www.placecage.com/200/${100 + Math.floor(Math.random() * 100)}`,
    `https://www.placecage.com/200/${100 + Math.floor(Math.random() * 100)}`,
    `https://www.placecage.com/200/${100 + Math.floor(Math.random() * 100)}`,
    `https://www.placecage.com/200/${100 + Math.floor(Math.random() * 100)}`,
    `https://www.placecage.com/200/${100 + Math.floor(Math.random() * 100)}`,
    `https://www.placecage.com/200/${100 + Math.floor(Math.random() * 100)}`,
    `https://www.placecage.com/200/${100 + Math.floor(Math.random() * 100)}`,
  ];
  const props: ImageListProps = {
    colWidth: '200px',
    colCount: 3,
    colGap: '10px',
    rowGap: '10px',
  };
  return (
    <ImageList {...props}>
      {images.map((url) => (
        <LazyImage url={url} />
      ))}
    </ImageList>
  );
};
