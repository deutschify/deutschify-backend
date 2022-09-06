import { IUser } from "./interfaces.js";

export const getUsers = (): IUser[] => {
    return [
        {
            firstName: "",
            lastName: "",
            rating: 0,
            feedback: "",
            email: "hendrick@gmail.com",
            password: "123d",
            accessGroups: ["loggedInUsers", "members"],
        },
        {
            firstName: "",
            lastName: "",
            rating: 0,
            feedback: "",
            email: "anonymousUser",
            password: "Anonymous",
            accessGroups: ["loggedOutUsers"],
        },
        {
            firstName: "",
            lastName: "",
            rating: 0,
            feedback: "",
            email: "hd@gmail.com",
            password: "Hendrick",
            accessGroups: ["loggedInUsers", "members"],
        },
        {
            firstName: "",
            lastName: "",
            rating: 0,
            feedback: "",
            email: "an@gmail.com",
            password: "Andrea",
            accessGroups: ["loggedInUsers", "members"],
        },
    ];
};
