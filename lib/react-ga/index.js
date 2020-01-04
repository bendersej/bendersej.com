import * as React from 'react';
import * as ReactGA from 'react-ga';

const GOOGLE_ANALYTICS_TAG = process.env.GOOGLE_ANALYTICS_TAG;

export const useGoogleAnalytics = () => {
  const isClientSide = typeof window !== `undefined`;
  const isEnabled = process.env.NODE_ENV === 'production';

  React.useEffect(() => {
    if (isClientSide && isEnabled) {
      ReactGA.initialize(GOOGLE_ANALYTICS_TAG);
    }
  });

  return {
    setPageView: () => {
      if (isClientSide && isEnabled) {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
      }
    },
  };
};
