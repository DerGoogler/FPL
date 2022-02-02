package com.dergoogler.fpl;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.WebView;

import com.dergoogler.tools.fpl.Lib;

import java.util.Objects;


public class MainActivity extends BaseActivity {

    WebView webView;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Objects.requireNonNull(getSupportActionBar()).hide();

        webView = findViewById(R.id.web);

        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setSupportZoom(false);
        webView.getSettings().setDomStorageEnabled(true);
        webView.setWebViewClient(new WebAppClient(this));
        webView.addJavascriptInterface(new WebAppInterface(webView), "Android");
        webView.getSettings().setUserAgentString(Lib.getUserAgent());
        webView.loadUrl(Lib.getURL());


    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {

        if ((keyCode == KeyEvent.KEYCODE_BACK) && webView.canGoBack()) {
            webView.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }
}
