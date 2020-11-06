package com.appium;

import android.os.Environment;

import java.io.File;

public class HotSwapUtil {

    public static String getJSBundleFile() {
        File path  = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
        String file = path + "/index.android.bundle";
        return file;
    }

}
