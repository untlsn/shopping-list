import { usePageContext } from '~/renderer/pageContext';

// helper that return all route params
const useParams = () => usePageContext().routeParams;

export default useParams;
