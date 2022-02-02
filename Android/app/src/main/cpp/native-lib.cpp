#include <jni.h>
#include <string>
#include <cstdlib>
#include <pthread.h>
#include <unistd.h>
#include <android/log.h>


extern "C"
JNIEXPORT jstring JNICALL
Java_com_dergoogler_tools_fpl_Lib_getURL(JNIEnv *env, jclass clazz) {
    std::string data = "file:///android_asset/www/index.html";
    return env->NewStringUTF(data.c_str());
}

extern "C"
JNIEXPORT jstring JNICALL
Java_com_dergoogler_tools_fpl_Lib_getUserAgent(JNIEnv *env, jclass clazz) {
    std::string data = "FPL";
    return env->NewStringUTF(data.c_str());
}