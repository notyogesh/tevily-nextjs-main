import logo from "../../public/logoCropped.png";
import logo2 from "../../public/logoCropped.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    // subNavItems: [
    //   {
    //     id: 1,
    //     name: "Home One",
    //     href: "/",
    //   },
    //   {
    //     id: 2,
    //     name: "Home Two",
    //     href: "/home2",
    //   },
    //   {
    //     id: 3,
    //     name: "Header Styles",
    //     href: "/",
    //     subItems: [
    //       {
    //         id: 1,
    //         name: "Header One",
    //         href: "",
    //       },
    //       { id: 2, name: "Header Two", href: "" },
    //     ],
    //   },
    // ],
  },
  {
    id: 2,
    name: "Destinations",
    href: "/destinations",
    subNavItems: [
      { id: 1, name: "Destinations", href: "/destinations" },
      { id: 2, name: "Destinations Detail", href: "/destinations-details" },
    ],
  },
  {
    id: 3,
    name: "Tours",
    href: "/tours",
    // subNavItems: [
    //   { id: 1, name: "Tours", href: "/tours" },
    //   { id: 2, name: "Tours List", href: "/tours-list" },
    //   { id: 3, name: "Tours Details", href: "/tour-details" },
    // ],
  },
  {
    id: 4,
    name: "About",
    href: "/about",
    // subNavItems: [{ id: 1, name: "About", href: "/about" }],
  },
  // {
  //   id: 5,
  //   name: "News",
  //   href: "/news",
  //   subNavItems: [
  //     { id: 1, name: "News", href: "/news" },
  //     { id: 2, name: "News Details", href: "/news-details" },
  //   ],
  // },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "https://www.instagram.com/make_your_vacations?igsh=MWVsc3U0dG51bW1oeQ%3D%3D&utm_source=qr" },
  // { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "https://www.facebook.com/share/15PLysgqhM/?mibextid=wwXIfr" },
  // { icon: "fa-pinterest-p", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+91 9003564101",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "makeyourvacationss@gmail.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;
