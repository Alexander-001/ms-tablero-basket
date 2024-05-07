const { Router } = require("express");
const { check } = require("express-validator");
const {
  authUser,
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

const router = Router();

const validUser = [
  check("email", "Se debe ingresar correo").not().isEmpty(),
  check("username", "Se debe ingresar usuario.").not().isEmpty(),
  check("password", "Se debe ingresar contraseña.").not().isEmpty(),
];

const validateLogin = [
  check("email", "Se debe ingresar correo").not().isEmpty(),
  check("password", "Se debe ingresar contraseña.").not().isEmpty(),
];

router.post("/login", validateLogin, authUser);
router.post("/add", validUser, addUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.patch("/:id", validUser, updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
