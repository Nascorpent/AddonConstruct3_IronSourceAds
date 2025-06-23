"use strict";

{
const SDK = globalThis.SDK;

const PLUGIN_CLASS = SDK.Plugins.Nascorpent_IronSourceAds;

PLUGIN_CLASS.Instance = class Nascorpent_IronSourceAdsInstance extends SDK.IInstanceBase
{
	constructor(sdkType, inst)
	{
		super(sdkType, inst);
	}
	
	Release()
	{
	}
	
	OnCreate()
	{
	}
	
	OnPropertyChanged(id, value)
	{
	}
	
	LoadC2Property(name, valueString)
	{
		return false;		// not handled
	}
};
}