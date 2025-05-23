const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push('tflite')
config.resolver.assetExts.push('json')
config.resolver.assetExts.push('txt')
config.resolver.assetExts.push('bin')

module.exports = config;
