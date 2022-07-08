import { HiHome } from 'react-icons/hi';
import {
  MdOutlineExplore,
  MdVideoLibrary,
  MdHistory,
  MdOutlinedFlag,
  MdOutlineFeedback,
} from 'react-icons/md';
import {
  BsCollectionPlay,
  BsTrophy,
  BsBroadcast,
  BsPlayBtn,
} from 'react-icons/bs';
import { TiFlashOutline } from 'react-icons/ti';
import { FaMusic, FaRegNewspaper } from 'react-icons/fa';
import { GiDominoMask } from 'react-icons/gi';
import { SiYoutubegaming } from 'react-icons/si';
import { FiPlusCircle, FiSettings, FiHelpCircle } from 'react-icons/fi';

export const sidebarData = {
  defaults: [
    { name: 'Home', logo: <HiHome className='Icon Icon_sidebar' /> },
    {
      name: 'Explore',
      logo: <MdOutlineExplore className='Icon Icon_sidebar' />,
    },
    { name: 'Shorts', logo: <TiFlashOutline className='Icon Icon_sidebar' /> },
    {
      name: 'Subscription',
      logo: <BsCollectionPlay className='Icon Icon_sidebar' />,
    },
  ],
  info: [
    { name: 'Library', logo: <MdVideoLibrary className='Icon Icon_sidebar' /> },
    { name: 'History', logo: <MdHistory className='Icon Icon_sidebar' /> },
  ],
  best: [
    { name: 'Music', logo: <FaMusic className='Icon Icon_sidebar' /> },
    { name: 'Sports', logo: <BsTrophy className='Icon Icon_sidebar' /> },
    { name: 'Gaming', logo: <SiYoutubegaming className='Icon Icon_sidebar' /> },
    { name: 'News', logo: <FaRegNewspaper className='Icon Icon_sidebar' /> },
    { name: 'Live', logo: <BsBroadcast className='Icon Icon_sidebar' /> },
    { name: '360 Video', logo: <GiDominoMask className='Icon Icon_sidebar' /> },
  ],
  channels: [
    {
      name: 'Browse channels',
      logo: <FiPlusCircle className='Icon Icon_sidebar' />,
    },
  ],
  more: [
    {
      name: 'Youtube Premium',
      logo: <BsPlayBtn className='Icon Icon_sidebar' />,
    },
    { name: 'Live', logo: <BsBroadcast className='Icon Icon_sidebar' /> },
  ],
  general: [
    { name: 'Settings', logo: <FiSettings className='Icon Icon_sidebar' /> },
    {
      name: 'Report history',
      logo: <MdOutlinedFlag className='Icon Icon_sidebar' />,
    },
    { name: 'Help', logo: <FiHelpCircle className='Icon Icon_sidebar' /> },
    {
      name: 'Send Feedback',
      logo: <MdOutlineFeedback className='Icon Icon_sidebar' />,
    },
  ],
};
