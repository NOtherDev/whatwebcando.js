import FeatureTest from '../featureTest'

declare global {
    interface Navigator {
        connection: any
    }
}

const connection = FeatureTest.navigatorContains('connection')
    .subtest<{effectiveType: FeatureTest}>('effectiveType', FeatureTest.containedIn(window.navigator.connection, 'effectiveType'))

export default connection