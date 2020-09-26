const $ = window.$;
const checkDict = {};
$(document).ready(function () {
  $('input').change(function () {
    if ($(this).is(':checked')) {
      checkDict[($(this).attr('data-id'))] = ($(this).attr('data-name'));
    } else {
      delete checkDict[($(this).attr('data-id'))];
    }
    $('DIV.amenities H4').html(Object.values(checkDict).join(', '));
  });
});
