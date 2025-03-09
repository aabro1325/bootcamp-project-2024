export interface Blog {              // type also works
    name: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
    {
      name: "What is Cosmology?",
      date: "Jan 3, 2022",
      description:
        "Immanuel Kant, a German philosopher, proposed that, “the Sun had once been a hot fluid body extending beyond the present orbits of the planets” (link.springer.com)",
      image: "./Images/cosmos.png", // Relative path
      imageAlt: "cosmos.png",
      slug: "https://www.thecogniscientist.com/post/what-is-cosmology",
    },
    {
      name: "IPA Chart",
      date: "Jul 8, 2022",
      description: "“IPA” stands for the International Phonetic Alphabet.",
      image: "./Images/ipachart.png", // Relative path
      imageAlt: "ipachart.png",
      slug: "https://www.thecogniscientist.com/post/ipa-chart",
    }
  ];

export default blogs; // This will allow us to access this data anywhere!