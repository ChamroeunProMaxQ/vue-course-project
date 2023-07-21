const jwt = require("jsonwebtoken");

const signToken = (coach) => {
  console.log(process.env.JWT_SECRET)
  const token = jwt.sign(
    {
      id: coach.id,
      name: coach.name,
      password: coach.password,
      areas: coach.areas,
      price: coach.price,
    },
    process.env.JWT_SECRET
  );
  return token;
};

module.exports = signToken;
