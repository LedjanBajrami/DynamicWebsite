$(document).ready(function() {

  const services = [
    {
      icon: "fa-solid fa-gears",
      title: "UI/UX Design",
      text: "Lorem, ipsum dolor sit amet, consectetur adipisicing elit. In eiusmod faucibus quam. placerat placerat dolor. Vestibulum"
    },
    {
      icon: "fa-solid fa-mobile",
      title: "Mobile Apps",
      text: "Lorem, ipsum dolor sit amet, consectetur adipisicing elit. In eiusmod faucibus quam. placerat placerat dolor. Vestibulum"
    },
    {
      icon: "fa-solid fa-laptop",
      title: "Web Developer",
      text: "Lorem, ipsum dolor sit amet, consectetur adipisicing elit. In eiusmod faucibus quam. placerat placerat dolor. Vestibulum"
    },
    {
      icon: "fa-solid fa-camera",
      title: "Photoshop",
      text: "Lorem, ipsum dolor sit amet, consectetur adipisicing elit. In eiusmod faucibus quam. placerat placerat dolor. Vestibulum"
    },
    {
      icon: "fa-brands fa-accusoft",
      title: "Software",
      text: "Lorem, ipsum dolor sit amet, consectetur adipisicing elit. In eiusmod faucibus quam. placerat placerat dolor. Vestibulum"
    },
    {
      icon: "fa-solid fa-chart-pie",
      title: "Graphic Design",
      text: "Lorem, ipsum dolor sit amet, consectetur adipisicing elit. In eiusmod faucibus quam. placerat placerat dolor. Vestibulum"
    }
  ];

  
  for (var i = 0; i < services.length; i++) {
    const serviceCard = `
      <div class="col-lg-4 col-md-6">
        <div class="card border-0 py-4">
          <div class="card-body">
            <h4 class="card-title text-white-50 position-relative"><i class="${services[i].icon}"></i> ${services[i].title}</h4>
            <p class="card-text text-secondary mt-4">${services[i].text}</p>
          </div>
        </div>
      </div>
    `;
    
    $('#services-cards').append(serviceCard);
  }  
});




$(function generateBlogCards() {
  const blogCardsData = [
    {
      date: "25th June",
      title: "Eget Pulvinar New",
      content:
        "Nulla viverra pharetra sem, eget pulvinar neque pharetra ac in.",
    },
    {
      date: "25th June",
      title: "Eget Pulvinar New",
      content:
        "Nulla viverra pharetra sem, eget pulvinar neque pharetra ac in.",
    },
    {
      date: "25th June",
      title: "Eget Pulvinar New",
      content:
        "Nulla viverra pharetra sem, eget pulvinar neque pharetra ac in. lorem ipsum Vestibulum, plancerat plancerat dolor. Vestibulum at dul nunc eget pulvinar neque pharetra ac int. In eulsmod faubulum quam, placerat placerat dolor. Nullam eu elit neque lectus. Polite sadipsding elitr, sed diam nonumy eirmod.",
    },
  ];

  function createBlogCard(date, title, content) {
    const $blogCard = $("<div>").addClass("blog-card position-relativ mb-3").html(
      `<span>${date}</span>
         <h4 class="my-3">${title}</h4>
        <p>${content}</p>`
    )
    return $blogCard
  }


  const $blogCardsContainer = $("#blog-cards");
  for(let i=0; i < blogCardsData.length-1; i++){
    const {date, title, content} = blogCardsData[i];
    const $blogCard = createBlogCard(date, title, content);
    const $col = $("<div>").addClass("col-lg-6").append($blogCard);
    $blogCardsContainer.append($col)
  }

  const $blogCardContainer = $("#blog-card");
  const {date, title, content} = blogCardsData[2];
  const $blogCard = createBlogCard(date, title, content);
  $blogCardContainer.append($blogCard);
})


$(function generateImageGrid() {

    const imagesData = [
      { src: "img/projects-img1.jpg", alt: "Project Image 1" },
      { src: "img/projects-img2.jpg", alt: "Project Image 2" },
      { src: "img/projects-img3.png", alt: "Project Image 3" },
      { src: "img/projects-img4.jpg", alt: "Project Image 4" },
      { src: "img/projects-img5.jpg", alt: "Project Image 5" },
      { src: "img/projects-img6.jpg", alt: "Project Image 6" },
    ];
  
    const imageGridContainer = $("#image-grid");
  
    for (let i = 0; i < imagesData.length; i++) {
      const imageData = imagesData[i];
      const colClass = i === 2 || i === 3 ? "col-lg-6" : "col-lg-3";
      const imageCol = $("<div>", { class: colClass + " pt-2" });
      const imageLink = $("<a>", { href: "#", class: "d-block position-relative" });
      const image = $("<img>", { src: imageData.src, alt: imageData.alt, class: "img-fluid" });
  
      imageLink.append(image);
      imageCol.append(imageLink);
      imageGridContainer.append(imageCol);
    }
  }
)


$(document).ready(function() {
  $('.btn').click(function() {
    var name = $('input[placeholder="Name"]').val();
    var email = $('input[placeholder="Email"]').val();
    var phone = $('input[placeholder="Phone"]').val();
    var message = $('.message').val();

    if (!name || !email || !phone || !message) {
      alert('Please fill in all input fields!');
      return;
    }

    if (!email.includes('@gmail.com')) {
      alert('Please enter an email that includes @gmail.com!');
      return;
    }

    if (!phone.match(/^\d+$/)) {
      alert('Enter a valid number!');
      return;
    }

    var data = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };

    var timestamp = new Date().getTime();
    var key = 'formData_' + timestamp;
    
    localStorage.setItem(key, JSON.stringify(data));
    
    alert('The data has been saved successfully!');

    $('form')[0].reset();
  });
});















