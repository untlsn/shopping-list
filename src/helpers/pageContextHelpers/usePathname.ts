import { usePageContext } from '~/renderer/pageContext';

// return current path name with removed trailing slashes
const usePathname = () => {
  const path = usePageContext().urlPathname;
  return path.replace(/\/+$/, '');
};

export default usePathname;
