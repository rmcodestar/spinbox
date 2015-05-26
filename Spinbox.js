var Spinbox = function(elSpinboxContainer){
	
	var nNumber=200;
	var MIN_NUMBER=100;
	var MAX_NUMBER=300;
	var oTimer;
	
	/* SpinBox Element 생성 (Elmenet prifix : el)*/	
	var elSpinboxContainer= document.getElementById(elSpinboxContainer);
	var elInputText;
	var elBtnIncrease;
	var elBtnDecrease;

	this.init= function(){
		
		//SpinBox Element
		initElements();		
		
		//SpinBox Element에 이벤트 리스너 연결(하단에 배치하기)
		elBtnIncrease.addEventListener("mousedown", onClickUp, false);
		elBtnIncrease.addEventListener("mouseup", function(){clearInterval (oTimer);}, false);

		elBtnDecrease.addEventListener("mousedown", onClickDown, false);
		elBtnDecrease.addEventListener("mouseup", function(){clearInterval (oTimer);}, false);

		elInputText.addEventListener("blur", onParseInput, false);		
	};
	
	var initElements = function(){
		/*SpinBox Element 생성*/
		elSpinboxContainer.setAttribute("class", "elSpinboxContainer");

		elInputText=document.createElement("input");
		elInputText.setAttribute("class", "spinbox_elInputText");
		elInputText.setAttribute("type", "text");
		elInputText.setAttribute("style", "text-align:center");
		elInputText.setAttribute("value", nNumber);
		elSpinboxContainer.appendChild(elInputText);
			
		elBtnIncrease=document.createElement("input");
		elBtnIncrease.setAttribute("class", "spinbox_elBtnIncrease");
		elBtnIncrease.setAttribute("type", "button");
		elBtnIncrease.setAttribute("value", "▲");
		elSpinboxContainer.appendChild(elBtnIncrease);
					
		elBtnDecrease=document.createElement("input");
		elBtnDecrease.setAttribute("class", "spinbox_elBtnDecrease");
		elBtnDecrease.setAttribute("type", "button");
		elBtnDecrease.setAttribute("value", "▼");
		elSpinboxContainer.appendChild(elBtnDecrease);
	};
	
	var setNumber = function(nInput){
		
		nNumber = nInput;
		elInputText.value=nNumber;
		
	};
	
	var checkNumber = function(nInput){
		var nNumber;
		if(typeof(nInput)=='string'){
			nNumber=parseInt(nInput);
		}else{
			nNumber=nInput;
		}
		
		if(nNumber > MAX_NUMBER){
			nNumber=MAX_NUMBER;
		}else if(nNumber < MIN_NUMBER){
			nNumber=MIN_NUMBER;
		}
		return nNumber;
	};
	
	var increaseNumber=function(){
		nNumber+=1;
	};
	
	var decreaseNumber=function(){
		nNumber-=1;
	};

	var handleIncreasingNumber = function(){
		increaseNumber();
		setNumber(checkNumber(nNumber));
		console.log('[increaseNumber] : '+nNumber);		
	};

	var handleDecreasingNumber = function(){
		decreaseNumber();
		setNumber(checkNumber(nNumber));
		console.log('[decreaseNumber] : '+nNumber);		
	};
	
	var onClickUp = function (){
		handleIncreasingNumber();
		oTimer = setInterval( handleIncreasingNumber , 500);
		clearInterval (oTimer);
		oTimer = setInterval( handleIncreasingNumber , 100);

	};
	
	var onClickDown = function (){
		handleDecreasingNumber();
		oTimer = setInterval( handleDecreasingNumber , 500);
		clearInterval (oTimer);
		oTimer = setInterval( handleDecreasingNumber , 100);

	};
	
	var onParseInput = function(){
		var sString = elInputText.value;
		var sInput = sString.replace(/[^0-9]/g,"");
		var nInput;
		
		if(sInput==''){
			sInput=200;
		}
		
		if(typeof(sInput)=='string'){
			nInput=parseInt(sInput);
		}else{
			nInput=sInput;
		}				
		setNumber(checkNumber(nInput));
		console.log('[onParseInput] before: '+sString);		
		console.log('[onParseInput] after: '+nNumber);
	};
	
}



