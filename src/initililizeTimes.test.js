import initializeTimes from "./components/utilities/initililizeTimes";

describe("initializeTimes", () => {
    const defaultTimes = [
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
    ];
    it("returns the default times", () => {
        const times=initializeTimes(defaultTimes);
        expect(times).toEqual(defaultTimes);
    });
    });