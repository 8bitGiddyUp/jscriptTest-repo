// https://stackoverflow.com/questions/23331546/how-to-use-javascript-to-read-local-text-file-and-read-line-by-line
// https://stackoverflow.com/questions/14795357/javascript-in-html-write-to-file

let input = document.getElementById("myFile");
let output = document.getElementById("output");


input.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    let myFile = this.files[0];
    let reader = new FileReader();
    
    reader.addEventListener('load', function (e) {
      output.textContent = e.target.result;
    });
    
    reader.readAsBinaryString(myFile);
  }   
});