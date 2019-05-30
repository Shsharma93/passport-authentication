const Joi = require('@hapi/joi');

validateUser = user => {
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required(),
    password: Joi.string()
      .min(8)
      .max(32)
      .required()
  };
  return Joi.validate(user, schema);
};

module.exports = validateUser;
