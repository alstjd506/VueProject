const customersql = require('./customerSql');
const boardSql = require('./boardSql')

module.exports = {
    ...customersql,
    ...boardSql
}