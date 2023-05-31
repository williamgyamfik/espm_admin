export default function handler(req, res) {
  // const { token } = req.token;

  // const { error } = supabase.auth.api.verifyResetPasswordToken(token);

  // if (error) {
  //   return res.status(401).json({ message: "invalid token" });
  // }
  res.status(200).json({ message: "Valid token" });
}
