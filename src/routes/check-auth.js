import decode from "jwt-decode";

const checkAuth = () => {
  const jwtToken = localStorage.getItem("token");

  if (!jwtToken) return false;

  try {
    const { exp } = decode(jwtToken);

    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (err) {
    return false;
  }

  return true;
};

export default checkAuth;
