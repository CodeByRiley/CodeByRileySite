export default class ProjectCard {
    name: string;
    description: string;
    source: string;
    constructor(name: string, description: string, source: string) {
        this.name = name;
        this.description = description;
        this.source = source;
    }
}