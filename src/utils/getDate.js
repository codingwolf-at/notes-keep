export const getDate = () => {
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth()+1;
  const year = d.getFullYear();
  return `${day}/${month}/${year}`
}