import { Request, Response } from "express";
import { ListUserReceiveComplimentService } from "../services/ListUserReceiveComplimentService";

class ListUserReceiveComplimentController {
    async handle(req: Request, res: Response) {
        // const { user_id } = req;
        const listUserReceiveComplimentService = new ListUserReceiveComplimentService();
        // const compliments = await listUserReceiveComplimentService.execute(user_id);
        const compliments = await listUserReceiveComplimentService.execute(req.params.id);

        return res.json(compliments);
    }
}

export { ListUserReceiveComplimentController }
