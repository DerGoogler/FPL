package com.dergoogler.fpl;

import android.content.Context;
import android.net.Uri;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.browser.customtabs.CustomTabColorSchemeParams;
import androidx.browser.customtabs.CustomTabsIntent;
import androidx.core.content.ContextCompat;

import com.dergoogler.tools.fpl.Lib;

public class WebAppClient extends WebViewClient {
    Context mContext;

    // Instantiate the interface and set the context
    WebAppClient(Context c) {
        mContext = c;
    }

    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
        if (url.contains(Lib.getURL())) {
            view.loadUrl(url);
        } else {
            Uri uri = Uri.parse(url);
            CustomTabsIntent.Builder intentBuilder = new CustomTabsIntent.Builder();
            CustomTabColorSchemeParams params = new CustomTabColorSchemeParams.Builder()
                    // .setNavigationBarColor(ContextCompat.getColor(MainActivity.this,R.color.background))
                    .setToolbarColor(ContextCompat.getColor(mContext, R.color.colorPrimary))
                    .setSecondaryToolbarColor(ContextCompat.getColor(mContext, R.color.colorPrimary))
                    .build();
            intentBuilder.setColorSchemeParams(CustomTabsIntent.COLOR_SCHEME_DARK, params);
            CustomTabsIntent customTabsIntent = intentBuilder.build();
            customTabsIntent.launchUrl(mContext, uri);
        }
        return true;
    }
}