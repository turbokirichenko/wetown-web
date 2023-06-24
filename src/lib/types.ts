export type NavEntity = {
    href: string,
    icon: string,
    text: string
}

export type SlimeEntity = {
    href: string,
    icon: string,
    onclick: () => void
}

export type StickEntity = {
    icon: string, 
    bg: string, 
    bottom: boolean,
    left: boolean,
    text: string,
    color?: string,
}

export type AchiveEntity = {
    title: string,
    description: string
}

export type CardEntity = {
    icon: string,
    title: string,
    description: string,
    list: AchiveEntity[]
}