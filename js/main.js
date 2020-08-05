document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
    var elems2 = document.querySelectorAll('.datapicker');
    M.Datepicker.init(elems2);
  });