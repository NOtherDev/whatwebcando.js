import FeatureTest from './featureTest'

export default class FeatureAsyncTest {
    constructor(private test: () => Promise<boolean>) {
    }

    async result(): Promise<FeatureTest> {
        const result = await this.test()
        return FeatureTest.Raw(() => result)
    }
}