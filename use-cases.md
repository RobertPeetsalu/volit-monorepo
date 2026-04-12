This document is for maintaining concise definitions of expected future user workflows that Volit (this liquid democracy web application) should support, used for reference when making changes to the application. 

Each use case should define: 
* A unique use case name that indicates what the user wants to achieve.
* Its possible starting points or triggering events.
* User roles that can initiate this use case.
* Expected artifacts and state changes upon successful completion of the main flow.
* Core workflow steps as a numbered list. If a step is a condition for branching into an alternative flow or a possible failure mode, then it starts a sub-level list with steps that follow and may reference a previous or following step in the main flow if the user can return to the main flow. 

# Use cases

## UC-01 Browse public governance content
Starting points or triggers: Visitor opens the app, selects a list view, search, filters, sorting, or a specific problem/project/profile link.
Initiating roles: Unauthenticated visitor, authenticated underaged citizen, voter, moderator, lawyer, election manager.
Successful completion: The selected public content is displayed with the requested filters, sorting, and linked details.
Core workflow:
1. The user opens problems, project versions, profiles, hidden-content review, or elections.
2. The user applies search, scope, domain, state, type, or sorting filters.
3. The application shows matching public items and their summary metadata.
4. The user opens a selected item to inspect its full public details.

## UC-02 Authenticate with a trustful pseudonym
Starting points or triggers: User chooses to sign in before participating.
Initiating roles: Voting age citizen, authenticated underaged citizen, moderator, lawyer, election manager.
Successful completion: A pseudonymous authenticated session is created and the user receives the permissions implied by their verified credentials.
Core workflow:
1. The user starts authentication with their digital identity wallet.
2. The wallet proves required eligibility claims and a stable pseudonymous identifier.
3. The application verifies voter eligibility, age-related restrictions, residence-related claims, and any role credentials.
4. The application signs the user in and enables the actions allowed for that role.
Notes needing analysis: The intent defines the credential model, but not the exact recovery, session renewal, or failed-verification flow.

## UC-03 Follow content and manage notification delivery
Starting points or triggers: User follows a problem, project, or domain, or opens notification settings.
Initiating roles: Authenticated underaged citizen, voter, moderator, lawyer, election manager.
Successful completion: Follow state or notification delivery settings are updated, and notifications can be reviewed or dismissed.
Core workflow:
1. The user follows or unfollows a problem, project, or ministerial domain, or opens notification settings.
2. The user enables or disables in-app, email, or push forwarding.
3. The application stores the new settings.
4. The user opens the notification list, follows links to source items, dismisses notifications, or unfollows related content directly.

## UC-04 Search profiles and delegate voting power
Starting points or triggers: User searches by pseudonym or opens a profile from authored content.
Initiating roles: Voter.
Successful completion: The selected profile is viewed and a delegation is created, updated, or retracted.
Core workflow:
1. The voter searches for a pseudonym or opens a profile from visible content.
2. The voter reviews the profile's activity timeline and domain accuracy scores.
3. The voter selects delegation scope for all or selected domains and sets an optional end date.
4. The application records the delegation and applies it to future eligible actions unless the delegator votes personally.
5. The voter may later retract or replace the delegation.

## UC-05 Create a new societal problem
Starting points or triggers: Voter decides that an unaddressed societal problem should be described.
Initiating roles: Voter.
Successful completion: The first version of a new problem is committed, the author becomes a follower, the version is auto-approved by its author, and it becomes the Candidate version.
Core workflow:
1. The voter starts a new problem draft.
2. The voter enters the title, markdown description, domains, scope, and one or more metrics with importance shares.
3. The application validates required fields and relevant limits.
4. The voter commits the first version.
5. The application publishes it as a Committed version, auto-approves it on behalf of the author, and promotes it to Candidate.
6. The application reduces the creator's future government-budget pledging capacity as defined by law.
Notes needing analysis: The intent does not fully specify duplicate-detection behavior before creation, only incentives and warnings against duplication.

