import bucketsActionTypes from './buckets-actionTypes';

export const addBucket = (bucket) => ({
  type: bucketsActionTypes.ADD_BUCKET,
  payload: bucket
});

export const deleteBucket = (bucket) => ({
  type: bucketsActionTypes.DELETE_BUCKET,
  payload: bucket
});

export const setActiveBucket = (bucketId) => ({
  type: bucketsActionTypes.SET_ACTIVE_BUCKET,
  payload: bucketId
});
