import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { breakpointMobile } from 'src/constants';

type Context = {
  isMobile: boolean;
};

const MobileContext = createContext({} as Context);

export const MobileProvider: React.FC = ({ children }) => {
  const windowWidth = document.body.clientWidth;
  const breakpoint = breakpointMobile;
  const [isMobile, setIsMobile] = useState(() => {
    return windowWidth < breakpoint;
  });

  const onResizeWindow = useCallback((): void => {
    const currentWindowWidth = document.body.clientWidth;

    setIsMobile(currentWindowWidth < breakpoint);
  }, [breakpoint]);

  useEffect(() => {
    window.addEventListener('resize', onResizeWindow);
  }, [onResizeWindow]);

  const value = useMemo(
    () => ({
      isMobile,
      onResizeWindow,
    }),
    [isMobile, onResizeWindow],
  );

  return (
    <MobileContext.Provider value={value}>{children}</MobileContext.Provider>
  );
};

export const useMobile = (): Context => {
  const context = useContext(MobileContext);

  if (!context) {
    throw new Error('useMobile must be used within a MobileProvider');
  }

  return context;
};
