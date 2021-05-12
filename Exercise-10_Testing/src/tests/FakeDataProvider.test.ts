import { FakeDataProvider } from "../classes/FakeDataProvider";

test('FakeDataProvider returns correct test data', () => {
    const dataProvider = new FakeDataProvider();
    const expectedString = 'Random string #';
    
    for (let page = 1; page <= 10; page++) {
        for (let index = 0; index < 10; index++) {
            expect(dataProvider.getFakeDataForPage(page)[index]).toBe(expectedString + (page - 1) + index);
        }
    }
});
