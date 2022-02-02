package com.dergoogler.fpl;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.Toast;

public class WebAppInterface {
    private final WebView webView;

    // Instantiate the interface and set the context
    WebAppInterface(WebView webView) {
        this.webView = webView;
    }

    // Show a toast from the web page
    @JavascriptInterface
    public void showToast(String toast) {
        Toast.makeText(webView.getContext(), toast, Toast.LENGTH_SHORT).show();
    }

    @JavascriptInterface
    public int getAndroidVersion() {
        return android.os.Build.VERSION.SDK_INT;
    }

    @JavascriptInterface
    public void finish(String versionName) {
        Toast.makeText(webView.getContext(), versionName, Toast.LENGTH_SHORT).show();
    }

    @JavascriptInterface
    public void close() {
        ((Activity) webView.getContext()).finishAffinity();
        int pid = android.os.Process.myPid();
        android.os.Process.killProcess(pid);
        Intent intent = new Intent(Intent.ACTION_MAIN);
        intent.addCategory(Intent.CATEGORY_HOME);
        ((Activity) webView.getContext()).startActivity(intent);
    }

    @JavascriptInterface
    public void reload() {
        Intent i = new Intent(webView.getContext(), MainActivity.class);
        ((Activity) webView.getContext()).finish();
        ((Activity) webView.getContext()).overridePendingTransition(0, 0);
        webView.getContext().startActivity(i);
        ((Activity) webView.getContext()).overridePendingTransition(0, 0);
    }


}