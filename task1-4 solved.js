/*
 Note that you can just copy-paste this code to chrome snippet https://developers.google.com/web/tools/chrome-devtools/snippets
 and do entire challange there. No setup is needed, when done, just send code back to us.
*/


/*
In this excercise you would need to write few simple functions that manipulate lists and objects. 
Feel free to implement any helper functions if you feel like, it's not required and doesn't give or subtract any
bonus points :)
1. Write a function to transform list of objects (listA) to list of objects (listB) in
    such a way that "name" would be formatted as "name-id". 
    So for example "{id: 0, name: 'A'}" should become "{id: 0, name: 'A-0'}"
 2. Write a function to transform list of objects (listA) to list of objects (listC) 
    in such a way that only object with id=2 will be changed, set it's name to "Fox". All other 
    objects should not be modified. 
 3. Write a function that does the following:
    * filters a list of objects (listA) in such a way, so new list contains only 
    items with odd ids
    * sorts items by id in ascending order
    * combines all names from all items into one string (so function returns just one string)
   
    E.g. if after filtering and sorting you got:
    [   {id: 1, name: 'A'},
        {id: 3, name: 'B'}, ]
    then result should be:
    'AB'
 */



function main() {
    
    const listA = [
     {id: 0, name: 'A'},
     {id: 2, name: 'C'},
     {id: 11, name: 'R'},
     {id: 4, name: 'E'},
     {id: 7, name: 'T'},
     {id: 13, name: 'Y'},
     {id: 5, name: 'C'},
     {id: 3, name: 'I'},
     {id: 6, name: 'C'},
     {id: 9, name: 'O'},
     {id: 1, name: 'V'},
    ];
    console.log(listA)

    console.log("Task 1: ----")
     function transform(listA) {
         // put code for task 1 here
         //lets make an empty variable:
         let nList = [];
         //running loop for listA:
         for (let i = 0; i < listA.length; i++){
             //pushing data to new object in the array using new format:
             nList.push({  id: listA[i].id, 
                           name: listA[i].name + "-" + Number(listA[i].id)
                        });
                
         }
          return nList;
     }   
 
     const listB = transform(listA)
     console.log(listB)

     console.log("Task 2: ----")
     function transformFox(listA) {
         // put code for task 2 here
         //let variable foxList empty:
         let foxList = [];
         for (let i in listA)  {
             //if its 2 rename name to "Fox":
             if (listA[i].id == 2) {
                foxList.push({id: listA[i].id, name: 'Fox'});
            
            //else if its not 2 be same as original data:
             }else{
                 foxList.push(listA[i])
             }
           }
           return foxList
     }
     const listC = transformFox(listA)
     console.log(listC)

     console.log("Task3: ----");
     function transformOdd(listA) {
         // put code for task 3 here

        //lets copy the list first from listA:
         var cList = [];
         //running loop on listA:
            for (var i = 0, len = listA.length; i < len; i++) {
            //initialize cList as empty object:  
                cList[i] = {};
                //running for loop inside object props:
          	for (var data in listA[i]) {
            	cList[i][data] = listA[i][data];
          	}
        }
        //lets get filtered the odd numbers only:
        cList = cList.filter(i => i.id %2 !== 0);
        //lets sort comparing with previous algorithm:
        cList.sort(function(a, b){return a.id-b.id});

        //now lets combin all names letters togather in one string:
        //defining empty var called names:
        var names ="";
        //running loop:
        cList.forEach(function(item){
            //getting name:
        	names = names + item.name;
      	});
        return names;
     }
 
     const oddObject = transformOdd(listA)
     console.log(oddObject)
 
     console.log("Task4: ----");
     /* 
         Task 4, using two lists, "customers" and "invoices", merge them together by "id + customerId"
         so result is same as "invoices", but with new property "customerName" from corresponding customer attached to it
     */
 
     const invoices = [{
         id: 1,
         total: 10,
         customerId: 1
     }, {
         id: 2,
         total: 20,
         customerId: 2
     }, {
         id: 3,
         total: 30,
         customerId: 4
     }]
 
     const customers = [{
         id: 1,
         name: 'Brian'
     }, {
         id: 2,
         name: 'Mary'
     }, {
         id: 3,
         name: 'John'
     }]
 
     function addCustomerNamesToInvoices(invoices, customers) {
         // put code for task 4 here
         //we just create a new array:
        var addedCArray = [];
        //running a for loop for invoices one by one:
        for(var i = 0; i < invoices.length; i++){
            //saving currentInvoice in memory:
            var currentInvoice = invoices[i];
            //running loop for the customers to search if the customer exists based on our invoice:
            for(var x =0; x< customers.length; x++){
                //saving current customer in memory:
                var currentCustomer = customers[x];
                //if current customer id == invoice.customerId then it will be pushed to addedCArray:
                if(customers[x].id == invoices[i].customerId){
                    //only push if customerId in invoice = id of customer to match invoice with customer id.
                    //note that inovice with id:3 has the coustomer id of 4 and will not be shown because there is no customer id name with id 4.
                     addedCArray.push(Object.assign({}, currentInvoice, currentCustomer))
                }
            }
        }
        //change the "name" to "customerName"
        //running foreach loop for the Added Customer Array for renaming "name" to "customerName":
        addedCArray.forEach((cust,i) => {
            //add a new item named "customerName" copying from "name":
              addedCArray[i].customerName = addedCArray[i].name;
            //delete the previous "name":
      		delete addedCArray[i].name;
    	});
        return addedCArray;
     }
 
     const invoicesWithNames = addCustomerNamesToInvoices(invoices, customers)
     console.log(invoicesWithNames)
 
 }
 
 main()