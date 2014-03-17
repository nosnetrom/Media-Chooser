// JavaScript for choosing the appropriate audio format for the user browser.
// (For accommodating video formats, see http://nosnetrom.com/portfolio/.)
// Requires Modernizr, jQuery libraries.
// jim@nosnetrom.com
	function noAudio(ele) {
		if (!Modernizr.audio) {
			$('#msgNoAudio').html('<strong>SO SORRY!</strong> Your browser is not up to date and does not natively support audio. Try installing <a href="http://www.firefox.com">Firefox</a> or <a href="http://chrome.google.com">Chrome</a>. In the meantime, you may download your selection below.');
			strFallback = '<ul>';
			$(ele).children().each(function() { strFallback += '<li><a href="' + $(this).data('mp3src') + '">' + $(this).val() + '</a></li>'; });
			strFallback += '</ul>';
			$('#fallback').html(strFallback);
			$(ele).attr('disabled','disabled');
		}
	}
	function selSrc(ele) {
		if (Modernizr.audio) {
			var mySrc, mp3src, oggsrc;
			mp3src = $(ele).children("option").filter(":selected").data('mp3src');
			oggsrc = $(ele).children("option").filter(":selected").data('oggsrc');
			mySrc = Modernizr.audio.ogg ? oggsrc : mp3src;
			return mySrc;
		} else {
			$('#myPlayr').html('<strong>SO SORRY!</strong> Your browser is not up to date and does not natively support audio. Try installing <a href="http://www.firefox.com">Firefox</a> or <a href="http://chrome.google.com">Chrome</a>. In the meantime, you may download your selection below.');
			strFallback = '<ul>';
			$(ele).children().each(function() { strFallback += '<li><a href="' + $(this).data('mp3src') + '">' + $(this).val() + '</a></li>'; });
			strFallback += '</ul>';
			$('#fallback').html(strFallback);
			$(ele).attr('disabled','disabled');
			return false;
		}
	}
	function playSel(mySel) {
		myPlayr = document.getElementsByTagName('audio')[0];
		if (myPlayr.src != undefined) {
			myPlayr.pause();
			myPlayr.src = mySel;
		} else {
			myPlayr.src = mySel;
		}
		myPlayr.load();
		myPlayr.play();
	}
