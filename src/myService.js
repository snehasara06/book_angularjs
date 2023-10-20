app.service('myService', function($http) {
    this.getItems = function() {
        return $http.get('http://localhost:9092/books');
    };

    this.addItem = function(item) {
        return $http.post('http://localhost:9092/books/create', item);
    };

    this.updateItem = function(item) {
        return $http.put('http://localhost:9092/books/update/{id}' + item.id, item);
    };

    this.deleteItem = function(item) {
        return $http.delete('http://localhost:9092/books/delete/{id}' + item.id);
    };
});