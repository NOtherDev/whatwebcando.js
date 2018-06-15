import FeatureTest from '../featureTest'

const credentials = FeatureTest.windowContains('credentials')
    .subtest<{password: FeatureTest}>('password', FeatureTest.windowContains('PasswordCredential'))
    .subtest<{federated: FeatureTest}>('federated', FeatureTest.windowContains('FederatedCredential'))

export default credentials
