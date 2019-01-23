// 记录当前页的最后一个学生在数组中的位置
var location1 = 9;
// 记录当前页的第一个学生在数组中的位置
var location2 = 0;
//当前页数
var page=1;
//总页数
var pages = 3;
//总的学生信息数
var sum = 24
var message = new Array();

function demo(){
	$.ajax({
		url: "/demo/demo",
		dataType:'JSON',
		cache: false,
		success:function(data){
			var str = JSON.stringify(data);
			message = JSON.parse(str);
			alert(message[0].numberTxt)
		},
		error:function(error){
			console.log(error)//除了200和304都必经过error
		}
	})
}
demo()
function demo1(){
	$.ajax({
		url: "/demo/demo",
		type:'POST',
		dataType:'json',
		data: {"message":JSON.stringify(message)},
		success:function(){
			alert("传值成功！")
		},
		error:function(error){
			console.log(error)//除了200和304都必经过error
		}
	})
}

function changeLocation(){
	if(sum >= 10)
		location1 = 9;
	else
		location1 = message.length - 1;
}

var table = document.createElement('table')
table.style.border = '3px solid #00ffb8';
table.style.margin = 0;
table.style.width = '1332px';
table.style.height = '502px';
table.style.backgroundColor = '#b2b2ca';
table.style.textAlign = 'center';

var tbody = document.createElement('tbody')
table.appendChild(tbody)
// 表头
tbody.insertRow(0)
tbody.rows[0].style.height = '50px'
tbody.rows[0].insertCell(0)
var checkBox = document.createElement('input')
checkBox.type = 'checkBox'
tbody.rows[0].cells[0].appendChild(checkBox)
tbody.rows[0].insertCell(1)
tbody.rows[0].cells[1].appendChild(document.createTextNode('序号'))
tbody.rows[0].insertCell(2)
tbody.rows[0].cells[2].appendChild(document.createTextNode('学号'))
tbody.rows[0].insertCell(3)
tbody.rows[0].cells[3].appendChild(document.createTextNode('姓名'))
tbody.rows[0].insertCell(4)
tbody.rows[0].cells[4].appendChild(document.createTextNode('学院'))
tbody.rows[0].insertCell(5)
tbody.rows[0].cells[5].appendChild(document.createTextNode('专业'))
tbody.rows[0].insertCell(6)
tbody.rows[0].cells[6].appendChild(document.createTextNode('年级'))
tbody.rows[0].insertCell(7)
tbody.rows[0].cells[7].appendChild(document.createTextNode('班级'))
tbody.rows[0].insertCell(8)
tbody.rows[0].cells[8].appendChild(document.createTextNode('年龄'))
tbody.rows[0].insertCell(9)
tbody.rows[0].cells[9].appendChild(document.createTextNode('操作'))

//复选框
var checkBox1 = new Array()
function changeCheckBox(){
	for(var i=0;i<sum;i++)
	{
		checkBox1[i]=document.createElement('input')	
		checkBox1[i].type = 'checkBox'
		checkBox1[i].setAttribute('id','checkBox'+i)
	}
}
	
//查看按钮数组
var look = new Array()

function changeLook(){
	for(var i=0;i<sum;i++)
	{
		look[i]=document.createElement('input')	
		look[i].type = 'button'
		look[i].value = '查看'
		look[i].style.background = 'yellow'
		look[i].style.color = 'black'
		look[i].style.border = 0
		look[i].style.marginRight = '10px'
		look[i].setAttribute('id','look'+i)
		look[i].onclick = function(){
			lookThrough(this)
		}
	}
}

//修改
var modify = new Array()
function changeModify(){
	for(var i = 0; i < sum;i++)
	{
		modify[i]=document.createElement('input')	
		modify[i].type = 'button'
		modify[i].value = '修改'
		modify[i].style.background = 'yellow'
		modify[i].style.color = 'black'
		modify[i].style.border = 0
		modify[i].style.marginRight = '10px'
		modify[i].onclick = function(){
			modification(this);
		}
	}
}

