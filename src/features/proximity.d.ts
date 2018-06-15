import FeatureTest from '../featureTest';
declare const proximity: FeatureTest & {
    legacyDevice: FeatureTest;
} & {
    legacyUser: FeatureTest;
} & {
    legacy: FeatureTest;
} & {
    genericSensor: FeatureTest;
};
export default proximity;
