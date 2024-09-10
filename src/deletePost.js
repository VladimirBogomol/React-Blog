const deletePost = (id, callback) => {
  fetch("http://localhost:8000/posts/" + id, {
    method: "Delete",
  }).then(() => {
    console.log('post deleted');
    if (typeof callback === 'function') callback();
  });
};

export default deletePost;