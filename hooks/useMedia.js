// https://www.30secondsofcode.org/react/s/use-media-query
// example: const isMobile = useMediaQuery('(max-width: 768px)', true, false);

export function useMediaQuery(query, whenTrue, whenFalse) {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return whenFalse;

  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = React.useState(!!mediaQuery.matches);

  React.useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  return match ? whenTrue : whenFalse;
}
