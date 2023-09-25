var data;
var searchData;

$.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users', function (response) {
    data = response;
    showData();
})

function showData() {
    var tableDataBody = document.getElementById('table-data-body');
    tableDataBody.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
        tableDataBody.innerHTML += displayRow(data[i]);
    }
}

function displayRow(obj) {
    return `
    <tr class="table-data-row">
        <td class="secondary-text">${obj.id}</td>
        <td class="td-avtr"><img class="ProfilePic" src="${obj.profilePic}" alt="Profile Pic" /></td>
        <td class="secondary-text">${obj.fullName}</td>
        <td class="primary-text">${obj.dob}</td>
        <td class="secondary-text">${obj.gender}</td>
        <td class="secondary-text">${obj.currentCity}, ${obj.currentCountry}</td>
    </tr>
    `
}

function onSearch(event) {
    if (event.keyCode === 13) {
        const search = document.getElementById('search');
        if (search.value.length < 2) {
            alert('Please enter at least 2 characters');
        } else {
            $.get(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${search.value}`, function (response) {
                searchData = response;
                var tableDataBody = document.getElementById('table-data-body');
                tableDataBody.innerHTML = '';
                for (var i = 0; i < searchData.length; i++) {
                    tableDataBody.innerHTML += displayRow(searchData[i]);
                }
            });
        }
    }
}

$('#reset').click(function () {
    showData();
});