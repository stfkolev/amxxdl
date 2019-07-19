module.exports = {
    pages: {
        index: {
            entry: 'src/vue/main.js'
        }
    },

    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/scss/_main.scss";
                `
            }
        }
    },

    pluginOptions: {
        electronBuilder: {

            /*! Electron Config */
            builderOptions: {
                productName: 'AMXX-BG Youtube Downloader',
                appId: 'com.amxxbg.amxxbg',
                asar: true,
                publish: null,
                mac: {
                    icon: 'assets/icons/512x512.png',
                    extraResources: [
                        './node_modules/ffmpeg-static/bin/darwin/x64',
                        './node_modules/ffprobe-static/bin/darwin/x64'
                    ],
                },
                win: {
                    icon: 'assets/icons/512x512.png',
                    extraResources: [
                        './node_modules/ffmpeg-static/bin/win32/x64',
                        './node_modules/ffprobe-static/bin/win32/x64'
                    ],
                },
                linux: {
                    icon: 'assets/icons/256x256.png',
                    extraResources: [
                        './node_modules/ffmpeg-static/bin/linux/x64',
                        './node_modules/ffprobe-static/bin/linux/x64'
                    ],
                }
            }
        }
    }
};
