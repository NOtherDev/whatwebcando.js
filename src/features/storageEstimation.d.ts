import FeatureTest from '../featureTest';
declare global  {
    interface Navigator {
        storage: any;
    }
}
export declare const storageEstimation: FeatureTest;
export default storageEstimation;
