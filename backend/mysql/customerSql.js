
module.exports = {
    customerList : 'select * from customers order by id desc limit ?, ?',
    customerCnt : 'select count(*) cnt from customers',
    customerGet : 'select * from customers where id = ?',
    customerInsert : "insert into customers set ?",
    customerUpdate : 'update customers set ? where id = ?',
    customerDelete : 'delete from customers where id = ?'
}