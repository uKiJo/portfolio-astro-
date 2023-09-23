import { useEffect, useState, useLayoutEffect } from "react";

export const usePreventServerClientMismatch = () => {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};
