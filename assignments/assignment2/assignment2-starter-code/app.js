(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  function ToBuyController(ShoppingListCheckOffService){
    var buy = this;
    buy.items = ShoppingListCheckOffService.ToBuy();
    buy.buyItem = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  };

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.ToBought();
  };

  function ShoppingListCheckOffService() {
    var service = this;

    var boughtItems = [];

    var toBuyItems = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Cereals Box",
    quantity: "1"
  }
];

service.buyItem = function(itemIndex) {
  boughtItems.push(toBuyItems[itemIndex]);
  toBuyItems.splice(itemIndex, 1);
};


    service.ToBuy = function() {
      return toBuyItems;
    };

    service.ToBought = function() {
      return boughtItems;
    };


  };

})();
