import cardBannerPie from '../assets/images/card-banner-pie.png';

const platformsPie =
  '- **H**igh-quality nutrition and mental health programs.\n- **E**nsure the access to primary and preventive care.\n- **A**ccess to complete medicine and medical equipment.\n- **L**ocal public health department funding.\n- **T**o establish the connection between public and private hospitals for better healthcare coverage.\n- **H**ealthcare workforce would be strengthened by investing in their well-being.';

export const teamCategories = [
  {
    title: 'Mayor',
    members: [
      {
        name: 'Amos Rivera',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
    ],
  },
  {
    title: 'Vice Mayor',
    members: [
      {
        name: 'Dr. Pie Juan',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
    ],
  },
  {
    title: 'Councilors',
    members: [
      {
        name: 'Bong Arceo',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
      {
        name: 'Ar. Paul Maiquez',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
      {
        name: 'Don Quito',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
      {
        name: 'Harvs Santiago',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
      {
        name: 'Jeselle Dayrit',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
      {
        name: 'Dan Aloot',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
      {
        name: 'Atty. Israel Forto',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
    ],
  },
];
export const allMembers = teamCategories.map(category => category.members).flat();
export const categoryIndexByMemberIndex = teamCategories.reduce(
  (acc, category, index) => acc.concat(Array(category.members.length).fill(index)),
  []
);
export const memberIndexInCategoryByOverallMemberIndex = teamCategories.reduce(
  (acc, category) => acc.concat(...Array(category.members.length).keys()),
  []
);
export const { acc: overallMemberIndexByCategoryMemberIndices } = teamCategories.reduce(
  ({ acc, currentMemberIndex }, category) => {
    const { members } = category;

    return {
      acc: [...acc, members.map((member, index) => currentMemberIndex + index)],
      currentMemberIndex: currentMemberIndex + members.length,
    };
  },
  { currentMemberIndex: 0, acc: [] }
);
