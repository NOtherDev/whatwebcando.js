import FeatureTest from '../featureTest';
declare global  {
    interface Navigator {
        storage: any;
    }
}
declare const storageEstimation: FeatureTest;
export default storageEstimation;
