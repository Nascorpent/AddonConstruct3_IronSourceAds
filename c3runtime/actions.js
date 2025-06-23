"use strict";

{
    globalThis.C3.Plugins.Nascorpent_IronSourceAds.Acts = {

        /* Start Plugin */
        inicializarIronSourceAds(boolean) {
            this._inicializarIronSourceAds(boolean);
        },

        async verificarIronSourceAdsPluginAvailable () {
            const self = this;
            try {
                const resultado = await self._isPluginAvailable();
                if (resultado) {			
                    //console.log(self.TAG + "Available");
                    self._trigger(self._conditions.isPluginAvailable);
                } else {			
                    //console.log(self.TAG + "Not Available");
                    self._trigger(self._conditions.isPluginNotAvailable);
                }
            } catch (erro) {		
                //console.error(self.TAG + "Erro ao verificar disponibilidade:", erro);
                self._trigger(self._conditions.isPluginNotAvailable);
            }
        },
        /* End Start Plugin */

        /* Consent */
        GDPRConsentDefiner(boolean) {
            this._GDPRConsentDefiner(boolean);
        },
        saleOrSharingDefiner(boolean) {
            this._saleOrSharingDefiner(boolean);
        },
        /* End Consent */

        /* Rewarded ADS */
        async verificarIsRewardedVideoAvailable() {
            const self = this;
			try {
				const resultado = await self._isRewardedVideoAvailable();
				if (resultado) {			
					//console.log(self.TAG + "Rewarded Ad Available");
                    self._trigger(self._conditions.isRewardedAvailable);			
				} else {			
					//console.log(self.TAG + "Rewarded Ad Not Available");
                    self._trigger(self._conditions.isRewardedNotAvailable);			
				}
			} catch (erro) {		
				//console.error(self.TAG + "Rewarded Ad Erro:", erro);
                self._trigger(self._conditions.isRewardedNotAvailable);		
			}
		},

        loadRewardedVideo() {
            this._loadRewardedVideo();
        },

        showRewardedVideo(placementId) {
            this._showRewardedVideo(placementId);
        },
        /* End Rewarded ADS */

        /* Interstitial ADS */
        async verificarIsInterstitialAvailable() {
            const self = this;
			try {
				const resultado = await self._isInterstitialAvailable();
				if (resultado) {			
					//console.log(self.TAG + "Interstitial Ad Available");
                    self._trigger(self._conditions.isInterstitialAvailable);					
				} else {			
					//console.log(self.TAG + "Interstitial Ad Not Available");
                    self._trigger(self._conditions.isInterstitialNotAvailable);					
				}
			} catch (erro) {		
				//console.error(self.TAG + "Interstitial Ad Erro:", erro);
                self._trigger(self._conditions.isInterstitialNotAvailable);				
			}
		},

        loadInterstitial() {
            this._loadInterstitial();
        },

        showInterstitial(placementId) {
            this._showInterstitial(placementId);
        },
        /* End Interstitial ADS */

        /* Placement Check */
        async checkCappedPlacement(placementId) {
            const self = this;
			try {
				const resultado = await self._checkCappedPlacement(placementId);
				if (resultado) {			
					//console.log(self.TAG + "Ad Capped");
                    self._trigger(self._conditions.isPlacementCapped);	
				} else {
					//console.log(self.TAG + "Ad Not Capped");
                    self._trigger(self._conditions.isPlacementNotCapped);
				}
			} catch (erro) {
				//console.error(self.TAG + "Ad Erro:", erro);
			}
		}
        /* End Placement Check */
        
    };
}
