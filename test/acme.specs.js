const expect = require('chai').expect;
const generateCustomerSalesMap = require('../acme');

describe('generateCustomerSalesMap', () => {
    it('exists', () => {
        expect(generateCustomerSalesMap).to.be.ok;
    });
    it('generates map correctly', () => {
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
        const salesMap = {
            "Moe": 110,
            "Larry": 20,
            "Curly": 30,
            "Homer": 0
        }
        expect(generateCustomerSalesMap(sales,customers)).to.eql(salesMap);
    });
})
