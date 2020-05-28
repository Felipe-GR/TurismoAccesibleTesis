#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n co.MuseoNacional.Accesible/host.exp.exponent.MainActivity
