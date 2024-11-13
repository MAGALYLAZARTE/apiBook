import userModel from "../models/userModel.js";
import dotenv from "dotenv";
import { handleHttpError } from "../utils/handleError.js";
import { encryptPassword, comparePassword } from "../utils/handlePassword.js";
import { tokenSing } from "../utils/handleJWT.js";

dotenv.config();

export const registerController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Verificar si el usuario ya existe
    const existingUserByEmail = await userModel.findOne({ where: { email } });
    if (existingUserByEmail) {
      return res.status(409).json({ message: "El email ya está registrado" });
    }

    // Encriptar la contraseña
    const hashedPassword = await encryptPassword(password);

    // Crear usuario con rol
    const newUser = {
      name,
      email,
      password: hashedPassword,
      role: role || "user", // rol predeterminado "user"
    };

    await userModel.create(newUser);

    res.status(201).json({ message: "Usuario creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar el usuario" });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ where: { email } });
    if (!user) {
      handleHttpError(res, "USER_NOT_EXISTS", 404);
      return;
    }

    const checkPassword = await comparePassword(password, user.password);
    if (!checkPassword) {
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return;
    }

    // Incluir el rol en el token
    const sessionData = {
      token: await tokenSing({ id: user.id, role: user.role }), // El token ahora contiene el rol
      user,
    };

    res.send({ sessionData });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
};
