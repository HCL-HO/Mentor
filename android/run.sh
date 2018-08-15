#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n com.eh.studio.mentor/host.exp.exponent.LauncherActivity
