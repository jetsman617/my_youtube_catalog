$(document).ready(function () {
  const table = document.querySelector('.sortable');
  const form = document.querySelector('form');

  // Construct an HTTP request
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);

  //xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
  //xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  // Callback function
  xhr.onload = function(){
    if (this.status === 200) {
      // The GET request was successful
      const obj=JSON.parse(this.responseText);

      var txt = "<tr><th>Name</th><th>Grade</th><th>Contributor</th><th>Video</th></tr>";

      for (x in obj){
        txt += "<tr>" + "<td>"+obj[x].Name+"</td>"
                      + "<td>"+obj[x].Grade+"</td>"
                      + "<td>"+obj[x].Contributor+"</td>"
                      + "<td><a href=\""+obj[x].Video+" target=\"_blank\" rel=\"noopener noreferrer\">"+obj[x].Video+"</a></td>" + "</tr>";
      }
      var tableObj = document.querySelector('#dataTable');
      tableObj.innerHTML = txt;
      sorttable.makeSortable(tableObj);
    }
  }
  xhr.send();
});
