import express from "express";
export const membersRoutes = express.Router();

import { MembersController } from "../controllers";

membersRoutes.get("/", MembersController.getAll);
membersRoutes.get("/:id", MembersController.getById);
membersRoutes.post("/", MembersController.create);
membersRoutes.post("/bulkcreate", MembersController.bulkCreate);
membersRoutes.post(
  "/:memberId/products/:productId",
  MembersController.assignProductToMember
);
membersRoutes.post("/:memberId", MembersController.assignManyProductsToMember);
membersRoutes.put("/:id", MembersController.updateById);
membersRoutes.delete("/:id", MembersController.deleteById);
