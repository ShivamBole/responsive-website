//  <------------------------for slidShow------------------>
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// <<----------------------for like button------------------------------->>
const comp = () => {
  const likeButtons = document.querySelectorAll(".like-button");
  likeButtons.forEach((b) => {
    console.log(b)
    b.addEventListener("click", function () {
      this.classList.toggle("red");
    });
  });
};
// // comp();
// //<<----------------------------fetch API---------------------->>
// let url = "http://localhost:3000/tabla";
// let response = fetch(url);

// let response1 = response.then((v) => {
//   return v.json();
// });
// response1.then((product) => {
//   addprd(product);
//   comp();
// });

// let addprd = (product) => {
//   ihtml = "";
//   for (item in product) {
//     ihtml += `
// <div class="product">
// <div class="img">
// <img src=${product[item].image} alt="product img">
// </div>

// <div class="info">
// <div  class="namep">
//  <h2>${product[item].name} </h2>
// </div>

// <div>
//  <label for="rate"> RATING: <span class="ratst"> ${product[item].rating}</span></label>
// </div>

// <div class="price">
//  <label for="PRS">PRICE:</label>
//  <span id ="PRS">${product[item].price} </span>
// </div>

// <div>
//  <button type="button"><i class="fas fa-phone"></i> 9038309840</button>
//  <button type="link"><i class="fa fa-message"></i> send msg</button>
// </div>

// <div class="address" >
//  <address>${product[item].address}</address>
// </div>
// </div>

// <div class="like" id="product2">
// <button class="like-button" data-product-id="2">&#x2665;</button>
// </div>
// </div>
// `;
//   }
//   mainContainer.innerHTML = ihtml;
// };
// //<<----------------------Create search bar------------------------->>
// const onBoth = () => {
//   let location = document.getElementById("add1").value.toUpperCase();
//   let search = document.getElementById("sear1").value.toUpperCase();
//   let filter = document.getElementById("search");
//   let product = document.getElementsByClassName("product");
//   let productName = document.getElementsByClassName("namep");
//   let productAdd = document.getElementsByClassName("address");
//   filter.value = "Top-Search";
//   for (i = 0; i < product.length; i++) {
//     nameact = productName[i].firstElementChild.textContent;
//     addact = productAdd[i].firstElementChild.textContent;

//     if (nameact && addact) {
//       if (
//         nameact.toUpperCase().indexOf(search) > -1 &&
//         addact.toUpperCase().indexOf(location) > -1
//       ) {
//         product[i].style.display = "";
//       } else {
//         product[i].style.display = "none";
//       }
//     } else if (nameact.indexOf(search) > -1 || addact.indexOf(location) > -1) {
//       product[i].style.display = "";
//     } else {
//       product[i].style.display = "none";
//     }
//   }
//   // inord();
// };

// //<<---------------------top-search------------------->>
// const topSearch = () => {
//   let container = document.getElementById("mainContainer");
//   let search1 = document.getElementById("sear1");
//   let filter = document.getElementById("search").value.toUpperCase();
//   let prod = document.getElementsByClassName("product");
//   let productName = document.getElementsByClassName("namep");
//   let sort = document.getElementById("sort").value.toUpperCase();
//   let location = document.getElementById("add1");
//   let url = "http://localhost:3000/tabla";
//   let response = fetch(url);
//   response
//     .then((v) => {
//       return v.json();
//     })
//     .then((product) => {
//       // console.log(product+"topsearch madhala ");
//       // let highprd=[]
//       // while(highprd.lenth>0){
//       //   highprd.pop();
//       // }
//       for (i = 0; i < product.length; i++) {
//         // if(filter!= "TOP-SEARCH"&& sort=="5 OR 4 STAR"){
//         //   console.log("sab sahi hai")
//         //   location.value = "";
//         //   search1.value = "";
//         //   if(product[i].name.toUpperCase().indexOf(filter)>-1&&(product[i].rating=="&#9733; &#9733; &#9733; &#9733;"||product[i].rating=="&#9733; &#9733; &#9733; &#9733; &#9733;")){
//         //         highprd.push(product[i]);
//         //         addprd(highprd);
//         //         comp();
//         //        }
//         //        else {
//         //         prod[i].style.display = "none";
//         //        }
//         // }else /
//         if(filter!="TOP-SEARCH"&&sort=="5 OR 4 STAR"){
//           location.value = "";
//           search1.value = "";
//           if(product[i].name.toUpperCase().indexOf(filter)>-1&&(product[i].rating=="&#9733; &#9733; &#9733; &#9733;"||product[i].rating=="&#9733; &#9733; &#9733; &#9733; &#9733;")){
//             prod[i].style.display="";
//            }
//           else{
//             console.log(product[i])
//             prod[i].style.display="none";
//            }
//           }else
//         if (sort == "LOW PRICE" && filter != "TOP-SEARCH") {
//           let sastaprd = [];
//           for (i = 0; i < product.length; i++) {
//             if (product[i].name.toUpperCase().indexOf(filter) > -1) {
//               console.log(product[i].name);
//               sastaprd.push(product[i]);
//               sortLowValue = sastaprd.sort((a, b) => a.price - b.price);
//               console.log(sastaprd);
//               addprd(sortLowValue);
//               comp();
//             }
//           }
//           while (sastaprd.lenth > 0) {
//             sastaprd.pop();
//           }
//         } else if (sort && filter != "TOP-SEARCH") {
//           let highprd = [];
//           while (highprd.lenth > 0) {
//             highprd.pop();
//           }
//           for (i = 0; i < product.length; i++) {
//             if (product[i].name.toUpperCase().indexOf(filter) > -1) {
//               highprd.push(product[i]);
//               sortHighValue = highprd.sort((a, b) => b.price - a.price);
//               addprd(sortHighValue);
//               comp();
//             }
//           }
//         } else if (filter != "TOP-SEARCH") {
//           let nameact =
//             productName[i].firstElementChild.textContent.toUpperCase();
//           if (nameact.indexOf(filter) > -1) {
//             location.value = "";
//             search1.value = "";
//             prod[i].style.display = "";
//           } else {
//             prod[i].style.display = "none";
//           }
//         }
//       }
//     });
// };

