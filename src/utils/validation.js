const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email) => {
  if (!email) {
    return "Please enter your email address.";
  }
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }
  return null;
};

export const validatePassword = (password) => {
  if (!password) {
    return "Please enter your password.";
  }
  return null;
};
