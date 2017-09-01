// Receipt Script

//base size and price
var sizePersonal = 6;
var sizeMedium = 10;
var sizeLarge = 14;
var sizeXlarge = 16;

//Modifiers
var meatItem = 1;
var veggieItem = 1;
var extraCheese = 3;
var stuffCrust = 3;

/***********************************/

var theForm = document.forms["msform"];

//Arrays
var baseSizes = new Array();
baseSizes["personal"] = 6;
baseSizes["medium"] = 10;
baseSizes["large"] = 14;
baseSizes["xlarge"] = 16;

var meatItems = new Array();
meatItems["pepperoni"] = 1;
meatItems["sausage"] = 1;
meatItems["cbacon"] = 1;
meatItems["gbeef"] = 1;
meatItems["anchovy"] = 1;
meatItems["chicken"] = 1;

var veggieItems = new Array();
veggieItems["tomatoes"] = 1;
veggieItems["onions"] = 1;
veggieItems["olives"] = 1;
veggieItems["gpeppers"] = 1;
veggieItems["mushrooms"] = 1;
veggieItems["pineapple"] = 1;
veggieItems["spinach"] = 1;
veggieItems["jalapeno"] = 1;


//Price Functions
function getBaseSizePrice()
{
	var baseSizePrice = 0;
	var theForm = document.forms["msform"];
	var size = theForm.elements["size"];
	for(var i = 0; i < size.length; i++)
	{
		if(size[i].checked)
		{
			baseSizePrice = baseSizes[size[i].value];
			break;
		}
	}
	return baseSizePrice;
}

function addStuffedCrust()
{
	var stuffedCrustPrice = 0;
	var theForm = document.forms["msform"];
	var stuffedCrust = theForm.elements["stuffedCrust"];
	if(stuffedCrust.checked==true)
	{
		stuffedCrustPrice = 3;
	}
	return stuffedCrustPrice;
}
var meatItems = new Array();
meatItems["pepperoni"] = 1;
meatItems["sausage"] = 1;
meatItems["cbacon"] = 1;
meatItems["gbeef"] = 1;
meatItems["anchovy"] = 1;
meatItems["chicken"] = 1;

function addMeatPrice()
{
	var meatPrice = 0;
	var theForm = document.forms["msform"];
	var meatItem = theForm.elements["meat"];
	for(var i = 0; i < meatItem.length; i++)
	{
		if(meatItem[i].checked==true)
		{
			meatPrice++
		}
	}
	return meatPrice - 1;
}




