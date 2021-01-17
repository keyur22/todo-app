export const addBucket = (buckets, bucketToAdd) => {
  return [
    ...buckets,
    {
      id: buckets.length ? buckets[buckets.length - 1].id + 1 : 1,
      name: bucketToAdd,
      isActive: false
    }
  ];
};

export const editBucket = (buckets, { id, name }) => {
  return buckets.map((bucket) => {
    if (bucket.id === id) {
      return { ...bucket, name };
    }
    return bucket;
  });
};

export const deleteBucket = (buckets, { id }) => {
  return buckets.filter((bucket) => bucket.id !== id);
};
