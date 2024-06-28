# entitlements-parser.js
JavaScript library to parse Apple Entitlements, IDE Friendly JSDOC strings included that describes the entitlements :)

![Screenshot](https://github.com/selenic-io/entitlements-parser.js/blob/f4e4382448f6fb71cce73f5ba59e0c26d343f1ec/screenshot.png)

## Contribute
If you would like to like to contribute, take a look at the list of missing keys, then go to [Apple's Developer Docs](https://developer.apple.com/documentation/bundleresources/entitlements?language=objc) to find documentation for each entitlement. Then add it to index.js

*Make sure you have the following fields in the JSDOC string:*
* Entitlement Name
* Entitlement Description
* Supported versions & platforms

Ecample:
```javascript
/**
* App Installation
* @description The entitlement that enables an app to vend other iOS apps as an alternative app marketplace.
* @type {boolean}
* Supports iOS 17.4+
*/
```


## Missing Entitlement Keys:
* Enterprise
* Hypervisor
* iCloud
* Journaling Suggestions
* Location
* Managed App Distribution
* Media
* Memory
* Metal
* MessageUI
* Networking
* Notifications
* Privacy
* Push To Talk
* SafetyKit
* Security
* Sensitive Content Analysis
* Sensors
* Siri
* StoreKit
* System (DriverKit, System Extensions)
* TV
* Wallet
* WeatherKit
* Web Browsers
* Wireless Interfaces
* BrowserEngineKit
