const ExplorerService = require("./../../lib/services/ExplorerService")

describe("Unit test for Explorer Services", () =>
{
    test("1. test to filter all the explorers by their mission", () =>
    {
        const filterByNode = ExplorerService.filterByMission("explorers.json","node")
        const ExplorersWithNode = filterByNode.forEach(expName => expect(expName.mission).toContain("node"))
        
    })
})