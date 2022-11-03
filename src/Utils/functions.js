export const getAllVideos = (allChannels) => {
  const allVideos = [];
  let channelVids = allChannels.map((channel) => {
    const { channelVideos } = channel;
    const videos = channelVideos.map((video) => video);
    return [...videos];
  });
  channelVids.forEach((videos) => {
    videos.forEach((video) => allVideos.push(video));
  });
  return allVideos;
};

export const filterVideos = (allVideos, filter) => {
  const filteredVideos = allVideos.filter((video) => {
    const { videoName } = video;
    return videoName.startsWith(filter);
  });

  return filteredVideos;
};

export const getFilteredVideoNames = (allVideos, filter) => {
  if (filter.length === 0) return [];
  const filteredVideoNames = allVideos
    .filter((video) => {
      const { videoName } = video;
      const videoNameToLowerCase = videoName.toLowerCase();
      const filterToLowerCase = filter.toLowerCase();
      const isTrue = videoNameToLowerCase.startsWith(filterToLowerCase);
      if (isTrue) {
        return video;
      }
    })
    .map((video) => video.videoName);

  return filteredVideoNames;
};

export const getVideoFromVideoID = (allChannels, id) => {
  const allVideos = getAllVideos(allChannels);
  const video = allVideos.find((aVideo) => aVideo.videoId == id);

  return video;
};

export const getVideoChannelFromVideoID = (allChannels, id) => {
  const channel = allChannels.find((aChannel) => {
    const videos = aChannel.channelVideos;
    let found = false;
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      if (video.videoId == id) {
        found = true;
      }
    }
    if (found === true) return aChannel;
  });

  return channel;
};

export const getVideoAssociatedPlaylist = (channel, video) => {
  const playlists = channel.channelPlaylist
    .filter((aPlaylist) => {
      if (aPlaylist.playlistVideosID.includes(video.videoId)) {
        return aPlaylist.playlistName;
      }
    })
    .map((playlist) => playlist.playlistName);

  return playlists;
};

export const addPrefixToNumber = (number) => {
  let remainder = 0;
  if (number >= 1000000000) {
    remainder = parseInt(number / 1000000000);
    return `${remainder}B`;
  }
  if (number >= 1000000) {
    remainder = parseInt(number / 1000000);
    return `${remainder}M`;
  }
  if (number >= 1000) {
    remainder = parseInt(number / 1000);
    return `${remainder}K`;
  }
  if (number < 1000) {
    return `${number}`;
  }
};

export const keepOrShow = (index, screenWidth) => {
  let toShow = false;
  if (index > 4) {
    return toShow;
  }
  if (screenWidth < 560 && index < 4) toShow = true;
  else if (screenWidth < 560 && index > 4) toShow = false;
  if (screenWidth > 560 && index < 5) toShow = true;
  else if (screenWidth > 560 && index > 5) toShow = false;
  if (screenWidth >= 665 && index < 3) toShow = true;
  else if (screenWidth >= 665 && index > 3) toShow = false;
  if (screenWidth >= 1305 && index < 4) toShow = true;
  else if (screenWidth >= 1305 && index > 4) toShow = false;
  if (screenWidth >= 1495 && index < 5) toShow = true;
  else if (screenWidth >= 1495 && index < 5) toShow = false;

  return toShow;
};
