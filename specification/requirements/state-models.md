# State models

Below are ASCII diagrams that document all allowed states of each entity that has distinct states, with arrows showing all the allowed transitions between states, with clock emojis indicating transitions done by a cron job in case current time meets a condition. Each state name is capitalized and can be referenced in use cases and requirements. 


## Problem version state flows

Committed → Candidate ↔ Past
                ↓	     ↑
               🕥 →  Current

## Project version state flows

Committed → Candidate ↔ Past
                ↓
Expired ←🕥← Proposed → Enacted →🕥→ In Implementation →🕥→ Implemented
                ↓
            Rejected

