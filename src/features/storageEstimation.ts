import FeatureTest from '../featureTest'

declare global {
    interface Navigator {
        storage: any
    }
}

export const storageEstimation = FeatureTest.containedIn(navigator.storage, 'estimate')

export default storageEstimation