function change(){
	for (var i = 0; i < 10; i++)
	{
		tbody.insertRow(i+1)
		tbody.rows[i+1].style.height = '40px'
		tbody.rows[i+1].insertCell(0)
		tbody.rows[i+1].cells[0].appendChild(checkBox1[i])
		tbody.rows[i+1].insertCell(1)
		tbody.rows[i+1].insertCell(2)
		tbody.rows[i+1].insertCell(3)
		tbody.rows[i+1].insertCell(4)
		tbody.rows[i+1].insertCell(5)
		tbody.rows[i+1].insertCell(6)
		tbody.rows[i+1].insertCell(7)
		tbody.rows[i+1].insertCell(8)
		tbody.rows[i+1].insertCell(9)
		tbody.rows[i+1].cells[9].appendChild(look[i])
		tbody.rows[i+1].cells[9].appendChild(modify[i])
	}
}

function clear(){
	for (var i = 1; i <= 10; i++)
	{
		for(var j = 0; j < 10; j++)
			tbody.rows[i].cells[j].innerHTML = ""
	}
}

/*第一页 */
function firstPage(){
	clear()
	for (var i = 0; i <= location1; i++)
	{
		tbody.rows[i+1].cells[0].appendChild(checkBox1[i])
		tbody.rows[i+1].cells[1].innerHTML = i+1
		tbody.rows[i+1].cells[2].innerHTML = message[i].numberTxt
		tbody.rows[i+1].cells[3].innerHTML = message[i].nameTxt
		tbody.rows[i+1].cells[4].innerHTML = message[i].academyTxt
		tbody.rows[i+1].cells[5].innerHTML = message[i].majorTxt
		tbody.rows[i+1].cells[6].innerHTML = message[i].gradeTxt
		tbody.rows[i+1].cells[7].innerHTML = message[i].classTxt
		tbody.rows[i+1].cells[8].innerHTML = message[i].ageTxt
		tbody.rows[i+1].cells[9].innerHTML = ""
		tbody.rows[i+1].cells[9].appendChild(look[i])
		tbody.rows[i+1].cells[9].appendChild(modify[i])
	}
	document.getElementById('page').innerHTML = '1 ';
	document.getElementById('table1').appendChild(table);
}
changeCheckBox()
changeLook()
changeModify()
change()
changeLocation()
firstPage()
//最后一页
function lastPage(){
	clear()
	for (var i = 0,j=(pages-1)*10; j < message.length; i++,j++)
	{
		tbody.rows[i+1].cells[0].appendChild(checkBox1[j])
		tbody.rows[i+1].cells[1].innerHTML = j+1	
		tbody.rows[i+1].cells[2].innerHTML = message[j].numberTxt
		tbody.rows[i+1].cells[3].innerHTML = message[j].nameTxt
		tbody.rows[i+1].cells[4].innerHTML = message[j].academyTxt
		tbody.rows[i+1].cells[5].innerHTML = message[j].majorTxt
		tbody.rows[i+1].cells[6].innerHTML = message[j].gradeTxt
		tbody.rows[i+1].cells[7].innerHTML = message[j].classTxt
		tbody.rows[i+1].cells[8].innerHTML = message[j].ageTxt
		tbody.rows[i+1].cells[9].innerHTML = ""
		tbody.rows[i+1].cells[9].appendChild(look[j])
		tbody.rows[i+1].cells[9].appendChild(modify[j])
	}
	if(message.length%10>0)
	{
		for (var i = message.length%10;i<10;i++)
		{
			tbody.rows[i+1].cells[0].innerHTML = ""
			tbody.rows[i+1].cells[1].innerHTML = ""	
			tbody.rows[i+1].cells[2].innerHTML = ""
			tbody.rows[i+1].cells[3].innerHTML = ""
			tbody.rows[i+1].cells[4].innerHTML = ""
			tbody.rows[i+1].cells[5].innerHTML = ""
			tbody.rows[i+1].cells[6].innerHTML = ""
			tbody.rows[i+1].cells[7].innerHTML = ""
			tbody.rows[i+1].cells[8].innerHTML = ""
			tbody.rows[i+1].cells[9].innerHTML = ""
		}
	}
	location1 = message.length-1;
	location2 = (pages-1)*10;
	page = pages;
	document.getElementById('page').innerHTML = pages+" "
	document.getElementById('table1').appendChild(table);
}	

