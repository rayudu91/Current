//TOPBAR ------------------------------
function myFunction(){
    var topbar = document.getElementById("topItem");
   if(topbar.style.display === "none"){
       topbar.style.display = "flex";
   }else{
       topbar.style.display = "none";
   }
}


// POP for INCENTIVES--------------------------------
function pop_i(){
    var modal =  document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
        if(modal.style.display === "none"){
            modal.style.display = "block";
        }
    btn.onclick = function(){
        modal.style.display = "block";
    }
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display="none";
        }
    }
    }


// ----------------YEARS----------------------------------------------
function yr_btn(){
    var year=document.getElementById("year_value");
    var t_link=document.getElementById("t_yr");
    var o_link=document.getElementById("o_yr");
    var m_link=document.getElementById("month_btn");
    var costvalue=document.getElementById("c_value");
    // Twenty Year 
    t_link.addEventListener("click", function(){
        year.innerHTML="20 year";
        costvalue.innerHTML="51,142";
        t_link.style.borderBottom = "3px solid #0e34a0";
        o_link.style.borderBottom = "none";
        m_link.style.borderBottom ="none";
    });
    // One Year
    o_link.addEventListener("click", function(){
        year.innerHTML="1 year";
        costvalue.innerHTML="1,717";
        o_link.style.borderBottom = "3px solid #0e34a0";
        t_link.style.borderBottom = "none";
        m_link.style.borderBottom = "none";
       
    });
    // One Month
    m_link.addEventListener("click", function(){
        year.innerHTML="1 month";
        costvalue.innerHTML="143";
        m_link.style.borderBottom = "3px solid #0e34a0";
        t_link.style.borderBottom = "none";
        o_link.style.borderBottom = "none";
    });
}

// POPUP for Details Box-----------------------------
function pop_d(){
    var modal = document.getElementById("myModal2");
    var first=document.getElementById("m&m");
    var second=document.getElementById("people");
    var third=document.getElementById("ce_a");
    var fourth=document.getElementById("cwh_age");
    var mm=document.getElementById("input1");
    var persons=document.getElementById("input2");
    var currentappliances=document.getElementById("input3");
    var age=document.getElementById("input4");
    var btn=document.getElementById("s_d");
    if(modal.style.display === "none"){
        modal.style.display = "block";
    }
    btn.onclick = function(){
        modal.style.display="block";
        mm.innerHTML=first.value;
        persons.innerHTML=second.value;
        currentappliances.innerHTML=third.value;
        age.innerHTML=fourth.value;
    }
    
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display="none";
        }
    }
    }

// TECHNICAL DETAILS EXPANSIONS--------------------------------
function toggle(){
    var content=document.getElementById("content_box");
    var icon =  document.getElementById("arrow_id");
    if(content.style.display == "none"){
        content.style.display = "flex";
        icon.style.transform = "rotate(180deg)";
    }else{
        content.style.display="none";
        icon.style.transform = "rotate(360deg)";
    }
}
// BASIC INFORMATION-------------------------------------------
function toggle2(){
    var content2=document.getElementById("content_box2");
    var icon = document.getElementById("arrow_id1");
    if(content2.style.display == "none"){
        content2.style.display = "flex";
        icon.style.transform = "rotate(180deg)";
      
    }else{
        content2.style.display = "none";
        icon.style.transform = "rotate(360deg)";
}
}


// QUESTION EXPANSIONS-----------------------------------------------------
function toggle3(event){
    // var question=document.getElementByClassName("qstn_txt");
    var answer=document.getElementById("ans_txt");
    var i;
    if(answer.style.display === "none"){
        answer.style.display = "block";
       
    }else{
        answer.style.display="none";
    }
}

function toggle4(){
    var answer=document.getElementById("ans_txt1");
    if(answer.style.display === "none"){
        answer.style.display = "block";
    }else{
        answer.style.display="none";
    }
}

function toggle5(){
    var answer=document.getElementById("ans_txt2");
    if(answer.style.display === "none"){
        answer.style.display = "block";
    }else{
        answer.style.display="none";
    }
}

function toggle6(){
    var answer=document.getElementById("ans_txt3");
    if(answer.style.display === "none"){
        answer.style.display = "block";
    }else{
        answer.style.display = "none";
    }
}

function toggle7(){
    var answer =  document.getElementById("ans_txt4");
    if(answer.style.display === "none"){
        answer.style.display = "block";
    }else{
        answer.style.display = "none";
    }
}

// another method for question and answer expansions
// var question= document.getElementsByClassName("qstn_txt");
// var answer=document.getElementById("ans_txt");
// var i;
// for(var i=0; i < question.length ;i++){
//  question[i].addEventListener("click",function(){
//     if(question[i] === true){
//         answer[i].style.display="block";
//     }else{
//         answer[i].style.display="none";
//     }
//  });
// }

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") { 
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }


// ------------------------------------------------------------
// var IsitTrue= false;
// function chk_box(){
//     var checkbox=document.getElementById("option");
//     // var overlay = document.getElementsByClassName("overSelect");
//     if(!IsitTrue){
//         checkbox.style.display = "flex";
//         IsitTrue = true;
//     }
//     else{
//         checkbox.style.display = "none";
//         IsitTrue=false;
//     }
// }






