import FeatureTest from '../featureTest';
declare global  {
    interface HTMLLinkElement {
        relList: DOMTokenList;
    }
    interface DOMTokenList {
        supports(token: string): boolean;
    }
}
export declare const manifest: FeatureTest;
export default manifest;
