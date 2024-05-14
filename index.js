let data =[
    {
        Q:"Q.1: The ” var” and “function” are known as _____________.",
        a:" Data types",
        b:"Keywords",
        c:"Prototypes",
        d:"Declaration statements",
        ans:"ans4",
    },
    {
        Q:"Q.2: Which of these keywords is used to define various functions in JavaScript?",
        a:" function",
        b:" main",
        c:"init",
        d:"Void",
        ans:"ans1",

    },
    {
        Q:"Q.3: Which of the following is the correct syntax to print a page using JavaScript?",
        a:"window.print();",
        b:"browser.print();",
        c:" navigator.print();",
        d:" document.print();",
        ans:"ans1",
    },
    {
        Q:"Q.4: How do you write 'Hello World' in an alert box?",
        a:"alert('Hello World')",
        b:"pop('Hello World')",
        c:"window('Hello World')",
        d:"msg('Hello World')",
        ans:"ans1",
    },

    {
        Q:"Q.5:In which HTML element, we put the JavaScript code?",
        a:"link",
        b:"java script",
        c:"script",
        d:"scriptadd",
        ans:"ans3"
    }
]

let question=document.getElementById("qns");

let option1   =document.getElementById("opt1");
let option2   =document.getElementById("opt2");
let option3  =document.getElementById("opt3");
let option4  =document.getElementById("opt4");

let num=0;
let  answer=document.querySelectorAll(".options");
let scroe=0;
let myscroe=document.querySelector(".myscroe");

let nextbtn=document.querySelector("#next");
//  ye question ko  set kar dega
question.innerHTML=data[num].Q;

// ye option ko   send  kar dega

option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;

function checkans()
{
    let ans;
    answer.forEach
    ((curElement)=>
    {
        if(curElement.checked)
        
        {
            ans=curElement.id;
            console.log(ans);
        }
        
    }
    )
    return ans;
}

function disselect()
{
    answer.forEach((curElement)=>
    {
        curElement.checked=false;
    })
}


function next()
{
    let  check=checkans();// calling function here
    disselect();// not select 
// answer check karne ke liye
    if (check ==data[num].ans)
        {
            scroe++;
        }


    num++;
 // if else 5 question ane ke baad result ke liye
 
 if(num<data.length)
    {

question.innerHTML=data[num].Q;
option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;
}
//agar user 5 answer dene ke badd click krega to usee ye show ho jaye
else
{
    myscroe.innerHTML=`you scored ${scroe}/${data.length}<br/>
    <button onclick="location.reload()">Play Again </button>`;
    nextbtn.style.display="none";
}
}
