import FeatureTest from '../featureTest'

declare global {
    interface HTMLLinkElement {
        relList: DOMTokenList
    }
    interface DOMTokenList {
        supports(token: string): boolean
    }
}

const manifest = FeatureTest.raw(() => document.createElement('link').relList.supports('manifest'))

export default manifest