"use strict";

{
    self.globalThis.C3.Plugins.Nascorpent_IronSourceAds.Cnds = {       

        OnError(message) {
            //console.error("Error:", message);
            return true;
        },
        /* Start Plugin */
        isPluginAvailable() {
            //console.log("IronSourceAds_C3Addon: " + " Cnds " + "isPluginAvailable");
            return true;
        },

        isPluginNotAvailable() {
            //console.log("IronSourceAds_C3Addon: " + " Cnds "  + "isPluginNotAvailable");
            return true;
        },
        /* End Start Plugin */

        /* Rewarded ADS */
        isRewardedAvailable() {
            //console.log("IronSourceAds_C3Addon: " + " Cnds "  + "isRewardedAvailable");
            return true;
        },

        isRewardedNotAvailable() {
            //console.log("IronSourceAds_C3Addon: " + " Cnds "  + "isRewardedNotAvailable");
            return true;
        },

        rewardedCompleted () {
            //console.log("IronSourceAds_C3Addon: " + " Cnds "  + "rewardedCompleted");
            return true;
        },

        rewardedDisplayFailed () {
            //console.log("IronSourceAds_C3Addon: " + " Cnds "  + "rewardedDisplayFailed");
            return true;
        },

        rewardedAdCanceled () {
            //console.log("IronSourceAds_C3Addon: " + " Cnds "  + "rewardedAdCanceled");
            return true;
        },
        /* End Rewarded ADS */

        /* Interstitial ADS */
        isInterstitialAvailable() {
            //console.log("IronSourceAds_C3Addon: " + " Cnds "  + "isInterstitialAvailable");
            return true;
        },

        isInterstitialNotAvailable() {
            //console.log("IronSourceAds_C3Addon: " + " Cnds "  + "isInterstitialNotAvailable");
            return true;
        },
        /* End Interstitial ADS */

        /* Placement Checks */
        isPlacementCapped() {
            return true;
        },
        isPlacementNotCapped() {
            return true;
        },
        /* End Placement Checks */
         
    };
}