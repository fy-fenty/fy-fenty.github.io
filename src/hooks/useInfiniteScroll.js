import { useEffect, useState } from "react";

export default function useInfiniteScroll({
  callback,
  offset,
}) {
  const [ loaded, setLoaded ] = useState(false);
  const onScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - offset) {
      !loaded && callback().then((loaded) => {
        if (loaded) {
          setLoaded(false);
        }
      });
      setLoaded(true);
    }
  }
  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    }
  })
}
