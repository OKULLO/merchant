const paginate = (items) => {
  // console.log(items)
  const itemsPerPage = 12;
  const pages = Math.ceil(items?.length / itemsPerPage);

  const newItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });
  return newItems;
};

export default paginate;