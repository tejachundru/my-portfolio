import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import analytics from '../../utils/analytics';

const usePageTracking = () => {
  const location = useLocation();
  useEffect(() => {
    // Track page view
    analytics.trackPageView(location.pathname + location.search);
  }, [location]);
};

export default usePageTracking;
