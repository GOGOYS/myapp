/**** 기본 요소 js ****/

// a javascript:void(0);
$(document).ready(function() {
  $('a').each(function() {
    if (!$(this).attr('href')) {
      $(this).attr('href', "javascript:void(0);");
    }
  });
});

/*** form ***/
// custom select
$(document).ready(function() {
  $(".selectbox").each(function() {
    var $this = $(this);
    var firstVal = $this.find(".option.default").text();
    if ($this.hasClass("disabled")) {
			$this.find(".selected").click(function() {
				return false;
			})
    } else {
      $this.find(".selected").text(firstVal);
      $this.find(".selected").click(function() {
        $(".selectoptions").slideUp(100);
        if (!$this.find(".selectoptions").is(":visible")) {
          $this.find(".selectoptions").slideDown(100);
          $this.addClass("on")
        } else {
          $this.find(".selectoptions").slideUp(100);
          $this.removeClass("on")
        }
        return false;
      })
      $this.find(".option").click(function() {
        val = $(this).text();
        $this.find(".selected").text(val);
        $this.find(".selectoptions").slideUp(100);
        $this.find(".selected").removeClass("on")
        $this.find(".option").removeClass("on")
        $(this).addClass("on")
				$this.removeClass("on")
        return false;
      })
    }
  })
})

// custom file
$(document).ready(function() {
	$("#file").on('change',function(){
		var fileName = $("#file").val();
		$(".upload-name").val(fileName);
	});
})

// datepicker
var fncDate = function() {
  var setDate = arguments;
  var getId;
  var fmt = "yy.mm.dd";
  switch (setDate.length) {
    case 1:
      getId = "#" + setDate[0];
      break;
    case 2:
      if (setDate[1] != '') {
        getId = "#" + setDate[0] + ", #" + setDate[1];
        break;
      } else {
        getId = "#" + setDate[0];
        break;
      }
      case 3:
        if (setDate[1] != '') {
          getId = "#" + setDate[0] + ", #" + setDate[1];
          fmt = setDate[2];
          break;
        } else {
          getId = "#" + setDate[0];
          fmt = setDate[2];
          break;
        }
  }

  var dates = $(getId).datepicker({
    changeMonth: true,
    changeYear: true,
    showOn: "button",
    buttonImage: "images/icon/i_cal.svg",
    buttonImageOnly: true,
    dateFormat: fmt,
    onSelect: function(selectedDate) {
      var option = this.id == setDate[0] ? "minDate" : "maxDate",
        instance = $(this).data("datepicker"),
        date = (fmt == 'yy.mm' ? new Date(instance.selectedYear, instance.selectedMonth, 1) : $.datepicker.parseDate($.datepicker._defaults.dateFormat, selectedDate, instance.settings))
      dates.not(this).datepicker("option", option, date);
      $(this).trigger("change");
    }
  });
}


// tab
$(document).ready(function () {
	if($('.js-tmenu').length || $('.js-tcont').length) {
		$('.js-tcont').stop().hide();
		$('.js-tcont.on').stop().show();
		$('.js-tmenu li a').click(function () {
			let tabId = $(this).parent().attr('id');
			let selTabId = $('.js-tmenu li[id="' + tabId + '"], .js-tcont[data-tab="' + tabId + '"]');
			$(this).closest('.tab').find('.js-tmenu li, .js-tcont').not('.js-tmenu li.on').removeClass('on');
			selTabId.addClass('on').fadeIn();
			selTabId.siblings('.js-tcont').stop().hide();
			selTabId.siblings().removeClass('on');
      return false;
		});
	}
});


/** popup **/
// popup
function view_show(popName) {
  let left = ($(window).width() - $("#display_view" + popName).width()) / 2;
  let top = ($(window).height() - $("#display_view" + popName).height()) / 2;
  $("#js-popup-bg").show();
  $("#display_view" + popName).css({
    'position': 'fixed',
    'left': left,
    'top': top,
    'z-index': 5500
  }).show();
  return false;
}

function view_hide(popName) {
  $("#display_view" + popName).hide();
  $("#js-popup-bg").hide();
  return false;
}
$(function() {
  $('#js-popup-bg').click(function() {
    $('.js-popup').hide();
    $(this).hide();
  });
});

