import food from "./images/food.jpg";
import food2 from "./images/food2.jpg";
import nature from "./images/nature.jpg";
import nature2 from "./images/nature2.jpg";
import people from "./images/people.jpg";
import people2 from "./images/people2.jpg";

export const picturesState = () => {
  return [
    {
      title: "Food",
      mainImg: food,
      secondaryImg: food2,
      url: "/work/food",
      titles: [
        {
          title: "Food as a piece of art",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Taste it with the eyes",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Colors, taste and composition",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Nature",
      mainImg: nature,
      url: "/work/nature",
      secondaryImg: nature2,
      titles: [
        {
          title: "Feel the balance of nature",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "The perfect capture of colors and sense of peace",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Merge with nature through the lenses",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "People",
      mainImg: people,
      url: "/work/people",
      secondaryImg: people2,
      titles: [
        {
          title: "Capture the individuality",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a being yourself.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "People as a portrait of the soul",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
