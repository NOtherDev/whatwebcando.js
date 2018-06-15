import FeatureTest from '../featureTest'

const legacy = FeatureTest.navigatorContains('getUserMedia')
const mediaDevices = FeatureTest.navigatorContains('mediaDevices')

const media = FeatureTest.any(legacy, mediaDevices)
    .subtest<{legacy: FeatureTest}>('legacy', legacy)
    .subtest<{mediaDevices: FeatureTest}>('mediaDevices', mediaDevices)

export default media