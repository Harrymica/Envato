

function MakeReq ()
{
    

        fetch('/Teacher.html')
        .then(response => 
            {if(response.ok){
                //console.log(response)
                console.log("Request was successful");
                return response.text();
        }
        else{
            console.log("Request failed");
        }})
       .then(data => window.console.log(data))
       .catch(error => window.console.error(error));
    
 }


// function MakeReq() {
//     fetch('https://randomuser.me/api/')
//       .then(response => {
//         if (response.ok) {
//           console.log(response);
//           console.log("Request was successful");
//           return response.json(); // Return the result of response.json()
//         } else {
//           console.log("Request failed");
//           throw new Error('Request failed');
//         }
//       })
//       .then(data => window.console.log(data))
//       .catch(error => window.console.error(error));
//   }
  
