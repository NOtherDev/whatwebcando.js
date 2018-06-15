import FeatureTest from '../featureTest';
declare global  {
    interface Navigator {
        storage: any;
    }
}
export declare const persistentStorageRequest: FeatureTest;
export default persistentStorageRequest;
