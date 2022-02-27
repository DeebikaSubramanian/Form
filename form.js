div1=document.getElementById("container")

div2=document.createElement("div")
div1.appendChild(div2)
div2.classList.add("col-sm-12","col-md-12","col-lg-12","col-xl-12","col-xxl-12")

h1=document.createElement("h1")
h1.setAttribute("id","title")
h1.innerHTML="FORM"
h1.classList.add("text-center","fs-1")
div2.appendChild(h1)

para=document.createElement("p")
// para.innerHTML="Fill the form and see the values in the table below"
para.setAttribute("id","description")
div2.appendChild(para)

form=document.createElement("form")
form.setAttribute("id","servey-form")
div2.appendChild(form)
form.classList.add("text-center")

let Nam=document.createElement("lable")
Nam.setAttribute("id","name-label")
Nam.innerText="FirstName"
form.appendChild(Nam)
b=document.createElement("br")
form.appendChild(b)
let Name=document.createElement("input")
Name.setAttribute("type","text")
Name.setAttribute("id","first-name")
Name.setAttribute("placeholder","FirstName")
form.appendChild(Name)
b=document.createElement("br")
form.appendChild(b)

let LNam=document.createElement("lable")
LNam.innerText="LastName"
form.appendChild(LNam)
b=document.createElement("br")
form.appendChild(b)
let LName=document.createElement("input")
LName.setAttribute("type","text")  
LName.setAttribute("id","last-name")       
form.appendChild(LName)
b=document.createElement("br")
form.appendChild(b)

let email=document.createElement("lable")
email.setAttribute("id","email-label")
email.innerText="Email"
form.appendChild(email)
b=document.createElement("br")
form.appendChild(b)

let Email=document.createElement("input")
Email.setAttribute("type","email")  
Email.setAttribute("id","email")    
Email.setAttribute("placeholder","Email-id")   
form.appendChild(Email)
b=document.createElement("br")
form.appendChild(b)

let add=document.createElement("lable")
add.innerText="Address"
form.appendChild(add)
b=document.createElement("br")
form.appendChild(b)
let Add=document.createElement("input")
Add.setAttribute("type","text")
Add.setAttribute("id","ad")
form.appendChild(Add)
b=document.createElement("br")
form.appendChild(b)

let pin=document.createElement("lable")
pin.innerText="Pincode"
form.appendChild(pin)
b=document.createElement("br")
form.appendChild(b)
let Pin=document.createElement("input")
Pin.setAttribute("type","text")
Pin.setAttribute("id","pn")
form.appendChild(Pin)
b=document.createElement("br")
form.appendChild(b)

let gender=document.createElement("lable")
gender.innerText="Gender:"
form.appendChild(gender)
b=document.createElement("br")
form.appendChild(b)

let male=document.createElement("label")
male.innerText="Male"
form.appendChild(male)
let Gender=document.createElement("input")
Gender.setAttribute("type","radio")
Gender.setAttribute("Name","gender")
Gender.setAttribute("value","male")
form.appendChild(Gender)
b=document.createElement("br")
form.appendChild(b)

let female=document.createElement("label")
female.innerText="Female"
form.appendChild(female)
let FGender=document.createElement("input")
FGender.setAttribute("type","radio")
FGender.setAttribute("Name","gender")
FGender.setAttribute("value","female")
form.appendChild(FGender)
b=document.createElement("br")
form.appendChild(b)

let others=document.createElement("label")
others.innerText="Others"
form.appendChild(others)
let Others=document.createElement("input")
Others.setAttribute("type","radio")
Others.setAttribute("Name","gender")
Others.setAttribute("value","others")
form.appendChild(Others)
b=document.createElement("br")
form.appendChild(b)

let Food=document.createElement("label")
Food.innerText="Select atleast two Choice of food"
form.appendChild(Food)
b=document.createElement("br")
form.appendChild(b)


let select=document.createElement("select")
select.setAttribute("id","fo")
select.setAttribute("multiple","")
select.setAttribute("Name","food")
form.appendChild(select)

let choco=document.createElement("option")
chocola=document.createTextNode("Chocolate")
choco.appendChild(chocola)
choco.setAttribute("value","Chocolate")
select.appendChild(choco)


let ice=document.createElement("option")
ice.setAttribute("value","Icecream")
Ice=document.createTextNode("Ice cream")
ice.appendChild(Ice)
select.appendChild(ice)

let cake=document.createElement("option")
cake.setAttribute("value","Cake")
Cake=document.createTextNode("Cake")
cake.appendChild(Cake)
select.appendChild(cake)

