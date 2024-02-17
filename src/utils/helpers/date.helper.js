const formatDate = (date) => {
  const d = new Date(date);

  const formattedDate = d
    .toLocaleDateString('en', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replace(/\//g, '.');

  return formattedDate;
};

export { formatDate };
