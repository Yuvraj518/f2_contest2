//  string js class
//   let a ="ramchandra";
//   console.log(a);
//   let frags=a.split("a");
//   let fr=a.split("a")[1];
//   console.log(frags, fr);
//   let b=a.slice(2);
//   let c=a.substring(2);
//   console.log(b,c);
//   console.log(a.charAt(2), a[2]);
//   console.log(a.charAt(10), a[10]);
//   let profile={
//     name:"yuvraj",
//     age:23,
//     city:"alwar",
//     state:"Rajasthan"
//   }
//   let formatted=`hello , my name is ${profile.name} from ${profile.city}`;
//   console.log(formatted);

//  let url= "https://www.google.com/search?q=ram&oq=ram&aqs=chrome.0.69i59j0i271l3j69i60l3j69i61.661j0j4&sourceid=chrome&ie=UTF-8";
//  let frag1=url.split("?")[1];
//  let q1={}
//  console.log(frag1);
//  frag1.split("&").forEach(x =>{
//   let k=x.split("=");  //["q","ram"]
//   q1[k[0]]=k[1];
//  })
//  console.log(q1);

//  let d=`ewewewe we wewe ewew ewe ewe
//  eeee rr rr `;
//  console.log(d);
  
// //spread operation
// // function callme(a,b,c){
// //   console.log(a,c);
// // }
// function callme(a,...x){
//   console.log(a,c,x);
// }

// let s1=[12,20,24]
// callme(...s1);

// // let s2=...a;
// // console.log(s2,a);
// console.log("ram")



//Dubbuging and js-execution
// function callme(){
//     let a=20;
//     console.log(a)
// }
// callme();
// console.log(a)

// if(true){
//     var a=20;
//     console.log(a)
// }
// console.log(a)

// ChatGPT :ask me questions on scope chain in javascript 
// using mixture of let , const, var keyword(hard level)

// function a(){
//     console.log("In a")
//     function b(){
//         console.log("in b")
//     }
// }
// b();





//DOM
// let root=[
//     {
//         tagName: div
//         InnerText: top Element;
//         prorerties:[{}]
//         children:[{}]
//     },
//     {
//         tagName: div
//         innerText: "";
//         properties:[{}]
//         children:[
//             {
//                 tagName: div;
//                 innerText: "part 1"
//                 properties
//                 children
//             },
//             {
//                 tagName:span;
//                 innerText: span1;
//                 properties
//                 children
//             }
//         ]
//     },
//     {
//         tagName: p;
//         innerText: Para Inner Text;
//         properties
//         children
//     }
// ]

//getElementById();        single_value
//getElementsByClass();    array
//getElementsByTagName();  array
//querySelectorAll();      array
//querySelector();         single_value

// let a=document.getElementById("para")
// let b=document.getElementById("bb")
// console.log(a,b)
// b.id="ab"
// a.innerText="radhe";
// console.log(a.style.color);
// // a.id="ab";
// console.log(a.id);
// function changeTq(){
//     if(a.id=="para"){
//         a.id="ab";
//         b.id="para"
//     }
//     else{
//         a.id="para"
//         b.id="ab"
//     }
// }

// let c=document.getElementsByTagName("div")
// console.log(c,c[1])
// c[1].style.border="1px solid red"
// // console.log(getComputedStyle(topp))
// console.log(c[1].innerText)



//dom & dom_maniplution
/* <button id="btn" onclick="play()">
      <span>1 One</span>
      <b>2 Two</b>
      <label>3 Three</label>
    </button><br>
    <input type="text" placeholder="search" value="ram">
    <button id="btn1">Sign</button>
     */
//const aa=document.getElementById("btn")
// function play(){
//     let ab=document.createElement("h1")
//     ab.innerText="Aravind"
//     aa.appendChild(ab);
// }
//let bb=document.getElementsByTagName("input")[0];
// console.log(bb,bb.value)
//let btn1=document.getElementById("btn1")
// btn1.addEventListener("click",()=>{
//     bb.type="checkbox"
//     bb.checked=true;
// })
// bb.addEventListener("click",()=>{
//     if(bb.checked){
//         aa.style.backgroundColor="red"
//     }
//     else{
//         aa.style.backgroundColor="pink";
//     }
// })

// aa.style.display="flex"
// aa.style.gap="10px"
// btn1.addEventListener("click",()=>{
//     let newD=document.createElement("div")
//     newD.innerText=bb.value;
//     aa.appendChild(newD)
// })

// aa.onclick=()=>{
// console.log("clicked")
// bb.style.backgroundColor="lightblue"
// }
// aa.onmouseenter=()=>{
//     console.log("mouse entered")
//     bb.style.backgroundColor="lightpink"
// }
// aa.onmouseleave=()=>{
//     console.log("mouse leave the area")
//     bb.style.backgroundColor="lightgreen"
// }
// const listner1=()=>{
//     bb.style.backgroundColor="lightblue"
// }
// aa.addEventListener("click",listner1)

// let dd=document.createElement("div")
// dd.innerText="Hello"
// dd.style.padding="10px"
// dd.style.backgroundColor="orange"
// btn1.appendChild(dd);
// dd.addEventListener("click",(event)=>{
//     console.log("child")
//     //event.stopPropagation()
// })
// btn1.addEventListener("click",()=>{
//     console.log("parent")
// })




//zira_1