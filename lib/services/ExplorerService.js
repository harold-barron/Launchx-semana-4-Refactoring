const Reader = require("./../../lib/utils/Reader")

class ExplorerService{

    static filterByMission(path,mission)
    {
        const explorers = Reader.readJsonFile(path)
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInNode
        
    }

    static getAmountOfExplorersByMission(path, mission)
    {
        const explorers = Reader.readJsonFile(path)
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        const numberOfExplorers = explorersInNode.length
        return numberOfExplorers
    }
}

module.exports = ExplorerService