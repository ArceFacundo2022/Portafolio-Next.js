import {createContext} from 'react';

interface skills_Type {
    name:string,
    img:string,
    frase:string
}

export interface softSkills_type{
    selected: string
    setSkillState: (value:skills_Type | any) => void
}

const initialState: softSkills_type = {
    selected: "",
    setSkillState: (value:skills_Type) => {}
}

export const SoftSkills_Context = createContext<softSkills_type>(initialState)