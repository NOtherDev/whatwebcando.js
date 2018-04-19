import FeatureTest from './featureTest';
declare global  {
    interface Window {
        ServiceWorkerRegistration: Function;
    }
    interface DOMTokenList {
        supports(token: string): boolean;
    }
    interface HTMLLinkElement {
        relList: DOMTokenList;
    }
}
export declare const manifest: FeatureTest;
export declare const offlineCache: FeatureTest;
export declare const pushNotifications: FeatureTest;
export declare const serviceWorker: FeatureTest;
export declare const share: FeatureTest;
declare const _default: {
    offlineCache: FeatureTest;
    pushNotifications: FeatureTest;
    serviceWorker: FeatureTest;
    share: FeatureTest;
};
export default _default;
