import FeatureTest from '../featureTest'

const legacy = FeatureTest.windowContains('ondevicelight')
const genericSensor = FeatureTest.windowContains('AmbientLightSensor')

const ambientLight = FeatureTest.any(legacy, genericSensor)
    .subtest<{legacy: FeatureTest}>('legacy', legacy)
    .subtest<{genericSensor: FeatureTest}>('genericSensor', genericSensor)

export default ambientLight