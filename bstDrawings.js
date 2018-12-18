/*
Given the following data 3,1,4,6,9,2,5,7.
 If you were to insert this into an empty Binary Search Tree, 
 how would the tree look like? (Draw the tree, no coding needed here)

                    3       
                  /   \
                1      4
              /  \      \
             0    2      6
                        / \
                       5   9
                          /
                         7
                          \
                           8

*/
/*
Show how the tree would look like if you deleted the root. 
(Draw the tree, no coding needed here)

if replacing with left subtree greatest value
                    2
                  /   \
                1      4
                        \
                         6
                        / \
                       5   9
                          /
                         7

if replacing with smallest value from the right subtree                      
                    4
                  /   \
                1      6
                 \    / \
                  2  5   9
                        /
                       7
*/

