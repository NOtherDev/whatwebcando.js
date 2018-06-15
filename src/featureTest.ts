function capitalizeFirst(str: string): string {
    return str.substr(0, 1).toUpperCase() + str.substr(1)
}

declare global {
    interface Window {
        ServiceWorkerRegistration: Function
    }
}

export default class FeatureTest {
    private constructor(public isSupported: boolean, public prefixedWith?: string) {}

    public subtest<T>(name: keyof T, subtest: FeatureTest): this & T {
        return Object.assign(this, {[name]: subtest} as any)
    }

    static raw = (test: () => boolean): FeatureTest =>
        new FeatureTest(test())

    static containedIn = (container: any,
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

    static navigatorContains = (propertyName: string): FeatureTest =>
        FeatureTest.containedIn(window.navigator, propertyName)

    static documentContains = (propertyName: string): FeatureTest =>
        FeatureTest.containedIn(document, propertyName)

    static windowContains = (propertyName: string): FeatureTest =>
        FeatureTest.containedIn(window, propertyName)

    static serviceWorkerRegistrationContains = (propertyName: string): FeatureTest =>
        FeatureTest.containedIn(window.ServiceWorkerRegistration && window.ServiceWorkerRegistration.prototype, propertyName)
}
