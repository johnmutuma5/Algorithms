/** 
  *                                                                                                                                        
  *  .oPYo.                                            o          .oPYo.                             o  8                                  
  *  8   `8                                            8          8    8                             8  8                                  
  * o8YooP' .oPYo. o    o .oPYo. oPYo. .oPYo. .oPYo.   8 odYo.   o8YooP' .oPYo. oPYo. .oPYo. odYo.  o8P 8oPYo. .oPYo. .oPYo. .oPYo. .oPYo. 
  *  8   `b 8oooo8 Y.  .P 8oooo8 8  `' Yb..   8oooo8   8 8' `8    8      .oooo8 8  `' 8oooo8 8' `8   8  8    8 8oooo8 Yb..   8oooo8 Yb..   
  *  8    8 8.     `b..d' 8.     8       'Yb. 8.       8 8   8    8      8    8 8     8.     8   8   8  8    8 8.       'Yb. 8.       'Yb. 
  *  8    8 `Yooo'  `YP'  `Yooo' 8     `YooP' `Yooo'   8 8   8    8      `YooP8 8     `Yooo' 8   8   8  8    8 `Yooo' `YooP' `Yooo' `YooP' 
  * :..:::..:.....:::...:::.....:..:::::.....::.....:::....::..:::..::::::.....:..:::::.....:..::..::..:..:::..:.....::.....::.....::.....:
  * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  * 
  * Write a function that reverses characters in (possibly nested) parentheses in the input string.
  * Input strings will always be well-formed with matching ()s.
  * Example

  * For inputString = "(bar)", the output should be
  * reverseInParentheses(inputString) = "rab";
  * For inputString = "foo(bar)baz", the output should be
  * reverseInParentheses(inputString) = "foorabbaz";
  * For inputString = "foo(bar)baz(blim)", the output should be
  * reverseInParentheses(inputString) = "foorabbazmilb";
  * For inputString = "foo(bar(baz))blim", the output should be
  * reverseInParentheses(inputString) = "foobazrabblim".
  * Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
  *
  * Difficulty: MEDIUM
  *
  */
export function reverseInParentheses(inputString: string): string {
  while(/\([^()]*\)/.test(inputString)) {
    inputString = inputString.replace(/\(([^()]*)\)/g, (_, inParenGroup) => {
      return [...inParenGroup].reverse().join('');
    });
  }
  return inputString;
}
