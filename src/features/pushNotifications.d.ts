import FeatureTest from '../featureTest';
declare global  {
    interface Navigator {
        budget: any;
    }
}
declare const pushNotifications: FeatureTest & {
    silent: FeatureTest;
};
export default pushNotifications;
