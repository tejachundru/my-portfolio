import React, { lazy, Suspense } from 'react';

type Opts = {
  fallback: React.ReactNode;
};
type Unpromisify<T> = T extends Promise<infer P> ? P : never;

const lazyLoad = <T extends Promise<any>, U extends React.ComponentType<any>>(
  importFunc: () => T,
  selectorFunc?: (s: Unpromisify<T>) => U,
  opts: Opts = { fallback: null },
) => {
  let lazyFactory: () => Promise<{ default: U }> = importFunc;

  if (selectorFunc) {
    lazyFactory = async () =>
      importFunc().then(module => ({ default: selectorFunc(module) }));
  }

  const LazyComponent = lazy(lazyFactory);

  // eslint-disable-next-line react/display-name
  return function (props: React.ComponentProps<U>): JSX.Element {
    return (
      <Suspense fallback={opts.fallback}>
        {}
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};

export default lazyLoad;
