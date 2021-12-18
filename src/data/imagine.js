import bloodBankPhoto from '../assets/images/angeles-blood-bank.png';
import dialysisCenterPhoto from '../assets/images/angeles-dialysis-center.png';
import foodStripPhoto from '../assets/images/angeles-food-strip.png';
import monumentPhoto from '../assets/images/angeles-monument.png';
import projectBalePhoto from '../assets/images/project-bale.png';

export const topics = [
  {
    highlightText: 'Health facilities',
    extraText: 'are well funded.',
    photos: [
      {
        title: 'Proposed Ángeles Blood Bank',
        source: bloodBankPhoto,
        link: 'google.com',
      },
      {
        title: 'Proposed Ángeles Dialysis',
        source: dialysisCenterPhoto,
        link: 'google.com',
      },
    ],
  },
  {
    highlightText: 'Urban planning',
    extraText: 'is not neglected.',
    photos: [
      {
        title: 'Angeles City International Food Strip',
        credit: 'Ar. Paul Maiquez',
        creditLink: 'google.com',
        source: foodStripPhoto,
        link: 'google.com',
      },
      {
        title: 'Báyung Ángeles Livelihood Estates',
        credit: 'Ar. Paul Maiquez',
        creditLink: 'google.com',
        source: projectBalePhoto,
        link: 'google.com',
      },
      {
        title: 'City of Angels Monument',
        credit: 'Ar. Paul Maiquez',
        creditLink: 'google.com',
        source: monumentPhoto,
        link: 'google.com',
      },
    ],
  },
];
export const allPhotos = topics.reduce((acc, topic) => acc.concat(topic.photos), []);
export const topicIndexByPhotoIndex = topics.reduce(
  (acc, topic, index) => acc.concat(Array(topic.photos.length).fill(index)),
  []
);
export const getTopicAndPhoto = photoIndex => ({
  topic: topics[topicIndexByPhotoIndex[photoIndex]],
  photo: allPhotos[photoIndex],
});
