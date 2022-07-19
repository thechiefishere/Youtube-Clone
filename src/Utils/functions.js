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
