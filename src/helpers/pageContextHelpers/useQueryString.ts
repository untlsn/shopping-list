import { usePageContext } from '~/renderer/pageContext';

/**
 * helper that pick values from query string (url after ?) ignore repeats
 * @alternative for full query picker use useQueryArray
 */
const useQueryString = <T extends string>(): Record<T, string> => usePageContext().urlParsed.search;

export default useQueryString;