//下一页
function lookNext(){
	if(location1 == (message.length-1))
		return false;
	clear()
	if((message.length - 1 - location1) < 10)
	{
		for (var i = 0,j = location1+1; j < message.length; i++,j++)
		{
			tbody.rows[i+1].cells[0].innerHTML = ""
			tbody.rows[i+1].cells[0].appendChild(checkBox1[j])
			tbody.rows[i+1].cells[1].innerHTML = j+1	
			tbody.rows[i+1].cells[2].innerHTML = message[j].numberTxt
			tbody.rows[i+1].cells[3].innerHTML = message[j].nameTxt
			tbody.rows[i+1].cells[4].innerHTML = message[j].academyTxt
			tbody.rows[i+1].cells[5].innerHTML = message[j].majorTxt
			tbody.rows[i+1].cells[6].innerHTML = message[j].gradeTxt
			tbody.rows[i+1].cells[7].innerHTML = message[j].classTxt
			tbody.rows[i+1].cells[8].innerHTML = message[j].ageTxt
			tbody.rows[i+1].cells[9].innerHTML = ""
			tbody.rows[i+1].cells[9].appendChild(look[j])
			tbody.rows[i+1].cells[9].appendChild(modify[j])
		}
		location2 = location1+1;
		location1 = message.length-1;

		for (var i = message.length%10;i<10;i++)
		{
			tbody.rows[i+1].cells[0].innerHTML = ""
			tbody.rows[i+1].cells[1].innerHTML = ""	
			tbody.rows[i+1].cells[2].innerHTML = ""
			tbody.rows[i+1].cells[3].innerHTML = ""
			tbody.rows[i+1].cells[4].innerHTML = ""
			tbody.rows[i+1].cells[5].innerHTML = ""
			tbody.rows[i+1].cells[6].innerHTML = ""
			tbody.rows[i+1].cells[7].innerHTML = ""
			tbody.rows[i+1].cells[8].innerHTML = ""
			tbody.rows[i+1].cells[9].innerHTML = ""
		}
	}
	else
	{
		for (var i = 0,j = location1+1; i<10,j < location1+11; i++,j++)
		{
			tbody.rows[i+1].cells[0].innerHTML = ""
			tbody.rows[i+1].cells[0].appendChild(checkBox1[j])
			tbody.rows[i+1].cells[1].innerHTML = j+1	
			tbody.rows[i+1].cells[2].innerHTML = message[j].numberTxt
			tbody.rows[i+1].cells[3].innerHTML = message[j].nameTxt
			tbody.rows[i+1].cells[4].innerHTML = message[j].academyTxt
			tbody.rows[i+1].cells[5].innerHTML = message[j].majorTxt
			tbody.rows[i+1].cells[6].innerHTML = message[j].gradeTxt
			tbody.rows[i+1].cells[7].innerHTML = message[j].classTxt
			tbody.rows[i+1].cells[8].innerHTML = message[j].ageTxt
			tbody.rows[i+1].cells[9].innerHTML = ""
			tbody.rows[i+1].cells[9].appendChild(look[j])
			tbody.rows[i+1].cells[9].appendChild(modify[j])
		}
		location1 = location1+10;
		location2 = location2+10;
	}
	page++;
	document.getElementById('page').innerHTML = page+" ";
	document.getElementById('table1').appendChild(table);
}

