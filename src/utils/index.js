export const getDiffOfTwoObjects = (old, newer) => {
  let diff = {};
  for (const [key, oldValue] of Object.entries(old)) {
    if (key in newer) {
      const newerValue = newer[key];
      if (oldValue !== newerValue) {
        diff[key] = newerValue;
      }
    }
  }
  return diff;
};

export const sleep = (ms=2000) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const blockingSleep = (ms=3000) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < ms);
}
