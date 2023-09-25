var data;
$.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', function (response) {
    data = response;

    showData();

    document.getElementById('Expired').addEventListener('change', showData);
    document.getElementById('low-stock').addEventListener('change', showData);
})

function showData() {
    var Expired = document.getElementById('Expired').checked;
    var lowStock = document.getElementById('low-stock').checked;

    var filteredData = data.filter(function (item) {
        const isExpired = new Date(item.expiryDate) < new Date();
        const isLowStock = item.stock < 100;
        return (
            (Expired && isExpired) ||
            (lowStock && isLowStock) ||
            (!isExpired && !isLowStock)
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
    return `
    <tr class="table-data-row">
                                <td class="secondary-text">${obj.id}</td>
                                <td class="primary-text">${obj.medicineName}</td>
                                <td class="secondary-text">${obj.medicineBrand}</td>
                                <td class="primary-tex">${obj.expiryDate}</td>
                                <td class="secondary-text">${obj.unitPrice}</td>
                                <td class="secondary-text">${obj.stock}</td>
                            </tr>
    `
}