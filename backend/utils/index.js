import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  const saltRounds = 10;
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    return null;
  }
};

export const comparePassword = function (hashedPassword, password) {
  return bcrypt.compare(hashedPassword, password);
};

export const createSlug = (title) =>
  title.toLowerCase().trim().replace(/ /g, "-");

export const snakeCaseToTitle = (word) =>
  word.replaceAll("-", " ").replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
