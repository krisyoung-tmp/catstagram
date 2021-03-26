import React from 'react';
import { Pane } from 'evergreen-ui';
import { Uploader } from '@catstagram/uploader';
import { useHistory } from 'react-router-dom';

export const UploadView = ({ isSmallScreen }) => {
  const history = useHistory();
  return (
    <Pane display="flex" justifyContent="center">
      <Uploader onUploadSuccess={() => history.push('/')} />
    </Pane>
  );
};
