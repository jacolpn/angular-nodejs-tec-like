import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentService {
    async execute(user_id: string) {
        const complimentsRepositorie = getCustomRepository(ComplimentsRepositories);
        const compliments = await complimentsRepositorie.find({
            where: {
                user_sender: user_id
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

export { ListUserSendComplimentService }
