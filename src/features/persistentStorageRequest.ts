import FeatureTest from '../featureTest'

declare global {
    interface Navigator {
        storage: any
    }
}

const persistentStorageRequest = FeatureTest.containedIn(navigator.storage, 'persist')

export default persistentStorageRequest