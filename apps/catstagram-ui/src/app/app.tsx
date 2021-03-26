import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FiltersProvider } from '@catstagram/filters';
import { AppLayout } from '../components/app-layout';
import { ImageFeedView } from '../views/image-feed-view';
import { UploadView } from '../views/upload-view';
import { useMediaLayout } from 'use-media';

export function App() {
  const isWide = useMediaLayout({ minWidth: '48rem' });

  return (
    <FiltersProvider>
      <AppLayout isSmallScreen={!isWide}>
        <Switch>
          <Route path="/" exact>
            <ImageFeedView isSmallScreen={!isWide} />
          </Route>
          <Route path="/upload">
            <UploadView isSmallScreen={!isWide} />
          </Route>
        </Switch>
      </AppLayout>
    </FiltersProvider>
  );
}

export default App;
