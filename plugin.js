"use strict";

{
    const SDK = globalThis.SDK;

    const PLUGIN_ID = "Nascorpent_IronSourceAds";
    const PLUGIN_VERSION = "1.0.0.0";
    const PLUGIN_CATEGORY = "platform-specific";
	
	const PLUGIN_CLASS = SDK.Plugins.Nascorpent_IronSourceAds = class Nascorpent_IronSourceAds extends SDK.IPluginBase
    {
        constructor()
        {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("NascorpEnt");
			this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetIsSingleGlobal(true); 
            this._info.SetCanBeBundled(true);
            this._info.SetAndroidXEnabled(true);

            this._info.SetGooglePlayServicesEnabled(true);

            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");            

            SDK.Lang.PopContext(); 
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}