import FeatureTest from '../featureTest'

const deviceProximity = FeatureTest.windowContains('ondeviceproximity')
const userProximity = FeatureTest.windowContains('onuserproximity')
const genericSensor = FeatureTest.windowContains('ProximitySensor')

const proximity = FeatureTest.any(deviceProximity, userProximity, genericSensor)
    .subtest<{legacyDevice: FeatureTest}>('legacyDevice', deviceProximity)
    .subtest<{legacyUser: FeatureTest}>('legacyUser', userProximity)
    .subtest<{legacy: FeatureTest}>('legacy', FeatureTest.any(deviceProximity, userProximity))
    .subtest<{genericSensor: FeatureTest}>('genericSensor', genericSensor)

export default proximity