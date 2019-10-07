// Back-Story
// Every day I travel on the freeway.

// When I am more bored than usual I sometimes like to play the following counting game I made up:

// As I join the freeway my count is 0
// Add 1 for every car that I overtake
// Subtract 1 for every car that overtakes me
// Stop counting when I reach my exit
// What an easy game! What fun!

// Kata Task
// You will be given

// The distance to my exit (km)
// How fast I am going (kph)
// Information about a lot of other cars
// Their time (relative to me) as I join the freeway. For example,
// -1.5 means they already passed my starting point 1.5 minutes ago
// 2.2 means they will pass my starting point 2.2 minutes from now
// How fast they are going (kph)
// Find what is my "score" as I exit the freeway!

// Notes
// Assume all cars travel at a constant speeds

function freeway(count, distance, speed, cars){
    // cars is an obj with Key Values of how much earlier/later the car passed as well as their speed in km/h
    // count is score
    // speed is your speed in km/h
    //distance is length of freeway in km
  
    //1. check how long until driver finishes freeway, in minutes 
    speed = speed/60
    let driving_time = distance/speed
  
    //2. check times of each car and how long it takes them to finish freeway NOT accounting for their position relative to when we onboarded the freeway, just assuming they started with us; we will refactor after.  
  
  //   Object.values(cars).forEach(car => {
  //     car_speed_in_minutes = car.speed/60
  //     car_time = distance/car_speed_in_minutes
  //     console.log(car_time)
  //     //if car_time > driving_time, count++ (we finshed first), else count-- (they finsihed first)
  //       if(car_time > driving_time){
  //         count++
  //       } else{
  //         count--
  //       }
  //     }
  //   )
  
  // return count 
  
  //3. Solution above works when not factoring in `location`, lets focus on accounting for time; if we know the speed and how many minutes they've had to travel we can deduce `actual distance` relative to when we enter the freeway i.e. if car1 has location value -1.5, that means if we multiply 1.5 minutes by speed of car 1 we can get the distance car1 already travelled by the time we enter the freeway. At this point actual_distance = distance - headstart_distance. Technically, this is the same as if car1 had a shorter freeway so the rest of our logic still works: if car1 travel time is > ours count ++ else count --  
   Object.values(cars).forEach(car => {
      car_speed_in_minutes = car.speed/60
      headstart_distance = (car.location*-1) //-1.5 means 1.5 min head start 
      distance_actual = distance - headstart_distance 
      car_time = distance_actual/car_speed_in_minutes
      console.log(car,car_time, "minutes")
      //if car_time > driving_time, count++ (we finshed first), else count-- (they finsihed first)
        if(car_time > driving_time){
          count++
        } else{
          count--
        }
      }
    )
  
   return count 
  
  }
  
  const cars = {1: {speed: 50, location: 1.5}, 2:{speed: 20, location: -1.5}, 3: {speed:70, location: 2}}
  const count = 0
  const distance = 2 
  const speed = 60
  
  
  freeway(count, distance, speed, cars)