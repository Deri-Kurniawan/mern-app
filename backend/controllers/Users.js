const UserModel = require('../models/userModel');

const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.json({
      message: 'Users fetched successfully',
      data: users,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.json({
      message: 'User successfully created',
      data: user,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findAll({
      where: {
        id: req.params.id,
      },
    });

    if(user.length === 0) {
      return res.json({
        message: 'User not found',
        data: user,
      });
    }
    
    res.json({
      message: 'User successfully founded',
      data: user,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const updateUser = async (req, res) => {
  try {
    const userUpdate = await UserModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    const userDetail = await UserModel.findAll({
      where: {
        id: req.params.id,
      },
    });

    res.json({
      message: 'Users successfully updated',
      data: userDetail,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
}

const deleteUser = async (req, res) => {
  try {
    await UserModel.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.json({
      message: 'User successfully deleted',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
}

module.exports = {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
