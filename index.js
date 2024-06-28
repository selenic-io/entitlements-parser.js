export class entitlements {
    /**
     * Apple Entitlements File
     * @description This is the Apple Entitlements File (Note: dots (.) are replaced with underscores (_), and dashes (-) are replaced with double underscores (__) Example: `com.apple.developer.networking.wifi-info` becomes `com_apple_developer_metworking_wifi__info`)
     * @param {object} entitlementsObject Parsed Entitlements plist
     */
    constructor(
        entitlementsObject
    ) {
        // Alternative Marketplaces

        /**
         * App Installation
         * @description The entitlement that enables an app to vend other iOS apps as an alternative app marketplace.
         * @type {boolean}
         * Supports iOS 17.4+
         */
        this.com_apple_developer_marketplace_app__installation = entitlementsObject['com.apple.developer.marketplace.app.installation'] || false;

        // App Clips

        /**
         * Parent Application Identifiers Entitlement
         * @description A list of parent application identifiers for an App Clip with exactly one entry.
         * @type {string[]}
         * Supports iOS 14.0+, iPadOS 14.0+
         */
        this.com_apple_developer_parent__application__identifiers = entitlementsObject['com.apple.developer.parent.application-identifiers'] || [];

        /**
         * Associated App Clip App Identifiers
         * @description A list of App Clip identifiers for an app with exactly one entry.
         * @type {string[]}
         * Supports iOS 15.4+, iPadOS 15.4+
         */
        this.com_apple_developer_associated__appclip__app__identifiers = entitlementsObject['com.apple.developer.associated-appclip-app-identifiers'] || [];

        /**
         * On Demand Install Capable
         * @description A Boolean value that indicates whether a bundle represents an App Clip.
         * @type {boolean}
         * Supports iOS 14.0+, iPadOS 14.0+
         */
        this.com_apple_developer_on__demand__install__capable = entitlementsObject['com.apple.developer.on-demand-install-capable'] || false;

        // Authentication

        /**
         * AutoFill Credential Provider Entitlement
         * @description A Boolean value that indicates whether the app may, with user permission, provide user names and passwords for AutoFill in Safari and other apps.
         * @type {boolean}
         * Supports iOS 12.0+, iPadOS 12.0+, macOS 11.0+, visionOS 1.0+
         */
        this.com_apple_developer_auto__fill__credential__provider = entitlementsObject['com.apple.developer.autofill-credential-provider'] || false;

        /**
         * Sign in with Apple Entitlement
         * @description An entitlement that lets your app use Sign in with Apple.
         * @type {boolean}
         * Supports iOS 13.0+, iPadOS 13.0+, macOS 10.15+, tvOS 13.0+, watchOS 6.0+, visionOS 1.0+
         */
        this.com_apple_developer_applesignin = entitlementsObject['com.apple.developer.applesignin'] || false;

        // CarPlay

        /**
         * CarPlay Audio
         * @description An entitlement that enables your app to access CarPlay audio.
         * @type {boolean}
         * Supports iOS 14.0+
         */
        this.com_apple_developer_carplay__audio = entitlementsObject['com.apple.developer.carplay-audio'] || false;

        /**
         * CarPlay Charging
         * @description An entitlement that enables your app to access CarPlay charging.
         * @type {boolean}
         * Suppoerts iOS 14.0+
         */
        this.com_apple_developer_carplay__charging = entitlementsObject['com.apple.developer.carplay-charging'] || false;

        /**
         * CarPlay Communication
         * @description An entitlement that enables your app to access CarPlay communication.
         * @type {boolean}
         * Supports iOS 14.0+
         */
        this.com_apple_developer_carplay__communication = entitlementsObject['com.apple.developer.carplay-communication'] || false;

        /**
         * CarPlay Maps
         * @description An entitlement that enables your app to access CarPlay maps.
         * @type {boolean}
         * Supports iOS 12.0+
         */
        this.com_apple_developer_carplay__maps = entitlementsObject['com.apple.developer.carplay-maps'] || false;

        /**
         * CarPlay Parking
         * @description An entitlement that enables your app to access CarPlay parking.
         * @type {boolean}
         * Supports iOS 14.0+
         */
        this.com_apple_developer_carplay__parking = entitlementsObject['com.apple.developer.carplay-parking'] || false;

        /**
         * CarPlay Quick Ordering
         * @description An entitlement that enables your app to access CarPlay quick ordering.
         * @type {boolean}
         * Supports iOS 14.0+
         */
        this.com_apple_developer_carplay__quick_ordering = entitlementsObject['com.apple.developer.carplay-quick-ordering'] || false;

        // Contacts

        /**
         * Contacts Notes
         * @description A Boolean value that indicates whether the app may access the notes in contact entries.
         * @type {boolean}
         * Supports iOS 13.0+, iPadOS 13.0+, macOS 13.0+, visionOS 1.0+
         */
        this.com_apple_developer_contacts_notes = entitlementsObject['com.apple.developer.contacts.notes'] || false;

        // Device Management

        /**
         * Automated Device Enrollment
         * @description A Boolean value that indicates whether an app may add a device to Automated Device Enrollment.
         * @type {boolean}
         * Supports iOS 16.0+, iPadOS 16.0+
         */
        this.com_apple_developer_automated__device__enrollment_add__devices = entitlementsObject['com.apple.developer.automated-device-enrollment.add-devices'] || false;

        // Education

        /**
         * ClassKit Environment Entitlement
         * @description The ClassKit development or production environment for an education app that works with the Schoolwork app.
         * @type {string}
         * Supports iOS 11.4+, iPadOS 11.4+, macOS 11.0+, visionOS 1.0+
         */
        this.com_apple_developer_classkit__environment = entitlementsObject['com.apple.developer.Classkit-environment'] || null;

        /**
         * Automatic Assessment Configuration
         * @description A Boolean value that indicates whether an app may create an assessment session.
         * @type {boolean}
         * Supports iOS 13.4+, iPadOS 13.4+, macOS 10.15.4+
         */
        this.com_apple_developer_automatic__assessment__configuration = entitlementsObject['com.apple.developer.automatic-assessment-configuration'] || false;

        // Email Clients

        /**
         * Mail Client
         * @description A Boolean that indicates whether the app can act as a user’s default email client.
         * @type {boolean}
         * Supports iOS 14.0+, iPadOS 14.0+, visionOS 1.0+
         */
        this.com_apple_developer_mail__client = entitlementsObject['com.apple.developer.mail-client'] || false;


        //TODO: Enterprise


        // Exposure notification

        /**
         * Exposure notification
         * @description A Boolean value that indicates whether the app may use exposure notification.
         * @type {boolean}
         * Supports iOS 13.5+, iPadOS 13.5+
         */

        // Family Controls

        /**
         * Family Controls
         * @description A Boolean value that indicates whether the app may use family controls.
         * @type {boolean}
         * Supports iOS 15.0+, iPadOS 15.0+, Mac Catalyst 15.0+, visionOS 1.0+
         */
        this.com_apple_developer_family__controls = entitlementsObject['com.apple.developer.family-controls'] || false;


        // File Provider

        /**
         * File Provider Testing Mode
         * @description A Boolean value that indicates whether you can place domains in testing mode.
         * @type {boolean}
         * Supports macOS 11.3+, visionOS 1.0+
         */
        this.com_apple_developer_fileprovider_testing__mode = entitlementsObject['com.apple.developer.fileprovider.testing-mode'] || false;


        // Games

        /**
         * Game Center Entitlement
         * @description A Boolean value that indicates whether users of the app may see and compare achievements on a leaderboard, invite friends, and start multiplayer games.
         * @type {boolean}
         * Supports iOS 15.0+, iPadOS 15.0+, macOS 10.8+, Mac Catalyst 13.0+, visionOS 1.0+
         */
        this.com_apple_developer_game__center = entitlementsObject['com.apple.developer.game-center'] || false;


        // Group Activities

        /**
         * Group Session
         * @description A Boolean value that indicates whether the app may implement shared group experiences.
         * @type {boolean}
         * Supports iOS 15.0+, iPadOS 15.0+, macOS 12.0+, tvOS 15.0+, visionOS 1.0+
         */
        this.com_apple_developer_group__session = entitlementsObject['com.apple.developer.group-session'] || false;


        // Health

        /**
         * Health Entitlement
         * @description A Boolean value that indicates whether the app may request user authorization to access health and activity data that appears in the Health app.
         * @type {boolean}
         * Supports iOS 8.0+, iPadOS 8.0+, visionOS 1.0+
         */
        this.com_apple_developer_healthkit = entitlementsObject['com.apple.developer.healthkit'] || false;

        /**
         * HealthKit Capabilities Entitlement
         * @description Health data types that require additional permission.
         * @type {string[]}
         * Supports iOS 8.0+, iPadOS 8.0+, visionOS 1.0+
         */
        this.com_apple_developer_healthkit_access = entitlementsObject['com.apple.developer.healthkit.access'] || [];

        /**
         * HealthKit Background Delivery
         * @description A Boolean value that indicates whether observer queries receive updates while running in the background.
         * @type {boolean}
         * Supports iOS 15.0+, iPadOS 15.0+, visionOS 1.0+, watchOS 8.0+
         */
        this.com_apple_developer_healthkit_background__delivery = entitlementsObject['com.apple.developer.healthkit.background-delivery'] || false;

        /**
         * HealthKit Recalibrate Estimates
         * @description A Boolean value that determines whether your app can recalibrate the prediction algorithm used to calculate supported sample types.
         * @type {boolean}
         * Supports iOS 15.0+, iPadOS 15.0+
         */
        this.com_apple_developer_healthkit_recalibrate__estimates = entitlementsObject['com.apple.developer.healthkit.recalibrate-estimates'] || false;


        // Home Automation

        /**
         * HomeKit Entitlement
         * @description A Boolean value that indicates whether users of the app may manage HomeKit-compatible accessories.
         * @type {boolean}
         * Supports iOS 8.0+, iPadOS 8.0+, tvOS 10.0+, visionOS 1.0+, watchOS 2.0+
         */
        this.com_apple_developer_homekit = entitlementsObject['com.apple.developer.homekit'] || false;

        /**
         * Matter Allow Setup Payload
         * @description A Boolean value that allows an app to provide an optional Matter Setup payload while setting up a Matter device in an ecosystem.
         * @type {boolean}
         * Supports iOS 16.0+, iPadOS 16.0+, tvOS 16.0+, visionOS 1.0+, watchOS 9.0+
         */
        this.com_apple_developer_matter_allow__setup__payload = entitlementsObject['com.apple.developer.matter.allow-setup-payload'] || false;


        //TODO: Hypervisor


        // iCloud
        // Journaling Suggestions
        // Location
        // Managed App Distribution
        // Media
        // Memory
        // Metal
        // MessageUI
        // Networking
        // Notifications
        // Privacy
        // Push To Talk
        // SafetyKit
        // Security
        // Sensitive Content Analysis
        // Sensors
        // Siri
        // StoreKit
        // System (DriverKit, System Extensions)
        // TV
        // Wallet
        // WeatherKit
        // Web Browsers
        // Wireless Interfaces
        // BrowserEngineKit

    }
}