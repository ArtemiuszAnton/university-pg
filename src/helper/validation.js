function isValidUserId(req, res, next) {
  const { usersId, users_infoId } = req.params;
  console.log(usersId, users_infoId);
  if (usersId) {
    checkId(usersId);
  }

  if (users_infoId) {
    checkId(users_infoId);
  }
  next();
}

function checkId(data) {
  if (typeof data != 'number' && typeof data != 'string') throw new Error(' type not valid');
  if (isNaN(data)) throw new Error('id not number');
  if (data < 0) throw new Error('id < 0');
}

module.exports = { isValidUserId };