## UC-06 Edit and commit a problem version
Starting points or triggers: Citizen opens any public version of a problem for editing.
Initiating roles: Authenticated underaged citizen, voter, lawyer.
Successful completion: A new Committed version is published, the editor becomes a follower, and voters can approve or disapprove it.
Core workflow:
1. The user opens an existing problem version for editing.
2. The user changes the markdown description or editable structured fields.
3. The application enforces commit size limits.
4. The user commits the edits.
5. The application publishes the new Committed version, makes the editor a follower, and notifies followers.
6. If the editor is a voter, the application auto-records their approval of the new version.

## UC-07 Approve or disapprove a problem or project version
Starting points or triggers: Voter receives a notification, browses a version, or reviews recent edits.
Initiating roles: Voter.
Successful completion: The approval state is recorded with delegated voting weight, and the leading Candidate version may change.
Core workflow:
1. The voter opens a Committed, Candidate, Current, or Past version.
2. The voter approves or disapproves the version.
3. The application calculates vote weight using applicable delegations and eligibility rules.
4. The application updates net approvals.
5. If this version now has the highest net approvals, the application promotes it to Candidate and demotes the previous Candidate to Past.

## UC-08 Let a problem Candidate become the Current version
Starting points or triggers: A problem Candidate remains the only Candidate for the required time window.
Initiating roles: System time event.
Successful completion: The Candidate becomes Current, any previous Current becomes Past, and highly interested voters are notified.
Core workflow:
1. The application checks whether the problem's Candidate remained the sole Candidate for the required period.
2. The application promotes the Candidate to Current and demotes any prior Current to Past.
3. The application notifies voters who had prioritized the problem highly.
Notes needing analysis: The exact scheduling and recovery behavior for delayed promotion jobs is unspecified.

## UC-09 Prioritize a societal problem
Starting points or triggers: Voter opens a problem and wants to express urgency.
Initiating roles: Voter.
Successful completion: The voter's priority grade is stored, delegated voting is suspended for that voter on that problem, and total problem priority is recalculated.
Core workflow:
1. The voter opens a problem with a Current version.
2. The voter selects a priority grade on the allowed scale.
3. The application validates local eligibility and domain-specific delegation effects.
4. The application records the grade and recalculates the problem's total priority and affected metric importance.
5. The voter may later change the grade, which immediately updates the aggregate priority.

## UC-10 Create a new project
Starting points or triggers: Voter wants to propose a legislative, executive, or institutional solution.
Initiating roles: Voter.
Successful completion: The first version of a new project is committed, the author becomes a follower, the version is auto-approved by its author, and it becomes the Candidate version.
Core workflow:
1. The voter starts a new project draft and selects its type.
2. The voter enters shared fields such as title, description, targeted metrics, and prerequisites.
3. The voter enters type-specific fields such as legal changes, effective date, budget, stretch goals, and responsible domain.
4. The application validates the project against its type rules.
5. The voter commits the first version.
6. The application publishes it, auto-approves it on behalf of the author, and promotes it to Candidate.
7. The application reduces the creator's future government-budget pledging capacity as defined by law.

## UC-11 Explore project dependencies
Starting points or triggers: User opens a project and requests dependency details.
Initiating roles: Unauthenticated visitor, authenticated underaged citizen, voter, moderator, lawyer, election manager.
Successful completion: The dependency tree is displayed for the selected project.
Core workflow:
1. The user opens a project version.
2. The user selects "view all dependencies."
3. The application displays direct and indirect prerequisites below the selected project and dependent projects above it, with titles and statuses.

## UC-12 Propose a Candidate project for a public vote
Starting points or triggers: Voter believes the Candidate project is mature enough to move to enactment voting.
Initiating roles: Voter.
Successful completion: The Candidate project becomes a Proposed version if proposal support reaches the required threshold, and prior voters on the project are invited to vote.
Core workflow:
1. The voter opens a Candidate project version.
2. The voter initiates the action to put the Candidate to a vote.
3. Followers are invited to vote on enacting this version.
4. The application compares net votes in favour of enactment with the version's net approvals.
5. If the threshold is met, the version becomes Proposed, continues collecting votes in favour and against enacting it and prior voters on other versions are also invited to vote on it. As the version is now Proposed, it is also now displayed by default when browsing project versions.
6. If a voting deadline is required, the version stores its expiry date.

