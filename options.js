	//绑定输入id的框change事件
	document.getElementById('box').onclick=function () {
    		document.getElementById('save').value='读  取';
    		document.getElementById('save').className='button';
		};
	//绑定读取按钮点击事件
	document.getElementById('save').onclick=function () {
		document.getElementById('save').value='已储存';
		document.getElementById('save').className='buttond';
		save_options();
		};
	//绑定"..."的鼠标事件，下同
	document.getElementById('menu').onmouseover=function () {
		this.style.color='#555';
	}

	document.getElementById('menu').onmouseout=function () {
		this.style.color='#000';
	}
	
	//绑定"..."，来打开设置
		var flag=0;
	document.getElementById('menu').onclick=function () {
		if(flag==0){
			document.getElementById('setpal').className='uppadu';
			document.getElementById('setpal').style.marginTop='-55px';
			flag=1;
		}else{
			document.getElementById('setpal').className='uppadd';
			document.getElementById('setpal').style.marginTop='-12px';
			flag=0;
		}
		};
	
	//当id为空，显示logo
	function nullshow(flag){
		if(flag==0){
			document.getElementById('logo').style.display='';
			document.getElementById('foo').style.display='none';
		}else{
			document.getElementById('logo').style.display='none';
			document.getElementById('foo').style.display='';
		}
	}
	//用chrome的api存储歌单id
	var select = document.getElementById('box');
	function save_options() {
  		var te = select.value;
  		if(te==''){
  			nullshow(0);
  		}else{
  			nullshow(1);
  			document.getElementById('foo').src="http://music.163.com/outchain/player?type=0&id="+te+"&auto=0";
  		}
  		chrome.storage.local.set({'listid': te},function(item){

  		});
	}

	//获得已经存储的歌单id
	chrome.storage.local.get('listid',function(item){
		if(item.listid){
			select.value=item.listid.toString();
			document.getElementById('foo').src="http://music.163.com/outchain/player?type=0&id="+select.value+"&auto=0";
		}else{
			nullshow(0);
		}
	});
