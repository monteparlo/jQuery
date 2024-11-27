// NAV HOVER 

$(document).ready(function () {
    $("nav a").on({
      mouseenter: function () {
        $(this).css({
          color: "rgb(255, 225, 230)",
          "font-weight": "bolder",
          "letter-spacing": "5px"
        });
      },
      mouseleave: function () {
        $(this).css({
          color: "", 
          "font-weight": "",
          "letter-spacing": ""
        });
      },
    });
  });

  



// CONTENT VISIBILITY
  
  $(document).ready(function () {
    $(".content").hide();
    $("#home").show();

       $("nav a").click(function (e) {
        e.preventDefault(); 

          const target = $(this).attr("href").substring(1);

        $(".content").hide();
        $("#" + target).show();
    });
});





//CONTENT FOR STEPS
$(document).ready(function () {
  let currentStep = 0; 
  const totalSteps = 5; 
  const stepsContent = {

      1: `
          
<h3 id="1">1. Find your DRIVE.</h3>

<p>My drive is to help spread positive energy into this world by utilizing my creativity to its maximum potential!</p>

<p>In your language: Being an artist that inspires.<br>

This is my drive.<br>

What's yours?</p>

<input placeholder=" ________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________">



<h3 id="1">Congratulations! You completed your first step!</h3>
<p>Now time to get a foundation for your bonfire of success. <p>

      `,
      2: `

         
<h3 id="2">2. Find your FOCUS.</h3>

<p>My focus is the media. Getting myself out there. Having my name appear in very blank space I can find. Having my craft, my talents, my capabilities become known. Having an audience. People that wish to follow me as I pursue spreading positivity.</p>

<p>Care to share?</p>

<input placeholder=" ________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________">


<h3 id="2">Congratulations! You completed your second step!</h3>
<p>Now time to get some wood for your bonfire of success.</p>

      `,
      3: `
         

      <h3 id="3">3. Solidify your CHARACTER.</h3>
      <u>Stage Name:</u> Makási - meaning strong, tough<br>
      <u>Talents:</u> singing - painting - writing - designing - rapping - covers - projection mapping - gloving - dancing - cosplay - photography - parody - comedy - motivational speaking - advice giving - revolution starting <br>
      <u>Portal:</u> Youtube - Instagram - Wix <br><br>
      <u id="outline">Outline:</u>
      <ul id="list">
          <li><input type="checkbox" class="check-task">
      Main Email 
         
                  <button id="delete-btn">Delete</button>
         </li>
          <li><input type="checkbox" class="check-task">
      Youtube Domain
          
                  <button id="delete-btn">Delete</button>
         </li>
          <li><input type="checkbox" class="check-task">
      Instagram Domain
         
                  <button id="delete-btn">Delete</button>
         </li>
          <li><input type="checkbox" class="check-task">
      Logo
                      <button id="delete-btn">Delete</button>
         </li>
          <li><input type="checkbox" class="check-task">
      Profile Pic
      
                  <button id="delete-btn">Delete</button>
         </li>
          <li><input type="checkbox" class="check-task">
      Background Cover
           
                  <button id="delete-btn">Delete</button>
         </li>
          <li><input type="checkbox" class="check-task">
      Catchy Description
         
                  <button id="delete-btn">Delete</button>
         </li>
          <li><input type="checkbox" class="check-task">
      First Video
          
                  <button id="delete-btn">Delete</button>
         </li>
          <li><input type="checkbox" class="check-task">
      First Instagram Post
          
                  <button id="delete-btn">Delete</button>
         </li><br>
      <input type="text" id="new-task" placeholder="Add your own!"><br>
      <button id="add-task">Add Task</button><br><br>
      <u>Character:</u><br>
      <input placeholder="__________________________________________________________________________________________________________________________________________"><br>
      <u>Capabilities:</u><br>
      <input placeholder="______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________"><br>
      <u>Execution:</u> <br>
      <input placeholder="________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________">
      
      <h3 id="3">Congratulations! You completed your third step!</h3>
      <p>Now time to spark up your bonfire of success. </p>
      

      `,
      
      4: `

<h3 id="4">4. FOLLOW THROUGH.</h3>

<p>The more effort you put towards posting about your passion,
the more air you are introducing to the fire to ignite it!<br>

Keep going. Keep executing. <br>

and before you know it,.. </p>

<img src="assets/uni.jpg" alt="Unicorn" width="400px" height="auto">

<h3 id="4">You will unleash your inner unicorn!🦄✨</h3>

<p>Hope this helped! <br>

✨🦄✨</p>

      `,
      5: `

       
<h3 id="5">5. TESTIMONY!**</h3>
<div id="image-grid">
<img src="assets/test1.png" alt="Instagram Results" width="auto" height="300px">
<img src="assets/test2.png" alt="Instagram Results" width="auto" height="300px">
<img src="assets/test3.png" alt="Instagram Results" width="auto" height="300px">
<img src="assets/test4.png" alt="Instagram Results" width="auto" height="300px">
<img src="assets/test5.png" alt="Instagram Results" width="auto" height="300px">
<img src="assets/test6.png" alt="Instagram Results" width="auto" height="300px">
</div>

<h3 id="5">YOU CAN DO IT!</h3>
<p>Just keep going and people will notice how amazing you are!<br>
<em>**Disclaimer: Results may vary. This was my own personal experience. My progress is a result of constant effort, including researching strategies to gain followers.</em></p>
      `,
  };

     function showStep(step) {
      $("#step").html(stepsContent[step]); 
  }


  showStep(currentStep);

      $("#next").click(function () {
      if (currentStep < totalSteps) {
          currentStep++;
          showStep(currentStep);
      }
  });

      $("#prev").click(function () {
      if (currentStep > 1) {
          currentStep--;
          showStep(currentStep);
      }
  });

    $(document).keydown(function (e) {
      if (e.key === "ArrowRight" && currentStep < totalSteps) {
          currentStep++;
          showStep(currentStep);
      } else if (e.key === "ArrowLeft" && currentStep > 1) {
          currentStep--;
          showStep(currentStep);
      }
  });


  $(document).keydown(function (e) {
    if (e.key === "ArrowRight" && currentStep < totalSteps) {
      currentStep++;
      showStep(currentStep);
    } else if (e.key === "ArrowLeft" && currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  });

  $("ol a").click(function (e) {
    e.preventDefault();
    const targetStep = $(this).attr("href").substring(1);
    currentStep = parseInt(targetStep);
    showStep(currentStep);
  });

});




$(document).ready(function () {
  $(document).on("click", "img", function () {
    $(this).toggleClass("expanded");
    if ($(this).hasClass("expanded")) {
      $(this).css({
        width: "600px",
        height: "auto",
      });
    } else {
      $(this).css({
        width: "",
        height: "",
      });
    }
  });
});

$(document).ready(function () {
  
  function validateName(name) {
    return name.trim().length > 0;
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  }

  function isValidPhoneNumber(phoneNumber) {
    const regex = /^(1\s?)?(\(?\d{3}\)?[\s\-]?)?\d{3}[\s\-]?\d{4}$/;
    return regex.test(phoneNumber.trim());
  }

  function validateMessage(message) {
    return message.trim().length > 0; 
  }


  $("#name-check-btn").click(function () {
    const name = $("#name-input").val();
    if (validateName(name)) {
      $("#name-results-div").html("<p style='color:green;'>Yay! Valid name!</p>");
    } else {
      $("#name-results-div").html("<p style='color:burgundy;'>Uh-oh! Name is required!</p>");
    }
  });

  $("#email-check-btn").click(function () {
    const email = $("#email-input").val();
    if (validateEmail(email)) {
      $("#email-results-div").html("<p style='color:green;'>Yay! Valid email!</p>");
    } else {
      $("#email-results-div").html("<p style='color:burgundy;'>Uh-oh! Invalid email format!</p>");
    }
  });

  $("#number-check-btn").click(function () {
    const number = $("#number-user-input").val();
    if (isValidPhoneNumber(number)) {
      $("#number-results-div").html("<p style='color:green;'>Yay! Valid phone number!</p>");
    } else {
      $("#number-results-div").html("<p style='color:burgundy;'>Uh-oh! Invalid phone number!</p>");
    }
  });

  $("#message-check-btn").click(function () {
    const message = $("#message-input").val();
    if (validateMessage(message)) {
      $("#message-results-div").html("<p style='color:green;'>Yay! Valid message!</p>");
    } else {
      $("#message-results-div").html("<p style='color:burgundy;'>Uh-oh! Message cannot be empty!</p>");
    }
  });

 
  $("#name-clear-btn").click(function () {
    $("#name-input").val("");
    $("#name-results-div").empty();
  });

  $("#email-clear-btn").click(function () {
    $("#email-input").val("");
    $("#email-results-div").empty();
  });

  $("#number-clear-btn").click(function () {
    $("#number-user-input").val("");
    $("#number-results-div").empty();
  });

  $("#message-clear-btn").click(function () {
    $("#message-input").val(""); 
    $("#message-results-div").empty();
  });
});




$(document).ready(function () {

  $("#step").on("click", "#delete-btn", function () {
    $(this).closest("li").hide(); 
  });

  
  $("#step").on("click", "#add-task", function () {
    const newTask = $("#new-task").val().trim();
    if (newTask) {
      $("#list").prepend(`
        <li>
          <input type="checkbox" class="check-task">${newTask}
          <button id="delete-btn">Delete</button>
        </li>
      `);
      $("#new-task").val(""); 
    }
  });
});


//INTERACTIVE BUTTON
$(document).ready(function() {
  $('#interactive-btn').hover(
    function() {
      $(this).css({
        'transform': 'rotate(180deg)',
        'filter': 'hue-rotate(180deg)'
      });
    },
    function() {
      $(this).css({
        'transform': 'rotate(0deg)',
        'filter': 'hue-rotate(0deg)'
      });
    }
  );
});




