import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimentService {
    async execute(user_id: string) {
        const complimentsRepositorie = getCustomRepository(ComplimentsRepositories);
        const compliments = await complimentsRepositorie.find({
            where: {
                user_receiver: user_id
            },
            order: {
                created_at: "DESC"
            },
            relations: [
                "userSender",
                "userReceiver",
                "tag"
            ]
        })

        return compliments;
    }
}

export { ListUserReceiveComplimentService }