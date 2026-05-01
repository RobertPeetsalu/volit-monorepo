# UC-07 Approve or disapprove a problem or project version
Starting points or triggers: Voter receives a notification, browses a version, or reviews recent edits.
Initiating roles: Voter.
Successful completion: The approval state is recorded with delegated voting weight, and the leading Candidate version may change.
Core workflow:
1. The voter opens a Committed, Candidate, Current, or Past version.
2. The voter approves or disapproves the version.
3. The application calculates vote weight using applicable delegations and eligibility rules.
4. The application updates net approvals.
5. If this version now has the highest net approvals, the application promotes it to Candidate and demotes the previous Candidate to Past.

