import FeatureTest from '../featureTest';
declare global  {
    interface Navigator {
        storage: any;
    }
}
declare const persistentStorageRequest: FeatureTest;
export default persistentStorageRequest;
