
module.exports = {
    customerList : 'select * from customers',
    customerGet : 'select * from board where no = ?',
    customerInsert : "insert into customers set ?",
    customerUpdate : 'update customers set ? where id = ?',
    customerDelete : 'delete from customers where id = ?'
}