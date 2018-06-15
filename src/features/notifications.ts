import FeatureTest from '../featureTest'

declare global {
    interface NotificationOptions {
        silent?: boolean
        vibrate?: number
    }
}

const notifications = FeatureTest.raw(() => {
    try {
        if (!('Notification' in window)) {
            return false
        }
        if ('silent' in Notification.prototype) {
            new Notification('test', {silent: true, vibrate: 100})
        }
        return true
    } catch (e) {
        return e.message.indexOf('Silent') !== -1
    }
})

export default notifications