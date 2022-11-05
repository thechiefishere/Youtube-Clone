import { HiDownload, HiHome } from 'react-icons/hi';
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

import { BiLike, BiDislike } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { TbPlaylistAdd } from 'react-icons/tb';
import { SlFlag } from 'react-icons/sl';
import { CgTranscript } from 'react-icons/cg';

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

export const channelData = [
  {
    channelId: 1,
    channelName: 'EveryDay Astronaut',
    joined: new Date('November 23, 2013 12:00:30'),
    isVerified: true,
    subscribers: 1293030,
    videosPosted: 354,
    totalViews: 161948695,
    image: '/images/channelImage/image1.jpg',
    description:
      "Rocket science. A term we all use to describe something incredibly difficult. Trying to grasp all of the concepts involved in rocket science can be incredibly intimidating. My name’s Tim Dodd but I'm better known as the Everyday Astronaut. Recently I fell head over heels in love with spaceflight. My appreciation and curiosity for the subject grew into an obsession. Before you knew it, all I wanted to do was learn more and more... the more I learned, the more I wanted to share what was making me so excited. But as someone who dropped out of college and has no technical background or degree… I really felt unqualified for the job of explaining rocket science to anyone. But the fact of the matter is, if I can learn this stuff, anyone can. Rocket science is awesome, and you don’t need to be a rocket scientist to be excited. Everyday Astronaut. Bringing space down to Earth for everyday people.",
    channelVideos: [
      {
        videoId: 1,
        videoName: 'How SpaceX and Boeing will get Astronauts to the ISS',
        videoLength: '30:10',
        timePosted: new Date('Febuary 22, 2019 2:00:30'),
        views: 4008275,
        likes: 54590,
        disLikes: 2080,
        thumbnail: '/images/thumbnails/thumbnail1.png',
        videoDescription: `I have all the graphics from this video up on my website if you want to digest them more! - https://everydayastronaut.com/?p=9398...

        We’re at a really exciting time where the number of crewed vehicles going to the international space station will go from just one to three!. The Soyuz’s 8 year monopoly for getting humans to the ISS is coming to an end.
        
        So today we’re going to take a deep dive on the two new spaceships that will be responsible for taking humans to and from the International Space Station from the United States. We’ll compare the Boeing Starliner riding an Atlas V rocket to SpaceX’s Crew Dragon on their Falcon 9 Rocket.
        
        And to see how we’ve progressed in the world of human spaceflight, we’ll also compare all these systems along side Russia’s Soyuz capsule and the United State’s retired Space Shuttle in a side by side comparison.
        
        We’ll look at the designs, the rockets they’ll ride, dimensions, cost, safety considerations, and any other unique features that each vehicle offers.
        
        Considering I’ve been up close and personal with SpaceX’s Crew Dragon Capsule, and Boeing’s Starliner, I’ve got some good insight on some of these vehicles.
        
        00:00 - Intro
        02:22 - Boeing Starliner
        10:15 - Dragon Capsule
        18:59 - Side By Side Comparison
        26:00 - Conclusion
        
        --------------------------------------------------------------------
        
        Thanks for the AWESOME renders! They TRULY made this video special!!!
        Reese Carges - @AstroReeseW
        Lionel Oullette - @ArcturusVFX
        
        Show your support by becoming a Patreon - http://patreon.com/everydayastronaut
        This video had four "Moon Walkers" who helped make this possible - Blake Jacobs, Mac Malkawi, David Osojnik and Matthew Nolan.
        
        The best place for all your space merch needs!
        https://everydayastronaut.com/shop/
        
        All music is original! Check out my album "Maximum Aerodynamic Pressure" anywhere you listen to music (Spotify, iTunes, Google Play, Amazon, etc) or click here for easy links - http://everydayastronaut.com/music
        
        And also check out "27 Merlins" a song composed to Falcon Heavy's sequence of events - https://youtu.be/0O9_k2_Wod4
        
        I'm the cohost of an awesome podcast where we talk all about current technologies and how they shape our future! http://ourludicrousfuture.com or here on YouTube https://www.youtube.com/ourludicrousf...
        `,
        comments: [
          {
            channelId: 3,
            comment:
              '2 years later, we learned the biggest difference is that one of them actually works :)',
            likes: 1000,
            disLikes: 3,
            superLike: false,
            timePosted: new Date('July 9, 2021 4:25:30'),
            replies: [
              {
                channelId: 2,
                reply: 'Yup haha',
                likes: 14,
                disLikes: 3,
                timePosted: new Date('July 9, 2021 6:50:30'),
              },
              {
                channelId: 6,
                reply: 'They pushed back starliner again',
                likes: 18,
                disLikes: 0,
                timePosted: new Date('July 9, 2021 19:25:30'),
              },
              {
                channelId: 5,
                reply:
                  "came to make this comment myself, didn't leave disappointed",
                likes: 22,
                disLikes: 5,
                timePosted: new Date('July 9, 2021 12:25:30'),
              },
            ],
          },
          {
            channelId: 5,
            comment:
              "Let's just take a minute to appreciate the fact that Soyuz has a ~97% success rate... from 1000+ launches.",
            likes: 1479,
            disLikes: 233,
            superLike: false,
            timePosted: new Date('July 9, 2020 9:25:30'),
            replies: [
              {
                channelId: 1,
                reply:
                  'Capitalism, baby. Only took you 50-100m+ dead citizens to figure out its merits. McDonald’s has made more profit in Russia than its rocket program has made off the US.',
                likes: 94,
                disLikes: 50,
                timePosted: new Date('July 9, 2020 12:50:30'),
              },
              {
                channelId: 3,
                reply: 'This comment thread turned very political....',
                likes: 19,
                disLikes: 0,
                timePosted: new Date('July 9, 2020 17:25:30'),
              },
            ],
          },
        ],
      },
      {
        videoId: 2,
        videoName: "Elon Musk Explains SpaceX's Raptor Engine!",
        videoLength: '41:21',
        timePosted: new Date('July 9, 2022 10:25:30'),
        views: 262316,
        likes: 18020,
        disLikes: 300,
        thumbnail: '/images/thumbnails/thumbnail2.png',
        videoDescription: `Today we’re getting up close and personal with SpaceX’s Raptor 2 engine with Elon Musk. We get into all sorts of details on this engine including how exactly it’s been upgraded and simplified compared to Raptor 1.

        This video has a ton of fun details on some fairly technical stuff, so be sure and watch my "Why don’t rocket engines melt" video - https://youtu.be/he_BL6Q5u1Y - so you know what we’re talking about with some of the cooling techniques as well as my video on engine cycles - https://youtu.be/Owji-ukVt9M - so you understand how the Raptor’s full flow staged combustion cycle works and why it’s advantageous!
        
        00:00 - Intro
        00:50 - Conversation Starts
        02:00 - Raptor 1 vs Raptor 2
        03:50 - Thrust and Chamber Pressure
        05:30 - Iteration Philosophy
        06:30 - Melting Engines and Cooling
        09:30 - Torch Igniters and Starting
        13:00 - Full Flow Advantages
        15:30 - Swirl Injectors
        16:40 - Thrust Vector Control
        20:30 - Simplifications
        24:50 - Removing Throat Film Cooling
        25:35 - Boost Pumps and Impellers
        30:35 - Inline Powerhead Discussion
        32:15 - Fluorine, Dual Cooling and Aerospikes
        35:00 - Chamber Pressure and Impulse
        40:00 - Outro
        
        --------------------------
        
        Want to support what I do? Consider becoming a Patreon supporter for access to exclusive livestreams, our discord channel! - http://patreon.com/everydayastronaut
        
        And extra big thanks to our Mission Directors! Get your name in the credits by becoming a Mission Director on Patreon! 
        
        Mac Malkawi, Ole Mathias Aarseth Heggem, Tomdmay, TTTA, Max Haot, John Malkin, DLB, Héctor Ramos, David Glover, Simon Pilkington, Tristan Edwards, Arthur Carty, Frans de Wet, Chad Souter, Sam Fisher, Chris Dibbs, Seth Pascale, Manalope , Vincent Argiro, Taron Lexton, Corey Coddington, Tim Engle, Ares Lovlyn, David A. Greer, Robin Haerens, Mark Krieger, Roger Oldfield, Ruben Maier-Gerber, Vignan Velivela, Damian Borth, Scott Ferreira, Steven Hosac, Bravishma Narayan, Eric Johnson, Robert Maynard, Dakota Flemmer, John, Ryan Vandervoort, 
        Justin Hook, Barney, Gautham
        
        Or become a YouTube member for some bonus perks as well! - https://www.youtube.com/channel/UC6uK...
        
        The best place for all your space merch needs!
        https://everydayastronaut.com/shop/
        
        All music is original! Check out my album "Maximum Aerodynamic Pressure" anywhere you listen to music (Spotify, iTunes, Google Play, Amazon, etc) or click here for easy links - http://everydayastronaut.com/music`,
        comments: [
          {
            channelId: 3,
            comment:
              'The raptor architecture is the highest effeciency known to physics. We should be able to get 99% combustion effeciency. 99% of combustion effeciency…  with devine intervention you could do 1% better." Speechless! ',
            likes: 91,
            disLikes: 3,
            superLike: true,
            timePosted: new Date('July 9, 2022 11:25:30'),
            replies: [],
          },
          {
            channelId: 2,
            comment:
              'Tim is a legend of YouTube he has taken himself from having an appreciation for rocketry to having a full blown understanding of rockets and rocket engine knowledge. What a great path he has laid.',
            likes: 166,
            disLikes: 15,
            superLike: false,
            timePosted: new Date('July 9, 2022 16:25:30'),
            replies: [
              {
                channelId: 1,
                reply:
                  'find a problem find a  solution that problem - elon musk',
                likes: 2,
                disLikes: 0,
                timePosted: new Date('July 9, 2022 16:50:30'),
              },
              {
                channelId: 4,
                reply:
                  'rockets can be used using coca cola or co2 but not sure why nobody is doing it',
                likes: 1,
                disLikes: 0,
                timePosted: new Date('July 9, 2022 17:25:30'),
              },
            ],
          },
        ],
      },
    ],
    channelPlaylist: [
      {
        playlistName: 'Starship',
        playlistVideosID: [1],
      },
      {
        playlistName: 'Interview',
        playlistVideosID: [2],
      },
      {
        playlistName: 'Kerbal Space Program',
        playlistVideosID: [1, 2],
      },
    ],
  },
  {
    channelId: 2,
    channelName: 'Web Dev Simplified',
    joined: new Date('May 24, 2018 12:40:30'),
    isVerified: true,
    subscribers: 977500,
    videosPosted: 463,
    totalViews: 68414725,
    image: '/images/channelImage/image2.jpg',
    quote:
      'Web Dev Simplified is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development Web Dev Simplified has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Web Dev Simplified also deep dives into advanced topics using the latest best practices for you seasoned web developers. I started Web Dev Simplified in order to share my passion for web development, and do what I truly love. Teach and inspire new web developers. I have been in love with full stack web development since 2015 when I did my first internship as a web developer. Ever since then I have pursued my passion, learning everything there is to know about web development. Over the years I have taught many colleagues and friends the joys of web development, and cannot wait to teach you. Thank you for watching!',
    channelVideos: [
      {
        videoId: 3,
        videoName: 'Can I Create This Tricky Animated CSS Review Card?',
        videoLength: '1:13:36',
        timePosted: new Date('July 9, 2022 7:40:30'),
        views: 12176,
        likes: 599,
        disLikes: 46,
        thumbnail: '/images/thumbnails/thumbnail3.png',
        videoDescription: `Review widgets are one of the most common elements you will add to any ecommerce page which is why it is important to be able to create them well. In this video I attempt to copy a design for a review widget while also adding fancy animations to the widget. This is my first time attempting to solve this issue so you can see my thought process and how I go about debugging and solving this problem.


        📚 Materials/References:
        
        GitHub Code: https://github.com/WebDevSimplified/a...
        Reference Design: https://uidesigndaily.com/posts/figma...
        
        
        🌎 Find Me Here:
        
        My Blog: https://blog.webdevsimplified.com
        My Courses: https://courses.webdevsimplified.com
        Patreon: https://www.patreon.com/WebDevSimplified
        Twitter: https://twitter.com/DevSimplified
        Discord: https://discord.gg/7StTjnR
        GitHub: https://github.com/WebDevSimplified
        CodePen: https://codepen.io/WebDevSimplified
        
        
        ⏱️ Timestamps:
        
        00:00 - Introduction
        00:42 - Setup
        01:07 - Planning
        03:18 - Card CSS
        05:32 - Card Header
        16:04 - Search Bar
        25:59 - Review Section HTML/CSS
        37:39 - Review Button
        40:34 - JavaScript Review Rendering
        59:37 - Animations
        
        
        #CSS #WDS #LiveCoding`,
        comments: [
          {
            channelId: 3,
            comment:
              'For the search bar, I\'d probably use a CSS style on the input element itself that adds the icon through something like this: background: url("magnifying-glass.svg") no-repeat left; padding-left: 16px; That way you\'d have it inside of the actual input. I guess you could also work with absolute positions and some fancy selectors..search-bar { position: relative; }.search-input-icon { position: absolute; left: 10px; }.search-input-icon + .search-input { padding-left: 16px; }The specific padding can be determined with calc and some variables if necessary.',
            likes: 6,
            disLikes: 0,
            superLike: false,
            timePosted: new Date('July 9, 2022 9:25:30'),
            replies: [],
          },
          {
            channelId: 5,
            comment:
              "Let's just take a minute to appreciate the fact that Soyuz has a ~97% success rate... from 1000+ launches.",
            likes: 1479,
            disLikes: 233,
            superLike: false,
            timePosted: new Date('July 9, 2020 9:25:30'),
            replies: [
              {
                channelId: 1,
                reply:
                  'Capitalism, baby. Only took you 50-100m+ dead citizens to figure out its merits. McDonald’s has made more profit in Russia than its rocket program has made off the US.',
                likes: 94,
                disLikes: 50,
                timePosted: new Date('July 9, 2020 12:50:30'),
              },
              {
                channelId: 7,
                reply: 'This comment thread turned very political....',
                likes: 19,
                disLikes: 0,
                timePosted: new Date('July 9, 2020 17:25:30'),
              },
            ],
          },
        ],
      },
      {
        videoId: 4,
        videoName: 'Learn JSON in 10 Minutes',
        videoLength: '11:50',
        timePosted: new Date('Nov 1, 2018 5:25:30'),
        views: 1932755,
        likes: 60040,
        disLikes: 246,
        thumbnail: '/images/thumbnails/thumbnail4.png',
        videoDescription: `In this video we will cover everything you need to know about JSON in only 10 minutes. We will cover what JSON is, why JSON is important, what JSON is used for, the syntax of JSON, and multiple examples of JSON. JSON is the most popular data representation format, and is one of the most important, and easiest concepts you can learn in programming. It allows you to create APIs, config files, and structured data. We will be covering all of the terminology, and going through live examples of all the different JSON types.


        Learn X in Y Minutes Playlist:
        http://bit.ly/2RscdMZ
        
        Twitter:
        https://twitter.com/DevSimplified
        
        GitHub:
        https://github.com/WebDevSimplified
        
        CodePen:
        https://codepen.io/WebDevSimplified
        
        
        #JSON #WebDevelopment #Programming`,
        comments: [
          {
            channelId: 2,
            comment:
              "That was such a professionally styled tutorial video! You got full control over what you're gonna go through and you present with simple examples! It has not been often I've seen performance like this on a channel of this size. You deserve to be much bigger, and I hope many more people will get to see this and benefit from it! Keep it up!",
            likes: 209,
            disLikes: 23,
            superLike: true,
            timePosted: new Date('Nov 1, 2018 11:01:40'),
            replies: [
              {
                channelId: 2,
                reply:
                  'Thank you so much! That really means a lot to me. I try to make my videos as easy to understand as I can, and hearing that they are well done and helpful really motivates me to want to make more content. Thanks again for the compliment!',
                likes: 22,
                disLikes: 1,
                timePosted: new Date('July 9, 2022 12:50:30'),
              },
              {
                channelId: 7,
                reply:
                  "I agree, this was one of the best tutorials I've seen in youtube. This guy knows how to make tutorials.",
                likes: 5,
                disLikes: 0,
                timePosted: new Date('July 9, 2022 12:00:30'),
              },
            ],
          },
          {
            channelId: 5,
            comment:
              'I cannot tell you how much I truly appreciate how you break everything down into bite-sized pieces of information! I felt such a wave of relief after watching this video. Seriously.',
            likes: 106,
            disLikes: 5,
            superLike: false,
            timePosted: new Date('July 9, 2018 7:25:30'),
            replies: [
              {
                channelId: 1,
                reply: 'Thank you so much! That really means a lot to me.',
                likes: 10,
                disLikes: 0,
                timePosted: new Date('July 9, 2018 9:20:30'),
              },
            ],
          },
        ],
      },
    ],
    channelPlaylist: [
      {
        playlistName: 'Live Coding',
        playlistVideosID: [3],
      },
      {
        playlistName: 'TypeScript',
        playlistVideosID: [4],
      },
      {
        playlistName: 'Clean Code',
        playlistVideosID: [3, 4],
      },
    ],
  },
  {
    channelId: 3,
    channelName: 'PowerfulJRE',
    dateCreated: new Date('January 12, 2013 6:00:30'),
    isVerified: true,
    subscribers: 12600305,
    videosPosted: 742,
    quote: 'The Joe Rogan Experience podcast',
    image: '/images/channelImage/image3.jpg',
    totalViews: 2191894865,
    channelVideos: [
      {
        videoId: 5,
        videoName: 'Joe Rogan SHOCKED By Hitler Conspiracy Theory',
        videoLength: '18:59',
        timePosted: new Date('May 17, 2018 9:00:30'),
        views: 10154689,
        likes: 190456,
        disLikes: 28900,
        thumbnail: '/images/thumbnails/thumbnail5.png',
        videoDescription: `Tim Kennedy tells Joe what he's learned doing his show "Hunting Hitler".`,
        comments: [
          {
            channelId: 2,
            comment:
              'Yep. Hitler escaped, shaved off his ridiculous moustache, found a decent barber, and became instantly unrecognisable. Except when he waved at someone.',
            likes: 21987,
            disLikes: 367,
            superLike: false,
            timePosted: new Date('May 17, 2018 12:25:30'),
            replies: [
              {
                channelId: 1,
                reply: 'Man of Tai Chi that’s a fantastic read more',
                likes: 193,
                disLikes: 90,
                timePosted: new Date('May 17, 2018 14:25:39'),
              },
              {
                channelId: 6,
                reply:
                  'He was on vacation in England. Have you seen Monty python? 😂😂😂',
                likes: 172,
                disLikes: 10,
                timePosted: new Date('May 17, 2018 16:45:19'),
              },
              {
                channelId: 3,
                reply: 'Fuck that made me laugh',
                likes: 63,
                disLikes: 1,
                timePosted: new Date('May 17, 2018 19:45:19'),
              },
            ],
          },
          {
            channelId: 5,
            comment: 'The old jre vibes are unmatched',
            likes: 4644,
            disLikes: 12,
            superLike: false,
            timePosted: new Date('August 9, 2021 3:25:30'),
            replies: [
              {
                channelId: 1,
                reply: 'Exactly, you got nobody to blame',
                likes: 73,
                disLikes: 10,
                timePosted: new Date('July 9, 2022 9:25:30'),
              },
              {
                channelId: 7,
                reply: 'I  mean thats one reason',
                likes: 5,
                disLikes: 0,
                timePosted: new Date('July 9, 2022 1:25:30'),
              },
            ],
          },
        ],
      },
      {
        videoId: 6,
        videoName: 'Has Google Created Sentient AI?',
        videoLength: '15:06',
        timePosted: new Date('July 6, 2022 18:25:30'),
        views: 1923176,
        likes: 36789,
        disLikes: 2190,
        thumbnail: '/images/thumbnails/thumbnail6.png',
        videoDescription: `Taken from JRE #1840 w/Marc Andreessen:
        https://open.spotify.com/episode/2JDW...`,
        comments: [
          {
            channelId: 6,
            comment:
              'I work with AI and machine learning as a data scientist.  Mostly convolutional neural networks.  He’s exactly right.  It’s not that their AI is sentient, it’s that humans are easier to fool than previously thought',
            likes: 6670,
            disLikes: 310,
            superLike: false,
            timePosted: new Date('July 7, 2022 1:25:30'),
            replies: [
              {
                channelId: 1,
                reply: 'Finally its here. Yes',
                likes: 28,
                disLikes: 0,
                timePosted: new Date('July 8, 2022 23:25:30'),
              },
              {
                channelId: 5,
                reply: 'But if it feeeels human?',
                likes: 104,
                disLikes: 3,
                timePosted: new Date('July 8, 2022 21:25:30'),
              },
            ],
          },
          {
            channelId: 4,
            comment:
              'Couldn’t it also be that there are no “happy” A.I. films because the ones that don’t explore it as a negative force are exploring what it is to be alive? And sadness is a huge part of that. Films like Bicentennial Man, Johnny 5, Wall-E, Robots, they’re not totally happy go lucky films because suffering and questioning are part of what it means to be alive.',
            likes: 40,
            disLikes: 5,
            superLike: false,
            timePosted: new Date('July 9, 2022 16:25:30'),
            replies: [
              {
                channelId: 2,
                reply:
                  "There's a great line in Sphere: Jerry is happy? I'd prefer Jerry didn't feel at all. If Jerry can be happy, what happens when he's mad?",
                likes: 1,
                disLikes: 0,
                timePosted: new Date('July 9, 2022 19:50:30'),
              },
              {
                channelId: 5,
                reply:
                  "If it's a machine, it isn't alive.  It's not that complicated.",
                likes: 0,
                disLikes: 0,
                timePosted: new Date('July 9, 2022 20:25:30'),
              },
            ],
          },
        ],
      },
    ],
    channelPlaylist: [
      {
        playlistName: 'JRE Toons',
        playlistVideosID: [5],
      },
      {
        playlistName: 'Favourite Clips 2',
        playlistVideosID: [6],
      },
      {
        playlistName: 'JRE Clips',
        playlistVideosID: [5, 6],
      },
    ],
  },
  {
    channelId: 4,
    channelName: 'Traversy Media',
    dateCreated: new Date('October 30, 2009 6:00:30'),
    isVerified: true,
    subscribers: 1893475,
    videosPosted: 923,
    image: '/images/channelImage/image4.jpg',
    description:
      'Traversy Media features the best online web development and programming tutorials for all of the latest web technologies from the building blocks of HTML, CSS & JavaScript to frontend frameworks like React and Vue to backend technologies like Node.js, Python and PHP',
    totalViews: 177373588,
    channelVideos: [
      {
        videoId: 7,
        videoName: 'Git & GitHub Crash Course For Beginners',
        videoLength: '32:41',
        timePosted: new Date('February 5, 2017 5:00:30'),
        views: 2804490,
        likes: 55060,
        disLikes: 1259,
        thumbnail: '/images/thumbnails/thumbnail7.png',
        videoDescription: `In this Git tutorial we will talk about what exactly Git is and we will look at and work with all of the basic and most important commands such as add, commit, status, push and more. This tutorial is very beginner friendly.

        DONATIONS:
        We spend huge amounts of time making these videos available for free. Any donation is greatly appreciated 
        https://www.paypal.com/cgi-bin/webscr...`,
        comments: [
          {
            channelId: 1,
            comment:
              'I cannot tell you how much you have helped me Brad. I am almost done with my Web Development degree, and I feel you have been the difference.',
            likes: 365,
            disLikes: 8,
            superLike: true,
            timePosted: new Date('February 7, 2017 10:00:30'),
            replies: [
              {
                channelId: 4,
                reply: "That is awesome. That's why I do this",
                likes: 133,
                disLikes: 90,
                timePosted: new Date('February 7, 2017 10:50:30'),
              },
              {
                channelId: 5,
                reply:
                  'i have the same feeling ...  it was very simple n easy to go along with the lecture ...  :) thums up',
                likes: 5,
                disLikes: 0,
                timePosted: new Date('February 9, 2017 5:00:30'),
              },
              {
                channelId: 3,
                reply: 'Where are you doing your Web Development degree?',
                likes: 4,
                disLikes: 3,
                timePosted: new Date('February 12, 2017 15:00:30'),
              },
            ],
          },
          {
            channelId: 5,
            comment:
              'Brad, I spent many hours with another YouTube instructor trying to figure out Git and GitHub and while she covered the basics and I got a general understanding, it was this video that really "taught" me.  You go through things in a clear, concise, and well paced format that made it all come together very nicely.  I very much appreciate it (I have watched and learned from your videos before and have no idea why I did not start off on Git/GitHub with you in the first place.)  Thank you ever so much!  I have given you a thumbs up and subscribed and look forward to more of your teachings.',
            likes: 0,
            disLikes: 0,
            superLike: false,
            timePosted: new Date('April 5, 2021 5:00:30'),
            replies: [],
          },
        ],
      },
      {
        videoId: 8,
        videoName: 'JavaScript Under The Hood [2]: Execution Context',
        videoLength: '14:27',
        timePosted: new Date('June 30, 2022 18:25:30'),
        views: 21934,
        likes: 1390,
        disLikes: 12,
        thumbnail: '/images/thumbnails/thumbnail8.png',
        videoDescription: `In this video, we will talk about execution context and hoisting

        💻 My Courses & More
        https://traversymedia.com
        
        💖  Show Support
        Patreon: https://www.patreon.com/traversymedia
        PayPal: https://paypal.me/traversymedia
        
        👇 Follow Me On Social Media:
        Twitter: https://twitter.com/traversymedia
        Instagram: https://www.instagram.com/traversymedia
        Linkedin: https://www.linkedin.com/in/bradtraversy
        
        Timestamps
        0:00 - Intro
        0:44 - What Is Execution Context?
        1:39 - The 2 Phases
        3:32 - Step By Step Examination
        6:12 - Examine Creation In Browser
        7:32 - Step-Through Execution
        8:52 - Hoisting
        11:26 - var vs let & const`,
        comments: [
          {
            channelId: 1,
            comment:
              'Wow, that made hoisting so much clearer to me! I had on my mind the "moved-to-the-top" concept, but this makes much more sense. Great series Brad! Thank you for everything!',
            likes: 15,
            disLikes: 0,
            superLike: false,
            timePosted: new Date('June 30, 2022 22:25:30'),
            replies: [
              {
                channelId: 3,
                reply: 'Same for me! It blew my mind',
                likes: 2,
                disLikes: 0,
                timePosted: new Date('July 3, 2022 18:25:30'),
              },
            ],
          },
          {
            channelId: 2,
            comment:
              'I can’t express how much important it is to look at the call stack when debugging. P.S: Need more of such under the hood videos.',
            likes: 21,
            disLikes: 0,
            superLike: false,
            timePosted: new Date('July 9, 2022 16:25:30'),
            replies: [],
          },
        ],
      },
    ],
    channelPlaylist: [
      {
        playlistName: 'JavaScript Under The Hood',
        playlistVideosID: [7],
      },
      {
        playlistName: 'Guest Speakers',
        playlistVideosID: [8],
      },
      {
        playlistName: 'React Projects',
        playlistVideosID: [7, 8],
      },
    ],
  },
  {
    channelId: 5,
    channelName: 'SpaceX',
    dateCreated: new Date('July 20, 2008 6:00:30'),
    isVerified: true,
    subscribers: 6006680,
    videosPosted: 398,
    image: '/images/channelImage/image5.jpg',
    description:
      'SpaceX designs, manufactures and launches the world’s most advanced rockets and spacecraft',
    totalViews: 621246264,
    channelVideos: [
      {
        videoId: 9,
        videoName: 'Starship Update',
        videoLength: '1:42:20',
        timePosted: new Date('September 29, 2019 9:00:30'),
        views: 4660994,
        likes: 79456,
        disLikes: 12800,
        thumbnail: '/images/thumbnails/thumbnail9.png',
        videoDescription: `On Thursday, February 10 SpaceX CEO Elon Musk will provide an update on the design, development, and testing of Starship.

        You can watch the event live at approximately 8:00 p.m. CDT.`,
        comments: [
          {
            channelId: 2,
            comment:
              "Here after SN15's great landing. What a time to be alive!",
            likes: 217,
            disLikes: 13,
            superLike: false,
            timePosted: new Date('July 17, 2021 12:25:30'),
            replies: [
              {
                channelId: 4,
                reply: 'Yes!',
                likes: 2,
                disLikes: 0,
                timePosted: new Date('July 17, 2021 18:25:30'),
              },
              {
                channelId: 1,
                reply: 'Starship Update 2 coming now!',
                likes: 7,
                disLikes: 0,
                timePosted: new Date('July 17, 2021 22:25:30'),
              },
              {
                channelId: 3,
                reply: 'How banking crisis so be careful',
                likes: 0,
                disLikes: 0,
                timePosted: new Date('July 22, 2021 18:25:30'),
              },
            ],
          },
          {
            channelId: 1,
            comment:
              "This is a moment in history. It's like seeing Howard Hughes introduce his aircraft. Incredible time to be alive.",
            likes: 81,
            disLikes: 2,
            superLike: false,
            timePosted: new Date('June 9, 2020 3:25:30'),
            replies: [],
          },
        ],
      },
      {
        videoId: 10,
        videoName: 'Starbase | Gateway to Mars',
        videoLength: '1:31',
        timePosted: new Date('November 1, 2021 3:25:30'),
        views: 2040320,
        likes: 136700,
        disLikes: 8909,
        thumbnail: '/images/thumbnails/thumbnail10.png',
        videoDescription: ``,
        comments: [
          {
            channelId: 6,
            comment:
              "I  don't think I've ever wanted a company to succeed as much as I do SpaceX.",
            likes: 13456,
            disLikes: 430,
            superLike: false,
            timePosted: new Date('November 1, 2021 3:00:30'),
            replies: [
              {
                channelId: 3,
                reply: 'Maybe Tesla, have same feelings for both',
                likes: 288,
                disLikes: 10,
                timePosted: new Date('November 1, 2021 3:50:30'),
              },
              {
                channelId: 5,
                reply: "Spacex's Engineers are phenomenal",
                likes: 77,
                disLikes: 6,
                timePosted: new Date('November 1, 2021 6:50:30'),
              },
            ],
          },
          {
            channelId: 2,
            comment:
              "Awesome! I was hoping we'd get a 4k version of this 😀 Good luck SpaceX!",
            likes: 2002,
            disLikes: 35,
            superLike: false,
            timePosted: new Date('November 1, 2021 13:25:30'),
            replies: [
              {
                channelId: 4,
                reply: 'We’re both late to this huh',
                likes: 5,
                disLikes: 0,
                timePosted: new Date('November 12, 2021 3:25:30'),
              },
              {
                channelId: 1,
                reply:
                  'Imagine if we get 24k videos from mars and reality just looks boring',
                likes: 16,
                disLikes: 0,
                timePosted: new Date('November 14, 2021 22:25:30'),
              },
            ],
          },
        ],
      },
    ],
    channelPlaylist: [
      {
        playlistName: 'Reusability',
        playlistVideosID: [9],
      },
      {
        playlistName: 'Human Spaceflight',
        playlistVideosID: [10],
      },
      {
        playlistName: 'Mission Webcasts',
        playlistVideosID: [9, 10],
      },
    ],
  },
  {
    channelId: 6,
    channelName: 'Veritasium',
    dateCreated: new Date('August 13, 2006 5:00:30'),
    isVerified: true,
    subscribers: 12200900,
    videosPosted: 334,
    totalViews: 1718379234,
    image: '/images/channelImage/image1.jpg',
    description:
      'An element of truth - videos about science, education, and anything else I find interesting.',
    channelVideos: [
      {
        videoId: 11,
        videoName: 'How Imaginary Numbers Were Invented',
        videoLength: '23:28',
        timePosted: new Date('November 1, 2021 19:00:30'),
        views: 12839136,
        likes: 514890,
        disLikes: 33200,
        thumbnail: '/images/thumbnails/thumbnail11.png',
        videoDescription: `A general solution to the cubic equation was long considered impossible, until we gave up the requirement that math reflect reality. This video is sponsored by Brilliant. The first 200 people to sign up via https://brilliant.org/veritasium get 20% off a yearly subscription.

        Thanks to Dr Amir Alexander, Dr Alexander Kontorovich, Dr Chris Ferrie, and Dr Adam Becker for the helpful advice and feedback on the earlier versions of the script. 
        
        ▀▀▀
        References:
        Some great videos about the cubic:
        
        500 years of not teaching the cubic formula. -- https://youtu.be/N-KXStupwsc
        
        Imaginary Numbers are Real -- https://youtu.be/T647CGsuOVU
        
        Dunham, W. (1990). Journey through genius: The great theorems of mathematics. New York. -- https://ve42.co/Dunham90
        
        Toscano, F. (2020). The Secret Formula. Princeton University Press. -- https://ve42.co/Toscano2020
        
        Bochner, S. (1963). The significance of some basic mathematical conceptions for physics. Isis, 54(2), 179-205. -- https://ve42.co/Bochner63
        
        Muroi, K. (2019). Cubic equations of Babylonian mathematics. arXiv preprint arXiv:1905.08034. -- https://ve42.co/Murio21
        
        Branson, W. Solving the cubic with Cardano, -- https://ve42.co/Branson2014
        
        Rothman, T. (2013). Cardano v Tartaglia: The Great Feud Goes Supernatural. arXiv preprint arXiv:1308.2181. -- https://ve42.co/Rothman
        
        Vali Siadat, M., & Tholen, A. (2021). Omar Khayyam: Geometric Algebra and Cubic Equations. Math Horizons, 28(1), 12-15. -- https://ve42.co/Siadat21
        
        Merino, O. (2006). A short history of complex numbers. University of Rhode Island. -- https://ve42.co/Merino2006
        
        Cardano, G (1545), Ars magna or The Rules of Algebra, Dover (published 1993), ISBN 0-486-67811-3
        
        Bombelli, R (1579) L’Algebra https://ve42.co/Bombelli
        
        The Manim Community Developers. (2021). Manim – Mathematical Animation Framework (Version v0.13.1) [Computer software]. https://www.manim.community/
        
        ▀▀▀
        Special thanks to Patreon supporters: Luis Felipe, Anton Ragin, Paul Peijzel, S S, Benedikt Heinen, Diffbot, Micah Mangione, Juan Benet, Ruslan Khroma, Richard Sundvall, Lee Redden, Sam Lutfi, MJP, Gnare, Nick DiCandilo, Dave Kircher, Edward Larsen, Burt Humburg, Blake Byers, Dumky, Mike Tung, Evgeny Skvortsov, Meekay, Ismail Öncü Usta, Crated Comments, Anna, Mac Malkawi, Michael Schneider, Oleksii Leonov, Jim Osmun, Tyson McDowell, Ludovic Robillard, Jim buckmaster, fanime96, Ruslan Khroma, Robert Blum, Vincent, Marinus Kuivenhoven, Alfred Wallace, Arjun Chakroborty, Joar Wandborg, Clayton Greenwell, Pindex, Michael Krugman, Cy 'kkm' K'Nelson,Ron Neal 
        
        Executive Producer: Derek Muller
        Writers: Derek Muller, Alex Kontorovich, Stephen Welch, Petr Lebedev
        Animators: Fabio Albertelli, Jakub Misiek, Iván Tello, Jesús Rascón
        SFX: Shaun Clifford
        Camerapeople: Derek Muller, Emily Zhang
        Editors: Derek Muller, Petr Lebedev
        Producers: Derek Muller, Petr Lebedev, Emily Zhang
        Additional video supplied by Getty Images
        Music from Epidemic Sound and Jonny Hyman`,
        comments: [
          {
            channelId: 5,
            comment:
              'I wholeheartedly believe that giving context to the history and slowly guiding students through the mindset of mathematicians is objectively better than spoon-feeding them equations.',
            likes: 15678,
            disLikes: 1890,
            superLike: false,
            timePosted: new Date('January 12, 2021 7:20:30'),
            replies: [
              {
                channelId: 4,
                reply: 'exactly',
                likes: 228,
                disLikes: 13,
                timePosted: new Date('January 12, 2021 17:20:30'),
              },
              {
                channelId: 1,
                reply:
                  'My Algebra teacher in college used to tell us stories like that and I remember him telling us this one too. He later went on to become the minister of education in my country.',
                likes: 893,
                disLikes: 20,
                timePosted: new Date('January 13, 2021 12:50:30'),
              },
              {
                channelId: 3,
                reply:
                  "We had this in every chapter's explanation in our books, a large one ~one page paragraph explaining the history or the person behind the concept, unfortunately it was never used",
                likes: 88,
                disLikes: 3,
                timePosted: new Date('January 23, 2021 22:50:30'),
              },
            ],
          },
          {
            channelId: 2,
            comment:
              'I’m a physics major. I’ve always had trouble understanding complex numbers and why they exist in equations. It’s like my professors were just handing out the equations like the Schrodinger equation without really explaining what they mean. As I went on throughout college I gathered an understanding, but this video gave me that “aha!” moment. Thank you Veritasium, Your videos are something special and I appreciate every single one that gives me more insight on how the universe works.',
            likes: 635,
            disLikes: 21,
            superLike: false,
            timePosted: new Date('May 21, 2022 9:00:30'),
            replies: [
              {
                channelId: 1,
                reply:
                  'yes he is a good "teacher", knows how to explain and visualize things.  In math one would learn that "things" exist as parts of other things, real numbers are a subset of complex numbers.  And then there\'s quaternions  ... and one  would think,  does it ever stop...  and yes it does, but that means walking into set theory and such, everything is kinda "connected". I worked a lot with physicists, they always came to me "to pick my brain".',
                likes: 4,
                disLikes: 0,
                timePosted: new Date('May 21, 2022 12:40:30'),
              },
              {
                channelId: 3,
                reply:
                  'Complex numbers are pretty cool once you get really into the theory on it. Like it’s applications and stuff is cool but things like reimanns hypothesis or schrodingers equation are very interesting',
                likes: 0,
                disLikes: 0,
                timePosted: new Date('May 22, 2022 12:40:30'),
              },
            ],
          },
        ],
      },
      {
        videoId: 12,
        videoName: 'Spinning Tube Trick',
        videoLength: '3:19',
        timePosted: new Date('February 23, 2012 13:25:30'),
        views: 4973651,
        likes: 43560,
        disLikes: 8909,
        thumbnail: '/images/thumbnails/thumbnail12.png',
        videoDescription: `To see what this looks like from under a glass table, see http://www.youtube.com/watch?v=E9WUaB...`,
        comments: [
          {
            channelId: 2,
            comment:
              '"You could google it".Google phrase:Why can you only see the x if you put an x and an o on opposite ends of a pvc tube when you spin it with your finger on the x side?',
            likes: 4235,
            disLikes: 210,
            superLike: false,
            timePosted: new Date('March 25, 2017 13:25:30'),
            replies: [
              {
                channelId: 3,
                reply: 'Hahahahaha it actually worked xD',
                likes: 335,
                disLikes: 23,
                timePosted: new Date('April 20, 2017 13:25:30'),
              },
              {
                channelId: 3,
                reply: 'victor sodéus Lmao it did',
                likes: 17,
                disLikes: 1,
                timePosted: new Date('May 5, 2017 13:25:30'),
              },
            ],
          },
          {
            channelId: 2,
            comment:
              'Clever. The solution is this: When he spins the tube, it’s both spinning and rotating. Both ends are spinning at the same rate, but the side he pressed down on is rotating in the opposite direction of the spin, causing the marking on it to remain in the same location in the frame long enough for the camera to picture it clearly. For the opposite side, it is rotating with the direction of spin. This moves the marking across the frame much more quickly, and as a result, during the period of time the camera is capturing a single frame, it captures less of the marking and more of the pipe’s base color. Seen from underneath, this is reversed: the side rotating away from the direction of spin while being viewed from the top rotates toward the direction of spin from a POV underneath. So it will be the opposite marking that’s visible underneath the glass table.',
            likes: 298,
            disLikes: 15,
            superLike: false,
            timePosted: new Date('December 23, 2020 13:25:30'),
            replies: [
              {
                channelId: 5,
                reply:
                  'Just saw this in my recommendations (for some reason), but the first thing I did when I saw the video was play it back at 0.25x using youtube. Lo and behold, it is very easy to see that one side is spinning faster then the other, though it takes a bit longer to see why.',
                likes: 4,
                disLikes: 0,
                timePosted: new Date('December 24, 2020 13:25:30'),
              },
              {
                channelId: 2,
                reply:
                  'I thought something along those lines. (The flick he gives it is constructive on one end and destructive at the other, so the X whizzes by too fast)',
                likes: 2,
                disLikes: 0,
                timePosted: new Date('December 24, 2020 23:25:30'),
              },
            ],
          },
        ],
      },
    ],
    channelPlaylist: [
      {
        playlistName: 'Inertia',
        playlistVideosID: [11],
      },
      {
        playlistName: 'Radiation',
        playlistVideosID: [12],
      },
      {
        playlistName: 'Favourites',
        playlistVideosID: [11, 12],
      },
    ],
  },
];

export const filters = [
  'All',
  'Gaming',
  'Algorithm',
  'CSS',
  'Javascript',
  'React',
  'React Native',
  'Tesla',
  'Rocket',
  'Thoughts',
  'Web Design',
  'Python',
  'Java',
  'Live',
  'Comedy',
  'Computers',
  'API',
  'Data Structure',
  'Elon Musk',
  'Tesla',
  'Jordan Peterson',
];

export const videoOptions = [
  {
    name: 'Likes',
    logo: <BiLike className='Icon Icon_videoOption' />,
  },
  {
    name: 'Dislikes',
    logo: <BiDislike className='Icon Icon_videoOption' />,
  },
  {
    name: 'Share',
    logo: <RiShareForwardLine className='Icon Icon_videoOption' />,
  },
  {
    name: 'Download',
    logo: <HiDownload className='Icon Icon_videoOption' />,
  },
  {
    name: 'Save',
    logo: <TbPlaylistAdd className='Icon Icon_videoOption' />,
  },
  {
    name: 'Report',
    logo: <SlFlag className='Icon Icon_videoOption' />,
  },
  {
    name: 'Show transcript',
    logo: <CgTranscript className='Icon Icon_videoOption' />,
  },
];
