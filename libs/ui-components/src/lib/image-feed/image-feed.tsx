import React, { useRef, useEffect } from 'react';
import { ImageList } from '../image-list/image-list';
import { Pane, majorScale, Button } from 'evergreen-ui';

export const ImageFeed = ({
  images,
  loading,
  error,
  hasMore,
  onFetchMore,
  renderer,
}) => {
  const observerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLButtonElement).click();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0,
      }
    );
    return () => observerRef.current.disconnect();
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      observerRef.current.observe(buttonRef.current);
    }
  }, [buttonRef]);

  return (
    <>
      <ImageList>
        {(
          images ??
          Array.from({ length: 16 }, () => ({
            id: undefined,
            url: undefined,
          }))
        ).map(renderer)}
      </ImageList>
      <Pane
        display="flex"
        justifyContent="center"
        visibility={hasMore ? 'visible' : 'hidden'}
        padding={majorScale(2)}
      >
        <Button
          disabled={!hasMore}
          ref={buttonRef}
          isLoading={loading}
          onClick={onFetchMore}
        >
          More
        </Button>
      </Pane>
    </>
  );
};
