const tagLines = [
  "Escape to paradise",
  "Experience ultimate relaxation",
  "Discover your perfect getaway",
  "Indulge in luxury and tranquility",
  "Unwind in nature's embrace",
  "Find your slice of heaven",
  "Live your dream vacation",
  "Explore a world of beauty",
  "Embrace adventure, embrace life",
  "Create unforgettable memories",
];

function generateTag(arr, interval) {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomTagLine = tagLines[randomIndex];
    document.getElementById("taglines").innerText = randomTagLine;
  }, interval);
}

generateTag(tagLines, 2000);

document
  .getElementById("random-room-btn")
  .addEventListener("click", async function () {
    console.log("hello world");
    const data = await fetch(`ROOMS.json`);
    const result = await data.json();
    const randomIndex = Math.floor(Math.random() * 10);
    const modalBody = document.getElementById("random-room-info-modal-body");
    const { name, summary, property_type, images, review_scores } = result[9];
    
    

    const reviews = document.createElement("ol");
    if (review_scores.scores) {
      reviews.setAttribute('class',"list-group")

      object.keys(review_scores.scores).forEach((key) => {
        reviews.innerHTML += `
        <li class="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
        ${key} : 
        <span class="badge bg-primary rounded-pill">${review_scores.scores[key]}</span> 
        </li>
        `;
      });
    } else {
      reviews.innerHTML = "No reviews found";
    }

    
    modalBody.innerHTML = `
    <div class="col">
    <div class="card h-100">
      <img src=${images.picture_url} class="card-img-top " alt="..." style=" height: 300px;
      object-fit: fill;">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${property_type}</p>
        <p class="card-text">${summary}</p>
        <div id='review-score'>
      Review Scores :
      ${review_scores.scores.review_scores_accuracy}
    </div>
      </div>
      <button class="btn btn-info btn-lg"  role="button"
                   >Show details</button>
    </div>
   </div>
    `;
    
  });



 