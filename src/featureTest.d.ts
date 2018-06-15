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
    static Raw: (test: () => boolean) => FeatureTest;
    static ContainedIn: (container: any, propertyName: string) => FeatureTest;
    static NavigatorContains: (propertyName: string) => FeatureTest;
    static WindowContains: (propertyName: string) => FeatureTest;
    static ServiceWorkerRegistrationContains: (propertyName: string) => FeatureTest;
}
