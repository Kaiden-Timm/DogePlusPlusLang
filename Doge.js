class Doge {
  bark(text){
    log(text)
  }
  sniff(string){
    return prompt(string)
  }
  /*sniffButt(library,file){
    import library from file"
  }*/
  digHole(varName,data){
	  window[varName] = data;
  }
  buryBone(variable,newData){
    if(window[variable] == null || window[variable] == undefined){
      doge.howl("!var", variable)
    }else{
      window[variable] = newData;
    }
  }
  eat(variable){
    window[variable] = null;
  }
  poop(varName, items){
    window[varName] = [];
      for(var i = 1;i<arguments.length;i++){
      window[varName].push(arguments[i])
    }
    
  }
  poopAgain(varName, items){
    if(window[varName] == null || window[varName] == undefined){
      doge.howl("!list", varName)
    } else{
        for(var i = 1;i<arguments.length;i++){
          window[varName].push(arguments[i])
        }
    }
  }
  eatPoop(list, index){
  if(window[list] == null || window[list] == undefined){
    doge.howl("!list", list)
  } else{
    window[list].splice(index, 1)
  }
  }
  countPoops(list){
    if(window[list] == null || window[list] == undefined){
      doge.howl("!list", list)
    } else{
      return window[list].length
    }
  }
  think(equation){
    return eval(equation)
  }
  buttScootch(maxRange,minRange, list = 0){
    if(list != 0){
      return list[Math.floor(Math.random() * list.length)]
    } else {
      return Math.floor(Math.random() * ((maxRange) - (minRange - 1)) + minRange);
    }
  }
  internalClock(){
    var ob = new Date();
		var hours = ob.getHours()
		var mins = ob.getMinutes()
		var secs = ob.getSeconds()
		var mil = ob.getMilliseconds()
		return hours+":"+mins+":"+secs+":"+mil
  }
  command(name,numPerams,perams,actions){
    var list = [];
    var listArgs = [];
    for(var i = 2 + numPerams; i<arguments.length;i++){
      list.push(arguments[i])
    }
    for(var i = 2;i<numPerams + 2;i++){
          window[arguments[i]] = 0;
          listArgs.push(arguments[i])
        }
      window[name] = [list,function (peramaters){
        for(var i = 0;i<arguments[0].length;i++){
          window[listArgs[i]] = arguments[0][i]
        }
        for(var i = 0;i<window[name].length;i++){
            eval(window[name][0][i]);
        }
    }]
    //Object.defineProperty(qw.constructor, 'name', { value: name })
  }
  do(functionName, perameters){
    var list = []
      for(var i = 1;i<arguments.length;i++){
        list.push(arguments[i]);
      }

      window[functionName][1](list)
  }
  saveForLater(input){

  }
  chaseTail(condition, actions){
    while(eval(condition)){
      for(var i = 1;i<arguments.length;i++){
        eval(arguments[i])
      }
    }
  }
  fetch(varName, value, equation, varAdd, addBy, actions){
    if(varAdd){
    for(window[varName] = value;eval(equation);window[varName] += addBy){
      for(var uiuyuuer = 5;uiuyuuer<arguments.length;uiuyuuer++){
        eval(arguments[uiuyuuer])
      }
    }
    }else{
      for(window[varName] = value;eval(equation);){
        for(var uiuyuuer = 5;uiuyuuer<arguments.length;uiuyuuer++){
          eval(arguments[uiuyuuer])
        }
      }
    }
    }
  //specify in the documentation that you seperate the different codes with " "
  choose(ifCond,ifCode,numElif,elifCond,elifCode,isElse,elseCode){
    var x = 0
    var foo = 0;
    var fooer = 0;
    var cameFalse = true;
    while(true){
      ++foo;
      if(typeof arguments[foo] == "boolean" || typeof arguments[foo] == "undefined"){
        break;
      }
    }
    while(true){
      ++x;
      if(typeof arguments[x] == "number" || arguments[x] == undefined){
        break;
      }
    }
    var elifConds = []
    for(var i = 0;i<arguments[x];i++){
      elifConds.push(arguments[x + i + 1])
    }
    var elifCodes = []
    var isNext = true
    var index = 0;
    var codes = x + arguments[x] + 1
    for(var i = 0;i<arguments.length;i++){
      if(typeof arguments[codes + i] == "boolean" || typeof arguments[codes + i] == "undefined"){
        break;
      } else{
        if(arguments[codes + i] == " " || arguments[codes + i] == ""){
          isNext = true;
          index += 1;
        }else if(isNext){
          elifCodes.push([arguments[codes + i]])
          isNext = false
        } else{
          elifCodes[index].push(arguments[codes + i])
        }
      }
    }
    if(eval(ifCond)){
      var stopped = false;
      var i = 0;
      while(!stopped){
        if(typeof arguments[i + 1] != "number" && typeof arguments[i + 1] != "undefined"){
          eval(arguments[i + 1]);
        } else{
          stopped = true;
        }
        i++;
      }
      cameFalse = false;
      } else if(arguments[x] > 0){
        var args = arguments[x];
        for(var i = 0;i<elifConds.length;i++){
          if(eval(elifConds[i])){
            for(var y = 0;y<elifCodes[i].length;y++){
              eval(elifCodes[i][y])
            }
            return;
            cameFalse = false;
          }
        }
    } 
    
    if(cameFalse && arguments[foo]){
      var i = foo;
      while(arguments[i] != undefined){
        ++i;
        if(typeof arguments[i] != undefined){
          eval(arguments[i]);
        } else{
          break;
        }
      }
    }
}
  howl(errorType, attemptedVal){
    if(errorType == "!var"){
      log("Error: Bone not foud in hole " + attemptedVal)
    }else if(errorType == "!list"){
		log("Error: Poop, "+attemptedVal+" not found")
	} else if(errorType == "math"){
      log("Error: Doge cannot comprehend " + attemptedVal)
  } else if(errorType == "!func"){
    log("Error: Doge does not know how to " + attemptedVal)
  }
  }
}
doge = new Doge

