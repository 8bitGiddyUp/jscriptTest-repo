
var ie_writeFile = function (fname, data) {
  var fso, fileHandle;
  fso = new ActiveXObject("Scripting.FileSystemObject");
  fileHandle = fso.CreateTextFile(fname, true);
  fileHandle.write(data);
  fileHandle.close();
};

var ie_readFile = function (fname) {
  try {
    fso = new ActiveXObject("Scripting.FileSystemObject");
    var fso, filehandle, contents;
    filehandle = fso.OpenTextFile(fname, 1);
    contents = filehandle.ReadAll();
    filehandle.Close();
    return contents;
  } catch (err) {
    return null;
  }
};



function Write(input1, input2)
{
  var s = input1 + "," + input2;
  ie_writeFile("test.txt", s);
}

function validateForm() {
  var x1=document.userform.pwd.value;
  var x2=document.userform.re_pwd.value;
  if (x2 == x1){
      Write(document.userform.user.value, document.userform.pwd.value);
  }
  else{alert("Passwords are not the same, Re-enter password");}
}