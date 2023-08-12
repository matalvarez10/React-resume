import { IDescriptionData } from "../interfaces/inputDesc.interface"
import { IEducationData } from "../interfaces/inputEducation.interface"
import { ISkillsData } from "../interfaces/inputSkills.interface"
import { IExperienceData } from "../interfaces/inputExperience.interface"



export const exampleDescription:IDescriptionData = {
    "nombre": "Matias ",
    "apellido": "Alvarez",
    "cargo": "UI/UX Designer",
    "about": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",
    "numero": "+123 456 ",
    "correo": "789",
    "sitioWeb": "www.github.com",
    "ubicacion": "China Town #123"
}

export const exampleEducation:IEducationData[] =[
    {
        "id": 1,
        "courseStudied": "Software engineering",
        "institucion": "UTEM",
        "fechaInicio": "2023-08-12",
        "fechaTermino": "2023-08-12"
    },
    {
        "id": 2,
        "courseStudied": "Data Scientist",
        "institucion": "USACH",
        "fechaInicio": "2016-02-11",
        "fechaTermino": "2021-02-11"
    }
]

export const exampleSkills:ISkillsData[]=[
    {
        "id": 1,
        "skillName": "Python",
        "skillLevel": "Expert"
    },
    {
        "id": 2,
        "skillName": "C++",
        "skillLevel": "Expert"
    },
    {
        "id": 3,
        "skillName": "Java",
        "skillLevel": "Expert"
    },
    {
        "id": 4,
        "skillName": "Excel",
        "skillLevel": "Beginner"
    },
    {
        "id": 5,
        "skillName": "Word",
        "skillLevel": "Beginner"
    },
    {
        "id": 6,
        "skillName": "Git",
        "skillLevel": "Beginner"
    }
]

export const languagesExample: ISkillsData[]=[
    {
        "id": 7,
        "skillName": "English",
        "skillLevel": "Beginner"
    },
    {
        "id": 8,
        "skillName": "Spanish",
        "skillLevel": "Beginner"
    }
]



export const experienceExample: IExperienceData[] = [
    {
        "id": 1,
        "posicion": "Web Dev",
        "companyName": "Company 1",
        "lugar": "CA",
        "fechaInicio": "2022-01-11",
        "fechaTermino": "2024-11-11",
        "description": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.\""
    },
    {
        "id": 2,
        "posicion": "Data Scientist",
        "companyName": "Company 2",
        "lugar": "TX",
        "fechaInicio": "2023-01-11",
        "fechaTermino": "2023-08-11",
        "description": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\""
    },
    {
        "id": 3,
        "posicion": "Web Dev",
        "companyName": "Company 3",
        "lugar": "NY",
        "fechaInicio": "2023-08-11",
        "fechaTermino": "2023-08-11",
        "description": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.\""
    }
]