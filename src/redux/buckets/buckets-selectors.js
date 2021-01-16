import { createSelector } from 'reselect';

const getBuckets = (state) => state.buckets;

export const getBucketsList = createSelector(getBuckets, (buckets) => buckets.bucketsList);

export const getActiveBucketId = createSelector(getBuckets, (buckets) => buckets.activeBucketId);
