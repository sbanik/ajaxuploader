(function($) {
$.fn.ajaxfileuploader=function(params){
var params=$.extend({filefield:"#file",resultin:"#info"},params);

var form=$(this);
var upevent=params.uploadon;
var res=$(params.resultin);
var actionurl=form.attr('action');

form.submit(function(evt){
    evt.preventDefault();
    $('#info').html("Sending..<br/>");
	
	var fileInput = document.getElementById('file');
	var file=fileInput.files;
	var len = file.length;
	
	for(var i=0;i<len;i++)
	{
		var progressbar="File "+(i+1)+" status:<progress id='p"+i+"' max=\"100\" value=\"0\"/><span id='res"+i+"'></span><br/>";
		res.append(progressbar);
		var formData = new FormData();
		formData.append("file",file[i]);
		uploadFile(formData,i);
	}
	});
function uploadFile(fdata,id){
	$.ajax({
  url: actionurl,
  data: fdata,
  processData: false,
  contentType: false,
  async:true,
  type: 'POST',
  xhr: function(){
	var xhr = new window.XMLHttpRequest();
		xhr.upload.addEventListener("progress", function(evt){	
        var percent = (evt.loaded/evt.total)*100;
		$('#p'+id).attr("value",Math.round(percent));
       },false);
		return xhr;},
  success: function(reply){
	$('#p'+id).hide();
	$('#res'+id).append(reply);}
	});
}

$('#uploadform input:reset').click(function(){$('#info').html('');});
return this;
};
})(jQuery);
