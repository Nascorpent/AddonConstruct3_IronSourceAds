"use strict";
{
    globalThis.C3.Plugins.Nascorpent_IronSourceAds.Instance = class Nascorpent_IronSourceAdsInstance extends globalThis.ISDKInstanceBase {

        constructor() {
            super();
            this.TAG = "IronSourceAds_C3Addon: ";           

            this.callbackContextCheckPlugin = null;
            this.callbackContextRewardedVideo = null;
            this.callbackContextInterstitial = null;

            this.lastPlacementId = null;
            this.lastAdInfo = null;

            this.lastPlacementId_Error = null;
            this.lastErrorCode = null;
            this.lastErrorMessage = null;
            
            this._conditions = globalThis.C3.Plugins.Nascorpent_IronSourceAds.Cnds;

            if (typeof cordova !== 'undefined') {
                window.addEventListener("IronADS_Reward", function(event) { this.handleRewardAds(event); }.bind(this));
                //console.log("Event listener 'IronADS_Reward' registrado com sucesso.");
                window.addEventListener("IronADS_DisplayFailed", function(event) { this.handleDisplayFailed(event); }.bind(this));
                //console.log("Event listener 'IronADS_DisplayFailed' registrado com sucesso.");
                window.addEventListener("IronADS_AdCanceled", function(event) { this.handleAdCanceled(event); }.bind(this));
                //console.log("Event listener 'IronADS_AdCanceled' registrado com sucesso.");
            }
        }

        Release() {super.Release();}
        SaveToJson() {return {};}
        LoadFromJson(o) {}

        /* Start Plugin */
        _inicializarIronSourceAds(boolean) {
            const self = this
            //console.log(self.TAG + "_inicializarIronSourceAds(" + boolean + ")" );
            cordova.exec(
                null,
                null,
                'IronSourceAdsPlugin',
                'startIronSource',
                [boolean]  
            );
        }

        _isPluginAvailable() {
            const self = this;
            //console.log(self.TAG + "_verificarPluginAvailable");
            return new Promise((resolve, reject) => {
                self.callbackContextCheckPlugin = cordova.exec(
                    (resultado) => {
                        var resultadoBooleano = JSON.parse(resultado);
                        resolve(resultadoBooleano);
                    },
                    (erro) => {
                        reject(erro);
                    },
                    'IronSourceAdsPlugin',
                    'checkPluginInitialized',
                    []
                );
            });
        }
        /* End Start Plugin */

        /* Consent */
        _GDPRConsentDefiner(boolean) {
            const self = this
            //console.log(self.TAG + "_GDPRConsentDefiner(" + boolean + ")" );
            cordova.exec(
                null,
                null,
                'IronSourceAdsPlugin',
                'GDPRConsentDefiner',
                [boolean]  
            );
        }
        _saleOrSharingDefiner(boolean) {
            const self = this
            //console.log(self.TAG + "_saleOrSharingDefiner(" + boolean + ")" );
            cordova.exec(
                null,
                null,
                'IronSourceAdsPlugin',
                'saleOrSharingDefiner',
                [boolean]  
            );
        }
        /* End Consent */


        /* Rewarded ADS */
        _isRewardedVideoAvailable() {
            const self = this;
            //console.log(self.TAG + "_isRewardedVideoAvailable");
			return new Promise((resolve, reject) => {
				self.callbackContextRewardedVideo = cordova.exec(
					(resultado) => {
						var resultadoBooleano = JSON.parse(resultado);
						resolve(resultadoBooleano);
					},
					(erro) => {
						reject(erro);
					},
					'IronSourceAdsPlugin',
					'isRewardedVideoAvailable',
					[]
				);
			});
		}

        _loadRewardedVideo() { 
            const self = this
            //console.log(self.TAG + "_loadRewardedVideo");   
			cordova.exec(
				null,
				null,
				'IronSourceAdsPlugin',
				'loadRewardedVideo',
				[]  
			);
		}

        _showRewardedVideo(placementId) {
            const self = this    
            //console.log(self.TAG + "_showRewardedVideo(" + placementId + ")");  
			cordova.exec(
				null,
				null,
				'IronSourceAdsPlugin',
				'showRewardedVideo',
				[placementId]
			);
		}

        handleRewardAds(event) {
            const self = this;
            //console.log(self.TAG + "handleRewardAds( " + event.adInfo + " )");
            self._trigger(self._conditions.rewardedCompleted);
            /*if (event.placementId != null) {
              self.lastPlacementId = event.placementId;
              self.lastAdInfo = event.adInfo;
              self._trigger(self._conditions.rewardedCompleted(event.placementId));
            } else {
                self.lastPlacementId = null;
                self.lastAdInfo = event.adInfo;
                self._trigger(self._conditions.rewardedCompleted(null));
            }*/
        }

        handleDisplayFailed(event) {
            const self = this;
            //console.log(self.TAG + "handleDisplayFailed( " + event.errorMessage + " )");
            self.lastPlacementId_Error = event.placementId;
            self.lastErrorCode = event.errorCode;
            self.lastErrorMessage = event.errorMessage;
             self._trigger(self._conditions.rewardedDisplayFailed);
        }

        handleAdCanceled(event) {
            const self = this;
            //console.log(self.TAG + "handleAdCanceled( " + event.adCanceled + " )");            
             self._trigger(self._conditions.rewardedAdCanceled);
        }        
        /* End Rewarded ADS */

        /* Start Interstitial ADS */
        _isInterstitialAvailable() {
            const self = this;
            //console.log(self.TAG + "_isInterstitialAvailable");
			return new Promise((resolve, reject) => {
				self.callbackContextInterstitial = cordova.exec(
					(resultado) => {
						var resultadoBooleano = JSON.parse(resultado);
						resolve(resultadoBooleano);				
					},
					(erro) => {
						reject(erro);			
					},
					'IronSourceAdsPlugin',
					'isInterstitialAvailable',
					[]
				);
			});
		}

        _loadInterstitial() {
            //console.log(self.TAG + "_loadInterstitial");      
			cordova.exec(
				null,
				null,
				'IronSourceAdsPlugin',
				'loadInterstitial',
				[]  
			);
		}

        _showInterstitial(placementId) {  
            //console.log(self.TAG + "_showInterstitial");        
			cordova.exec(
				null,
				null,
				'IronSourceAdsPlugin',
				'showInterstitial',
                [placementId]
			);
		}
        /* End Interstitial ADS */

        /* Placement Check */
        _checkCappedPlacement(placementId) {
            const self = this;
            //console.log(self.TAG + "_checkCappedPlacement");
			return new Promise((resolve, reject) => {
				self.callbackContextInterstitial = cordova.exec(
					(resultado) => {
						var resultadoBooleano = resultado === "true";
						resolve(resultadoBooleano);				
					},
					(erro) => {
						reject(erro);			
					},
					'IronSourceAdsPlugin',
					'checkCappedPlacement',
					[placementId]
				);
			});
		}
        /* End Placement Check */

    };
}
