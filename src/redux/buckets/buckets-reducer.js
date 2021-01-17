import bucketsActionTypes from './buckets-actionTypes';
import BUCKETS_DATA from './buckets-data';
import { addBucket, editBucket, deleteBucket } from './buckets-utils';

const INITIAL_STATE = {
  bucketsList: BUCKETS_DATA,
  activeBucketId: 1
};

const bucketsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case bucketsActionTypes.ADD_BUCKET:
      return { ...state, bucketsList: addBucket(state.bucketsList, action.payload) };
    case bucketsActionTypes.SET_ACTIVE_BUCKET:
      return { ...state, activeBucketId: action.payload };
    case bucketsActionTypes.EDIT_BUCKET:
      return { ...state, bucketsList: editBucket(state.bucketsList, action.payload) };
    case bucketsActionTypes.DELETE_BUCKET:
      return { ...state, bucketsList: deleteBucket(state.bucketsList, action.payload) };
    default:
      return state;
  }
};

export default bucketsReducer;