let pizza=document.createElement("option")
pizza.setAttribute("value","Pizza")
Pizza=document.createTextNode("Pizza")
pizza.appendChild(Pizza)
select.appendChild(pizza)

let burger=document.createElement("option")
burger.setAttribute("value","Burger")
Burger=document.createTextNode("Burger")
burger.appendChild(Burger)
select.appendChild(burger)
b=document.createElement("br")
form.appendChild(b)


let state=document.createElement("lable")
state.innerText="State:"
form.appendChild(state)
b=document.createElement("br")
form.appendChild(b)
let State=document.createElement("input")
State.setAttribute("type","text")
State.setAttribute("id","st")
form.appendChild(State)
b=document.createElement("br")
form.appendChild(b)

let country=document.createElement("lable")
country.innerText="Country:"
form.appendChild(country)
b=document.createElement("br")
form.appendChild(b)
let Country=document.createElement("input")
Country.setAttribute("type","text")
Country.setAttribute("id","cn")
form.appendChild(Country)
b=document.createElement("br")
form.appendChild(b)

let btn=document.createElement("button")
btn.setAttribute("type","reset")
btn.setAttribute("id","submit")
btn.innerText="Submit"
form.appendChild(btn)

let table=document.createElement("table")
table.classList.add("align-middle","mx-auto")
table.classList.add("text-break")
div2.appendChild(table)
    
btn.addEventListener("click",()=>
{
    let radio=document.getElementsByName("gender");
    //console.log(radio)
    for(i=0;i<radio.length;i++)
    {
        //console.log(radio[i].checked)
       if (radio[i].checked)
       {
        //console.log(radio[i].value)
        var gen=radio[i].value;
       }
     }
       table.innerHTML=""
              
     let thead=document.createElement("thead")
     table.appendChild(thead)
 
     let rowhead=document.createElement("tr")
     let hdata=document.createElement("td")
     hdata.innerText="FirstName";
     rowhead.appendChild(hdata)
      
     let hdata1=document.createElement("td")
     hdata1.innerText="LastName";
     rowhead.appendChild(hdata1)
     
     let mail=document.createElement("td")
     mail.innerText="Email";
     rowhead.appendChild(mail)

     let hdata2=document.createElement("td")
     hdata2.innerText="Address";
     rowhead.appendChild(hdata2)
     
     let hdata3=document.createElement("td")
     hdata3.innerText="Pincode";
     rowhead.appendChild(hdata3)
 
     let hdata4=document.createElement("td")
     hdata4.innerText="Gender";
     rowhead.appendChild(hdata4)
    
     let hdata5=document.createElement("td")
     hdata5.innerText="Choice of Food";
     rowhead.appendChild(hdata5)
      
     let hdata6=document.createElement("td")
     hdata6.innerText="State";
     rowhead.appendChild(hdata6)
 
     let hdata7=document.createElement("td")
     hdata7.innerText="Country";
     rowhead.appendChild(hdata7)
     thead.appendChild(rowhead)
     table.appendChild(thead)

    let row1=document.createElement("tr")
    let r1d1=document.createElement("td")
    r1d1.innerHTML=document.getElementById("first-name").value;
    row1.appendChild(r1d1)
   
    let r1d2=document.createElement("td")
    r1d2.innerHTML=document.getElementById("last-name").value;
    row1.appendChild(r1d2)

    let maildata=document.createElement("td")
    maildata.innerHTML=document.getElementById("email").value;
    row1.appendChild(maildata)

    let r1d3=document.createElement("td")
    r1d3.innerHTML=document.getElementById("ad").value;
    row1.appendChild(r1d3)

    let r1d4=document.createElement("td")
    r1d4.innerHTML=document.getElementById("pn").value;
    row1.appendChild(r1d4)

    let r1d5=document.createElement("td")
    r1d5.innerHTML=gen
    row1.appendChild(r1d5)

    let r1d6=document.createElement("td")
    let option=document.getElementById("fo");
     for(i=0;i<option.length;i++)
    {
        var opt=[]
        //console.log(option)
        //console.log(option[i].selected)
       if (option[i].selected)
       {
        //console.log(option[i].value)
       //opt.push(option[i].value);
       r1d6.innerHTML+=`${option[i].value}<br>`
       //console.log(...opt)
        }
     }
        row1.appendChild(r1d6)

    let r1d7=document.createElement("td")
    r1d7.innerHTML=document.getElementById("st").value;
    row1.appendChild(r1d7)

    let r1d8=document.createElement("td")
    r1d8.innerHTML=document.getElementById("cn").value;
    row1.appendChild(r1d8)
    table.appendChild(row1)
})