## UC-13 Review a Proposed project
Starting points or triggers: Citizen opens a Proposed project and wants to contribute structured reasoning.
Initiating roles: Authenticated underaged citizen, voter, lawyer.
Successful completion: One review per user per Proposed version is created or updated.
Core workflow:
1. The user opens a Proposed project version.
2. The user creates or edits their single review for that version.
3. The user selects a review type: Support, Oppose, Inform, or Legal where permitted.
4. The application publishes the review and associates it with the Proposed version.
5. The user may edit the review while the version remains Proposed.
Notes needing analysis: The intent specifies one review per citizen per Proposed version, but not how review history is exposed.

## UC-14 Participate in prediction markets for a Proposed project
Starting points or triggers: A project becomes Proposed and prediction markets open automatically.
Initiating roles: Voter.
Successful completion: The voter submits or updates paired predictions for one or more metrics until enactment, and the weighted aggregate predicted effect updates.
Core workflow:
1. The voter opens a Proposed project with active prediction markets.
2. The voter selects a metric.
3. The voter submits both required predictions: metric value if Enacted and metric value if not Enacted.
4. The application stores the latest prediction pair and weights it by the voter's domain accuracy score.
5. The application updates the displayed aggregate predicted effect.
6. The voter may revise the pair until the project leaves Proposed state.

## UC-15 Vote on a Proposed project and pledge funding
[TO DO merge voting and pledging into one UC]
Starting points or triggers: Voter browses Proposed projects or receives a notification about a new Proposed version of a project they follow or belonging to a responsible domain that they follow.
Initiating roles: Voter.
Successful completion: A vote in favour of or against the Proposed version is stored with delegated weight and visible tallies update.
Core workflow:
1. The voter opens a Proposed project version.
2. The application shows current tallies, predicted effects, reviews, legal review if present, and eligibility constraints.
3. The voter votes in favour or against the version.
4. The application records the vote with the voter's current eligible voting weight.
5. The application updates counts and percentages of voters in favour and against.
6. The voter may change the vote while the version remains Proposed.

## Pledge funding to a Proposed project
Starting points or triggers: Voter supports a Proposed executive or institutional project and wants to help fund it.
Initiating roles: Voter.
Successful completion: Personal and or government-budget pledges are recorded against the project and its stretch goals.
Core workflow:
1. The voter opens a Proposed executive or institutional project they support directly or through their delegate.
2. The voter confirms they have voted in favour.
3. The voter allocates personal funds, government-budget funds, or both to the project and optional stretch goals.
4. The application validates available pledge capacity and stores the pledge.
5. The project displays updated progress toward its minimum and stretch budget goals.
6. If the voter or their delegate later changes their vote to against the project.  can keep funding a project after later changing their vote against it, except that institutional recurring funding ends when their vote changes against it.

## UC-16 Enact, reject, or expire a Proposed project
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

## UC-17 Mark a project version as In Implementation or Implemented and update domain accuracy scores
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

## UC-18 Flag content for moderation
Starting points or triggers: Citizen encounters illegal, spammy, or otherwise problematic content.
Initiating roles: Authenticated underaged citizen, voter, moderator, lawyer, election manager.
Successful completion: The content is submitted to the moderation queue for human review, potentially with automatic labels or priority.
Core workflow:
1. The user opens a review, problem version, or project version.
2. The user flags the content.
3. The application creates a moderation case and may enrich it with automated spam or risk signals.
4. The case enters the moderator review queue.

## UC-19 Moderate flagged content
Starting points or triggers: Moderator opens the moderation queue or receives assigned work.
Initiating roles: Moderator.
Successful completion: The moderator reviews a case and hides illegal content when required.
Core workflow:
1. The moderator opens the moderation queue.
2. The moderator reviews flagged content, context, and automated signals.
3. The moderator decides whether the content should remain visible or be hidden.
4. The application records the moderation decision and notifies the content author if their content was hidden.
Notes needing analysis: The intent does not define warning, escalation, appeal deadlines, or whether moderators can unhide content directly.

## UC-20 Review hidden content and initiate a dispute
Starting points or triggers: Voter wants to verify that moderation is not being used for political censorship.
Initiating roles: Voter.
Successful completion: Hidden content is reviewed in the dedicated view and a dispute can be initiated.
Core workflow:
1. The voter opens the hidden-content review area.
2. The application shows hidden items behind content warnings.
3. The voter inspects the hidden item and its moderation context.
4. The voter initiates a dispute if they believe the hiding decision is improper.
Notes needing analysis: The intent mentions disputes but does not define who adjudicates them or what outcomes follow.

