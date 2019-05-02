import {Person} from "./Person";

export function greeting(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

