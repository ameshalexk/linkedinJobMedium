(function () {
  
  //Select the parent container of all jobs which was scrollable in a variable

let parentContainer = document.querySelector('.jobs-search-results');


// Function declaration to start scrolling down by 500 pixels at an interval of 1 second.

function start_scroll_down() {
    scroll = setInterval(function () {

// Scroll the parent container 
      parentContainer.scrollBy(0, 500);
    }, 1000);
  }


//Stop Scrolling function declaration.

  function stop_scroll_down() {
    clearInterval(scroll);
  }

//Execute Start Scrolling down function.

  start_scroll_down();
  
// Anonymous function to stop scroll down action after 7 seconds.

  setTimeout(function () {
    stop_scroll_down();
  }, 7000);
  
  
// Anonymous function to fun after 8 seconds.
  
  setTimeout(function () {

// Select all jobs in List Items and search for Innertext of "Promoted" 

let allListItems = document.querySelectorAll('li');

// Convert all list Items to an array

let arrayAllListItems = Array.from(allListItems);

//Filter out List Items that have an innertext of Promoted

let promotedJobs = arrayAll.filter((job) => {
   if (job.innerText === 'Promoted') {
       return job;
   }
});

// Hide promoted jobs parent element

let results = promotedJobs.map((job) => {
    let parentJob = job.parentElement.parentElement.parentElement.parentElement;
    parentJob.style.cssText = 'display: none';
    return parentJob;
});

// Scroll back to top of container

parentContainer.scrollTo(0, 0);

  }, 8000);
})();
