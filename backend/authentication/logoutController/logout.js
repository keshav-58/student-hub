const logout = (req, res) => {
  res.clearCookie("token", { httpOnly: true });
  res.status(200).json({ message: "logout sucess" });
};

module.exports = logout;
