# UC-17 Mark a project version as In Implementation or Implemented and update domain accuracy scores
Starting points or triggers: An Enacted Executive or Institutional project's implementation period starts. An In Implementation Executive or Institutional project's implementation period ends.
Initiating roles: System time event.
Successful completion: The project automatically transitions through implementation states and domain accuracy scores of prediction market participants are updated.
Core workflow:
1. When an Enacted project version's start time passes, the application automatically transitions it to In Implementation. Treasury releases funds according to pledged amounts to the institution responsible for implementing projects in the project's responsible ministerial domain. The institution gains authority to lead implementation.
2. The institution carries out the project and may coordinate with other institutions.
3. When the project's implementation end time passes, the application ...
    1. Transitions the project version to Implemented, after which the institution loses authority to lead the project's implementation and to spend from the project's budget;
    2. Identifies the realized prediction for each citizen who submitted their prediction to any of the project's prediction markets based on whether the project was Enacted;
    3. Fetches or computes the realized metric values from latest available statistics and administrative data;
    4. Computes each participant's prediction score relative to other participants;
    5. Updates domain accuracy scores and makes them visible on profiles.

