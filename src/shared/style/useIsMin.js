import {useState, useEffect} from 'react';

import {useTheme} from 'styled-components';

export const useIsMin = breakpointName => {
  const [isMin, setIsMin] = useState();
  const theme = useTheme();

  useEffect(() => {
    function handleResize() {
      setIsMin(theme.breakpoints[breakpointName] <= window.outerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMin;
};

export default useIsMin;
