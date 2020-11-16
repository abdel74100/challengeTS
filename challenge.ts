type User = {
    name: string;
    age: number;
};
const prettyPrintWilder = (users: User[]) => {
    console.log("########################");
    users.map((el) => {
        console.log(`${el.name} is ${el.age} years old`);
    });
    console.log("########################");
};

const wilders: User[] = [];
const user1 = { name: "Pierre", age: 23 };

function getAge(string) {
    var today = new Date();
    var birthDate = new Date(string);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    return age;
}

const user2 = { name: "Abdel", age: getAge("10/02/1984") };
const user3 = { name: "Jacques", age: 25 };

wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);