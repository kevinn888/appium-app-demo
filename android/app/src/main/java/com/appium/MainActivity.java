package com.appium;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  private static final int STORAGE_PERMISSION_CODE = 111;
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "appium";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    if(ContextCompat.checkSelfPermission(this, "READ_EXTERNAL_STORAGE") != PackageManager.PERMISSION_DENIED) {
      ActivityCompat.requestPermissions(
              MainActivity.this,
              new String[]{ Manifest.permission.READ_EXTERNAL_STORAGE },
              STORAGE_PERMISSION_CODE
      );
    }
  }
}
