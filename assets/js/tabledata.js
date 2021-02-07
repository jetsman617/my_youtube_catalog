$(document).ready(function () {
  const table = document.querySelector('.sortable');
  const form = document.querySelector('form');
  console.log("form.action: " + form.action);
  const tableResponse = document.querySelector('#js-table-response');

  // Construct an HTTP request
  console.log("JW test");
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  console.log("table.action: " + table.action);
  //xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
  //xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  // Callback function
  xhr.onload = response => {
    console.log("JW test 2");
    if (response.target.status === 200) {
      // The GET request was successful
      let data = JSON.parse(this.responseText).Table,
      		tbodyHtml = '';

      data.map(function(d) {
      	tbodyHtml =+ `
        	<tr>
          	<td>${d.Name}</td>
          	<td>${d.Grade}</td>
          	<td>${d.Contributor}</td>
            <td>${d.Video}</td>
          </tr>
        `;
      });

      document.querySelector('#dataTable tbody').innerHTML = tbodyHtml;
    } else {
      // The form submission failed
      formResponse.innerHTML = 'Oops! Something went wrong.';
      console.error(JSON.parse(response.target.response).message);
    }
  };
  xhr.send();
});
