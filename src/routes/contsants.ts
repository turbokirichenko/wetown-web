import type { NavEntity, SlimeEntity } from "$lib/types";
import gtLogo from "$lib/assets/gt-logo.svg";
import tgLogo from "$lib/assets/tg-logo.svg";
import vkLogo from "$lib/assets/vk-logo.svg";
import home from "$lib/assets/home.svg";

import tourists from "$lib/assets/places/tourists.jpg";
import beach from "$lib/assets/places/beach.jpg";
import sochi from "$lib/assets/places/sochi.jpg";

export const NAV_MAP: NavEntity[] = [
    { href: "https://link.com", icon: gtLogo, text: "" },
    { href: "https://link.com", icon: tgLogo, text: "" },
    { href: "https://link.com", icon: vkLogo, text: "" },
]
export const SLIME_MAP: SlimeEntity[] = [
    { href: "#", icon: home },
    { href: "#", icon: home },
    { href: "#", icon: home },
    { href: "#", icon: home },
    { href: "#", icon: home },
    { href: "#", icon: home },
]

export const SOCHI_IMG = sochi;
export const TOURISTS_IMG = tourists;