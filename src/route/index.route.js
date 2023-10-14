import employee from "./employee.routes.js";

import express from "express";

const router = express.Router();

router.use(employee);
export default router;
