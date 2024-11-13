// middlewares/roleMiddleware.js
import { verifyToken } from "../utils/handleJWT.js";

export const roleMiddleware = (requiredRole) => async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = await verifyToken(token);

    if (decodedToken.role !== requiredRole) {
      return res.status(403).json({ message: "No tienes permiso para acceder a esta ruta" });
    }
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ message: "Acceso no autorizado" });
  }
};
