# UC-08 Let a problem Candidate become the Current version
Starting points or triggers: A problem Candidate remains the only Candidate for the required time window.
Initiating roles: System time event.
Successful completion: The Candidate becomes Current, any previous Current becomes Past, and highly interested voters are notified.
Core workflow:
1. The application checks whether the problem's Candidate remained the sole Candidate for the required period.
2. The application promotes the Candidate to Current and demotes any prior Current to Past.
3. The application notifies voters who had prioritized the problem highly.
Notes needing analysis: The exact scheduling and recovery behavior for delayed promotion jobs is unspecified.

