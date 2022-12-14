var nineAM = document.querySelector('.description');
nineAM.value = localStorage.getItem("#hour-9");

var tenAM = document.querySelector('.description1');
tenAM.value = localStorage.getItem("#hour-10");

var elevenAM = document.querySelector('.description2');
elevenAM.value = localStorage.getItem("#hour-11");

var twelvePM = document.querySelector('.description3');
twelvePM.value = localStorage.getItem("#hour-12");

var onePM = document.querySelector('.description4');
onePM.value = localStorage.getItem("#hour-1");

var twoPM = document.querySelector('.description5');
twoPM.value = localStorage.getItem("#hour-2");

var threePM = document.querySelector('.description6');
threePM.value = localStorage.getItem("#hour-3");

var fourPM = document.querySelector('.description7');
fourPM.value = localStorage.getItem("#hour-4");

var fivePM = document.querySelector('.description8');
fivePM.value = localStorage.getItem("#hour-5");

var hourNine = document.querySelector('#hour-9').dataset.hour
var hourTen = document.querySelector('#hour-10').dataset.hour
var hourEleven = document.querySelector('#hour-11').dataset.hour
var hourTwelve = document.querySelector('#hour-12').dataset.hour
var hourThirteen = document.querySelector('#hour-1').dataset.hour
var hourFourteen = document.querySelector('#hour-2').dataset.hour
var hourFifteen = document.querySelector('#hour-3').dataset.hour
var hourSixteen = document.querySelector('#hour-4').dataset.hour
var hourSeventeen = document.querySelector('#hour-5').dataset.hour

$(function () {
  var today = dayjs();
  $('#date').text(today.format('dddd, MMMM D YYYY, h:mm a'))
  var hour = dayjs().hour();
 //Need to create function to paresint string value of block to numerical value to compare in if statement

  $('#hour-9').click(function(){
    $(this)
    localStorage.setItem('#hour-9', nineAM.value);
    localStorage.getItem('#hour-9');
  })
  if (hourNine < hour) {
    $('#hour-9').addClass('past')
  } else if (hourNine==hour){
    $('#hour-9').addClass('present')
  } else {
    $('#hour-9').addClass('future')
  }
  
  $('#hour-10').click(function(){
    $(this)
    localStorage.setItem('#hour-10', tenAM.value);
    localStorage.getItem('#hour-10');
  })
  if (hourTen < hour) {
    $('#hour-10').addClass('past')
  } else if (hourTen==hour){
    $('#hour-10').addClass('present')
  } else {
    $('#hour-10').addClass('future')
  }
  $('#hour-11').click(function(){
    $(this)
    localStorage.setItem('#hour-11', elevenAM.value);
    localStorage.getItem('#hour-11');
   // console.log(document.querySelector('#hour-11').dataset.hour);
  })
  if (hourEleven < hour) {
    $('#hour-11').addClass('past')
  } else if (hourEleven==hour){
    $('#hour-11').addClass('present')
  } else {
    $('#hour-11').addClass('future')
  }
  $('#hour-12').click(function(){
    $(this)
    localStorage.setItem('#hour-12', twelvePM.value);
    localStorage.getItem('#hour-12');
  })
  if (hourTwelve < hour) {
    $('#hour-12').addClass('past')
  } else if (hourTwelve==hour){
    $('#hour-12').addClass('present')
  } else {
    $('#hour-12').addClass('future')
  }
  $('#hour-1').click(function(){
    $(this)
    localStorage.setItem('#hour-1', onePM.value);
    localStorage.getItem('#hour-1');
  })
  if (hourThirteen < hour) {
    $('#hour-1').addClass('past')
  } else if (hourThirteen==hour){
    $('#hour-1').addClass('present')
  } else {
    $('#hour-1').addClass('future')
  }
  $('#hour-2').click(function(){
    $(this)
    localStorage.setItem('#hour-2', twoPM.value);
    localStorage.getItem('#hour-2');
  })
  if (hourFourteen < hour) {
    $('#hour-2').addClass('past')
  } else if (hourFourteen==hour){
    $('#hour-2').addClass('present')
  } else {
    $('#hour-2').addClass('future')
  }
  $('#hour-3').click(function(){
    $(this)
    localStorage.setItem('#hour-3', threePM.value);
    localStorage.getItem('#hour-3');
  })
  if (hourFifteen < hour) {
    $('#hour-3').addClass('past')
  } else if (hourFifteen==hour){
    $('#hour-3').addClass('present')
  } else {
    $('#hour-3').addClass('future')
  }
  $('#hour-4').click(function(){
    $(this)
    localStorage.setItem('#hour-4', fourPM.value);
    localStorage.getItem('#hour-4');
  })
  if (hourSixteen < hour) {
    $('#hour-4').addClass('past')
  } else if (hourSixteen==hour){
    $('#hour-4').addClass('present')
  } else {
    $('#hour-4').addClass('future')
  }

  $('#hour-5').click(function(){
    $(this)
    localStorage.setItem('#hour-5', fivePM.value);
    localStorage.getItem('#hour-5');
    })
    if (hourSeventeen < hour) {
      $('#hour-5').addClass('past')
    } else if (hourSeventeen==hour){
      $('#hour-5').addClass('present')
    } else {
      $('#hour-5').addClass('future')
    }
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


});
