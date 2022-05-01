import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import People from "../components/People.vue";
import Portofilio from "../components/Portofilio.vue";
import Investor from "../components/Investor.vue";
import Contact from "../components/Contact.vue";
import WhoWe  from "../components/WhoWe.vue";
import Kps  from "../components/Kps.vue";
import Syncona  from "../components/Syncona.vue";
import DataDriven  from "../components/DataDriven.vue";
import Social  from "../components/Social.vue";
import Aligin  from "../components/Aligin.vue";
import Culture  from "../components/Culture.vue";
import Finantial  from "../components/Finantial.vue";
import Analys  from "../components/Analys.vue";
import Inspiring  from "../components/Inspiring.vue";
import Investment  from "../components/Investment.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/syncona",
    name: "syncona",
    component: Syncona
  },
  {
    path: "/ourpeople",
    name: "ourpeople",
    component: People
  },
    {
    path: "/portofilio",
    name: "portofilio",
    component: Portofilio
  },
  {
    path: "/investor",
    name: "investor",
    component: Investor
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/whowe",
    name: "whowe",
    component: WhoWe
  },
  {
    path: "/kps",
    name: "kps",
    component: Kps
  },
  {
    path: "/datadriven",
    name: "datadriven",
    component: DataDriven
  },
  {
    path: "/social",
    name: "social",
    component: Social
  },
  {
    path: "/aligin",
    name: "aligin",
    component: Aligin
  },
  {
    path: "/culture",
    name: "culture",
    component: Culture
  },
  {
    path: "/finantial",
    name: "finantial",
    component: Finantial
  },
  {
    path: "/analys",
    name: "analys",
    component: Analys
  },
  {
    path: "/inspiring",
    name: "inspiring",
    component: Inspiring
  },
  {
    path: "/investment",
    name: "investment",
    component: Investment
  },
  
  

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
