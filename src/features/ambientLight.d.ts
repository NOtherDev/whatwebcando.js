import FeatureTest from '../featureTest';
declare const ambientLight: FeatureTest & {
    legacy: FeatureTest;
} & {
    genericSensor: FeatureTest;
};
export default ambientLight;
