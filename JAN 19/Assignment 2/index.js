
// Object Definition

var reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      linker: "https://rounak2021.github.io/person-pages-server/PERSON%20PAGES/susan.html",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      linker: "https://rounak2021.github.io/person-pages-server/PERSON%20PAGES/anna.html",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      linker: "https://rounak2021.github.io/person-pages-server/PERSON%20PAGES/peter.html",
    },
    {
      id: 4,
      name: "Bill Anderson",
      job: "THE BOSS",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      linker: "https://rounak2021.github.io/person-pages-server/PERSON%20PAGES/bill.html",
    },
  ];
  

  // Storing the object elements inside variable
  var imgElement = document.getElementById("person-img");
  var author = document.getElementById("author");
  var job = document.getElementById("job");
  var info = document.getElementById("info");
  var linker = document.getElementById("linker");
  var prevBtn = document.querySelector(".prev-btn");
  var nextBtn = document.querySelector(".next-btn");
  var randomBtn = document.querySelector(".random-btn");
  
  
  
  var currentIndex = 0;
  

  // Making the functionality of the button
  prevBtn.addEventListener("click", prevClick);
  nextBtn.addEventListener("click", nextClick);
  randomBtn.addEventListener("click", randomaize);
  

  // Pevious Click Button
  function prevClick() {
    if (currentIndex === 0) {
      currentIndex = reviews.length - 1;
    } else {
      currentIndex--;
    }
    console.log(currentIndex);
    updateUserDetails();
  }
  

  // Next Click Button
  function nextClick() {
    if (currentIndex === reviews.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    console.log(currentIndex);
    updateUserDetails();
  }


// Surprise Me Button
  function randomaize() {
    currentIndex = Math.floor(Math.random() * reviews.length);
    console.log(currentIndex);
    updateUserDetails();
  }
  

  // Function to update the user data
  function updateUserDetails() {
    imgElement.src = reviews[currentIndex].img;
    author.innerText = reviews[currentIndex].name;
    job.innerText = reviews[currentIndex].job;
    info.innerText = reviews[currentIndex].text;
    linker.innerText = reviews[currentIndex].linker;
  }