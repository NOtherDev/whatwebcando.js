import FeatureTest from '../featureTest'

const credentials = FeatureTest.WindowContains('credentials')
    .subtest<{password: FeatureTest}>('password', FeatureTest.WindowContains('PasswordCredential'))
    .subtest<{federated: FeatureTest}>('federated', FeatureTest.WindowContains('FederatedCredential'))

export default credentials
