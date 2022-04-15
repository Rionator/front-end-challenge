const submit_btn = document.querySelector(".submit-btn");
const card_content1 = document.querySelector(".card-content1");
const card_content2 = document.querySelector(".card-content2");
const rating_btn = document.querySelectorAll(".rating-btn");
const score = document.querySelector(".score");
let star_score = 3;
submit_btn.addEventListener("click", onSubmit);
rating_btn.forEach((btn) => {
  btn.addEventListener("click", handleRatingBtnClick);
});

function onSubmit() {
  card_content1.classList.add("hide");
  score.textContent = star_score;
  card_content2.classList.remove("hide");
  console.log("submit click");
}

function handleRatingBtnClick(e) {
  rating_btn.forEach((btn) => {
    btn.classList.remove("active");
  });

  if (e.target.classList.contains("rating-btn")) {
    e.target.classList.add("active");
  } else {
    e.target.parentElement.classList.add("active");
  }

  star_score = e.target.textContent;
  console.log(star_score);
}

console.log(rating_btn);