// 메인 팝업
$(document).ready(function () {
  $(".main_pop").draggable();
  $(".main_pop .close").click(function(){
    $(this).closest(".main_pop").hide();
    return false;
  })
})

// faq
$(document).ready(function() {
  $(".ac_btn a").click(function() {
    if ($(this).parent().hasClass("on")) {
      $(".ac_btn").removeClass("on");
      $(".ac_cont").stop().slideUp(200);
    } else {
      $(".ac_btn").removeClass("on");
      $(".ac_cont").stop().slideUp(200);
      $(this).parent().addClass("on").next(".ac_cont").stop().slideDown(200);
    }
    return false;
  })
});

// reply
$(document).ready(function() {
  $('.js-reReply').click(function() {
    $(this).parents('.reply_box').siblings('.re_reply').toggle();
  });
});


// sms box
$(document).ready(function() {
  $(".sms_scl").each(function(){
    $(this).mCustomScrollbar({
      callbacks: {
        onInit: function(){
          if($(this).find(".mCSB_container").hasClass("mCS_y_hidden")){
          } else {
            $(this).parent(".sms_box").addClass("scroll");
          }
        }
      }
    });
  })
});

// code
$(document).ready(function() {
	$('.code_basic .code_rewrite').click(function() {
		$(this).parents('tr').find('.code_basic').hide();
		$(this).parents('tr').find('.code_correct').show();
		$('.code_correct button').click(function() {
			$(this).parents("tr").find('.code_correct').hide();
			$(this).parents("tr").find('.code_basic').show();
			return false;
		});
	});
})

// search detail
$(document).ready(function() {
  $(".search_basic.detail .btn_detail").click(function() {
    if ($(this).hasClass("on")) {
      $(".search_basic.detail .btn_detail").removeClass("on")
      $(".js-srchDet").stop().slideUp(200);
    } else {
      $(".search_basic.detail .btn_detail").removeClass("on")
      $(".js-srchDet").stop().slideUp(200);
      $(this).addClass("on")
      $(this).siblings(".js-srchDet").stop().slideDown(200)
    }
    return false;
  })
});

// accordion
$(document).ready(function() {
  $('.js-accHead').click(function() {
    $(this).next('.js-accBody').slideToggle(300).parents('li').siblings().children('.js-accBody').slideUp(300);
    $(this).parents('li').siblings().children('.js-accHead').removeClass('open');
    $(this).toggleClass('open');
  });
});




