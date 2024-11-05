type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "What is Cosmology?",
    date: "Jan 3, 2022",
    description:
      "Immanuel Kant, a German philosopher, proposed that, “the Sun had once been a hot fluid body extending beyond the present orbits of the planets” (link.springer.com)",
    image: "./Images/cosmos.png", // Relative path
    imageAlt: "cosmos.png",
    slug: "https://www.thecogniscientist.com/post/what-is-cosmology",
  },
  {
    title: "IPA Chart",
    date: "Jul 8, 2022",
    description: "“IPA” stands for the International Phonetic Alphabet.",
    image: "./Images/ipachart.png", // Relative path
    imageAlt: "ipachart.png",
    slug: "https://www.thecogniscientist.com/post/ipa-chart",
  },
];

const blogContainer = document.getElementById("blog_container");
if (blogContainer) {
  blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.className = "blog-post";

    const titleElement = document.createElement("h1");
    titleElement.className = "blog-title";
    titleElement.textContent = blog.title;

    const imageElement = document.createElement("img");
    imageElement.src = blog.image;
    imageElement.alt = blog.imageAlt;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = blog.description;

    const linkElement = document.createElement("a");
    linkElement.href = blog.slug;
    linkElement.textContent = "Read More";
    linkElement.target = "_blank"; // Opens link in a new tab

    blogDiv.appendChild(titleElement);
    blogDiv.appendChild(imageElement);
    blogDiv.appendChild(descriptionElement);
    blogDiv.appendChild(linkElement);

    blogContainer.appendChild(blogDiv);
  });
}
