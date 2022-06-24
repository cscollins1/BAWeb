const teachers = {
    "Tom Siner" : {
        age : 50,
        subject : ["Math", "Science"]
    },
    "Stephanie York" : {
        age : 52,
        subject : ["Math", "Science", "English"]
    }
}
const classList = {
    math : {
        precal : {
            title : "precal",
            grade : "high",
            teacher : teachers["Tom Siner"]
        },
        algebra : {
            title: "Algebra 2",
            grade : "middle",
            teacher : teachers["Stephanie York"]
        }
    },
    english : {

    },
    science : {

    },
    history :{

    },
    language : {

    },
    theology :{

    },
    music : {

    },
    other : {

    }
}
let classResults = []
function queryGetter(grade, subject){
    if(subject === "any"){
        classResults = gradeFilter(grade);
    }
    else if(grade === "any"){
        classResults = subjectFilter(subject);
    }
    else {
        classResults = gradeFilter(grade);
        let temp = subjectFilter(subject);
        for(let i = 0; i < temp.length; i++){
            classResults.pop(temp[i]);
        }
    }
}

function gradeFilter(grade){
    return ["Pre Calc", "Algebra 2", "Algebra 1"];
}

function subjectFilter(subject){
    return ["added 1", "added 2"];
}
function createMenuItem(name){
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
const resultsList = document.getElementById("results");
resultsList.appendChild(createMenuItem("Test"))
resultsList.appendChild(createMenuItem("Test 2"))
console.log(classResults)