import FeatureTest from '../featureTest'

declare global {
    interface Navigator {
        storage: any
    }
}

export const persistentStorageRequest = FeatureTest.ContainedIn(navigator.storage, 'persist')

export default persistentStorageRequest