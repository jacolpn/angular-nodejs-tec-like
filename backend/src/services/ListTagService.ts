import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

class ListTagService {
    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);
        const tags = await tagsRepositories.find();
        // let tags = await tagsRepositories.find();
        // tags.map(tag => ({ ...tag, nameCustom: `#${tag.name}` }))

        // classToPlain vai pegar o customName lá da entities/Tag.ts
        return classToPlain(tags);
    }
}

export { ListTagService }
