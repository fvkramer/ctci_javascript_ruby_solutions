//                                                Problem 1
// number of steps
// child takes 1, 2, 3 steps. how many ways to climb n steps

const amtSteps = n => cacheBuilder(n, {});

const cacheBuilder = (n, cache) => {
  if (n < 0) return 0;
  if (n === 0) return 1;

  if (cache[n]) {
    return cache[n];
  }

  cache[n] = cacheBuilder(n - 1, cache) + cacheBuilder(n - 2, cache) + cacheBuilder(n - 3, cache);
  return cache[n];
};
// console.log(amtSteps(4));


//                                                Problem 2
// grid path finding
