import logo from "@/images/resources/footer-logo.png";

const social = [
  { icon: "fa-facebook-square", link: "https://www.instagram.com/make_your_vacations?igsh=MWVsc3U0dG51bW1oeQ%3D%3D&utm_source=qr" },
  // { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "https://www.facebook.com/share/15PLysgqhM/?mibextid=wwXIfr" },
  // { icon: "fa-pinterest-p", link: "" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Make Your Vacations",
  about:
    "We Plan, You Relax.",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+91 9003564101",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "makeyourvacationss@gmail.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "No.26, V.R.D Nagar, Madhavaram, Chennai, India, 600060",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    { id: 2, link: "#", title: "Community Blog" },
    { id: 3, link: "#", title: "Rewards" },
    { id: 4, link: "#", title: "Work with Us" },
    { id: 5, link: "#", title: "Meet the Team" },
  ],
  explore: [
    { id: 1, link: "#", title: "Account" },
    { id: 2, link: "#", title: "Legal" },
    { id: 3, link: "#", title: "Contact" },
    { id: 4, link: "#", title: "Affilitate Program" },
    { id: 5, link: "#", title: "Privacy Policy" },
  ],
};

export default footerData;
