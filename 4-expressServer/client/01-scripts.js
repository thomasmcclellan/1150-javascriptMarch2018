const url = 'http://localhost:3000/test'

function fetchHelloDataFromAPI() {
  fetch(`${ url }/helloclient`, {
    method: 'GET',
    headers: new Headers ({
      'Content-Type': 'application/json'
    })
  })
    .then(
      function(response) {
        console.log('Fetch response:', response)
        return response.text();
      }
    )
    .then(
      function(text) {
        console.log(text);
      }
    )
}

function postToOne() {
  fetch(`${ url }/one`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(
      function(response) {
        return response.text()
      }
    )
    .catch(
      function(error) {
        console.error('Error:', error);
      }
    )
    .then(
      function(response) {
        console.log('Success:', response);
      }
    )
}

function postToOneArrow() {
  fetch(`${ url }/one`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(res => res.text())
    .catch(error => console.error('Error(arrow):', error))
    .then(response => console.log('Success(arrow):', response));
}

function postData() {
  let content = { testdata: { item: 'This was saved!' }};

  let testDataAfterFetch = document.getElementById('test-data');
  let createdAtAfterFetch = document.getElementById('created-at');

  fetch(`${ url }/seven`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
  })
    .then(response => response.json())
    .then(
      function(text) {
        console.log(text);
        testDataAfterFetch.innerHTML = text.testdata.testdata;
        createdAtAfterFetch.innerHTML = text.testdata.createdAt;
      }
    );
}

function fetchFromOneDisplayData() {
  let dataView = document.getElementById('display-one');

  fetch(`${ url }/one`, {
    method: 'GET',
    headers: new Headers({
      'Content-Tpye': 'application/json'
    })
  })
    .then(
      function(response) {
        return response.json()
      }
    )
    .catch(
      function(error) {
        console.log('Error:', error)
      }
    )
}