package com.dergoogler.tools.fpl;

public class Lib {
    static {
        System.loadLibrary("native-lib");
    }

    public static native String getURL();

    public static native String getUserAgent();
}
