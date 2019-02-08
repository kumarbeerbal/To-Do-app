var divOne1 = document.getElementById("div1");
var divOne = document.createElement("div");
divOne.setAttribute("id", "div2");
divOne1.appendChild(divOne);
var hOne = document.createElement("h2");
var textNode1 = document.createTextNode("To Do App");
hOne.appendChild(textNode1);
divOne.appendChild(hOne);
var inputOne = document.createElement("input");
inputOne.setAttribute("type", "text");
inputOne.setAttribute("id", "btn1");
inputOne.setAttribute("placeholder", "   Enter text here...");
inputOne.setAttribute("class", "form-control mb-2");
inputOne.setAttribute("required", "required");
divOne.appendChild(inputOne);
var inputOne1 = document.createElement("input");
inputOne1.setAttribute("type", "button");
inputOne1.setAttribute("value", "submit")
inputOne1.setAttribute("id", "btn2");
inputOne1.setAttribute("onclick", "touchMe()");
inputOne1.setAttribute("class", "btn btn-secondary btn-lg btn-block")
divOne.appendChild(inputOne1);

function touchMe(){
    var inputValue = document.getElementById("btn1").value;
    if(inputValue === ""){
        alert("please fill the field");
    }
    else{
    var divOne2 = document.createElement("div");
    var ol1 = document.createElement("ul");
    var li1 = document.createElement("li");
    ol1.appendChild(li1);
    divOne2.appendChild(ol1);
    divOne1.appendChild(divOne2);
    
 
    li1.setAttribute("id", inputValue);
    document.getElementById(inputValue).innerHTML = inputValue;
    var button1 = document.createElement("input");
    button1.setAttribute("type", "button");
    button1.setAttribute("value", "delete");
    button1.setAttribute("class", "btn btn-secondary btn-lg disabled");
    button1.setAttribute("id", "delete");
    li1.appendChild(button1);

    var button2 = document.createElement("input");
    button2.setAttribute("type", "button");
    button2.setAttribute("value", "edit");
    button2.setAttribute("class", "btn btn-primary btn-lg disabled");
    button2.setAttribute("id", "edit");
    li1.appendChild(button2);
    

    button1.addEventListener("click", function () {
        button1.parentNode.remove()
        })

        button2.addEventListener('click', function () {
            var list1 = this.parentNode;
            var text = prompt("enter value",inputValue)
            list1.innerText = text
            list1.appendChild(button1);
            list1.appendChild(button2);
            
            })
            document.getElementById("btn1").value = "";
        }
}
