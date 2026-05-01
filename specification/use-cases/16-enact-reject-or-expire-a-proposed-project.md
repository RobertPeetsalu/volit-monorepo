# UC-16 Enact, reject, or expire a Proposed project
Starting points or triggers: Vote totals, budget totals, prerequisite status, deadlines, and elapsed time satisfy a project rule.
Initiating roles: System time event.
Successful completion: The Proposed version becomes Enacted, Rejected, or Expired according to its type-specific rules.
Core workflow:
1. The application continuously evaluates the Proposed version against its enactment, rejection, prerequisite, funding, and deadline rules.
2. If a majority of eligible voters votes against it, the application marks it Rejected.
3. If its type-specific enactment conditions are met, the application marks it Enacted.
4. If a deadline passes before enactment, the application marks it Expired.
5. The application publishes the resulting status and updated vote totals.
Notes needing analysis: The intent describes outcome rules, but not whether enactment is immediate on threshold crossing or batched through a scheduled finalization job.

