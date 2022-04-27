const Reader = require("./../../lib/utils/Reader")

class ExplorerService{

    static filterByMission(path,mission)
    {
        const explorers = Reader.readJsonFile(path)
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInNode
    }
}

module.exports = ExplorerService