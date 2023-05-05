import * as animateScroll from "svelte-scrollto";
import type { NavEntity, SlimeEntity } from "$lib/types";
import gtLogo from "$lib/assets/gt-logo.svg";
import tgLogo from "$lib/assets/tg-logo.svg";
import vkLogo from "$lib/assets/vk-logo.svg";

import home from "$lib/assets/icons/home.svg";
import friends from "$lib/assets/icons/friends.svg";
import suns from "$lib/assets/icons/sun.svg";
import info from "$lib/assets/icons/info.svg";
import mail from "$lib/assets/icons/mail.svg";
import water from "$lib/assets/icons/water.svg";

import tourists from "$lib/assets/places/tourists-min.jpg";
import beach from "$lib/assets/places/beach-min.jpg";
import sochi from "$lib/assets/places/sochi-min.jpg";
import boy from "$lib/assets/boy.svg";
import girl from "$lib/assets/girl.svg";

export const NAV_MAP: NavEntity[] = [
    { href: "https://link.com", icon: gtLogo, text: "" },
    { href: "https://link.com", icon: tgLogo, text: "" },
    { href: "https://link.com", icon: vkLogo, text: "" },
]
export const SLIME_MAP: SlimeEntity[] = [
    { href: "#_simple-page", icon: friends, 
        onclick: () => { animateScroll.scrollTo({element: '#_simple-page'}) } },
    { href: "#_simple-page", icon: home, 
        onclick: () => { animateScroll.scrollToTop() } },
    { href: "#_messages-page", icon: mail, 
        onclick: () => { animateScroll.scrollTo({element: '#_messages-page'}) } },
    { href: "#_paradise-page", icon: info, 
        onclick: () => { animateScroll.scrollTo({element: '#_paradise-page'}) } },
    { href: "#_contacts-page", icon: water, 
        onclick: () => { animateScroll.scrollTo({element: '#_contacts-page'}) } },
    { href: "#_accordion-page", icon: suns, 
        onclick: () => { animateScroll.scrollTo({element: '#_accordion-page'}) } },
]

export const SOCHI_IMG = sochi;
export const TOURISTS_IMG = tourists;
export const BEACH_IMG = beach;
export const BOY_IMG = boy;
export const GIRL_IMG = girl;