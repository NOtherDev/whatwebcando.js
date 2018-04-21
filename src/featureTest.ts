function capitalizeFirst(str: string): string {
    return str.substr(0, 1).toUpperCase() + str.substr(1)
}

export default class FeatureTest {
    private constructor(public isSupported: boolean, public prefixedWith?: string) {}

    public subtest<T>(name: keyof T, subtest: FeatureTest): this & T {
        return Object.assign(this, {[name]: subtest} as any)
    }

    static Raw = (test: () => boolean): FeatureTest =>
        new FeatureTest(test())

    static ContainedIn = (container: any,
                          propertyName: string): FeatureTest => {

        if (!container) {
            return new FeatureTest(false)
        }
        if (propertyName in container) {
            return new FeatureTest(true)
        }

        const capitalizedProperty = capitalizeFirst(propertyName)
        for (const prefix of ['moz', 'webkit', 'ms']) {
            if (prefix + propertyName in container) {
                return new FeatureTest(true, prefix)
            }
            if (prefix + capitalizedProperty in container) {
                return new FeatureTest(true, prefix)
            }
            const capitalizedPrefix = capitalizeFirst(prefix)
            if (capitalizedPrefix + capitalizedProperty in container) {
                return new FeatureTest(true, capitalizedPrefix)
            }
        }

        return new FeatureTest(false)
    }

    static NavigatorContains = (propertyName: string): FeatureTest =>
        FeatureTest.ContainedIn(window.navigator, propertyName)

    static WindowContains = (propertyName: string): FeatureTest =>
        FeatureTest.ContainedIn(window, propertyName)

    static ServiceWorkerRegistrationContains = (propertyName: string): FeatureTest =>
        FeatureTest.ContainedIn(window.ServiceWorkerRegistration && window.ServiceWorkerRegistration.prototype, propertyName)
}
