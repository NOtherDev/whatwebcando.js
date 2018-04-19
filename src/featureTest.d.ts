export default class FeatureTest {
    isSupported: boolean;
    prefixedWith: string | undefined;
    private constructor();
    static Raw: (test: () => boolean) => FeatureTest;
    static ContainedIn: (containerName: string, container: any, propertyName: string) => FeatureTest;
    static NavigatorContains: (propertyName: string) => FeatureTest;
    static WindowContains: (propertyName: string) => FeatureTest;
    static ServiceWorkerRegistrationContains: (propertyName: string) => FeatureTest;
}
