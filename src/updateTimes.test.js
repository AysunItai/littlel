import updateTimes from './components/utilities/updateTimes'; 

describe('updateTimes', () => {
    const defaultTimes = [
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
    ];
    const selectedDate = '2021-12-25';
    it('returns the default times regardless off the selected date', () => {
        expect(updateTimes(selectedDate, defaultTimes)).toEqual(defaultTimes);
    });
});