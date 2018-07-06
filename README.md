# JavaScript Tasks



 Note that you can just copy-paste this code to chrome snippet https://developers.google.com/web/tools/chrome-devtools/snippets
 and do entire challange there. No setup is needed, when done, just send code back to us.

In this excercise you would need to write few simple functions that manipulate lists and objects. 
Feel free to implement any helper functions if you feel like, it's not required and doesn't give or subtract any
bonus points :)

** JavaScript Tasks : **
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

4. Using two lists, "customers" and "invoices", merge them together by "id + customerId"
         so result is same as "invoices", but with new property "customerName" from corresponding customer attached to it
   