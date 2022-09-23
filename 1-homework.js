// TASK 1 start here
let biodata = [
    {
        name: `Mohammad Luqman Grahito`,
        age: 28,
        hobbies: [`reading`, `studying`,],
        isMarried: true,
        schoolList: [
            {
                name: `SMAN 13 Bandung`,
                yearIn: 2009,
                yearOut: 2012,
                major: `IPA`

            },
            {
                name: `Politeknik Negeri Bandung`,
                yearIn: 2012,
                yearOut: 2015,
                major: `Teknik Mesin`
            },
            {
                name: `Universitas Jenderal Achmad Yani`,
                yearIn: 2016,
                yearOut: 2019,
                major: `Teknik Mesin`
            }
        ],
        skills: [
            {
                skillName: `video editing`,
                level: 'advanced'
            },
            {
                skillName: `coding`,
                level: `beginner`
            }
        ],
        interestInCoding: true
    }
]


// TASK 2 start here
let subject = {
    mtk: 100,
    bahasaIndonesia: 45,
    bahasaInggris: 100,
    ipa: 50
}
let arr = [`mtk`, `bahasaIndonesia`, `bahasaInggris`, `ipa`]

let average = 0
for (let i = 0; i < arr.length; i++) {
    let totalGrade = subject[arr[i]]
    average += totalGrade / arr.length
}

average = (Math.round(average));

if (isNaN(average)) {
    console.log(`invalid input`)
} else if (average >= 90) {
    console.log(`Rata-rata = ${average} Grade = A`);
} else if (average >= 80 && average <= 89) {
    console.log(`Rata-rata = ${average} Grade = B`);
} else if (average >= 70 && average <= 79) {
    console.log(`Rata-rata = ${average} Grade = C`);
} else if (average >= 60 && average <= 69) {
    console.log(`Rata-rata = ${average} Grade = D`);
} else {
    console.log(`Rata-rata = ${average} Grade = E`);
}



// TASK 3 start here
const printSegitiga = 5
let col = 1

if (isNaN(printSegitiga)) {
    console.log(`invalid input`);
} else {
    for (let i = printSegitiga; i > 0; i--) {
        let output = ''
    
        for (let j = i; j > 0; j--) {       // loop ke samping
            output += col
            col++
        }
        col = 1         // reset
        console.log(Number(output))
    }
}


// TASK 4 start here
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

const modifyData = {
    name: `Mohammad Luqman Grahito`,
    email: `luqmangrahito@gmail.com`,
    hobbies: [`reading`, `studying`]
}
// tambah data
const combinedData = { ...data, ...modifyData }
console.log(combinedData);

// ambil data
const { name, email, hobbies, address } = data
const { street, city } = address
console.log(`${street} dan ${city}`);
