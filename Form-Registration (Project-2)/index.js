// Validating the form.........................

let text_name=document.querySelector("#text");  // For name................................................

let password_check=document.querySelector("#password") // For password....................................................

let confirmation=document.querySelector("#confirmation"); //For password Confirmation................................................................................................

// Submit-btn................................................................................................................................................................................................................................................................................................................................................................................................

let todos=[];


window.onload =()=>{
    console.log("loaded");
    todos=JSON.parse(localStorage.getItem("todos"))   || [];
    console.log(todos);
}
let submit_btn=document.querySelector("#submit-btn");
submit_btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let a
    let b
    let c
    let tname=document.querySelector("#text").value;
    let tpassword_check=document.querySelector("#password").value;
    let tconfirmation=document.querySelector("#confirmation").value;

    let name_pattern=/^[a-zA-Z ]+$/;

    let password_checking=/^[A-Za-z]\w{7,14}$/;

    //Checking for the Null Condition.............................................................


// -----------------CHECKING THE NAME------------------------------------------------------------------------------------------------------
    if(tname.trim()==="" || tpassword_check.trim()===""|| tconfirmation===""){
        alert("No box should be left emptied")
    }

    else if(name_pattern.test(tname)){
        console.log(tname);
        a=true;
        password_checks()
    }
    else{
        alert("Name does't match  our criteria");
        text_name.value="";
        password_check.value="";
        confirmation.value="";
        a=false;
    }


    // --------------------------------------CHECKING THE PASSWORD ----------------------------------------------------------------------------
    function password_checks(){

    if(password_checking.test(tpassword_check)){
        console.log(tpassword_check);
        b=true;
        tpassword_checks()
        }

    else{
            password_check.value="";
            confirmation.value="";
            alert("The password doesn't met our requirements ");
            
        }
    }

    // -------------------------------------------------CHECKING THE CONFIRMATION PASSWORD--------------------------------------------------------------------------------------------------------------------
    function tpassword_checks(){
        if(tpassword_check===tconfirmation){
            console.log("The value get matched.")
            checksabc();
        }
        else{
            confirmation.value="";
            alert("Check your confirm password it  is not matched with your password you have given");
        }
    }


    function checksabc(){
    if(a===true&&b===true&&c===true){
        alert("Your details are stored sucessfully");
    }
}

});

// =====================================================================================MAKING USE OF THE LOCAL STORAGE=============================================

let todolist=document.querySelector("#value-box");


let content_todo=document.querySelector("#content-todo");  // here all the todos get ads on the list..............................


let todolist_content=document.querySelector("#adding_the_todolist");

// let delete_content=document.querySelector("#deleting_the_todolist");

todolist_content.addEventListener("click",(event)=>{
    event.preventDefault();
    let todolist_value= todolist.value;

    // alert("VANAKAM SINGAM"); // WORKING PERFECTLY................................................................
    todos.push(todolist_value);
    console.log(todos);  // checking............Super/==============================================.............................................
    adding();
});


function adding(){
    
    let para=document.createElement("p");
    para.innerText=todos;
    content_todo.appendChild(para);
    localStorage.setItem("todos",JSON.stringify(todos));

    todolist.value="";
};

// function deleting(){
//     para.remove();
//     localStorage.setItem("todos",JSON.stringify(todos));
// };


content_todo.addEventListener("click",(event)=>{    
    event.preventDefault();
    event.target.tagname==="para";
    event.target.remove();

    const element=event.target.textContent;

    const indextoremove=todos.indexOf(element);

    if(indextoremove !== -1){
        todos.splice(indextoremove, 1);
    }
    // console.log(todos);


    // removearray();

});

// function removearray(event){
  
    
// };