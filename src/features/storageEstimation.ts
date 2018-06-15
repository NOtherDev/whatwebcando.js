import FeatureTest from '../featureTest'

declare global {
    interface Navigator {
        storage: any
    }
}

const storageEstimation = FeatureTest.containedIn(navigator.storage, 'estimate')

export default storageEstimation