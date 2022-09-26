import { usePageContext } from '~/renderer/pageContext';

/**
 * helper that pick values from query string (url after ?)
 * @alternative for partial query picker use useQueryString (ignore repeats)
 */
const useQueryArray = <T extends string>(): Record<T, string[]> => usePageContext().urlParsed.searchAll;

export default useQueryArray;
