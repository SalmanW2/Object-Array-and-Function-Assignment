let people = {
    friends:[] as {firstName:string, lastName:string, id?:number}[]
}
let friend1 = {
    firstName: "Kashan",
    lastName: "Fazal",
    id:32
}
let friend2 = {
    firstName: "Danish",
    lastName: "Rehman",
    id:123
}
let friend3 = {
    firstName: "Ibad-ud-din",
    lastName: "Saddiqui"
}
people.friends[0]=friend1;
people.friends[1]=friend2;
people.friends[2]=friend3;

console.log(people);
console.log(people.friends[1]);
