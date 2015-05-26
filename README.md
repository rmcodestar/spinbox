# Spinbox
spinbox component using javascript

# Image 
![Image](https://github.com/rmcodestar/spinbox/blob/master/img.png)

# How to use spinbox
```
<head>
<script src="Spinbox.js"></script>
</head>
<body>
<!--Spinbox를 붙일 div를 선언-->
<div id="spinboxContainer">
	<!-- 이후 내부적으로 이런 element가 생성됨
	<input class="spinbox_elInputText" type="text"/>
	<input class="spinbox_elBtnIncrease" type="button" value="▲">
	<input class="spinbox_elBtnDecrease" type="button" value="▼">
	-->
</div>
<script>
	// Spinbox를 붙일 div id를 파라미터로 넘겨서 SpinBox 인스턴스 생성
	var oSpinbox = new Spinbox("spinboxContainer");
	oSpinbox.init();
</script>
</body>
```
