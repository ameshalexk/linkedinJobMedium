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
