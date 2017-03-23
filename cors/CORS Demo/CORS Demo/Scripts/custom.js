// /Scripts/custom.js



/* Loading JSON objects using JSONP */
(function ($) {
    var url = 'https://ssmith1975.sharepoint.com/sites/pub/_api/search/query?querytext=%27ListId:2a1eb399-c1b7-4774-a4d8-78e2cd8c9aac%27&selectproperties=%27Title,Discontinued,QuantityPerUnit,ReorderLevel,SupplierID,UnitPrice,UnitsInStock,UnitsOnOrder,WebURL%27&startrow=0&rowlimit=20&callback=test';

    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        dataType: 'jsonp'
    });0
})(jQuery);