// //<<--------------------sort the items---------------->>
// const inord = () => {
//   let sort = document.getElementById("sort").value.toUpperCase();
//   let location = document.getElementById("add1").value.toUpperCase();
//   let search1 = document.getElementById("sear1");
//   // let fit=document.getElementById("search");
//   location.value = "";
//   search1.value = "";
//   if (sort == "LOW PRICE") {
//     // fit.value = "Top-Search";
//     lowPrice();
//   } else if (sort == "HIGH PRICE") {
//     // fit.value = "Top-Search";
//     highPrice();
//   } else if (sort == "5 OR 4 STAR") {
//     rating();
//   }
// };
// const lowPrice = () => {
//   let container = document.getElementById("mainContainer");
//   let filter = document.getElementById("search").value.toUpperCase();
//   let sort = document.getElementById("sort").value.toUpperCase();
//   let prod = document.getElementsByClassName("product");
//   let sortLowValue;
//   response1.then((product) => {
//     if (sort && filter != "TOP-SEARCH") {
//       let sastaprd = [];
//       for (i = 0; i < product.length; i++) {
//         if (product[i].name.toUpperCase().indexOf(filter) > -1) {
//           console.log(product[i].name);
//           sastaprd.push(product[i]);
//           sortLowValue = sastaprd.sort((a, b) => a.price - b.price);
//           console.log(sastaprd);
//           addprd(sortLowValue);
//           comp();
//         }
//       }
//       while (sastaprd.lenth > 0) {
//         sastaprd.pop();
//       }
//     } else {
//       const sortHighValue = product.sort((a, b) => a.price - b.price);
//       while (container.firstElementChild) {
//         container.removeChild(container.firstElementChild);
//       }
//       addprd(sortHighValue);
//       comp();
//     }
//   });
// };
// const highPrice = () => {
//   let filter = document.getElementById("search").value.toUpperCase();
//   let sort = document.getElementById("sort").value.toUpperCase();
//   let prod = document.getElementsByClassName("product");
//   let sortHighValue;
//   let container = document.getElementById("mainContainer");
//   response1.then((product) => {
//     if (sort && filter != "TOP-SEARCH") {
//       let highprd = [];
//       while (highprd.lenth > 0) {
//         highprd.pop();
//       }
//       for (i = 0; i < product.length; i++) {
//         if (product[i].name.toUpperCase().indexOf(filter) > -1) {
//           highprd.push(product[i]);
//           sortHighValue = highprd.sort((a, b) => b.price - a.price);
//           addprd(sortHighValue);
//           comp();
//         }
//       }
//     } else {
//       const sortHighValue = product.sort((a, b) => b.price - a.price);
//       while (container.firstElementChild) {
//         container.removeChild(container.firstElementChild);
//       }
//       addprd(sortHighValue);
//       comp();
//     }
//   })
// };


