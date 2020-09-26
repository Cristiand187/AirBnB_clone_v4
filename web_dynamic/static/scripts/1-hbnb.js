const $ = window.$;
const checkList = [];
$('input:checked').each(function () {
  const checkbox = $(this).attr('amenity_id', 'amenity_name');
  checkList.append(checkbox);
});
$('DIV.amenities H4').text(checkList);
