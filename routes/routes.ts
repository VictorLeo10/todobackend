import { Router } from "express";
import {
  getAll,
  getOne,
  postOne,
  updateOne,
  deleteOne,
  deleteAll,
} from "../control/control";

const router = Router();
router.route("/alltasks").get(getAll);
router.route("/onetask/:id").get(getOne);
router.route("/newtask").post(postOne);
router.route("/update/:id").patch(updateOne);
router.route("/delete/:id").delete(deleteOne);
router.route("/deleteall").delete(deleteAll);

export default router;
