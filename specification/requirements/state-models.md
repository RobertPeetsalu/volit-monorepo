# State models

Below are ASCII diagrams that document all allowed states of each entity that has distinct states, with arrows showing all the allowed transitions between states, with clock emojis indicating transitions done by a cron job in case current time meets a condition. Each state name is capitalized and can be referenced in use cases and requirements. 


## Problem version state flows

* Committed to Candidate

* Candidate to Past and back 

* Candidate to Current automatically over time

* Current to Past

## Project version state flows

* Committed to Candidate

* Candidate to Past and back 

* Candidate to Proposed

* Proposed to Expired automatically over time

* Proposed to Rejected

* Proposed to Enacted

* Enacted to In Implementation automatically over time

* In Implementation to Implemented automatically over time

