window.onload = function () {
    $('a').on('click', function () {
        var theID = $(this).attr('id');
        $('select').val(theID);
        $('a').removeClass('active');
        $(this).addClass('active');
      });
      
      $('#city').on('change', function () {
        var valID = $(this).val();
        $('a').removeClass('active');
        $('#' + valID).addClass('active');
      });
      
}