import { Poppins, Chakra_Petch, Vollkorn, Advent_Pro } from "next/font/google";

export const poppins = Poppins({ 
    weight: ['200','300','400','500','600','700','800','900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins'
});

export const chakra = Chakra_Petch({
    weight: ['500','600','700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-Chakra_Petch'
});

export const vollkorn = Vollkorn({
    weight: ['400','500','600','700','800'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-Vollkorn'
});

export const advent_Pro = Advent_Pro({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-Advent_Pro'
});