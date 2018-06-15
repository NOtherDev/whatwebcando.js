import FeatureTest from '../featureTest'

declare global {
    interface Navigator {
        budget: any
    }
}

export const pushNotifications = FeatureTest.serviceWorkerRegistrationContains('pushManager')
    .subtest<{silent: FeatureTest}>('silent', FeatureTest.containedIn(navigator.budget, 'reserve'))

export default pushNotifications