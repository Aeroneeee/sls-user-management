const db = require('../models');
const User = db.User;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.username || !req.body.password) {
    res.status(400).send({ message: 'Some fields are required!' });
    return;
  }

  // Create a User
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  };

  // Save User in the database
  User.create(user)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the User.'
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Users.'
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `User with id=${id} was not found.`
        });
      } else {
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving User with id=${id}`
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(user => {
      if (user) {
        user.update(req.body)
          .then(updatedUser => {
            res.send(updatedUser);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || `Error updating user with id=${id}.`
            });
          });
      } else {
        res.status(404).send({
          message: `User with id=${id} not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Error retrieving user with id=${id}.`
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(204).send({
          message: 'User was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete User with id=${id}`
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.status(204).send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Users.'
      });
    });
};