//上一页
function lookLast(){
	if(location2 == 0)
		return false;
	clear()
	for (var i = 0,j = location2-10; i<10,j < location2; i++,j++)
	{
		tbody.rows[i+1].cells[0].innerHTML = ""
		tbody.rows[i+1].cells[0].appendChild(checkBox1[j])
		tbody.rows[i+1].cells[1].innerHTML = j+1	
		tbody.rows[i+1].cells[2].innerHTML = message[j].numberTxt
		tbody.rows[i+1].cells[3].innerHTML = message[j].nameTxt
		tbody.rows[i+1].cells[4].innerHTML = message[j].academyTxt
		tbody.rows[i+1].cells[5].innerHTML = message[j].majorTxt
		tbody.rows[i+1].cells[6].innerHTML = message[j].gradeTxt
		tbody.rows[i+1].cells[7].innerHTML = message[j].classTxt
		tbody.rows[i+1].cells[8].innerHTML = message[j].ageTxt
		tbody.rows[i+1].cells[9].innerHTML = ""
		tbody.rows[i+1].cells[9].appendChild(look[j])
		tbody.rows[i+1].cells[9].appendChild(modify[j])
	}
	location1 = location2-1;
	location2 = location2-10;
	page--;
	document.getElementById('page').innerHTML = page+" ";
	document.getElementById('table1').appendChild(table);
}

