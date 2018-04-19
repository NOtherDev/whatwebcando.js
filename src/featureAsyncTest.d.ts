import FeatureTest from './featureTest';
export default class FeatureAsyncTest {
    private test;
    constructor(test: () => Promise<boolean>);
    result(): Promise<FeatureTest>;
}
