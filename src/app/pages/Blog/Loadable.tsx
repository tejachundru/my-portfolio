/**
 * Asynchronously loads the component for HomePage
 */

import lazyLoad from '../../../utils/loadable';

export const Blog = lazyLoad(async () => import('./index'));

export default Blog;
