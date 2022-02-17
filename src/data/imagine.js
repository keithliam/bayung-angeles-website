import healthCareProjectsPhoto from '../assets/images/angeles-healthcare-projects.jpg';
import dialysisCenterPhoto from '../assets/images/angeles-dialysis-center.png';
import foodStripPhoto from '../assets/images/angeles-food-strip.png';
import civilCivicProjectsPhoto from '../assets/images/angeles-civil-civic-projects.jpg';
import housingProjectsPhoto from '../assets/images/angeles-housing-projects.jpg';

export const topics = [
  {
    highlightText: 'Health facilities',
    extraText: 'are well funded.',
    photos: [
      {
        title: 'Build Angeles Healthcare Projects',
        source: healthCareProjectsPhoto,
        link: 'https://bit.ly/3gSCdzZ',
      },
      {
        title: 'Proposed Ángeles Dialysis Center',
        source: dialysisCenterPhoto,
        link: 'https://bit.ly/3HW1iWD',
      },
    ],
  },
  {
    highlightText: 'Urban planning',
    extraText: 'is not neglected.',
    photos: [
      {
        title: 'Build Angeles Civil Works & Civic Centers',
        source: civilCivicProjectsPhoto,
        link: 'https://bit.ly/3gSCdzZ',
      },
      {
        title: 'Angeles City Culinary Strip',
        credit: 'Ar. Paul Maiquez',
        creditLink: 'https://bit.ly/ba-maiquez-fb',
        source: foodStripPhoto,
        link: 'https://bit.ly/3LFyd41',
      },
      {
        title: 'Build Angeles Housing Projects',
        source: housingProjectsPhoto,
        link: 'https://bit.ly/3gSCdzZ',
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
