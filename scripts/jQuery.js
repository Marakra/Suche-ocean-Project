$(document).ready(function () {
  //sticky-nav
  var waypoint = new Waypoint({
    element: document.getElementById("restaurant-description"),
    handler: function (direction) {
      if (direction == "down") {
        $("nav").attr("id", "sticky-nav");
      } else {
        $("nav").removeAttr("id");
      }
    },
    offset: 100,
  });
  //buttons  and nav click
  $(".button-order").click(function () {
    $("html, body").animate({
        scrollTop: $("#how-to-order-sertion").offset().top,
      },
      1000
    );
  });
  $(".button-more").click(function () {
    $("html, body").animate({
        scrollTop: $("#restaurant-description").offset().top,
      },
      1000
    );
  });

  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ?
          target :
          $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate({
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });
  //animation
  var waypoint = new Waypoint({
    element: document.getElementById("restaurant-description"),
    handler: function (direction) {
      $(".anim1").addClass("animated fadeIn");
    },
    offset: 100,
  });

  var waypoint = new Waypoint({
    element: document.getElementById("cities-section"),
    handler: function (direction) {
      $(".anim2").addClass("animated fadeInRight");
    },
    offset: 100,
  });

  var waypoint = new Waypoint({
    element: document.getElementById("how-to-order-sertion"),
    handler: function (direction) {
      $(".anim3").addClass("animated fadeInUp");
    },
    offset: 100,
  });

  //mobile nav
  $(".mobile-nav-icon").click(function () {

    var icon = $("mobile-nav-icon i");

    if (icon.hasClass("ion-md-menu")) {
      icon.removeClass("ion-md-menu");
      icon.addClass("ion-md-close");
      $("nav").animate({
        height: "300px"
      }, 300);
    } else {
      icon.removeClass("ion-md-close");
      icon.addClass("ion-md-menu");
      $("nav").animate({
        height: "70px"
      }, 300);
    }

    $("#main-nav").slideToggle(500);

  });
});