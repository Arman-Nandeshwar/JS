//JAVASCRIPT EXECUTION CONTEXT

/*
1. {} -> GLOBAL EXECUTION CONTEXT(CAN be inside "this" in windows)[will be always there]
2. FUNCTION EXECUTION CONTEXT
3. EVAL EXECUTION CONTEXT

*/

// JS IS A SINGLE THREADED LANGUAGE

/*
CODE RUNS IN TWO PHASES :
1. MEMORY CREATION PHASE : ONLY MEMORY ALLOCATION
2.EXECUTION PHASE 
*/

//EX :
/*
CODE: 
    let val1 = 10
    let val2 = 5
    function addNum(num1,num2){
        let total = num1 + num2
        return total    
    }
    let result1 = addNUm(val1,val2)
    let result2 = addNum(10,2)


EXECUTION PHASES :

1. GLOBAL EXECUTION (THIS)

2. MEMORY PHASE :
    val1  : undefined
    val2  : undefined
    addNum : function definition
    result1  : undefined
    result2  : undefined

3. EXECUTION PHASE :
    val1 : 10
    val 2 : 5
    function skipped
    result1 line :  
                    addNum -> [new variable environment + execution thread]
                      |
                      v
                      1. MEMORY PHASE
                            val1 : undefined
                            val2 : undefined
                            total : undefined
                      2. EXECUTION CONTEXT
                            num1 : 10
                            num2 : 5
                            total : 15 //this final ans is returned to global execution

    result1 : 15
    
    same for result 2 line (the number of times function is called the no of times this sand block is created and executed)
    result2 : 12
    
    AFTER THIS THE BLOCK IS DELETED
*/