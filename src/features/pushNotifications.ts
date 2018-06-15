import FeatureTest from '../featureTest'

declare global {
    interface Navigator {
        budget: any
    }
}

export const pushNotifications = FeatureTest.ServiceWorkerRegistrationContains('pushManager')
    .subtest<{silent: FeatureTest}>('silent', FeatureTest.ContainedIn(navigator.budget, 'reserve'))

export default pushNotifications