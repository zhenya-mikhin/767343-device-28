let main_page = document.querySelector(".main-page");
//                        feedback modal interactive
let feedback_section = document.querySelector(".feedback-modal-section");
let open_fb_button = document.querySelector(".feedback-button");
let close_fb_button = document.querySelector(".feedback-close-button");

let fb_username_input = document.querySelector(".feedback-modal-section .name-input");
let fb_email_input = document.querySelector(".feedback-modal-section .email-input");
let fb_message_input = document.querySelector(".feedback-modal-section .message-input");
let fb_form = document.querySelector(".feedback-form");
let envelope = document.querySelectorAll(".envelope");

let storage_username = localStorage.getItem("UserName");
let storage_access = true;
try{
  storage_username;
} catch (err) {
  storage_access = false;
}

if (main_page) {open_fb_button.addEventListener("click", function(evt){
    evt.preventDefault();
    feedback_section.classList.remove("modal-closing");
    feedback_section.classList.add("popped");
    if (storage_username) {
      fb_username_input.value = storage_username;
      fb_email_input.focus();
    } else {
      fb_username_input.focus();
    }
  })}
if (main_page) {close_fb_button.addEventListener("click", function(evt){
  evt.preventDefault();
  feedback_section.classList.add("modal-closing");
  setTimeout(function () {
    feedback_section.classList.remove("popped");
    feedback_section.classList.remove("error");
  }, 300);
})}
if (main_page) {window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27 && feedback_section.classList.contains("popped")) {
    feedback_section.classList.add("modal-closing");
    setTimeout(function () {
      feedback_section.classList.remove("popped");
      feedback_section.classList.remove("error");
    }, 300);
  }
})}

//                        feedback submit interactive

if (main_page) {fb_form.addEventListener("submit", function(evt) {
  if (!fb_username_input.value || !fb_email_input.value || !fb_message_input.value) {
    evt.preventDefault();
    feedback_section.classList.remove("error");
    feedback_section.offsetWidth = feedback_section.offsetWidth;
    feedback_section.classList.add("error");
  } else {
          if (storage_access) {
            evt.preventDefault();
            localStorage.setItem("UserName", fb_username_input.value);
            feedback_section.classList.remove("error");
            for (i=0; i < envelope.length; i++) { envelope[i].classList.toggle("envelope-triggered"); }
            feedback_section.classList.replace("popped", "feedback-sent");
            setTimeout(function () {
              feedback_section.classList.remove("error");
              feedback_section.classList.remove("feedback-sent");
              for (i=0; i < envelope.length; i++) { envelope[i].classList.toggle("envelope-triggered"); }
              fb_form.submit();
            }, 2000);
          }
        }
      }
    )
  }


//                     map modal interactive
let map_section = document.querySelector(".map-modal-section");
let open_map_area = document.querySelector(".map-unfold");
let close_map_button = document.querySelector(".map-close-button");

if (main_page) {open_map_area.addEventListener("click", function(evt){
  evt.preventDefault();
  map_section.classList.remove("modal-closing-2");
  map_section.classList.add("popped");
});}
if (main_page) {close_map_button.addEventListener("click", function(evt){
  evt.preventDefault();
  map_section.classList.add("modal-closing-2");
  setTimeout(function () {
    map_section.classList.remove("popped");
  }, 480);
})}
if (main_page) {window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27 && map_section.classList.contains("popped")) {
    map_section.classList.add("modal-closing-2");
    setTimeout(function () {
      map_section.classList.remove("popped");
    }, 480);
  }
})}

//                       features slider interactive
let delivery_button = document.querySelector(".delivery-button");
let guarantee_button = document.querySelector(".guarantee-button");
let credit_button = document.querySelector(".credit-button");

let delivery_info = document.querySelector(".delivery-info");
let guarantee_info = document.querySelector(".guarantee-info");
let credit_info = document.querySelector(".credit-info");

if (main_page) {guarantee_button.addEventListener("click", function(evt){
  if (!guarantee_button.classList.contains("current-button")) {
    evt.preventDefault();

    guarantee_button.classList.add("current-button");
    guarantee_info.classList.add("current-info");

    delivery_button.classList.remove("current-button");
    delivery_info.classList.remove("current-info");

    credit_button.classList.remove("current-button");
    credit_info.classList.remove("current-info");
  }
})}
if (main_page) {delivery_button.addEventListener("click", function(evt){
  if (!delivery_button.classList.contains("current-button")) {
    evt.preventDefault();

    delivery_button.classList.add("current-button");
    delivery_info.classList.add("current-info");

    guarantee_button.classList.remove("current-button");
    guarantee_info.classList.remove("current-info");

    credit_button.classList.remove("current-button");
    credit_info.classList.remove("current-info");
  }
})}
if (main_page) {credit_button.addEventListener("click", function(evt){
  if (!credit_button.classList.contains("current-button")) {
    evt.preventDefault();

    credit_button.classList.add("current-button");
    credit_info.classList.add("current-info");

    guarantee_button.classList.remove("current-button");
    guarantee_info.classList.remove("current-info");

    delivery_button.classList.remove("current-button");
    delivery_info.classList.remove("current-info");
  }
})}

//                          ad slider interactive
let first_toggle = document.querySelector(".slider-controls .first-button");
let second_toggle = document.querySelector(".slider-controls .second-button");
let third_toggle = document.querySelector(".slider-controls .third-button");

let first_slide = document.querySelector(".slides .slide-1");
let second_slide = document.querySelector(".slides .slide-2");
let third_slide = document.querySelector(".slides .slide-3");

if (main_page) {first_toggle.addEventListener("click", function(evt){
  if (!first_toggle.classList.contains("current-button")) {
    evt.preventDefault();

    first_toggle.classList.add("current-button");
    first_slide.classList.add("current-slide");

    second_toggle.classList.remove("current-button");
    second_slide.classList.remove("current-slide");

    third_toggle.classList.remove("current-button");
    third_slide.classList.remove("current-slide");
    }
});}
if (main_page) {second_toggle.addEventListener("click", function(evt){
  if (!second_toggle.classList.contains("current-button")) {
    evt.preventDefault();

    second_toggle.classList.add("current-button");
    second_slide.classList.add("current-slide");

    first_toggle.classList.remove("current-button");
    first_slide.classList.remove("current-slide");

    third_toggle.classList.remove("current-button");
    third_slide.classList.remove("current-slide");
    }
});}
if (main_page) {third_toggle.addEventListener("click", function(evt){
  if (!third_toggle.classList.contains("current-button")) {
    evt.preventDefault();

    third_toggle.classList.add("current-button");
    third_slide.classList.add("current-slide");

    first_toggle.classList.remove("current-button");
    first_slide.classList.remove("current-slide");

    second_toggle.classList.remove("current-button");
    second_slide.classList.remove("current-slide");
    }
});}

//                 search form animations
let search_form = document.querySelector(".search-form");
let search_input = document.querySelector(".search-input");

search_form.addEventListener("submit", function(evt) {
  if (!search_input.value) {
  evt.preventDefault();
  search_form.classList.remove("search-error");
  search_form.offsetWidth = search_form.offsetWidth;
  search_form.classList.add("search-error");
  }
});
