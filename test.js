function addTable(){
	
	var infor = new Array();
	for (var i = 0;i < 30; i++) {
		infor[i] = {};
	}
	infor[0].order = 1
	infor[0].id = '11503080101'
	infor[0].name = '齐桓公'
	infor[0].college = '计算机科学与工程'
	infor[0].major = '软件工程'
	infor[0].grade = '2015'
	infor[0].class = '2'
	infor[0].age = '21'
	infor[0].do = '查看 修改'
	var table = document.createElement('table')
	table.border = 0
	table.width = '100%'

	var tbody = document.createElement('tbody')
	table.appendChild(tbody)

	// 创建第一行
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

	// 创建第二行
	tbody.insertRow(1)
	tbody.rows[1].style.height = '50px'
	tbody.rows[1].insertCell(0)
	tbody.rows[1].cells[0].appendChild(checkBox)
	tbody.rows[1].insertCell(1)
	tbody.rows[1].cells[1].appendChild(infor[0].order)
	tbody.rows[1].insertCell(2)
	tbody.rows[1].cells[2].appendChild(infor[0].id)
	tbody.rows[1].insertCell(3)
	tbody.rows[1].cells[3].appendChild(infor[0].name)
	tbody.rows[1].insertCell(4)
	tbody.rows[1].cells[4].appendChild(infor[0].college)
	tbody.rows[1].insertCell(5)
	tbody.rows[1].cells[5].appendChild(infor[0].major)
	tbody.rows[1].insertCell(6)
	tbody.rows[1].cells[6].appendChild(infor[0].grade)
	tbody.rows[1].insertCell(7)
	tbody.rows[1].cells[7].appendChild(infor[0].class)
	tbody.rows[1].insertCell(8)
	tbody.rows[1].cells[8].appendChild(infor[0].age)
	tbody.rows[1].insertCell(9)
	tbody.rows[1].cells[9].appendChild(infor[0].do)

	document.body.appendChild(table)
}
addTable()