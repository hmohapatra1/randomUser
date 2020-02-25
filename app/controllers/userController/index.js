/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const User = require('./../../models/userModel/index.js');
const countAge = (dob)=>{
  const dt = new Date().getFullYear();
  const dy = new Date(dob).getFullYear();
  const age = dt -dy;
  return age;
};
const maleCount = (user, male)=>{
  const dob = user.dob;
  const maleAge = countAge(dob);
  console.log(maleAge);
  if (maleAge<30) {
    male['0-30']++;
  } else if (maleAge>=30 && maleAge<50) {
    male['30-50']++;
  } else {
    male['50 and Above']++;
  }
};
const femaleCount = (user, female)=>{
  const dob = user.dob;
  const femaleAge = countAge(dob);
  console.log(femaleAge);
  if (femaleAge<30) {
    female['0-30']++;
  } else if (femaleAge>=30 && femaleAge<50) {
    female['30-50']++;
  } else {
    female['50 and Above']++;
  }
};
const getUsers = (req, res) => {
  User.find((err, users)=>{
    const male = {'Nationality': 'NL', '0-30': 0, '30-50': 0, '50 and Above': 0};
    const female = {'Nationality': 'NL', '0-30': 0, '30-50': 0, '50 and Above': 0};
    users.forEach((user) => {
      if (user.gender == 'male') {
        maleCount(user, male);
      } else {
        femaleCount(user, female);
      }
    });

    if (err) res.send(500, {'err': err});
    res.status(200).send({'Male': male, 'Female': female});
  });
};

const createUser = (req, res)=> {
  req.body.forEach((element) => {
    const newUser= new User(element.data);
    newUser.save((err, savedUser) => {
      if (err) res.send(500, {'err': err});
      res.status(200).send(savedUser);
    });
  });
};
module.exports = {
  getUsers,
  createUser,
};
