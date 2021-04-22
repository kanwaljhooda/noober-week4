window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // Create a variable for the rides data
  let rides = json

  // Loop through the rides data
  for (let i=0; i < rides.length; i++) {

      // Create a variable to store each ride in memory
      let ride = rides[i]
    
      // Create a variable for the HTML element we're going to add to
      let element = document.querySelector(`.rides`)
      
      // Define logic for determining ride type and add the appropriate HTML
      
          // If purple ride has been requested than set it to Noober Purple and give it a purple border and font
          if (ride.purpleRequested == true){
          
            element.insertAdjacentHTML(`beforeend`, 
        
            `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-500">
              <i class="fas fa-car-side"></i>
              <span>Noober Purple</span>
            </h1>

            <div class="border-4 border-purple-500 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
                  <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-gray-600 text-white p-2">
                    ${ride.numberOfPassengers} passengers
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${ride.pickupLocation.address}</p>
                  <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${ride.dropoffLocation.address}</p>
                  <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
                </div>
              </div>
            </div>`
              
            )


          }

          // If a purple ride is not requested but there are more than 3 passengers on a requested ride then set it to Noober XL with bigger font

          else if (ride.numberOfPassengers > 3) {
          

            element.insertAdjacentHTML(`beforeend`, 
        
            `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              <i class="fas fa-car-side"></i>
              <span>Noober XL</span>
            </h1>

            <div class="border-4 border-gray-500 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
                  <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-gray-600 text-white p-2">
                    ${ride.numberOfPassengers} passengers
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${ride.pickupLocation.address}</p>
                  <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${ride.dropoffLocation.address}</p>
                  <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
                </div>
              </div>
            </div>`
              
            )


          }

          // If neither purple ride is requested nor more than 3 passengers, then set it to Noober X with default color and font size
          else {
            
            element.insertAdjacentHTML(`beforeend`, 
        
            `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              <i class="fas fa-car-side"></i>
              <span>Noober X</span>
            </h1>

            <div class="border-4 border-gray-500 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
                  <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-gray-600 text-white p-2">
                    ${ride.numberOfPassengers} passengers
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${ride.pickupLocation.address}</p>
                  <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${ride.dropoffLocation.address}</p>
                  <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
                </div>
              </div>
            </div>`
              
            )

    }
    
  }
  })
