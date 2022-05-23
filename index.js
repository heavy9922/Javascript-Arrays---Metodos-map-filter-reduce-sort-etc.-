// sample array of students
const students = [
    {
        name: "Jill",
        lastname: "Doe",
        age: 24,
        course: "Marketing",
    },
    {
        name: "John",
        lastname: "Doe",
        age: 22,
        course: "Web Development",
    },
    {
        name: "Jack",
        lastname: "Doe",
        age: 20,
        course: "Accounting",
    },
    {
        name: "Ryan Jhon",
        lastname: "Ray",
        age: 23,
        course: "Web Development",
    },
    {
        name: "Jane",
        lastname: "Doe",
        age: 20,
        course: "Financial Management",
    },
]

const developers = [
    {
        id: 1,
        name: "John",
        skills: ["HTML", "React", "Javascript", "Java"],
    },
    {
        id: 2,
        name: "Jane",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
    },
    {
        id: 3,
        name: "Jack",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
    },
]

// Write your code here!
console.log(students)

students.forEach((s, index, students) => {
    console.log(s, "with forEach", index, students)
})

let result = students.map((s) => s).map(p=>({...p,new:'p'}))

console.log(result)

result = students.filter((s) => {
  if(s.course === 'Web Development'){
    return true
  }
})

result = students.filter((s) => s.course === 'Web Development')
result = students.filter((s) => s.name === 'Jill')

result = students.reduce((total, s) => total + s.age, 0)

result = developers.reduce(
    (allSkill, student) =>
        Array.from(new Set([...allSkill, ...student.skills])),
    []
)

//ordena el array
result = students.sort((a, b)=> a.age - b.age)


//retorna true si al menos uno comple con la condicion
result = students.some((s) => s.age > 23)

//retorna true si todos comple con la condicion
result = students.every((s) => s.age === 20)

console.log(result)
