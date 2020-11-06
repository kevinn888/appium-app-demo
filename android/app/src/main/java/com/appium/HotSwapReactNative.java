//package com.appium;
//
//import com.facebook.react.ReactActivity;
//
//public abstract class HotSwapReactNative extends ReactActivity implements HotSwapUtil.Interface {
//    private String url = "https://www.dropbox.com/s/aqi4i84y9rub228/index.android.bundle?dl=0";
//    private ReactNativeAutoUpdater updater;
//
//    @Nullable
//    @Override
//    protected String getJSBundleFile() {
//        return "uri://https://www.dropbox.com/s/aqi4i84y9rub228/index.android.bundle?dl=0";
//    }
//
//    @Override
//    protected void onCreate(Bundle savedInstanceState) {
//        super.onCreate(savedInstanceState);
//    }
//
//    protected abstract String getUpdateMetadataUrl();
//
//    protected abstract String getMetadataAssetName();
//
//    protected String getHostnameForRelativeDownloadURLs() {
//        return null;
//    }
//
//    protected boolean getShowProgress() {
//        return true;
//    }
//
//}
