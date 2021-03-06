var librayPath = "example/";
var issue = [
	{
		"name":"：active伪类在ios设备失效",
		"getTime":"2015-12-24 10:21:25",
		"solveTime":"2015-12-24 13:51:51",
		"issueReason":"[1] By default, Safari Mobile does not use the :active state unless there is a touchstart event handler on the relevant element or on the <body>。<br/> 看来在iOS系统的移动设备中，需要在按钮元素或body/html上绑定一个touchstart事件才能激活:active状态。",
		"solveWay":"添加脚本“document.body.addEventListener('touchstart', function () { })”",
		"example":{
			"name":"active伪类在ios设备正常作用",
			"link":"active.html"
		},
		"recordTime":"2015-12-24 13:55:01"
	},
	{
		"name":"input 标签在IOS 圆角显示",
		"getTime":"2015-9-6 11:38:01",
		"solveTime":"2015-9-7 15:32:11",
		"issueReason":"浏览器的默认渲染行为不一致。",
		"solveWay":"-wekit-appearance:none;",
		"example":"null",
		"recordTime":"2016-1-6 11:40:22"
	},
	{
		"name":"单行省略号",
		"getTime":"2016-01-06 16:24:57",
		"solveTime":"2016-01-06 16:25:01",
		"issueReason":"需要只显示一行，多余的用省略号代替",
		"solveWay":"添加样式 text-overflow:ellipsis; white-space:nowrap; overflow:hidden; ",
		"example":"null",
		"recordTime":"2015-12-24 13:55:01"
	},
	{
		"name":"多行省略号",
		"type":"style",
		"getTime":"2016-01-06 16:24:57",
		"solveTime":"2016-01-06 16:25:01",
		"issueReason":"这个需求最变态，也最合理；需要显示指定行数，多余的用省略号代替",
		"solveWay":"添加样式 overflow:hidden;text-overflow:ellipsis;display: -webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;",
		"example":"null",
		"recordTime":"2015-12-24 13:55:01"
	},
	{
		"name":"动态生成元素无法正确绑定事件",
		"type":"js",
		"getTime":"2016-1-11 15:54:06",
		"solveTime":"2016-01-11 16:25:01",
		"issueReason":"通过js脚本动态添加的Dom",
		"solveWay":"delegate,on(live is removed),binding function on every Dom(like this function abc (this) {<br/> do something here;<br/> })",
		"example":"null",
		"recordTime":"2016-1-12 09:54:28"
	},
	{
		"name":"图片外层div高度与图片不一致",
		"type":"js",
		"getTime":"2016-1-21 11:35:51",
		"solveTime":"2016-1-21 12:35:55",
		"issueReason":"通过google了解到原因，img是一种类似text的元素，在结束的时候，会在末尾加上一个空白符，所以就会多出3px",
		"solveWay":"设置img display属性为block",
		"example":"null",
		"recordTime":"2016-1-21 12:36:03"
	}

];