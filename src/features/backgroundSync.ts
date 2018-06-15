import FeatureTest from '../featureTest'

const backgroundSync = FeatureTest.serviceWorkerRegistrationContains('sync')

export default backgroundSync