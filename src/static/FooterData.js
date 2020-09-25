import generalData from "./GeneralData";

export default {
  FooterLine: `This website is operated and maintained by ${generalData.FullName}.\n The information provided by the content on this site is personal and educational only.`,
  SociaMedia: [
    {
      Name: "LinkedIn",
      ImgSrc: require("../assets/images/FooterIcons/LinkedIn.png"),
      link: "https://www.linkedin.com/in/sabesan96/",
    },
    {
      Name: "Facebook",
      ImgSrc: require("../assets/images/FooterIcons/Facebook.png"),
      link: "https://www.facebook.com/sathananthan.sabesan",
    },
    {
      Name: "Twitter",
      ImgSrc: require("../assets/images/FooterIcons/Twitter.png"),
      link: "https://twitter.com/TheSabesan",
    },
    {
      Name: "WhatsApp",
      ImgSrc: require("../assets/images/FooterIcons/WhatsApp.png"),
      link: "https://wa.me/94770711017",
    },
  ],
};
