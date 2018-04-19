pragma solidity ^ 0.4 .18;

contract List {
    //state variables
    address seller;
    string name;
    string description;
    uint256 price;

    // funtion to sell an article

    function sellArticle(string _name, string _desc, uint256 _price) public {
        seller = msg.sender;
        name = _name;
        description = _desc;
        price = _price;

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
