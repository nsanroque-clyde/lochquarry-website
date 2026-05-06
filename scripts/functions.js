document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed", {
    strings: [
      "“We had a great time and loved all the different activities that we did.”<strong> – 8th Gourock Guides</strong>",

      "“The Scouts loved every second of it, especially the powerboating.”<strong> − Martin Bainbridge, Scout Leader</strong>",

      "“I would definitely come back.”<strong> − Kelly, aged 9</strong>",

      "“Thank you to all the staff who worked so hard, in awful weather, to make sure that all the pupils had an amazing experience.”<strong> − Mrs Kahn, Hillend Primary School</strong>",

      "“Five stars, it was great.”<strong> − Joe, aged 14</strong>",

      "“I was really scared about the abseiling but the instructor Mike was really encouraging and helped me do it, thanks Mike.”<strong> − Sophie, aged 10</strong>",

      "“The archery was brilliant, but not as good as axe throwing, I never thought we’d be allowed to do that! I got one of my axes right in the middle of the target.”<strong> − Scott, aged 13</strong>",

      "“The kids had a ball and didn’t want to leave.”<strong> − Mr Evans, PE teacher</strong>"
    ],
    typeSpeed: 35,
    backSpeed: 5,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: false
  });
});


particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#2d6a4f" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});


function changeImage(imageFile,captionText) {
    document.getElementById("featured-image").src = imageFile;
    document.getElementById("activities-caption").textContent = captionText;
  }
