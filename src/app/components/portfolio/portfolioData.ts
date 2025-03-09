export interface Portfolio {              // type also works
    name: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const projects: Portfolio[] = [
    {
      name: "Personal Website",
      date: "Jan 3, 2025",
      description:
        "This is a website I made as a part of the Hack4Impact starter kit. While making this project, I revised my fundamentals in HTML, CSS, and git.",
      image: "./public/images/homepage.png", // Relative path
      imageAlt: "homepage.png",
      slug: "/personal-website",
    },
    {
      name: "Vocal Tract Ultrasound Detection",
      date: "Aug 24, 2023",
      description: "Creating a Vocal Tract Ultrasound Detection Citizen Science app used to detect speech sounds using ultrasound images in the UCSC CS Lab.",
      image: "./public/images/UCSC.png", // Relative path
      imageAlt: "UCSC.png",
      slug: "/ultrasound-project",
    },
    {
        name: "Language Translator Device",
        date: "Jul 8, 2022",
        description: "Created a portable Language Translator using a Raspberry Pi and the Google Media Translate API.",
        image: "./public/images/pi.png", // Relative path
        imageAlt: "pi.png",
        slug: "/translator-device",
    }
  ];

export default projects; // This will allow us to access this data anywhere!