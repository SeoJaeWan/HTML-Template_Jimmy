// 2020 07 30 서재완
// 포트폴리오 버튼 구현

var portfolio_content = document.querySelector(".portfolio-content"); // 포트폴리오 틀
var portfolio_box = document.querySelector(".portfolio-box"); // 포트폴리오 틀
var portfolio = document.querySelectorAll(".portfolio-item"); // 포트폴리오

var currentX = []; // 각각 포트폴리오의 현재 x축
var currentY = []; // 각각 포트폴리오의 현재 y축

function showPortfolio(type) {
  var x = 0;
  var y = 0; // y축
  var abled = 0; // 화면에 표시될 포트폴리오

  var height; // 포트폴리오 틀 height
  var height_value;

  for (var i = 0; i < portfolio.length; i++) {
    var portfolio_class = [];

    if (window.innerWidth >= 768) {
      console.log(abled % 3);
      x = (abled % 3) * 111.3;
      y = Math.floor(abled / 3);
    } else {
      y = abled;
    }

    for (var j = 0; j < portfolio[i].classList.length; j++)
      portfolio_class.push(portfolio[i].classList[j]);

    if (portfolio_class.indexOf(type) !== -1) {
      portfolio[i].setAttribute(
        "style",
        "transform: translate(" +
          x +
          "%," +
          y * 110 +
          "%) scale(1,1); opacity: 1;"
      );
      currentX[i] = x;
      currentY[i] = y * 110;
      abled++;
    } else {
      portfolio[i].setAttribute(
        "style",
        "transform: translate(" +
          currentX[i] +
          "%," +
          currentY[i] +
          "%) scale(0.1,0.1); opacity: 0;"
      );
    }
  }

  if (window.innerWidth >= 768) {
    height = Math.floor((abled - 1) / 3) + 1;
    height_value = document.querySelector(".portfolio-content").offsetWidth / 4;
  } else {
    height = abled;
    height_value = portfolio[0].offsetHeight + 20;
  }

  console.log(height_value, portfolio[0].offsetHeight);

  portfolio_box.setAttribute(
    "style",
    "height : " + height * height_value + "px;"
  );
}

showPortfolio("all");
