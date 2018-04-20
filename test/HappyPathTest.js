var List=artifacts.require("./List.sol");

//test suite

contract('List',function(accounts){

  var listInstance;
  var seller =accounts[1];
  var articleName="iphone 7";
  var articleDesc="selling to buy the newer modal released ";
  var articlePrice =10;

  // check happy path initialisation
  it("should be initialised with some values ",function ()
{
  return List.deployed().then(function(instance){
    return instance.getArticle();
  }).then(function(data){
    assert.equal(data[0],"0x0000000000000000000000000000000000000000","seller must be empty");
    assert.equal(data[1],"","name must be empty");
    assert.equal(data[2],"","desc must be empty");
    assert.equal(data[3].toNumber(),0,"price must be zero");
  })
});



// selling should be proper
it('should sell an article ',function(){
  return List.deployed().then(function(instance){
    listInstance=instance;
    return instance.sellArticle(articleName,articleDesc,web3.toWei(articlePrice,"ether"),{from:seller});
  }).then(function()
{
  console.log("success");
return  listInstance.getArticle();
}).then(function(data){
  console.log(data.length,"length of data ");
  assert.equal(data[0],seller,"seller must be "+seller);
  assert.equal(data[1],articleName,"name must be "+articleName);
  assert.equal(data[2],articleDesc,"desc must be "+articleDesc);
  assert.equal(data[3].toNumber(),web3.toWei(articlePrice,"ether"),"price must be "+web3.toWei(articlePrice,"ether"));
});
});
});
