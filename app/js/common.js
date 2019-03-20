// живой код 
$('.js_year').text(new Date().getFullYear())
// console.log('lol')


$('ul.tabs').on('click', 'li:not(.active)', function () {
  $("ul.tabs li").removeClass('active');
  $(this).addClass('active')
  $('.tabs-content .item').hide()
  var index = $(this).data('index')
  console.log(index)

  $(".tabs-content .item[data-index=" + index + "]").show()
});
console.log('test')

// $('body').mouseleave(function () {
//   setTimeout(function () {
//     $("#timeput").removeClass('closed');
//     $("#timeput").addClass('opened');

//     if (mark === false) {

//       mark = true
//     }


//   }, 500);
// });

$('#close').on('click', function () {
  $('#timeput').addClass('closed')
})