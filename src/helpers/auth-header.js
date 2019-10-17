export const authHeader = () => {
  let token = localStorage.getItem('token');
  if (token) {
    return {'Authorisation': 'Bearer ' + token}
  }
  return {}
};
