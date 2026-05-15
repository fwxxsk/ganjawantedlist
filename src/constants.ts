export interface Member {
  id: string;
  discordId: string; // Used for Lanyard API status
  name: string;
  role: string;
  description: string;
  bannerImg?: string;
  profileImg?: string;
  soundSrc?: string;
}

export interface GridItem {
  id: string;
  title: string;
  description: string;
  type: 'threat' | 'exclusive';
  imgSrc?: string;
  profileImg?: string;
  soundSrc?: string;
  discordId?: string;
}

export const APP_CONFIG = {
  name: 'GANJA',
  description: 'An elite syndicate of digital architects.',
  customBackgroundImg: '', // Add a full page background link here
  splashImgSrc: 'Gemini_Generated_Image_s29trrs29trrs29t.png',
};

export const MEMBERS_DATA: Member[] = [
  {
    id: 'risk',
    discordId: '1234567890', // put your discord id here
    name: 'risk',
    role: 'EXEC',
    description: 'Community Manager & Lead Designer',
    bannerImg: '', // put your banner image url here
    profileImg: '', // put your profile image url here
    soundSrc: '', // put your mp3 sound url here
  },
  // Add more members here...
];

export const THREAT_ITEMS: GridItem[] = [
  {
    id: 't1',
    title: 'THE OVERSEER',
    description: 'bobo ka tol',
    type: 'threat',
    imgSrc: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop',
    profileImg: 'https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=2576&auto=format&fit=crop',
    discordId: '1234567890', // put your discord id here
  },
];

export const EXCLUSIVE_ITEMS: GridItem[] = [
  {
    id: 'm1',
    title: 'ALPHA_SYNDICATE',
    description: 'GANJA // SYNDICATE',
    type: 'exclusive',
    imgSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop',
    profileImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop',
    discordId: '', // put your discord id here
  },
];
