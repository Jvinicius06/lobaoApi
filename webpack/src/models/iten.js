function createNewIten(data, file) {
  const form = new FormData();
  const objs = Object.entries(data);
  objs.forEach((item) => {
    form.append(item[0], item[1]);
  });
  form.append('image', file);
  return fetch('/item', {
    method: 'POST',
    body: form,
  });
}

function deleteIten(id) {
  return fetch(`/item/${id}`, {
    method: 'DELETE',
  });
}

export default createNewIten;
export {
  createNewIten,
  deleteIten,
};