//新增的窗口
function addStudent(){
	var div11 = document.createElement('div');
	div11.style.width = '1332px';
	div11.style.height = '720px';
	div11.style.background = 'rgba(236, 92, 19, 0.3)';
	div11.style.position = 'absolute';
	div11.style.top = 0;
	div11.style.left = 0;

	var div1 = document.createElement('div');
	div1.style.width = '570px';
	div1.style.height = '507px';
	div1.style.position = 'absolute';
	div1.style.left = '371px';
	div1.style.top = '106px';
	div1.style.border = 'black'
	div11.appendChild(div1);

	var div2 = document.createElement('div');
	div2.style.width = '570px';
	div2.style.height = '50px';
	div2.style.backgroundColor = 'black';
	div2.style.color = 'white';
	div2.style.fontSize = '20px';
	div2.style.fontWeight = 'bold';
	div2.style.position = 'relative';
	div1.appendChild(div2);

	var div3 = document.createElement('div')
	div3.style.width = '570px'
	div3.style.height = '372px'
	div3.style.backgroundColor = 'white'

	div1.appendChild(div3)

	var p1 = document.createElement('p');
	p1.style.paddingTop = '13px';
	p1.style.paddingLeft = '10px';
	p1.appendChild(document.createTextNode('新增学生信息'));
	div2.appendChild(p1);
	//新增时表格信息
	var table1 = document.createElement('table');
	table1.style.position = 'relative'
	table1.style.margin = '0 auto'
	var tbody1 = document.createElement('tbody')
	table1.appendChild(tbody1)
	// 创建表格
	for(var i=0;i<7;i++)
	{
		tbody1.insertRow(i)
		tbody1.rows[i].style.height = '50px'
		tbody1.rows[i].insertCell(0)
		tbody1.rows[i].insertCell(1)
		tbody1.rows[i].cells[1].style.width = '20px'
		var input = document.createElement('input')
		input.setAttribute('id','input'+i)
		tbody1.rows[i].cells[1].appendChild(input)
	}
	tbody1.rows[0].cells[0].appendChild(document.createTextNode('学号：'))
	tbody1.rows[1].cells[0].appendChild(document.createTextNode('姓名：'))
	tbody1.rows[2].cells[0].appendChild(document.createTextNode('学院：'))
	tbody1.rows[3].cells[0].appendChild(document.createTextNode('专业：'))
	tbody1.rows[4].cells[0].appendChild(document.createTextNode('年级：'))
	tbody1.rows[5].cells[0].appendChild(document.createTextNode('班级：'))
	tbody1.rows[6].cells[0].appendChild(document.createTextNode('年龄：'))
	div3.appendChild(table1)

	var div4 = document.createElement('div')
	div4.style.width = '570px'
	div4.style.height ='3px'
	div4.style.backgroundColor = 'grey'
	div1.appendChild(div4)

	var div5 = document.createElement('div')
	div5.style.width = '570px'
	div5.style.height ='70px'
	div5.style.backgroundColor = 'white'
	div1.appendChild(div5)
	//
	var cancel = document.createElement('button')
	cancel.appendChild(document.createTextNode('取消'))
	cancel.style.background = 'white';
    cancel.style.width = '105px';
    cancel.style.height = '40px';
    cancel.style.fontSize = '16px';
    cancel.style.color = 'black';
    cancel.style.border = '1px solid black' ;
    cancel.style.float = 'right';

	var button = document.createElement('button')
	button.appendChild(document.createTextNode('提交'))
	button.style.background = '#5CB85C';
    button.style.width = '105px';
    button.style.height = '40px';
    button.style.fontSize = '16px';
    button.style.color = 'black';
    button.style.border = 0;
    button.style.padding = 0;
    button.style.marginRight = '10px';
    button.style.float = 'right';
    div5.appendChild(cancel)
    div5.appendChild(button)

	document.body.appendChild(div11)

	button.onclick = function submit(){
		var number = document.getElementById('input0').value;
		var name = document.getElementById('input1').value;
		var academy = document.getElementById('input2').value;
		var major = document.getElementById('input3').value;
		var grade = document.getElementById('input4').value;
		var classTxt1 = document.getElementById('input5').value;
		var age = document.getElementById('input6').value;
		
		if (number == '') {
			document.getElementById('input0').style.border = '1px solid red'
			var para1 = document.createElement('p')
			var a1 = document.createTextNode('学号不能为空！')
			para1.style.color = 'red'
			para1.style.fontSize = '10px'
			
			para1.appendChild(a1)
			tbody1.rows[0].cells[1].appendChild(para1)
			return false;
		} 
		else if (isNaN(number)) {
			document.getElementById('input0').style.border = '1px solid red'
			var para2 = document.createElement('p')
			var a2 = document.createTextNode("学号请输入数字")
			para2.style.color = 'red'
			para2.style.fontSize = '10px'
			para2.appendChild(a2)
			tbody1.rows[0].cells[1].appendChild(para2)
			return false;
		}

		if (name == '') {
			document.getElementById('input1').style.border = '1px solid red'
			var para3 = document.createElement('p')
			var a3 = document.createTextNode('姓名不能为空！')
			para3.style.color = 'red'
			para3.style.fontSize = '10px'
			para3.appendChild(a3)
			tbody1.rows[1].cells[1].appendChild(para3)
			return false;
		}

		if (academy == '') {
			document.getElementById('input2').style.border = '1px solid red'
			var para4 = document.createElement('p')
			var a4 = document.createTextNode('学院不能为空！')
			para4.style.color = 'red'
			para4.style.fontSize = '10px'
			para4.appendChild(a4)
			tbody1.rows[2].cells[1].appendChild(para4)
			return false;
		}

		if (major == '') {
			document.getElementById('input3').style.border = '1px solid red'
			var para5 = document.createElement('p')
			var a5 = document.createTextNode('专业不能为空！')
			para5.style.color = 'red'
			para5.style.fontSize = '10px'
			para5.appendChild(a5)
			tbody1.rows[3].cells[1].appendChild(para5)
			return false;
		}

		if (grade == '') {
			document.getElementById('input4').style.border = '1px solid red'
			var para6 = document.createElement('p')
			var a6 = document.createTextNode('姓名不能为空！')
			para6.style.color = 'red'
			para6.style.fontSize = '10px'
			para6.appendChild(a6)
			tbody1.rows[4].cells[1].appendChild(para6)
			alert('年级不能为空！');
			return false;
		} 
		else if (isNaN(grade)) {
			document.getElementById('input4').style.border = '1px solid red'
			var para7 = document.createElement('p')
			var a7 = document.createTextNode("年级请输入数字")
			para7.style.color = 'red'
			para7.style.fontSize = '10px'
			para7.appendChild(a3)
			tbody1.rows[4].cells[1].appendChild(para7)
			return false;
		}

		if (classTxt1 == '') {
			document.getElementById('input5').style.border = '1px solid red'
			var para8 = document.createElement('p')
			var a8 = document.createTextNode('班级不能为空！')
			para8.style.color = 'red'
			para8.style.fontSize = '10px'
			para8.appendChild(a8)
			tbody1.rows[5].cells[1].appendChild(para8)
			return false;
		} 
		else if (isNaN(classTxt1)) {
			document.getElementById('input5').style.border = '1px solid red'
			var para9 = document.createElement('p')
			var a9 = document.createTextNode("班级请输入数字")
			para9.style.color = 'red'
			para9.style.fontSize = '10px'
			para9.appendChild(a9)
			tbody1.rows[5].cells[1].appendChild(para9)
			return false;
		}

		if (age == '') {
			document.getElementById('input06').style.border = '1px solid red'
			var para10 = document.createElement('p')
			var a10 = document.createTextNode('年龄不能为空！')
			para10.style.color = 'red'
			para10.style.fontSize = '10px'
			para10.appendChild(a10)
			tbody1.rows[6].cells[1].appendChild(para10)
			return false;
		}
		else if (isNaN(age)) {
			document.getElementById('input6').style.border = '1px solid red'
			var para11 = document.createElement('p')
			var a11 = document.createTextNode("年龄请输入数字")
			para11.style.color = 'red'
			para11.style.fontSize = '10px'
			para11.appendChild(a11)
			tbody1.rows[6].cells[1].appendChild(para11)
			return false;
		}
		checkBox1.unshift(document.createElement('input'))
		look.unshift(document.createElement('input'))
		modify.unshift(document.createElement('input'))
		var json = {"numberTxt":number,
				"nameTxt":name,
				"academyTxt":academy,
				"majorTxt":major,
				"gradeTxt":grade,
				"classTxt":classTxt1,
				"ageTxt":age};
		message.unshift(json);
		demo1();
		sum++;
		changeCheckBox()
		changeLook()
		changeModify()
		changeLocation()
		document.getElementById('sum').innerHTML = sum;
		document.body.removeChild(div11);
		firstPage();
    }
	cancel.onclick = function cancel(){
		document.body.removeChild(div11);
	}
}

