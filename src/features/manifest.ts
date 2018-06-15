import FeatureTest from '../featureTest'

declare global {
    interface HTMLLinkElement {
        relList: DOMTokenList
    }
    interface DOMTokenList {
        supports(token: string): boolean
    }
}

export const manifest = FeatureTest.Raw(() => document.createElement('link').relList.supports('manifest'))

export default manifest