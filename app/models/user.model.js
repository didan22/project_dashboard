module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      user_name: String,
      full_name: String,
      password: String,
      role: String,
    },
    {
      timeStamp: true,
    }
  );

  return mongoose.model("user", schema);
};