// startsWith func
String.prototype.startsWith = function(str) {
  if (this.length < str.length) return false;
  return this.indexOf(str) == 0;
}
// endsWith func
String.prototype.endsWith = function(str) {
  if (this.length < str.length) return false;
  return this.lastIndexOf(str) + str.length == this.length;
}
// space (margin, padding, width, height, font-size)
$(document).ready(function() {
  let mar_ = $("[class*='mar_']");
  if (mar_.length) {
    $('body').find(mar_).each(function() {
      let _this = $(this);
      let _mar = _this.attr('class').split(' ');
      for (var i = 0; i < _mar.length; i++) {
        let position = '';
        let arr = _mar[i].split('');
        let sliceArr = _mar[i].slice(5);
        let num = sliceArr.replace(/[^0-9,_]/g, '');
        let underbar = sliceArr.replace(/[^_]/g, '');
        if (_mar[i].startsWith('mar_') == true || _mar[i].startsWith('mar_') && (_mar[i].endsWith('p') || _mar[i].endsWith('rem'))) {
          if (underbar) {
            num = sliceArr.replace('_', '.');
          }
          num = num.replace(/[^0-9,.]/g, '');
          position = arr[4] === 't' ? 'margin-top' : arr[4] === 'r' ? 'margin-right' : arr[4] === 'b' ? 'margin-bottom' : arr[4] === 'l' ? 'margin-left' : '';
          let unit = _mar[i].startsWith('mar') === true && _mar[i].endsWith('p') ? '%' : _mar[i].startsWith('mar') === true && _mar[i].endsWith('rem') ? 'rem' : 'px';
          _this.css(position, num + unit);
        }
      }
    });
  }

  let pad_ = $("[class*='pad_']");
  if (pad_.length) {
    $('body').find(pad_).each(function() {
      let _this = $(this);
      let _pad = _this.attr('class').split(' ');
      for (var i = 0; i < _pad.length; i++) {
        let position = '';
        let arr = _pad[i].split('');
        let sliceArr = _pad[i].slice(5);
        let num = sliceArr.replace(/[^0-9,_]/g, '');
        let underbar = sliceArr.replace(/[^_]/g, '');
        if (_pad[i].startsWith('pad_') == true || _pad[i].startsWith('pad_') && (_pad[i].endsWith('p') || _pad[i].endsWith('rem'))) {
          if (underbar) {
            num = sliceArr.replace('_', '.');
          }
          num = num.replace(/[^0-9,.]/g, '');
          position = arr[4] === 't' ? 'padding-top' : arr[4] === 'r' ? 'padding-right' : arr[4] === 'b' ? 'padding-bottom' : arr[4] === 'l' ? 'padding-left' : '';
          let unit = _pad[i].startsWith('pad') === true && _pad[i].endsWith('p') ? '%' : _pad[i].startsWith('pad') === true && _pad[i].endsWith('rem') ? 'rem' : 'px';
          _this.css(position, num + unit);
        }
      }
    });
  }

  let w = $("[class*='w']");
  if (w.length) {
    $('body').find(w).each(function() {
      let _this = $(this);
      let _w = _this.attr('class').split(' ');
      for (var i = 0; i < _w.length; i++) {
        let num = _w[i].replace(/[^0-9,_]/g, '');
        let underbar = _w[i].replace(/[^_]/g, '');
        if (_w[i].startsWith('w') == true || _w[i].startsWith('w') && (_w[i].endsWith('p') || _w[i].endsWith('rem'))) {
          if (underbar) num = num.replace('_', '.');
          let unit = _w[i].startsWith('w') === true && _w[i].endsWith('p') ? '%' : _w[i].startsWith('w') === true && _w[i].endsWith('rem') ? 'rem' : 'px';
          _this.css('width', num + unit);
        }
      }
    });
  }

  let ht = $("[class*='ht']");
  if (ht.length) {
    $('body').find(ht).each(function() {
      let _this = $(this);
      let _ht = _this.attr('class').split(' ');
      for (var i = 0; i < _ht.length; i++) {
        let num = _ht[i].replace(/[^0-9,_]/g, '');
        let underbar = _ht[i].replace(/[^_]/g, '');
        if (_ht[i].startsWith('ht') == true || _ht[i].startsWith('ht') && (_ht[i].endsWith('p') || _ht[i].endsWith('rem'))) {
          if (underbar) num = num.replace('_', '.');
          let unit = _ht[i].startsWith('ht') === true && _ht[i].endsWith('p') ? '%' : _ht[i].startsWith('ht') === true && _ht[i].endsWith('rem') ? 'rem' : 'px';
          _this.css('height', num + unit);
        }
      }
    });
  }

  let fs = $("[class*='fs']");
  if (fs.length) {
    $('body').find(fs).each(function() {
      let _this = $(this);
      let _fs = _this.attr('class').split(' ');
      for (var i = 0; i < _fs.length; i++) {
        let num = _fs[i].replace(/[^0-9,_]/g, '');
        let underbar = _fs[i].replace(/[^_]/g, '');
        if (_fs[i].startsWith('fs') == true || _fs[i].startsWith('fs') && (_fs[i].endsWith('p') || _fs[i].endsWith('rem'))) {
          if (underbar) num = num.replace('_', '.');
          let unit = _fs[i].startsWith('fs') === true && _fs[i].endsWith('p') ? '%' : _fs[i].startsWith('fs') === true && _fs[i].endsWith('rem') ? 'rem' : 'px';
          _this.css('font-size', num + unit);
        }
      }
    });
  }
});


//message box
$(document).ready(function() {
  $('.msg_box .btn_close').click(function() {
    $(this).parent().hide();
    return false;
  });
});