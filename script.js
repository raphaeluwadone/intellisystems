var programme = document.getElementById("programme")
var semester = document.getElementById("semester")
var course_row = document.getElementById("prev_semester")
var courseA = document.getElementById("courseA")
var courseB = document.getElementById("courseB")
var courseC = document.getElementById("courseC")
var courseD = document.getElementById("courseD")
var courseE = document.getElementById("courseE")
var courseF = document.getElementById("courseF")
var courseA2 = document.getElementById("courseA2")
var courseB2 = document.getElementById("courseB2")
var courseC2 = document.getElementById("courseC2")
var courseD2 = document.getElementById("courseD2")
var courseE2 = document.getElementById("courseE2")
var courseF2 = document.getElementById("courseF2")
var nextBtn = document.getElementById("next")
var test = document.getElementById('test')
var firstCourse = document.getElementById("firstCourse")
export var currentCourseList = []
export var prevCourseList = []
var level = ''
var session = ''
var season = ''

var a = document.getElementById("a")
var b = document.getElementById("b")
var c = document.getElementById("c")
var d = document.getElementById("d")
var ee = document.getElementById("ee")
var f2 = document.getElementById("f2")
var a2 = document.getElementById("a2")
var b2 = document.getElementById("b2")
var c2 = document.getElementById("c2")
var d2 = document.getElementById("d2")
var e2 = document.getElementById("e2")
var f2 = document.getElementById("f2")



semester.addEventListener("change", (e) => {
    console.log(e.target.value)
    if(e.target.value !== "previous&current"){
        course_row.classList.add("hidden")
    }
    else {
        course_row.classList.remove("hidden")
        // console.log("unselected")
    }
})



nextBtn.addEventListener("click", ()=>{

    currentCourseList = [courseA.value, courseB.value, courseC.value, courseD.value, courseE.value, courseF.value]
    prevCourseList = [courseA2.value, courseB2.value, courseC2.value, courseD2.value, courseE2.value, courseF2.value]
    console.log(currentCourseList)
    console.log(prevCourseList)
})


