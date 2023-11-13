import { Router } from "express";
import MenuController from "../controller/menu.controller";

const router = Router()

router.post("/create",MenuController.createMenu)

router.get("/all",MenuController.getAllMenu)

router.get("/:id",MenuController.getMenu)

router.put("/update/:id",MenuController.updateMenu)

router.put("/delete/:id",MenuController.deleteMenu)

export default router