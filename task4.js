const resumeData = {
    "personal_info": {
        "name": "Vignesh",
        "email": "vikizee2595@gmail.com",
        "phone": "9487212654",
        "address": "Ramanathapuram"
    },
    "education": [
        {
            "degree": "Bachelor of Science in Computer Science",
            "university": "test University",
            "location": "tamilnadu, india",
            "year": "2010 - 2014"
        }
    ],
    "skills": [
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Java",
        "SQL",
        "Git",
        "Agile Development"
    ]
};

// Using for...in loop
console.log("Using for...in loop:");
for (let key in resumeData) {
    if (resumeData.hasOwnProperty(key)) {
        console.log(`${key}:`);
        if (Array.isArray(resumeData[key])) {
            resumeData[key].forEach(item => {
                for (let prop in item) {
                    console.log(`  ${prop}: ${item[prop]}`);
                }
            });
        } else if (typeof resumeData[key] === 'object') {
            for (let prop in resumeData[key]) {
                console.log(`  ${prop}: ${resumeData[key][prop]}`);
            }
        } else {
            console.log(`  ${key}: ${resumeData[key]}`);
        }
    }
}

// Using for...of loop
console.log("\nUsing for...of loop:");
const keys = Object.keys(resumeData);
for (const key of keys) {
    console.log(`${key}:`);
    if (Array.isArray(resumeData[key])) {
        for (const item of resumeData[key]) {
            const props = Object.keys(item);
            for (const prop of props) {
                console.log(`  ${prop}: ${item[prop]}`);
            }
        }
    } else if (typeof resumeData[key] === 'object') {
        const props = Object.keys(resumeData[key]);
        for (const prop of props) {
            console.log(`  ${prop}: ${resumeData[key][prop]}`);
        }
    } else {
        console.log(`  ${key}: ${resumeData[key]}`);
    }
}

// Using forEach method
console.log("\nUsing forEach method:");
Object.entries(resumeData).forEach(([key, value]) => {
    console.log(`${key}:`);
    if (Array.isArray(value)) {
        value.forEach(item => {
            Object.entries(item).forEach(([prop, val]) => {
                console.log(`  ${prop}: ${val}`);
            });
        });
    } else if (typeof value === 'object') {
        Object.entries(value).forEach(([prop, val]) => {
            console.log(`  ${prop}: ${val}`);
        });
    } else {
        console.log(`  ${key}: ${value}`);
    }
});

// Using traditional for loop
console.log("\nUsing traditional for loop:");
const keysArray = Object.keys(resumeData);
for (let i = 0; i < keysArray.length; i++) {
    const key = keysArray[i];
    console.log(`${key}:`);
    if (Array.isArray(resumeData[key])) {
        for (let j = 0; j < resumeData[key].length; j++) {
            const item = resumeData[key][j];
            const propsArray = Object.keys(item);
            for (let k = 0; k < propsArray.length; k++) {
                const prop = propsArray[k];
                console.log(`  ${prop}: ${item[prop]}`);
            }
        }
    } else if (typeof resumeData[key] === 'object') {
        const propsArray = Object.keys(resumeData[key]);
        for (let j = 0; j < propsArray.length; j++) {
            const prop = propsArray[j];
            console.log(`  ${prop}: ${resumeData[key][prop]}`);
        }
    } else {
        console.log(`  ${key}: ${resumeData[key]}`);
    }
}
