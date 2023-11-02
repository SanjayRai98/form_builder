const category_button = document.querySelector('.category_button');

category_button.addEventListener("click", addElement);

function addElement(){
    const category = document.querySelector("#category");
    //console.log(" value of category is " + category.value);
    if(category.value == "categorize"){
        createCategorizeQuestion();
    }
}

//drag and drop events function
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
//drag and drop function finish

const selection = () => {
    if (window.getSelection){
        return window.getSelection();
    }
}

const closeFunction = () => {
    var closebtns = document.getElementsByClassName("close");
    var i;

    for (i = 0; i < closebtns.length; i++) {
        closebtns[i].addEventListener("click", function() {
            //this.parentElement.style.display = 'none';
            this.parentElement.parentElement.removeChild(this.parentElement);
            if(this.parentElement.querySelector(".input_cat")){
                //console.log("condition is true");
            }
            //console.log(this.parentElement.querySelector(".input_cat"));
        });
    }
};

let questionNo = 1;

//adding the the category for 

function addMoreCategory(){
    //document.querySelector(".categorize_category_content").innerHTML += `
    this.parentElement.querySelector(".categorize_category_content").innerHTML += `
    <div class="cat_div">
        <input class="input_cat" type="text" name="ques${questionNo}_cat1" id="ques${questionNo}_cat1" placeholder="name you Category" onblur="inVal(this)">
        <span class="close">&times;</span>
    </div>
    `;
    closeFunction();
    countCategory();
}

//const addMoreCategory = () => {
//    
//};

//const add_category = document.getElementById("add_category");

//add_category.addEventListener("click", addMoreCategory);

function addMoreItem(){
    //document.querySelectorAll(".categorize_selection_content").innerHTML += `
    this.parentElement.parentElement.querySelector(".categorize_selection_content").innerHTML += `
    <div class="cat_selection">
        <input type="text" name="ques${questionNo}_item1" id="ques${questionNo}_item1" placeholder="Enter items">
        <select class="select_cat" aria-label="belong_to" name="cat_select" id="cat_select">
            <option value="cat1">Cat1</option>
            <option value="cat2">Cat2</option>
        </select>
        <span class="close">&times;</span>
    </div>
    `;
    closeFunction();
    countCategory();
}
//const addMoreItem = () => {
//    
//}

//create onclick event on add_category and add_items

function createOnclickEvent(){
    //add_categroy event
    const add_category = document.getElementsByClassName("add_category");

    for(i=0;i<add_category.length;i++){
        add_category[i].addEventListener("click", addMoreCategory);
    }

    //add_items event
    const add_item = document.getElementsByClassName("add_item");

    for(i=0;i<add_item.length;i++){
        add_item[i].addEventListener("click", addMoreItem);
    }

}

//call on time on load of window ** delete this in original ** call this in the catergorize question creating function
createOnclickEvent();


//const add_item = document.getElementById("add_item");

//add_item.addEventListener("click", addMoreItem);


//let select_opt = ["India", "Russia"];
let select_opt = [];


//updateCategory();

function inVal(event){
    //console.log("input value is " + event.value);
    increseOpt(event.value);
}

function increseOpt(newvalue){
    if(newvalue != ""){
        select_opt.push(newvalue);
        countCategory();
    }
    //console.log("the value of array is " + Object.values(select_opt));
    //decreseOpt();
    
}

function decreseOpt(){
    select_opt.pop();
    //console.log("after the pop array value is " + Object.values(select_opt));
}

function countCategory(){
    for(j=0;j<select_opt.length;j++){
        //console.log("Select array value is " + select_opt[j]);
        //cat_len[i].innerHTML += ``;
    }
    let cat_len = document.getElementsByClassName("select_cat");

    for(i=0;i<cat_len.length;i++){
        cat_len[i].innerHTML = '';
        for(j=0;j<select_opt.length;j++){
            //console.log("Select array value is " + select_opt[j]);
            cat_len[i].innerHTML += `<option value="${select_opt[j]}">${select_opt[j]}</option>`;
        }
        
    }
}


//catergorize question creation

function createCategorizeQuestion(){
    const form_demo = document.getElementById("form_demo");
    form_demo.innerHTML += `
    <div class="categorize_question">
        <span class="close ques_close">&times;</span>
        <div class="categorize_question_marks">
            <label for="ques${questionNo}_marks">Marks:</label>
            <input class="cat_marks" type="number" name="ques${questionNo}_marks" id="ques${questionNo}_marks">
        </div>
        <div class="categorize_question_no">
            <h2>Question ${questionNo}</h2>
            <input type="text" id="cat" placeholder="Write you tour Question here">
        </div>
        <div class="categorize_category">
            <div class="categorize_category_content">
                <h2>Category</h2>
                <div class="cat_div">
                    <input class="input_cat" type="text" name="ques${questionNo}_cat1" id="ques${questionNo}_cat1" placeholder="name you Category" onblur="inVal(this)">
                </div>
                <div class="cat_div">
                    <input class="input_cat" type="text" name="ques${questionNo}_cat2" id="ques${questionNo}_cat2" placeholder="name you Category" onblur="inVal(this)">
                </div>
            </div>
            <button class="add_category">Add more Category</button>
        </div>
        <div class="categorize_selection">
            <div class="categorize_selection_content">
                <div class="cat_selection_heading">
                    <h2>Items</h2>
                    <h2>Belongs to</h2>
                </div>
                <div class="cat_selection">
                    <input type="text" name="ques${questionNo}_item1" id="ques${questionNo}_item1" placeholder="Enter items">
                    <select class="select_cat" aria-label="belong_to" name="cat_select" id="cat_select">
                        <option value="cat1">Cat1</option>
                        <option value="cat2">Cat2</option>
                    </select>
                </div>
                <div class="cat_selection">
                    <input type="text" name="ques${questionNo}_item2" id="ques${questionNo}_item2" placeholder="Enter items">
                    <select class="select_cat" aria-label="belong_to" name="cat_select2" id="ques${questionNo}_cat_select2">
                        <option value="cat1">Cat1</option>
                        <option value="cat2">Cat2</option>
                    </select>
                </div>
            </div>
            <div>
                <button class="add_item">Add More Item</button>
            </div>
        </div>
    </div>
    `;
    questionNo++;
    createOnclickEvent();
    closeFunction();
}
  
const getSelectedText = () => {
    document.getElementById("form_demo").innerText = selection();
}

document.getElementById("make_blank").addEventListener("click", getSelectedText);
