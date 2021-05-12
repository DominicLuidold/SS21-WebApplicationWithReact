export class FakeDataProvider {
    getFakeDataForPage(page: number): string[] {
        const fakeData: string[] = [];
        for (let i = 0; i < 10; i++) {
            fakeData.push(`Random string #${page - 1}${i}`);
        }

        return fakeData;
    }
}
