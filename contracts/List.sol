pragma solidity ^ 0.4 .18;

contract List {
    //state variables
    address seller;
    string name;
    string description;
    uint256 price;


//events

event LogSellArticle(

  address indexed _seller,
  string _name,
  uint256 _price
  );
    // constructor function

    function List() public{
    //  sellArticle("default article ","this is the default article ",1000000000000000000);
    }

    // funtion to sell an article

    function sellArticle(string _name, string _desc, uint256 _price) public {
        seller = msg.sender;
        name = _name;
        description = _desc;
        price = _price;
LogSellArticle(seller,name,price);
    }

    // function to get the article description
    function getArticle() view public returns(address _seller,
       string _name,
       string _desc,
        uint256 _price)
         {

        return (seller, name, description, price);

    }
}
