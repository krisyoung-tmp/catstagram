import React, { useState, useEffect } from 'react';
import { Spinner, Pane } from 'evergreen-ui';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

export interface LazyImageProps {
  url: string;
  width?: string;
  height?: string;
  placeholder?: string;
}

const StyledLazyImageContainer = styled(Pane, {
  shouldForwardProp: isPropValid,
})<Partial<LazyImageProps>>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.loaded ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 1)'};
  transition: background-color ease-out 266ms;
`;

const StyledLazyImageBackground = styled(Pane, {
  shouldForwardProp: isPropValid,
})<Partial<LazyImageProps> & { loaded: boolean }>`
  background-image: ${(props) => `url(${props.url})`};
  background-size: fill;
  background-position: center center;
  background-repeat: no-repeat;
  filter: blur(8px);
  transform: scale(1.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 2px;
  overflow: hidden;
`;

const StyledLazyImage = styled('img', { shouldForwardProp: isPropValid })<{
  loaded: boolean;
}>`
  width: 100%;
  transform: scale(${(props) => (props.loaded ? 1 : 0.5)});
  border-radius: 2px;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: opacity ease-out 266ms, transform ease-out 133ms;
  box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.1);
`;

export function LazyImage(props: LazyImageProps): React.ReactElement {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.src = props.url;
  }, [props.url]);

  return (
    <Pane
      position="relative"
      overflow="hidden"
      paddingBottom="100%"
      border="muted"
      width="100%"
    >
      <StyledLazyImageBackground {...props} loaded={loaded} />
      <StyledLazyImageContainer {...props} loaded={loaded}>
        {!loaded && <Spinner />}
        {loaded && (
          <StyledLazyImage
            src={props.url}
            width="100%"
            alt="Cat image"
            loaded={loaded}
          />
        )}
      </StyledLazyImageContainer>
    </Pane>
  );
}

export default LazyImage;
