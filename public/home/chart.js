$(function (ctx) {

  $.getScript('https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js',function(){
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js',function(){

      Morris.Line({
        element: 'analyticsChart',
        data: [
          { y: '2006', a: 901.45, b: 686.27 },
          { y: '2007', a: 361.40,  b: 358.40 },
          { y: '2008', a: 674.85,  b: 335.38 },
          { y: '2009', a: 721.66,  b: 0.00 },
          { y: '2010', a: 374.96,  b: 0.00 },
          { y: '2011', a: 438.17,  b: 0.00 },
          { y: '2012', a: 352.44,  b: 0.00 },
          { y: '2013', a: 430.39, b: 0.00 },
          { y: '2014', a: 477.19, b: 0.00 },
          { y: '2015', a: 403.79, b: 0.00 },
          { y: '2016', a: 425.46, b: 0.00 },
          { y: '2017', a: 509.27, b: 0.00 }
        ],
        xkey: 'y',
        xlabels:"month",
        preUnits:'$',
        ykeys: ['a', 'b'],
        labels: ['This Year', 'Last Year'],
        resize:true,
        axes:true,
        grid:true,
        xLabelAngle:1,
        // events: ['2007', '2010', '2013'],
        xLabelFormat:function (x) {
          var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          return month[x.getFullYear()-2006];
        }
      });
    });
  });

  // spinner button
  $('.spinner .btn:first-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
  });
  $('.spinner .btn:last-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
  });
});
