var data;

$.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', function (response) {
    data = response;

    showData();

    document.getElementById('New').addEventListener('change', showData);
    document.getElementById('Packed').addEventListener('change', showData);
    document.getElementById('InTransit').addEventListener('change', showData);
    document.getElementById('Delivered').addEventListener('change', showData);
})

function showData() {
    var New = document.getElementById('New').checked;
    var Packed = document.getElementById('Packed').checked;
    var inTransit = document.getElementById('InTransit').checked;
    var Delivered = document.getElementById('Delivered').checked;

    var filteredData = data.filter(function (item) {
        return (
            (New && item.orderStatus === 'New') ||
            (Packed && item.orderStatus === 'Packed') ||
            (inTransit && item.orderStatus === 'InTransit') ||
            (Delivered && item.orderStatus === 'Delivered')
        );
    })

    var tableDataBody = document.getElementById('table-data-body');
    tableDataBody.innerHTML = '';
    for (var i = 0; i < filteredData.length; i++) {
        tableDataBody.innerHTML += displayRow(filteredData[i]);
    }

    var totalCount = document.getElementById('total-count');
    totalCount.innerText = `Count: ${filteredData.length}`;
}

function displayRow(obj) {
    const day = obj.orderDate.split('-')[0];
    const month = obj.orderDate.split('-')[1];
    const year = obj.orderDate.split('-')[2];

    return `
    <tr class="table-data-row">
                                <td class="secondary-text">${obj.id}</td>
                                <td class="primary-text">${obj.customerName}</td>
                                <td class="primary-text">${day} ${month}, ${year}<br /><span class="secondary-text">${obj.orderTime}</span></td>
                                <td class="secondary-text">$${obj.amount}</td>
                                <td class="primary-text">${obj.orderStatus}</td>
                            </tr>
    `
}