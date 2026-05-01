# UC-02 Authenticate with a trustful pseudonym
Starting points or triggers: User chooses to sign in before participating.
Initiating roles: Voting age citizen, authenticated underaged citizen, moderator, lawyer, election manager.
Successful completion: A pseudonymous authenticated session is created and the user receives the permissions implied by their verified credentials.
Core workflow:
1. The user starts authentication with their digital identity wallet.
2. The wallet proves required eligibility claims and a stable pseudonymous identifier.
3. The application verifies voter eligibility, age-related restrictions, residence-related claims, and any role credentials.
4. The application signs the user in and enables the actions allowed for that role.
Notes needing analysis: The intent defines the credential model, but not the exact recovery, session renewal, or failed-verification flow.

