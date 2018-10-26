document.querySelector(".tile").classList.toggle("flip");
$('.tile').bind({
  click: function() {
    $('.tile .flip').toggleClass('flip-hover');
  },
  mouseenter: function() {
    $('.tile .flip').addClass('flip-hover');
  },
  mouseleave: function() {
    $('.tile .flip').removeClass('flip-hover');
  }
});



