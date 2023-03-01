# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

The `deterministicPartitionKey` function seeks to map an input to a deterministic output key while using a hashing approach to ensure an even distribution of mappings over many inputs. The maximum output key size is 256. If the input provides a valid partitionKey then we will return that same key.

For readability, the first thing that I did was to eliminate the nesting structure `if(event)`. The case in which no input is provided is very simple, we just return the trivial key 0, so I handle this case at the top of the function. Next, I got rid of the `if(candidate)` check because by handling the trivial key case at the top, there is no way that candidate could be empty after parsing the event input. I also moved the string check inside the `if(event.partitionKey)` block because this is the only scenario in which candidate could be the wrong datatype.

The result of my refactoring is 'cleaner' than the original because it provides a much more direct depiction of the decision tree for this function. Reading the code top to bottom now provides you with the correct order of minimal branching for the decision tree. It also executes faster across more test cases.