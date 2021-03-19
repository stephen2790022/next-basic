export const Exemple = () => {
  const token = localStorage.getItem('token');

  return <div>{JSON.stringify(token)}</div>
};
