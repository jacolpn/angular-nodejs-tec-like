import { Router } from "express";

import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";
import { ListUserReceiveComplimentController } from "./controllers/ListUserReceiverComplimentController";
import { ListUserSendComplimentController } from "./controllers/ListUserSenderComplimentController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const autenthicateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentController = new ListUserReceiveComplimentController();
const listUserSendComplimentController = new ListUserSendComplimentController()
const listTagsController = new ListTagController();
const listUserController = new ListUserController();

// router.post("/users", createUserController.handle);
// router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
// router.post("/login", autenthicateUserController.handle);
// router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

// router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentController.handle);
// router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentController.handle);
// router.get('/tags', ensureAuthenticated, listTagsController.handle);
// router.get('/users', ensureAuthenticated, listUserController.handle);

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", autenthicateUserController.handle);
router.post("/compliments", createComplimentController.handle);

router.get("/users/compliments/send/:id", listUserSendComplimentController.handle);
router.get("/users/compliments/receive/:id", listUserReceiveComplimentController.handle);
router.get('/tags', listTagsController.handle);
router.get('/users', listUserController.handle);

export { router };
