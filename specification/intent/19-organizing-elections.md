## Organizing elections

An election manager can create and manage single winner and multi-winner elections that have not yet reached their nomination period. An election has a plaintext title, a description in markdown format, a nomination period that starts in the future, a voting period that starts after the nomination period and zero or more candidates. 

During an election's nomination period, a voter can nominate themselves as a candidate. They will be displayed as cards with a name and thumbnail linking to their profile. Election managers can't manage candidates or set restrictions on a candidate's age or any other attribute. It's an intentional constraint to keep elections free and fair. 

During an election's voting period, voters can vote based on the [voting method](https://www.lesswrong.com/posts/D6trAzh6DApKPhbv4/a-voting-theory-primer-for-rationalists) configured for the system. By default, following voting rules are used:

* For single winner elections: [STAR voting](https://electionscience.github.io/vse-sim/) with a range from 0 to 10 as the method with highest known voter satisfaction both with and without strategizing voters.  
* For multi-winner elections where winners have …  
  * the most proportional representation of voters: [Single transferable vote](https://en.wikipedia.org/wiki/Single_transferable_vote).  
  * the most diverse representation of voters (winners distributed evenly across voter views): [RangingCC](https://arxiv.org/abs/1901.09217).  
  * the least distance from views of all voters (winners closest to the center of all voter views): [k-Borda](https://en.wikipedia.org/wiki/Multiwinner_voting#Positional_scoring_rules_for_committees).

Liquid democracy makes multi-winner elections unnecessary within the state itself, but they are necessary to elect representatives of the state in international organizations. 

 

