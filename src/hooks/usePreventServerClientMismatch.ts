import { useEffect, useState } from "react";

export const usePreventServerClientMismatch = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};
