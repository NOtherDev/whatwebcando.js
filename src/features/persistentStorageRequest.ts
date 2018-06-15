import FeatureTest from '../featureTest'

declare global {
    interface Navigator {
        storage: any
    }
}

export const persistentStorageRequest = FeatureTest.containedIn(navigator.storage, 'persist')

export default persistentStorageRequest