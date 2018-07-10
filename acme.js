const customers = [
    {
        "id": 1,
        "name": "Moe"
    },
    {
        "id": 2,
        "name": "Larry"
    },
    {
        "id": 3,
        "name": "Curly"
    },
    {
        "id": 4,
        "name": "Homer"
    }
];

const sales = [
    {
        "customerID": 1,
        "orderID": 1,
        "total": 10
    },
    {
        "customerID": 2,
        "orderID": 2,
        "total": 20
    },
    {
        "customerID": 3,
        "orderID": 3,
        "total": 30
    },
    {
        "customerID": 1,
        "orderID": 4,
        "total": 100
    }
];

const generateCustomerSalesMap = (objSales, objCustomers) => {

    let salesByCustomer = {}; // create output object

    // for each customer...
    objCustomers.forEach(customer => {

        // store the customer ID
        let currID = customer.id; 

        // reduce the sales obj to sum 'total' for that customerID
        let currTotal = objSales.reduce((sum, order) => {
            if(order.customerID === currID){
                return sum + order.total;
            }
            return sum;
        },0);

        // add the sum to the output object
        salesByCustomer[customer.name] = currTotal;
    });

    return salesByCustomer; // return output object
}

// console.log(generateCustomerSalesMap(sales,customers));

module.exports = generateCustomerSalesMap;