import FeatureTest from '../featureTest'

declare global {
    interface Navigator {
        storage: any
    }
}

export const storageEstimation = FeatureTest.ContainedIn(navigator.storage, 'estimate')

export default storageEstimation