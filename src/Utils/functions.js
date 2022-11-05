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
  if (screenWidth >= 660 && index < 2) toShow = true;
  else if (screenWidth >= 660 && index > 2) toShow = false;
  if (screenWidth >= 1305 && index < 4) toShow = true;
  else if (screenWidth >= 1305 && index > 4) toShow = false;
  if (screenWidth >= 1495 && index < 5) toShow = true;
  else if (screenWidth >= 1495 && index < 5) toShow = false;

  return toShow;
};

export const separateVideoOptions = (videoOptions, screenWidth) => {
  const optionsToShow = [];
  const optionsToHide = [];
  videoOptions.forEach((option, index) => {
    const toShow = keepOrShow(index, screenWidth);
    if (toShow) optionsToShow.push(option);
    else optionsToHide.push(option);
  });

  return {
    optionsToShow,
    optionsToHide,
  };
};

export const getTimeframe = (date) => {
  const currentDate = new Date();
  const [month, day, year, hour, minute, seconds] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  const [
    current_month,
    current_day,
    current_year,
    current_hour,
    current_minute,
    current_seconds,
  ] = [
    currentDate.getMonth(),
    currentDate.getDate(),
    currentDate.getFullYear(),
    currentDate.getHours(),
    currentDate.getMinutes(),
    currentDate.getSeconds(),
  ];

  if (current_year - year === 1) return `${current_year - year} year`;
  if (current_year - year > 1) return `${current_year - year} years`;
  if (current_month - month === 1) return `${current_month - month} month`;
  if (current_month - month > 1) return `${current_month - month} months`;
  if (current_day - day === 1) return `${current_day - day} day`;
  if (current_day - day > 1) return `${current_day - day} days`;
  if (current_hour - hour === 1) return `${current_hour - hour} hour`;
  if (current_hour - hour > 1) return `${current_hour - hour} hours`;
  if (current_minute - minute === 1) return `${current_minute - minute} minute`;
  if (current_minute - minute > 1) return `${current_minute - minute} minutes`;
  if (current_seconds - seconds === 1)
    return `${current_seconds - seconds} months`;
  if (current_seconds - seconds > 1)
    return `${current_seconds - seconds} months`;

  return '0 sec';
};