checkBox.onclick = function(){
	if(checkBox.checked)
	{
		for(var i = location2;i <= location1; i++)
		{
			document.getElementById('checkBox'+i).checked = true;
		}
	}
	else
	{
		for(var i = location2;i <= location1; i++)
		{
			document.getElementById('checkBox'+i).checked = false;
		}
	}
}
//删除
function delete1(){
	if(checkBox.checked)
	{
		message.splice(location2,location1-location2+1);
		demo1();
		checkBox1.splice(location2,location1-location2+1);
		look.splice(location2,location1-location2+1)
		modify.splice(location2,location1-location2+1)
		sum -= location1 - location2 + 1;
		pages = Math.ceil(sum/10);
		changeCheckBox()
		changeLook()
		changeModify()
		changeLocation()
		document.getElementById('allPage').innerHTML = pages;
		document.getElementById('sum').innerHTML = sum ;
		demo1();
		firstPage();
		checkBox.checked = false;
		return ;
	}
	else
	{
		for(var i=location1; i >= 0; i--)
		{
			if(document.getElementById('checkBox'+i).checked)
			{
				message.splice((page-1)*10+i,1);
				demo1();
				firstPage();
				sum--;
				changeCheckBox()
				changeLook()
				changeModify()
				pages = Math.ceil(sum/10);//向上取整
				document.getElementById('allPage').innerHTML = pages;
				document.getElementById('sum').innerHTML = sum ;
				document.getElementById('checkBox'+i).checked = false;
			}
		}	
	}
}
//查看信息
function lookThrough(bto){
	var div11 = document.createElement('div');
	div11.style.width = '1332px';
	div11.style.height = '720px';
	div11.style.background = 'rgba(236, 92, 19, 0.3)';
	div11.style.position = 'absolute';
	div11.style.top = 0;
	div11.style.left = 0;

	var div1 = document.createElement('div');
	div1.style.width = '570px';
	div1.style.height = '507px';
	div1.style.position = 'absolute';
	div1.style.left = '371px';
	div1.style.top = '106px';
	div1.style.border = 'black'
	div11.appendChild(div1);

	var div2 = document.createElement('div');
	div2.style.width = '570px';
	div2.style.height = '50px';
	div2.style.backgroundColor = 'black';
	div2.style.color = 'white';
	div2.style.fontSize = '20px';
	div2.style.fontWeight = 'bold';
	div2.style.position = 'relative';
	div1.appendChild(div2);

	var div3 = document.createElement('div')
	div3.style.width = '570px'
	div3.style.height = '372px'
	div3.style.backgroundColor = 'white'

	div1.appendChild(div3)

	var p1 = document.createElement('p');
	p1.style.paddingTop = '13px';
	p1.style.paddingLeft = '10px';
	p1.appendChild(document.createTextNode('查看学生信息'));
	div2.appendChild(p1);
	//查看时表格信息
	var table1 = document.createElement('table');
	table1.style.position = 'relative'
	table1.style.margin = '0 auto'
	var tbody1 = document.createElement('tbody')
	table1.appendChild(tbody1)

	var temp = bto.parentNode.parentNode
	// 创建表格
	for(var j=0;j<7;j++)
	{
		tbody1.insertRow(j)
		tbody1.rows[j].style.height = '50px'
		tbody1.rows[j].insertCell(0)
		tbody1.rows[j].insertCell(1)
		var input = document.createElement('input')
		input.value = temp.cells[j+2].innerHTML
		input.disabled = 'disabled'//文本框不可编辑
		tbody1.rows[j].cells[1].appendChild(input)
	}
	tbody1.rows[0].cells[0].appendChild(document.createTextNode('学号：'))
	tbody1.rows[1].cells[0].appendChild(document.createTextNode('姓名：'))
	tbody1.rows[2].cells[0].appendChild(document.createTextNode('学院：'))
	tbody1.rows[3].cells[0].appendChild(document.createTextNode('专业：'))
	tbody1.rows[4].cells[0].appendChild(document.createTextNode('年级：'))
	tbody1.rows[5].cells[0].appendChild(document.createTextNode('班级：'))
	tbody1.rows[6].cells[0].appendChild(document.createTextNode('年龄：'))
	div3.appendChild(table1)

	var div4 = document.createElement('div')
	div4.style.width = '570px'
	div4.style.height ='3px'
	div4.style.backgroundColor = 'grey'
	div1.appendChild(div4)

	var div5 = document.createElement('div')
	div5.style.width = '570px'
	div5.style.height ='70px'
	div5.style.backgroundColor = 'white'
	div1.appendChild(div5)

	var cancel = document.createElement('button')
	cancel.appendChild(document.createTextNode('取消'))
	cancel.style.background = 'white';
    cancel.style.width = '105px';
    cancel.style.height = '40px';
    cancel.style.fontSize = '16px';
    cancel.style.color = 'black';
    cancel.style.border = '1px solid black'
    cancel.style.float = 'right';
	div5.appendChild(cancel)
	
	document.body.appendChild(div11)
	
	cancel.onclick = function cancel(){
		document.body.removeChild(div11);
	}
}
//修改
function modification(bto){
	var div111 = document.createElement('div');
	div111.style.width = '1332px';
	div111.style.height = '720px';
	div111.style.background = 'rgba(236, 92, 19, 0.3)';
	div111.style.position = 'absolute';
	div111.style.top = 0;
	div111.style.left = 0;

	var div1 = document.createElement('div');
	div1.style.width = '570px';
	div1.style.height = '507px';
	div1.style.position = 'absolute';
	div1.style.left = '371px';
	div1.style.top = '106px';
	div1.style.border = 'black'
	div111.appendChild(div1);

	var div2 = document.createElement('div');
	div2.style.width = '570px';
	div2.style.height = '50px';
	div2.style.backgroundColor = 'black';
	div2.style.color = 'white';
	div2.style.fontSize = '20px';
	div2.style.fontWeight = 'bold';
	div2.style.position = 'relative';
	div1.appendChild(div2);

	var div3 = document.createElement('div')
	div3.style.width = '570px'
	div3.style.height = '372px'
	div3.style.backgroundColor = 'white'

	div1.appendChild(div3)

	var p1 = document.createElement('p');
	p1.style.paddingTop = '13px';
	p1.style.paddingLeft = '10px';
	p1.appendChild(document.createTextNode('修改学生信息'));
	div2.appendChild(p1);
	//修改时表格信息
	var table1 = document.createElement('table');
	table1.style.position = 'relative'
	table1.style.margin = '0 auto'
	var tbody1 = document.createElement('tbody')
	table1.appendChild(tbody1)

	var temp = bto.parentNode.parentNode
	// 创建表格
	for(var j=0;j<7;j++)
	{
		tbody1.insertRow(j)
		tbody1.rows[j].style.height = '50px'
		tbody1.rows[j].insertCell(0)
		tbody1.rows[j].insertCell(1)
		var input1 = document.createElement('input')
		input1.value = temp.cells[j+2].innerHTML
		input1.setAttribute('id','input1'+j)
		tbody1.rows[j].cells[1].appendChild(input1)
	}
	tbody1.rows[0].cells[0].appendChild(document.createTextNode('学号：'))
	tbody1.rows[1].cells[0].appendChild(document.createTextNode('姓名：'))
	tbody1.rows[2].cells[0].appendChild(document.createTextNode('学院：'))
	tbody1.rows[3].cells[0].appendChild(document.createTextNode('专业：'))
	tbody1.rows[4].cells[0].appendChild(document.createTextNode('年级：'))
	tbody1.rows[5].cells[0].appendChild(document.createTextNode('班级：'))
	tbody1.rows[6].cells[0].appendChild(document.createTextNode('年龄：'))
	div3.appendChild(table1)

	var div4 = document.createElement('div')
	div4.style.width = '570px'
	div4.style.height ='3px'
	div4.style.backgroundColor = 'grey'
	div1.appendChild(div4)

	var div5 = document.createElement('div')
	div5.style.width = '570px'
	div5.style.height ='70px'
	div5.style.backgroundColor = 'white'
	div1.appendChild(div5)

	var cancel = document.createElement('button')
	cancel.appendChild(document.createTextNode('取消'))
	cancel.style.background = 'white';
    cancel.style.width = '105px';
    cancel.style.height = '40px';
    cancel.style.fontSize = '16px';
    cancel.style.color = 'black';
    cancel.style.border = '1px solid black'
    cancel.style.float = 'right';
	div5.appendChild(cancel)

	var save = document.createElement('button')
	save.appendChild(document.createTextNode('保存'))
	save.style.background = '#5CB85C';
    save.style.width = '105px';
    save.style.height = '40px';
    save.style.fontSize = '16px';
    save.style.color = 'black';
    save.style.border = 0;
    save.style.marginRight = '10px';
    save.style.float = 'right';
    div5.appendChild(save)

	document.body.appendChild(div111)
	
	save.onclick = function submit(){
		var number = document.getElementById('input10').value;
		var name = document.getElementById('input11').value;
		var academy = document.getElementById('input12').value;
		var major = document.getElementById('input13').value;
		var grade = document.getElementById('input14').value;
		var classTxt1 = document.getElementById('input15').value;
		var age = document.getElementById('input16').value;
		var num = bto.parentNode.parentNode.cells[1].innerHTML-1
		message[num].numberTxt = number
		message[num].nameTxt = name
		message[num].academyTxt = academy
		message[num].majorTxt = major
		message[num].gradeTxt = grade
		message[num].classTxt = classTxt1
		message[num].ageTxt = age
		temp.cells[2].innerHTML = number
		temp.cells[3].innerHTML = name
		temp.cells[4].innerHTML = academy
		temp.cells[5].innerHTML = major
		temp.cells[6].innerHTML = grade
		temp.cells[7].innerHTML = classTxt1
		temp.cells[8].innerHTML = age
		document.body.removeChild(div111);
		demo1();
	}
	cancel.onclick = function cancel(){
		document.body.removeChild(div111);
	}
}