## UC-21 Receive legal review for a project gaining traction
Starting points or triggers: A state-wide or international Proposed project crosses the legally defined support threshold.
Initiating roles: System time event, lawyer.
Successful completion: A lawyer is assigned and a Legal review is published for the Proposed version.
Core workflow:
1. The application detects that the Proposed version crossed the legal-review threshold.
2. The application assigns an eligible lawyer.
3. The lawyer reviews unresolved legal conflicts and required voting threshold.
4. The lawyer posts a Legal review that is displayed before other reviews.
Notes needing analysis: The assignment logic, workload balancing, and deadline-enforcement details are unspecified.

## UC-22 Improve legal language of a Candidate project version
Starting points or triggers: Lawyer identifies that a Candidate versions of a Legislative or Institutional project needs language standardization.
Initiating roles: Lawyer.
Successful completion: A new Committed version with improved legal drafting is published through the ordinary version workflow.
Core workflow:
1. The lawyer opens the Candidate project version for editing.
2. The lawyer adjusts legal language without changing the intended substance beyond the agreed edit scope.
3. The lawyer commits the edit.
4. The application publishes the new Committed version and routes it through the standard approval workflow.

## UC-23 Participate in domain onboarding education
Starting points or triggers: Citizen contributes to a ministerial domain for the first time.
Initiating roles: Authenticated underaged citizen, voter.
Successful completion: The user finishes or dismisses the educational dialogue and can continue their contribution.
Core workflow:
1. The user initiates their first contribution in a ministerial domain.
2. The application opens a dialogue led by a language model.
3. The user answers questions, asks for explanations, or states that they do not know.
4. The language model explains core causal relations, terms, and likely misunderstandings.
5. The user returns to their original contribution flow.
Notes needing analysis: The intent describes the educational goal, but not whether completion is mandatory before the contribution is finalized.

## UC-24 Join live discussion around a problem or project
Starting points or triggers: Citizen opens a problem or project and wants synchronous or asynchronous discussion.
Initiating roles: Authenticated underaged citizen, voter, moderator, lawyer, election manager.
Successful completion: The user joins the integrated videocall or live chat and can participate under their pseudonym and roles.
Core workflow:
1. The user opens a problem or project.
2. The user joins the permanent videocall room or live chat tied to that item.
3. The application displays ongoing discussion history and active participants.
4. The user posts chat messages or participates in the call.
Notes needing analysis: The intent does not define moderation, retention, or quoting rules for videocall and chat content.

## UC-25 Create and manage an election
Starting points or triggers: An institution needs to organize a single-winner or multi-winner election.
Initiating roles: Election manager.
Successful completion: An election is created before nominations begin and remains manageable until the nomination period starts.
Core workflow:
1. The election manager creates a new election.
2. The manager enters the title, markdown description, nomination period, voting period, and election type.
3. The application validates that the election has not yet reached nomination start.
4. The manager saves the election.
5. Until nominations begin, the manager may edit the election details.
Notes needing analysis: The intent does not specify whether managers can cancel elections after creation or what audit trail is required for edits.

## UC-26 Nominate oneself as an election candidate
Starting points or triggers: Nomination period opens for an election.
Initiating roles: Voter.
Successful completion: The voter becomes a listed candidate for that election.
Core workflow:
1. The voter opens an election during its nomination period.
2. The voter submits their candidacy.
3. The application adds the voter to the candidate list with profile-linked presentation.
4. Other users can browse the candidate list.

## UC-27 Vote in an election
Starting points or triggers: Election voting period opens.
Initiating roles: Voter.
Successful completion: The voter's ballot is recorded according to the configured election method.
Core workflow:
1. The voter opens an election during its voting period.
2. The application shows the candidate list and the applicable voting method.
3. The voter submits their ballot.
4. The application validates the ballot against the active method and records it.
5. After voting closes, the election result can be computed from all valid ballots.
Notes needing analysis: The intent names preferred election methods, but not the exact result-publication, recount, or ballot-editing rules.
