// fetch("https://jsonplaceholder.typicode.com/users/1")
//const emailRef = document.querySelector(".email");
const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");

//1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1").then((response)=>{
//     //converting into something the front-end can read however it's still in a promise
//     //console.log(response.json())
//     response.json().then(data => {
//         console.log(data);
//         emailRef.innerHTML = data.email;
//     })
// })

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email;
//   });

//2. Async/Await
// async function main(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const data = await response.json()
//     emailRef.innerHTML = data.email;
// }

// main();

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, 2000); //make it mock a backend by having to wait 2 seconds
  });
}

//1. Then
//getSubscriptionStatus().then(response => console.log(response))

// 2. Async/Await
async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  try {
    console.log(await getVideo(status));
  } catch (e) {
    console.log(e);
    videoRef.innerHTML = e
  }
}

main();

/**
 * 1. Create a function called "getVideo"
 * 2. Accept a parameter called "subscriptionStatus"
 * 3. Return a new promise insdie of the functino that:
 *      - if "VIP" resolve ("show video")
 *      - if "FREE" resolve ("show trailer")
 *      - otherwise reject ("no video")
 * 4. console.log the result of getVideo(status) in main()
 */

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("show video");
    } else if (subscriptionStatus === "FREE") {
      resolve("show trailer");
    } else {
      reject("no video");
    }
  });
}
