export const addTodo = (todoList, { name, selectedBucketId }) => {
  return [...todoList, { id: todoList.length + 1, name: name, bucketId: selectedBucketId }];
};
