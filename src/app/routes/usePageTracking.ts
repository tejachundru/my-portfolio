import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();
  useEffect(() => {
    // Track page view
  }, [location]);
};

export default usePageTracking;
