import FeatureTest from '../featureTest'

const backgroundSync = FeatureTest.ServiceWorkerRegistrationContains('sync')

export default backgroundSync