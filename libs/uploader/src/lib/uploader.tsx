import React, { useState, useEffect } from 'react';
import {
  Button,
  FilePicker,
  majorScale,
  useTheme,
  Label,
  Text,
  toaster,
  Card,
  Pane,
} from 'evergreen-ui';
import { LazyImage } from '@catstagram/ui-components';
import { createHTTPClient } from '@catstagram/data-access';

export const Uploader = ({ onUploadSuccess, client = createHTTPClient() }) => {
  const theme = useTheme();
  const [files, setFiles] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [dataURL, setDataURL] = useState(null);

  useEffect(() => {
    if (files?.[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setDataURL(ev.target.result);
      };

      reader.readAsDataURL(files[0]);
    }
  }, [files]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    try {
      const formData = new FormData();
      formData.append('file', files[0]);
      await client({
        url: '/uploads',
        method: 'post',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toaster.success('Image uploaded successfully!');
      setProcessing(false);
      onUploadSuccess();
    } catch (err) {
      toaster.danger(err?.response?.data?.message);
      setProcessing(false);
      setFiles(null);
      setDataURL(null);
    }
  };
  return (
    <Card
      marginTop={majorScale(2)}
      elevation={1}
      padding={majorScale(2)}
      background="white"
      marginBottom={majorScale(4)}
      width={320}
    >
      <Pane>
        <Label display="block" color="muted" marginBottom={majorScale(1)}>
          Upload a new image
        </Label>
        <FilePicker
          marginBottom={majorScale(1)}
          onChange={(files) => setFiles(files)}
          placeholder="Select the file here!"
        />
      </Pane>
      <Pane
        position="relative"
        paddingBottom="100%"
        marginTop={majorScale(2)}
        border="muted"
        background="tint1"
      >
        <Pane
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {!files && <Text color="muted">Select an image to upload...</Text>}
          {files && <LazyImage url={dataURL} />}
        </Pane>
      </Pane>
      <Pane marginTop={majorScale(2)} display="flex" justifyContent="flex-end">
        <Button
          alignSelf="flex-end"
          onClick={handleSubmit}
          isLoading={processing}
        >
          Upload
        </Button>
      </Pane>
    </Card>
  );
};
