/**
 * Asynchronously loads the component for HomePage
 */

import lazyLoad from '../../../utils/loadable';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const HomePage = lazyLoad(async () => import('./index'));

export default HomePage;
