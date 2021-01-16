export const addBucket = (buckets, bucketToAdd) => {
  return [...buckets, { id: buckets.length + 1, name: bucketToAdd, isActive: false }];
};

export const setActiveBucket = (buckets, bucketId) => {
  return buckets.map((bucket) => {
    if (bucket.id === bucketId) {
      return { ...bucket, isActive: true };
    } else {
      return { ...bucket, isActive: false };
    }
  });
};
