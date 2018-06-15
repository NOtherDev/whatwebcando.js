declare global  {
    interface Window {
        ServiceWorkerRegistration: Function;
    }
}
export default class FeatureTest {
    isSupported: boolean;
    prefixedWith: string | undefined;
    private constructor();
    subtest<T>(name: keyof T, subtest: FeatureTest): this & T;
    static raw: (test: () => boolean) => FeatureTest;
    static containedIn: (container: any, propertyName: string) => FeatureTest;
    static navigatorContains: (propertyName: string) => FeatureTest;
    static documentContains: (propertyName: string) => FeatureTest;
    static windowContains: (propertyName: string) => FeatureTest;
    static serviceWorkerRegistrationContains: (propertyName: string) => FeatureTest;
    static any: (...tests: FeatureTest[]) => FeatureTest;
}
