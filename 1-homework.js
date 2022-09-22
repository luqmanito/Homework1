let biodata = [
    {
        name: `Mohammad Luqman Grahito`,
        age: 28,
        hobbies: [`reading`, `studying`,],
        isMarried: true,
        schoolList: [
            {
                highSchool: `SMAN 13 Bandung`,
                yearIn: 2009,
                yearOut: 2012,
                major: `IPA`

            },
            {
                college1: `Politeknik Negeri Bandung`,
                yearIn: 2012,
                yearOut: 2015,
                major: `Teknik Mesin`
            },
            {
                college2: `Universitas Jenderal Achmad Yani`,
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

const arr = [`mtk`, `bahasaIndonesia`, `bahasaInggris`, `ipa`]

let subject = {
    mtk: 10,
    bahasaIndonesia: 45,
    bahasaInggris: 50,
    ipa: 50
}

let average = 0
for (let i = 0; i < arr.length; i++) {
    let totalGrade = subject[arr[i]]
    average += totalGrade / arr.length
}

average = (Math.round(average));

if (isNaN(average)) {
    console.log(`invalid input`) 
} else if (average >=90) {
    console.log(`Rata-rata = ${average} Grade = A`);
} else if ( average >=80 && average <= 89) {
    console.log(`Rata-rata = ${average} Grade = B`);
} else if ( average >=70 && average <= 79) {
    console.log(`Rata-rata = ${average} Grade = C`);
} else if (average >=60 && average <= 69 ) {
    console.log(`Rata-rata = ${average} Grade = D`);
} else {
    console.log(`Rata-rata = ${average} Grade = E`);
}



/*
let angka = 5

for (let i=angka; i >0 ; i--) {
    let output =''

    for (let j=i; j>0; j--) {
        output += angka
    } angka--
    console.log(Number(output))
}


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
    hobbies : [`reading`, `studying`]
}

const combinedData = {...data, ...modifyData}
console.log(combinedData);

const {id, name, username,email, address, ...rest} = data
const {street, suite, city, zipcode} = address
console.log(`${street} dan ${city}`);
*/