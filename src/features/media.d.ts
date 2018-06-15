import FeatureTest from '../featureTest';
declare const media: FeatureTest & {
    legacy: FeatureTest;
} & {
    mediaDevices: FeatureTest;
};
export default media;
