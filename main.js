const div = document.getElementsByClassName("card");
console.log(div);

Array.from(div).forEach(function (d) {
  d.addEventListener("mouseover", function () {
    console.log("m");
    var nba = d.getElementsByClassName("content")[0];
    console.log(nba);
    if (d === div[0]) {
      nba.innerHTML = `<p class="date">Date: August 2021</p>

      <h3>Description: This project shows off my python skills by the end of my 2nd month in Base Camp Coding Academy</h3>
      <p class="date">Languages: Python</p>`;
    } else if (d === div[1]) {
      nba.innerHTML = `<p class="date">Date: August 2021</p>
      <h3>Description: My first HTML project(Nothing special)"</h3>
      <p class="date">Languages: CSS, HTML</p>`;
    } else if (d === div[2]) {
      nba.innerHTML = `<p class="date">Date: July 2021</p>
        <h3>Description: My python version of the game snake</h3>
        <p class="date">Languages: Python</p>`;
    } else if (d === div[3]) {
      nba.innerHTML = `<p class="date">Date: August 2021</p>
        <h3>Description: My take on getting improvement of html and a charity(the colors do not match each other(lesson learned))</h3>
        <p class="date">Languages: HTML, CSS</p>`;
    } else if (d === div[4]) {
      nba.innerHTML = `<p class="date">Date: August 2021</p>
          <h3>Description: My first Unit Project 1000 lines of python call where you go to 5 different floors and encounter different SCPs</h3>
          <p class="date">Languages: Python</p>`;
    } else if (d === div[5]) {
      nba.innerHTML = `<p class="date">Date: November 2021</p>
      <h3>Description: A new and refreshed version of the dnd website where you can add comments to other peoples and your on creations</h3>
      <p class="date">Languages: Django, CSS, HTML</p>`;
    } else if (d === div[6]) {
      nba.innerHTML = `<p class="date">Date: January 2022</p>
        <h3>Description: A website in Javascript that you can check the weather to see what kind of clothes you should buy. Also tetris is playable.</h3>
        <p class="date">Languages: Javascript</p>`;
    }
  });
});
