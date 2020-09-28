const $ = window.$;
const checkDict = {};
const url = 'http://localhost:5001/api/v1/status/';
$(document).ready(function () {
  $('input').change(function () {
    if ($(this).is(':checked')) {
      checkDict[($(this).attr('data-id'))] = ($(this).attr('data-name'));
    } else {
      delete checkDict[($(this).attr('data-id'))];
    }
    $('DIV.amenities H4').html(Object.values(checkDict).join(', '));
  });
  $.getJSON(url, (request) => {
    if (request.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
