import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentService {
    async execute(user_id: string) {
        const complimentsRepositorie = getCustomRepository(ComplimentsRepositories);
        const compliments = await complimentsRepositorie.find({
            where: {
                user_sender: user_id
            }
        })

        return compliments;
    }
}

export { ListUserSendComplimentService }
