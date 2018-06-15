import FeatureTest from '../featureTest';
declare global  {
    interface Navigator {
        connection: any;
    }
}
declare const connection: FeatureTest & {
    effectiveType: FeatureTest;
};
export default connection;
