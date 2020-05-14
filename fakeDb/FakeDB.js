const { users } = require('./data');
const User = require('../model/users');

class FakeDB {
  async clean() {
   await User.deleteMany({});
      }

  async addData() {
    await User.create(users);
  }

  async populate() {
    await this.clean();
    await this.addData();
  } 
}

module.exports = FakeDB;