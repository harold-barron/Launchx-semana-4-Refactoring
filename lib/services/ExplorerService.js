const Reader = require("./../../lib/utils/Reader");

class ExplorerService{

    static filterByMission(path,mission)
    {
        const explorers = Reader.readJsonFile(path);
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInNode;
        
    }

    static getAmountOfExplorersByMission(path, mission)
    {
        const explorers = Reader.readJsonFile(path);
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        const numberOfExplorers = explorersInNode.length;
        return numberOfExplorers;
    }

    static getExplorersUsernamesByMission(path, mission)
    {
        const explorers = Reader.readJsonFile(path);
        const explorersInMission = explorers.filter((explorer) => explorer.mission === mission);
        const explorersNames = explorersInMission.map((explorers) => explorers.name);
        return explorersNames;
    }
}

module.exports = ExplorerService;