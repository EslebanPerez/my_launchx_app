const MissionCommander = require('./../app/missionCommander') //Importando Clase

describe("Unit test for Mission Commander Class", () => {
    test('1) Create mission comander object', () => {
        const myMissionCommander = new MissionCommander('Woopa')
        expect(myMissionCommander.name).toBe('Woopa');
    });
})