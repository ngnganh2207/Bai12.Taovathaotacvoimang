let x=0;
let arr= Array();
function add_element_to_array(){
    arr[x]=document.getElementById('textValue').value;
    alert("Element: "+arr[x]+" added at index "+x);
    x++;
    document.getElementById("textValue").value="";
}
function display_array(){
    let e="<hr/>";
    for(let i=0;i<arr.length;i++){
        e+="Element "+i+"="+arr[i]+"<br/>";
    }
    document.getElementById("result").innerHTML=e;
}