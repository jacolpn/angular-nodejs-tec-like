class ListHomenagem {
    constructor(
        public user_sender: string,
        public tag_name: string,
        public message: string,
        public created_at: Date,
    ) { }
}

export { ListHomenagem }