//START EDITOR
function log(printStatement){
   var editAreaText = document.getElementById("runArea").value += printStatement + "\n";
}
function runFunc(){
  var runArea = document.getElementById("runArea").value = "";
  var editText = document.getElementById("editArea").value;
  editText = editText.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
  editText = makeList(editText); 
  console.log(editText)
  for(var i = 0;i<editText.length;i++){
    eval(editText[i])
  }
}
function makeList(string){
  var newList = [string];
  for (var i = 0; i < string.length; i++) {
    if(string[i] == "\n"){
      newList = string.split(/(\r\n|\n|\r)/gm, i)
      newList.splice(newList.indexOf("\n"),1)
    }
  }
  return newList;
}
function downloadFunc(){
  var fileName = prompt("What do you want the name of your file to be?")
  download(fileName + ".txt",document.getElementById("editArea").value);
}
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
const fileSelector = document.getElementById("fileSelect");
const upload = document.getElementById("uploadBtn");

upload.addEventListener("click", function() {
  var files = document.getElementById("fileSelect").files
  fileSelector.click();
});

var input = document.getElementById('fileSelect');
var textarea = document.getElementById('editArea');
input.addEventListener('change', () => {
    var files = input.files;
    if(files.length == 0){
       return;
    }
    const file = files[0];
    var reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
    
});
function onKeyDown(){
  var key = window.event.keyCode;
  var text = document.getElementById("editArea");
}
//doge.digHole("n1",4)
//doge.digHole("n2",3)
//doge.choose("1 == 1","doge.bark(doge.think('n1 + n2'))")
//doge.choose('1==1', "doge.bark(doge.think('1+1'))")
//doge.digHole("name", doge.sniff("What is your name?"))
//doge.bark("Hello " + doge.findBone("name") + " its nice to meet you!")
//doge.fetch("i",0,"i<8",true,1,"doge.bark(i)")
//doge.digHole("yes", 0)
//doge.chaseTail("yes<4","doge.bark(yes)","yes++;");
//doge.bark("Hello World")
//doge.digHole("none", 90)
//doge.bark(doge.findBone("none"))
//doge.buryBone("none", 99)
////doge.bark(doge.findBone("non"))
//at end of function set placeholder vars to null
//doge.command("test",3,"number1","number2","number3","doge.bark(number1 * number2 * number3)")
//doge.do("test",6,12,123)
//doge.do("test", 5,6,7)
//doge.command("add",2,"num1","num2","doge.bark(num1 + num2)")
//doge.do("add",4,5)
//doge.bark(doge.internalClock())
//doge.bark(doge.buttScootch(0,0,[12,34,57,323]))
//doge.bark(doge.think("1+45"))
//doge.bark("Hello Doge!") 
//doge.digHole("Butt", 5) 
//doge.bark(doge.findBone("Butt"))
//doge.buryBone("Butt", 4) Y
//doge.bark(doge.findBone("Butt"))
//doge.poop("list", 1,2,3,4,5,6,7)
//doge.eatPoop("list", 2)
//doge.bark(doge.countPoops("list"))
//doge.digHole("butt", 5)
////doge.eat("butt")
//doge.findBone("butt")
//doge.bark(doge.findBone("list"))
//doge.eatPoop("list", 2)
//doge.poopAgain("list", 8,9,10)
//doge.bark(doge.findBone("list"))
//return something
//doge.sniff("Input a number")
//https://levelup.gitconnected.com/how-to-write-function-with-n-number-of-parameters-in-javascript-a916de1be7a2
/*Doge script
Doge.bark = output Y
Doge.howl = error(ex.hole does not exist on line x) Y
Doge.sniff = input Y
Doge.sniffButt = API/library CUT
Doge.digHole = var Y
Doge.buryBone = change var  Y
Doge.poop = make list Y
Doge.poopAgain = append Y
Doge.eat = del var Y
Doge.eatPoop = del inputted element from list Y
Doge.countPoops = length Y
Doge.pee = return CUT
Doge.command = function Y
Doge.reproduce = class  CUTHo
Doge.chaseTail = while loops Y
Doge.fetch = for loop Y
Doge.choose = if statement Y
Doge.choose = elif statement Y
Doge.choose = else Y
Doge.buttScootch = random Y
Doge.do(functionName) = call function Y
Doge.think = math Y
Doge.internalClock = military time Y
Doge.scratch = write to text files CUT
Doge.rip = open txt files CUT
Doge.buryBall = close text file CUT
Doge.buryForLater = comment Y*/