// const rating=()=>{
//   let sort= document.getElementById("sort").value.toUpperCase();
//   let container = document.getElementsByClassName("mainContainer");
//   let topsear=document.getElementById("search");
//   let filter = document.getElementById("search").value.toUpperCase();
//   let prod = document.getElementsByClassName("product");

//   let url="http://localhost:3000/tabla";
//   let response=fetch(url);
//   response.then((v)=>{
//    return v.json()
//   }).then((product)=>{
//     for(i=0;i<product.length;i++){
//   if(filter!="TOP-SEARCH"&&sort=="5 OR 4 STAR"){
//     if(product[i].name.toUpperCase().indexOf(filter)>-1&&(product[i].rating=="&#9733; &#9733; &#9733; &#9733;"||product[i].rating=="&#9733; &#9733; &#9733; &#9733; &#9733;")){
//       prod[i].style.display="";
//      }
//     else{
//       prod[i].style.display="none";
//      }
//     }else if(sort){
//     console.log("what is running");
//   if(product[i].rating=="&#9733; &#9733; &#9733; &#9733;"||product[i].rating=="&#9733; &#9733; &#9733; &#9733; &#9733;"){
//     prod[i].style.display="";
//   }else{
//    prod[i].style.display="none";
//   }
// }
//  }
// })
//     }


// // const rating = () => {
// //   let sort = document.getElementById("sort").value.toUpperCase();
// //   let filter = document.getElementById("search").value.toUpperCase();
// //   let prod = document.getElementsByClassName("product");

// //   let url = "http://localhost:3000/tabla";
// //   let response = fetch(url);
// //   response
// //     .then((v) => {
// //       return v.json();
// //     })
// //     .then((product) => {
     
// //         if (filter != "TOP-SEARCH" && sort == "5 OR 4 STAR") {
// //           let highprd = [];
// //           while (highprd.lenth > 0) {
// //             highprd.pop();
// //           }
// //           for (i = 0; i < product.length; i++) {
// //           if (
// //             product[i].name.toUpperCase().indexOf(filter) > -1 &&
// //             (product[i].rating == "&#9733; &#9733; &#9733; &#9733;" ||
// //               product[i].rating == "&#9733; &#9733; &#9733; &#9733; &#9733;")
// //           ) {
           
// //             highprd.push(product[i]);
// //             addprd(highprd);
// //             comp();
// //           }
// //          else if (sort) {
// //           if (
// //             product[i].rating == "&#9733; &#9733; &#9733; &#9733;" ||
// //             product[i].rating == "&#9733; &#9733; &#9733; &#9733; &#9733;"
// //           ) {
// //             highprd.push(product[i]);
// //             addprd(highprd);
// //             comp();
// //           }
// //            else {
// //             product[i].style.display = "none";
// //           }
// //         }
// //       }
// //       }
// //     });
// // };

// // const rating=()=>{
// //   let sort= document.getElementById("sort").value.toUpperCase();
// //   let filter = document.getElementById("search").value.toUpperCase();
// //   let prod = document.getElementsByClassName("product");

// //   let url="http://localhost:3000/tabla";
// //   let response=fetch(url);
// //   response.then((v)=>{
// //    return v.json()
// //   }).then((product)=>{
// //     for(i=0;i<product.length;i++){
// //   if(filter!="TOP-SEARCH"&&sort=="5 OR 4 STAR"){
// //     if(product[i].name.toUpperCase().indexOf(filter)>-1&&(product[i].rating=="&#9733; &#9733; &#9733; &#9733;"||product[i].rating=="&#9733; &#9733; &#9733; &#9733; &#9733;")){
// //       pdocument.getElementsByClassName("product")[i].style.display="";
// //      }
// //     else{
// //       document.getElementsByClassName("product")[i].style.display="none";
// //      }
// //     }else if(sort){
// //   if(product[i].rating=="&#9733; &#9733; &#9733; &#9733;"||product[i].rating=="&#9733; &#9733; &#9733; &#9733; &#9733;"){
// //     prod[i].style.display="";
// //   }else{
// //    prod[i].style.display="none";
// //   }
// // }
// //  }
// // })
// //    }


// // }else if(filter){
// //     console.log("lodo")
// //     location.value="";
// //     search.value="";
// //      for(i=0;i<prod.length;i++){
// //     if(filter){
// //     if(product[i].rating=="&#9733; &#9733; &#9733; &#9733;"||product[i].rating=="&#9733; &#9733; &#9733; &#9733; &#9733;"){
// //      prod[i].style.display="";
// //     }else {
// //       prod[i].style.display="none";
// //     }
// //   }
// //     }
// //     }
// //   })
