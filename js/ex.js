
$( "#accordion" ).accordion();

  var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
  ];
  $( "#autocomplete" ).autocomplete({
      source: availableTags
  });

  $( "#button" ).button();
  $( "#button-icon" ).button({
      icon: "ui-icon-gear",
      showLabel: false
  });

  $( "#radioset" ).buttonset();

  $( "#controlgroup" ).controlgroup();

  $( "#tabs" ).tabs();

  $( "#dialog_title" ).dialog({
      show: {effect: "fade", duration: 200},
      hide: {effect: "fade", duration: 200},
      close: function (event, ui) {
          $('body').css('overflow', 'scroll');
      },
      open: function (event, ui) {
          $('body').css('overflow', 'hidden');
      },
      autoOpen: false,
      draggable: false,
      resizable: false,
      width: 300,
      height: 'auto',
      modal: true, // Freeze the background behind the overlay
      buttons: [
          {
              text: "확인",
              class: "c_point",
              // c_normal, c_point, c_function, c_del, c_cancel, c_disable
              click: function() {
                  $( this ).dialog( "close" );
              }
          },
          {
              text: "취소",
              class: "c_cancel",
              // c_normal, c_point, c_function, c_del, c_cancel, c_disable
              click: function() {
                  $( this ).dialog( "close" );
              }
          }
      ]
  });
  $( "#dialog_nor" ).dialog({
      show: {effect: "fade", duration: 200},
      hide: {effect: "fade", duration: 200},
      close: function (event, ui) {
          $('body').css('overflow', 'scroll');
      },
      open: function (event, ui) {
          $('body').css('overflow', 'hidden');
      },
      autoOpen: false,
      draggable: false,
      resizable: false,
      width: 300,
      height:'auto',
      modal: true, // Freeze the background behind the overlay
      buttons: [
          {
              text: "확인",
              class: "c_point",
              // c_normal, c_point, c_function, c_del, c_cancel, c_disable
              click: function() {
                  $( this ).dialog( "close" );
              }
          },
          {
              text: "취소",
              class: "c_cancel",
              // c_normal, c_point, c_function, c_del, c_cancel, c_disable
              click: function() {
                  $( this ).dialog( "close" );
              }
          }
      ]
  });
  // Link to open the dialog
  $( "#dialog-link_title" ).click(function( event ) {
      $( "#dialog_title" ).dialog( "open" );
      event.preventDefault();
  });
  $( "#dialog-link_nor" ).click(function( event ) {
      $( "#dialog_nor" ).dialog( "open" );
      $("#dialog_nor").dialog().parents(".ui-dialog").find(".ui-dialog-titlebar").remove();
      event.preventDefault();
  });
  $( "#dialog-link_full" ).click(function( event ) {
      var w = $(window).width();
      var h = $(window).height();

      $('#dialog_full').dialog({
          show: {effect: "fade", duration: 200},
          hide: {effect: "fade", duration: 200},
          close: function (event, ui) {
              $('body').css('overflow', 'scroll');
          },
          open: function (event, ui) {
              $('body').css('overflow', 'hidden');
          },
          draggable: false,
          resizable: false,
          height: h,
          width: w,
          buttons: [
              {
                  text: "확인",
                  class: "c_point",
                  // c_normal, c_point, c_function, c_del, c_cancel, c_disable
                  click: function() {
                      $( this ).dialog( "close" );
                  }
              },
              {
                  text: "취소",
                  class: "c_cancel",
                  // c_normal, c_point, c_function, c_del, c_cancel, c_disable
                  click: function() {
                      $( this ).dialog( "close" );
                  }
              }
          ]
      });

      $('#myDialog').bind("dialogresize", function (event, ui) {
          $('#dialog_full #resizeToParent').css('height', ($('#dialog_full').height() - 40) + 'px');

          $('#dialog_full #resizeToParent div').text('inner: ' + $('#dialog_full #resizeToParent').css('height') + ' outer: ' + $('#dialog_full').css('height'));
      });
  });

  $.datepicker.setDefaults({
      dateFormat: 'yy-mm-dd',
      prevText: '이전 달',
      nextText: '다음 달',
      monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      showMonthAfterYear: true,
      yearSuffix: '년'
  });
  $( "#datepicker_1" ).datepicker({
      inline: true,
      changeYear:true,
      changeMonth:true,
      showOn: 'both',
      buttonImage: './SBGrid/img/grid/cal_button.png',
      buttonImageOnly: true,
  });
  $( "#datepicker_2" ).datepicker({
      inline: true,
      changeYear:true,
      changeMonth:true,
      showOn: 'both',
      buttonImage: './SBGrid/img/grid/cal_button.png',
      buttonImageOnly: true,
  });

  $( "#slider" ).slider({
      range: true,
      values: [ 17, 67 ]
  });

  $( "#progressbar" ).progressbar({
      value: 20
  });

  $( "#spinner" ).spinner();

  $( "#menu" ).menu();

  $( "#tooltip" ).tooltip();

  $( "#selectmenu_1" ).selectmenu();
  $( "#selectmenu_2" ).selectmenu();

  // Hover states on the static widgets
  $( "#dialog-link, #icons li" ).hover(
      function() {
          $( this ).addClass( "ui-state-hover" );
      },
      function() {
          $( this ).removeClass( "ui-state-hover" );
      }
  );