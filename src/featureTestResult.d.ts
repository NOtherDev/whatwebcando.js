export default class FeatureTestResult {
    isSupported: boolean;
    propertyName: string;
    isStandard: boolean;
    prefixedWith: string;
    constructor(isSupported: boolean, propertyName: string, isStandard?: boolean, prefixedWith?: string);
    static forPassed(propertyName: string, isStandard: boolean, prefixedWith?: string): Promise<FeatureTestResult>;
    static forFailed(propertyName: string, isStandard: boolean): Promise<FeatureTestResult>;
}
