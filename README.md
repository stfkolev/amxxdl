<p align="center">
    <a href="https://github.com/stfkolev/amxxdl/tree/master"><img alt="Stable Branch" src="https://img.shields.io/badge/Stable%20Branch-master-3FB27F.svg"/></a>
    <a href="https://github.com/stfkolev/amxxdl/tree/dev"><img alt="Development Branch" src="https://img.shields.io/badge/Dev%20Branch-dev-3eacb2.svg"/></a>
    <a href="https://travis-ci.org/stfkolev/amxxdl/"><img alt="Build Status" src="https://travis-ci.org/stfkolev/amxxdl.svg?branch=master"/></a>
    
AMXXDL is a YouTube downloaded with focus of flexibility and design. Let every download be a pleasure. It's backed with [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg),
[VueJS](https://vuejs.org/), [Electron](https://electronjs.org/) and [node-ytdl-core](https://github.com/fent/node-ytdl-core).

## Disclaimer
Downloading videos or music directly won't pay the work which was done by these who made it.
Please consider supporting the artists and creators if you really like their work, most of these have [patreon](https://www.patreon.com/)
or similar donation possibilities which can be used to directly giving them something back - it's even better than watching their videos on youtube.

## Features
The current version ([0.0.1](https://github.com/stfkolev/amxxdl/releases/tag/0.0.1)) is only build for windows. To use it on mac / linux clone this repo and run `npm run electron:build`.
Sorry for the inconvenience.

See [GitHub Projects](https://github.com/stfkolev/amxxdl/projects) for the current roadmap.

#### Currently: 
* Cross-platform and enjoyable UI.
* Playlist, video and channel download support.
* Many container formats are supportet, thanks to [ffmpeg](https://ffmpeg.org/).
* Donwload video, audio or combine a video quality with the audio you want.
* Frontpage with list of latest videos by the channels you choose.
* *No APIKey or similar required - just install 'n use*

## FAQ
1. "Downloads don't work anymore!" - _It's always a race between the maintainer of such applications and YouTube. YouTube doesn't provide
free access to many of these informations Candy provides, so everything is accomplished with small hacks. If YouTube changes something
some methods won't work anymore. [Open an issue](https://github.com/stfkolev/amxxdl/issues/new) if so._
2. "What about other platforms?" - _For now Candy should and will only be a downloader for YouTube._
3. "The number of playlist / channel items is not equal to these on YouTube?!" - _YouTube counts private and removed videos in a playlist as 
videos of this playlist. Candy won't take this into account so it's possible that some videos are missing._
4. "Some downloads, mostly audio stuff, is especially slow?" - _Since it dosn't make sense to provide high bandwidth for most of YouTube's ressources (Streaming doesn't need that much) it takes longer
than other, direct downloads. It's not possible to speed it up until YouTube rises his bandwidth._
