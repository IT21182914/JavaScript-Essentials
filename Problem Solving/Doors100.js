function simulateHundredDoors() {
  const numDoors = 100; // We have 100 doors
  const doors = new Array(numDoors).fill(false); // This array will store if each door is open or closed. Initially all doors are closed.

  // Step 2: Walk through the doors 100 times
  for (let pass = 1; pass <= numDoors; pass++) {
    // Step 3: Apply a special rule for each pass
    for (let door = pass - 1; door < numDoors; door += pass) {
      // Step 4: Toggle the state of the door (open it if closed, close it if open)
      doors[door] = !doors[door];
    }
  }

  // Return the final state of all doors after 100 passes
  return doors;
}

// Step 1: Simulate passing through the doors and get the result
const doors = simulateHundredDoors();

// Step 5: Print the doors that are open
for (let i = 0; i < doors.length; i++) {
  if (doors[i]) {
    // If the door is open (true), print its number
    console.log("Door #" + (i + 1) + " is open");
  }
}
