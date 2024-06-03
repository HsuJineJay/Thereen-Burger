/*
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
*/


// 首頁滑鼠移動鍵變大banner
document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector('.interactive');
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  const move = () => {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  };

  window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});

