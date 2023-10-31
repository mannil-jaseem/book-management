# book-management

##  POST
### localhost:6565/book-management/add
body :
{
    "author": "person",
    "title": "name",
    "summary": "its a long book"
}

#### this route adds books to the db 
--------------------------------------------------------------------------------------------------------------
##  GET
### localhost:6565/book-management/list
eg: localhost:6565/book-management/list?page=1&limit=10&bk_id=BKOSSFFAIGIV
query :
    * page -number
    * limit -number
    * bk_id -string

#### this route provides lists of all the books or the details of provided book id
In query you can pass page and limit for pagination if not provided youll get first 100 data
?bk_id=BOOKID it will give the details of the corresponding book id
--------------------------------------------------------------------------------------------------------------
##  PATCH
### localhost:6565/book-management/update/:book_id
eg: localhost:6565/book-management/update/BKGC5N81I834G
body:{
    "author": "person",
    "title":"name_edited",
    "summary": "its a long book "
}

#### this route upadate the data provided in body for given book_id in params
--------------------------------------------------------------------------------------------------------------
##  DELETE
### localhost:6565/book-management/delete/:book_id
eg: localhost:6565/book-management/delete/BKN7LDD7PUD1

#### this route deletes the the record with the book_id given in params