import bucketsActionTypes from './buckets-actionTypes';
import BUCKETS_DATA from './buckets-data';
import { addBucket } from './buckets-utils';

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
    default:
      return state;
  }
};

export default bucketsReducer;
