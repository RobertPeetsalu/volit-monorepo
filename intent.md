# Continuous online liquid democracy

A policy proposal to transition societies to democratic self-governance empowered by open source software,
by Robert Peetsalu,
published under the [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).

# Democracy in decline

Democracy [has been in decline globally](https://ourworldindata.org/grapher/countries-that-are-democratizing-and-autocratizing) for the past decades [both in quality and in quantity](https://www.v-dem.net/publications/democracy-reports/). Between 2004 and 2024, 23% of the global population went from living in a democracy to living in an autocracy and the share of people living in an autocratizing state rose from 7% to 38%. Globally, voter turnout has fallen by almost 10% in the last 15 years. 

Most citizens have a minority view on at least some topics. But in a representative democracy no party's platform can accurately represent a citizen who has nuanced views. Yet parties are targeting their campaigns and defining their programs to match a handful of stereotypes of people's political views that don't really represent anyone. 

Citizens who have seen their relative status in society fall and who are not aware of other political alternatives are captured by fascist populists who stoke fear of the other and incite hate for other religions, nationalities and states and promise to return the good old days. Due to misidentifying the root causes of economic hardship, these populists fail to fulfill their promise of improving the relative status of their voters and instead cause inflation through protectionism and furthering monopolization by picking winners among competing firms. They accuse immigrants of all the problems despite immigrants actually helping to alleviate many of them. But most importantly, they overstep their mandate, degrade the rule of law, substitute or pressure judges, jail their opposition and journalists or otherwise undermine separation of powers. 

# What is continuous online liquid democracy? 

**In democracy, sovereignty belongs to the citizens. What they decide is the source of all legal and political legitimacy.** 

Some voters prefer to delegate their decisions to others as in a representative democracy while others prefer to make their own decisions as in a direct democracy. 

[**Liquid democracy**](https://en.wikipedia.org/wiki/Liquid_democracy) accommodates both preferences by giving voters the right to make legislative or executive proposals and vote directly on all proposals as in a direct democracy and enabling citizens to delegate their vote as in a representative democracy. Each citizen voting on any proposal is counted as voting for themselves as well as for all other citizens who are not personally voting on this proposal and who have delegated their vote to this citizen. 

I propose liquid democracy, defining through following features:

1. **Delegation** \- A citizen can delegate their voting right to another citizen indefinitely or with an end date, on either all societal issues or only on issues of a selection of ministerial domains (education, healthcare, etc). 

2. **Chainable delegations** \- by delegating their vote, a citizen also delegates all votes that have been delegated to them by other citizens. 

3. **Voting suspends delegation** \- When a citizen votes, their delegation is suspended for that vote to avoid double counting votes. For example if A delegates their vote to B, who in turn delegates their vote to C and then B and C vote on a matter, then B votes with two votes and C votes with one. Voting does not end delegation. So if only C votes on the next matter, then they vote with all 3 votes. It also resolves closed loops of delegation (e.g. A delegates B delegates C delegates A): 

   1. If multiple participants in the loop vote, each one votes with their own vote and with all votes that were delegated to them directly or indirectly by citizens who are not voting themselves. 

   2. If only one of them votes, they vote with all votes delegated to anyone in the loop. 

   3. If none of them vote, the loop is ignored. 

4. **Retractable delegations \-** Any delegation can be ended prematurely at any time. 

5. Liquid democracy is [**continuous**](https://worldpolicyhub.com/book-review-six-proposals-for-continuous-democracy/) when citizens can delegate and retract their delegation at any time and when they can change their vote at any time until the voting result is locked in. 

A transition to continuous online liquid democracy would increase the frequency and quality of citizen participation in governance and make democracy resilient to lobbying, revolving door corruption, gradual erosion of separation of powers and coup attempts. 

Citizens would no longer have to give up their sovereignty once every four years for a false choice between political programs they don't fully agree with and between politicians they have no reason to trust. 

# What would a transition look like?

**To transition to a continuous online liquid democracy, a constitutional amendment is necessary to assign the state's sovereignty to its citizens** (not a representative body) **through continuous practice of liquid democracy using methods agreed upon in law.** 

The current election law is substituted with a new law that describes how continuous liquid democracy functions, what functional and non-functional requirements does an online application have to meet for votes cast by voters (citizens with full legal capacity) authenticated in the application to be counted as legally binding for governing the state? \- E.g. pseudonymous authentication, description and prioritization of problems, submission and review of projects, voting on problems, projects and reviews, delegation and retracting delegation and other features described below.

**An open source web application needs to be developed and released where a sufficient proportion of citizens can at any time without approval from any authority initiate and legislate changes to the constitution, to laws, to participation in treaties, to budgets, to creation and dissolution of government institutions and every other decision within the scope of the state or the administrative division where the voting citizens are registered as residents.** 

## Transition via injection into representative democracy 

While there is no majority support for a transition to liquid democracy yet, the application described below can be used by representatives elected into local, national or international government bodies on the political platform of liquid democracy. These representatives can contractually bind themselves to vote according to the vote results on the application. 

This was successfully practiced by Demoex \- a Swedish injected direct democracy party whose delegates voted according to voting results of their online forum. 

Sadly injected democracy parties have dwindled in popularity recently. Further research is needed to identify the main causes, but generally speaking, citizens distrust a solution or a process that they have no prior personal experience with, especially if there is no significant support for it already. Another reason might be that direct democracy was practiced, so the forum users could only vote personally on every issue and couldn't delegate, which limited the amount of votes cast per issue and reduced perceived legitimacy of the voting results. 

## Transition via becoming a widely accepted governance tool for political parties, cities and counties

A more promising path seems to be to popularize the use of a set of online governance applications that follow the principles of continuous liquid democracy, but each supports different workflows and requirements specific to an organizational structure. For example: 

* Governing a member-owned organization like a non-profit, a cooperative or a union has no need for legislative workflows and instead needs support for assigning responsibilities to teams and to individuals. 

* Governing a political party does need legislative workflows to form the party's political program and policy proposals, but doesn't involve executive projects.

* Governing an administrative division would involve participatory budgeting for executive projects, but not legislation.

* State governance on the other hand would need support for both problem description, legislation, executive projects and institution formation, but doesn't involve workflows for teams and individuals like an organization would. 

As more and more citizens become used to having a say in society's rules and goals and in their free time, at work and in local governance, they will start expecting and demanding the same level of involvement and rights on the state and international level. 

# A web application to practice liquid democracy

Here's how a continuous liquid democracy could work in an app. 

## Authentication

The application's content is public, but only strongly authenticated users can participate by authenticating using a **trustful pseudonym** (a pairwise DID or public key per Relying Party) generated by their personal digital identity wallet (like the [EU Digital Identity Wallet](https://www.edps.europa.eu/data-protection/our-work/publications/techdispatch/2025-12-15-techdispatch-32025-digital-identity-wallets_en)) and an anonymous credential verifying that the wallet holder is a voting age citizen (no real need to restrain by guardianship status), derived from a government issued key. This ensures the authenticated user's uniqueness, valid citizenship and the right to vote without giving away their physical identity to the application. It ensures that every participant corresponds to a physical person not a bot, a citizen not a foreign propaganda worker. 

### Pseudonymity 

Displaying real names would increase the quality and civility of discourse, as every citizen would participate with their personal reputation at stake. But this can only work in a society where the public does not tolerate persecution for political views and defends freedom of speech. History shows that this is rarely the case and can change unexpectedly within one's lifetime. 

So instead all content in the application is **pseudonymous** \- each citizen's trustful pseudonym is a unique unchangeable identifier that lets anyone find and view their political activity on the application, but does not identify them in person, not even to the application itself. 

As long as citizens don't reveal their identity: 

* Pseudonymity protects them from political repression, physical violence, economic coercion and social pressure to vote in a certain way or as a punishment for having voted in a certain way or having expressed their true values on the application. 

* Pseudonymity increases participation, as citizens are more willing to engage in controversial issues and vulnerable groups, minorities and dissenters feel safer. 

* Pseudonymity still incentivizes citizens to be civil and post only when they have something to contribute if they want to receive delegations from others, as their past activity can be easily viewed and informs others on their values, consistency of thought and domain-specific expertise and prediction accuracy. 

* Pseudonymity ensures that project reviews are liked or disliked, changes to problems and projects are approved or disapproved, problems are prioritized and projects are voted on based on the soundness of their reasoning and referenced evidence, not based on authority, status, credentials or social identity of the author. Appeal to authority is a cognitive shortcut that makes sense in day-to-day decisions but contributes no new information to decision making and leads to reduced participation and sliding to autocracy in governance. 

## Authorization

The application would distinguish between following authorization roles: 

* **Unauthenticated visitor** \- can view all content, but can't contribute any. 

* **Voter \-** an authenticated voting age citizen. Can do whatever a 'citizen' or 'voter' is mentioned as being able to do. 

* **Moderator \-** a voter with an additional revocable moderator credential in their wallet, who is employed by an institution to flag and hide illegal content. 

* Lawyer \- a voter with an additional revocable lawyer credential in their wallet, who is employed by an institution to post Legal type reviews to proposals and commit edits to Candidate versions of Legislative and Institutional projects to improve their legal language. 

* **Election manager** \- a voter with an additional revocable election manager credential in their wallet, who is employed by an institution to organize elections. 

* **Authenticated underaged citizen** \- can do what a 'citizen' is mentioned as being able to do, but cannot do what a 'voter' can do. In summary, they can edit their notification settings and follow/unfollow problems, projects and ministerial domains, flag problems, projects and reviews for moderation, react to reviews, commit edits to existing problem and project versions and write reviews. They are excluded from voting and pledging budgets, creating new problems and projects (as these are restricted by the pledgeable budget), approving/disapproving changes to problems and projects, prioritizing problems and participating in prediction markets. 

## Societal problems

Citizens collaborate to describe **societal problems** \- a title, description, ministerial domains, metrics and scope (local, regional, state, federal/union or global level). Chapter [Iterative collaboration on problems and projects](#iterative-collaboration-on-problems-and-projects) describes the collaboration process in more detail. 

In addition, each problem links to the projects that address its metrics.

### Measuring progress

The most important aspect of each described societal problem are the **metrics** that are used to measure progress in solving or mitigating the problem. A metric is either discrete or continuous. 

A **discrete metric** defines discrete and testable states that, when reached, indicate that this problem is solved or partly solved. E.g. "Voters can delegate their voting right". As discrete states are less common in nature and more common in institutions and in code of law, discrete metrics are typically derivable from enacted laws and administrative data.

A **continuous metric** is a measurable value, that indicates society's progress toward a desired direction infinitely or toward a desired final value from one or two directions. E.g: 

* Maximum [healthy life expectancy at birth](https://www.who.int/data/gho/data/indicators/indicator-details/GHO/gho-ghe-hale-healthy-life-expectancy-at-birth) in years, so more is always better. One direction. No final target value. 

* Involuntary unemployment ratio anywhere below 1.5%, so lower is better until a 1.5% frictional rate, after which further reduction is not counted as progress. One direction. One final target value. 

* Inflation at 0% \- higher is worse and lower is also worse. One target. Two directions. 

It is just as important to avoid [pitfalls of using measures as metrics](https://www.ribbonfarm.com/2016/06/09/goodharts-law-and-why-measurement-is-hard/). These pitfalls are:

* Measurements of a metric get distorted, if measured by parties interested in optimizing the metric. Different institutions should be responsible for executing projects and measuring their impact. 

* Simplifying complexity of a desired outcome to a small number of metrics leads to optimization of the metrics without reaching the desired outcome. The more abstract a problem is and the more causal factors it depends on, the more metrics should be used to describe its desired resolution to avoid optimizing for the wrong outcomes. 

When adding a metric to a problem, an existing metric can be selected or, if no existing metric is suitable, then a new metric can be constructed as an algebraic formula, where variables are selected from statistical source variables, administrative data variables and other metrics. 

When adding more than one metric to a problem, each metric's **share of importance** is set on a slider as a fraction between 1% and 99%, so that they add up to 100% (divided equally by default). This fraction is the share of the problem's total priority received by the metric (see chapter [Prioritizing problems](#prioritizing-problems)). 

State-wide, regular and high quality collection of statistics and administrative data from which metrics are derived creates continuous expenses for a statistics bureau, so if a metric cannot be composed from existing statistics or administrative data and new statistics have to be collected to measure it, then a new Institutional project has to be Enacted (see below on projects and see chapter [Enacting a project](#enacting-or-rejecting-a-project) on enactment) that defines what new statistics need to be collected and funds their collection. This ensures that new metrics reuse statistics that are already collected where possible, only cause new expenses when necessary and their usefulness is reviewed by the same voters who pledged support for their creation, as they keep pledging a part of their annual government budget allocation (see [Project funding](#project-funding)) to the Institutional project to fund the collection of these statistics. 

This requires the creation and integration with two new services of the statistics bureau \- one for querying an up to date list of statistics and administrative data variables available for defining metric formulas and another for querying and storing new aggregate values of these statistics and administrative data necessary to calculate updated values of metrics.

This role puts immense corruptive pressure on the state's statistics bureau, so it has to be very transparent in its processes, regularly audited and not dependent on **any** external institution for its funding or decisionmaking aside from this democracy application. 

### Prioritizing problems {#prioritizing-problems}

If a voter thinks that a problem is worth solving, they can give it a personal **priority grade** on a granular scale of positive integers, e.g. from 1 to 10 where 1 could mean "A nuisance" and 10 could mean "The most important and urgent problem for me". 

A problem's **total priority** to society can then be calculated simply as each voter's priority grade for this problem times the number of votes the voter holds for this problem's domain, summed up over all voters. The number of votes that a voter holds for prioritizing a given problem is the voter's own vote plus votes that are delegated to them by other voters who have not rated this problem personally. 

Each voter can change their priority ratings at any time and every time they do, it changes the problem's total priority. 

Each problem's total priority can then be used to derive the importance of its progress metrics. The **importance of a metric** can be expressed as its share of importance (see previous chapter) times the problem's total priority, summed up over all problems whose progress is measured by this metric. Weighting each metric by its share ensures that problems with the same total priority but a different number of metrics have the same total influence on the social welfare index (see chapter [Aggregating values of society](#aggregating-values-of-society)). 

## Projects

Every voter can propose Legislative, Executive and Institutional projects. 

Every project has a plaintext title, a status, a markdown description and different types of projects have different additional attributes described below.

A project can also reference prerequisite projects that have to be Enacted or Implemented before this project can be Enacted. A new prerequisite can be added by searching among projects that are not already direct or indirect prerequisites for this proposal and for which this proposal is not already a direct or indirect prerequisite. 

A user can "view all dependencies" \- open a tree graph where the central node is the opened project, nodes below it are its direct and indirect prerequisites and nodes above it are projects for which it is a direct or indirect prerequisite. Each node shows the title and status of its project. 

### Legislative projects

A **Legislative project** is a set of changes to the constitution, laws or treaties, that:

* Has to have a date when it would enter into force if Enacted;

* Can have references to other Enacted Legislative and Institutional projects that this project will change, if Enacted. 

* Has to gain a majority or a supermajority of votes for its Current version to become an Enacted version. 

* Has to reference what metrics it aims to improve and how the proposed changes intend to improve each metric. 

* Does not have a budget. 

* Has to reference a domain. Although Legislative projects have no budget and no responsible institution (everyone has to follow the new laws), it is still useful for search convenience to categorize a Legislative project's ministerial domain. 

* Does not include executive orders.

* Its scope can't be set as local or regional. Only state, union/federal or global. 

### Executive projects

An Executive project:

* Also has to reference what metrics it aims to improve and how the proposed actions intend to improve each metric. 

* Has to follow existing laws; 

* Has to reference one responsible ministerial domain. Whichever institution is responsible for this domain, will also become responsible for this project and receive its budget, if Enacted. 

* Has to have a budget defined for up to a year, sufficient to successfully implement the project, along with optional stretch goals \- expected increases in impact or additional activities that can be carried out within the same period, if pledged funding reaches these higher goals. 

* The budget has to be broken down into standard accounting expense type lines where each line has a justification. To restrict scope creep and corruption the budget cannot be transferred between these expense types during implementation except for a special line that is explicitly budgeted for unforeseeable expenses and cannot be expended on its own without first being allocated to another budget line. 

### Institutional projects

An Institutional project:

* Also has to reference what metrics it aims to improve and how the proposed changes intend to improve each metric. 

* Introduces both legislation and executive orders at the same time. A typical example is every institution \- it needs a law that gives it authority to decide and act on behalf of the voters in specified matters of public benefit and it also needs a budget to cover its fixed costs.

* Can have references to other Enacted Legislative and Institutional projects that this project will change, if Enacted. 

* Has to meet requirements of both legislation and an Executive project. E.g. it has to have a date when its legal changes enter into force and it also has to have a budget and to reference a responsible ministerial domain or create a new ministerial domain and a new institution responsible for this domain. 

* It has to collect both a majority/supermajority of votes and meet its budget goal in order for its Current version to become Enacted. 

* Its budget can only contain fixed costs and costs on work in the public benefit that might change in volume over the years, but can't be reasonably expected to run out even in the long term. 

* An Institutional project's budget is only described for its first year. If it gets Enacted, then voters who voted in its favour and pledged to its budget also pledge the same amount to this institution each following year by default until they change their funding allocation to this institution at any time by increasing or decreasing it or until they end their funding of this institution by changing their vote to be against it. This change reflects their changing priorities and will apply to all future budget years. So in future years the institution will have to act within that year's allocated budget to its best ability and will be motivated to more transparently communicate the public benefit of its work to stay funded. 

Institutions themselves would likely work more effectively in a liquid democracy if managed democratically, including even the defence force. Workers of an institution know best what works and what doesn't work in practice for fulfilling the institution's goals within its mandate. If they were given a choice to direct their efforts and to elect their managers, then such a bottom-up meritocratic and democratic institution would likely have similar qualities to those of worker cooperatives. Studies have shown that worker cooperatives have on average higher employee retention and motivation and statistically insignificantly different productivity and lifespan to that of capital managed firms. 

To prevent corruption and abuse of power, every government expense should be [monetized](https://en.wikipedia.org/wiki/Monetization) either by an Institutional project (including every ministry and institution) or by an Executive project. By default institutions should be prohibited from monetizing or financing themselves in any other way (including bond sales and currency issuance) unless explicitly allowed by legislation. This would give voters full control over monetary and fiscal policy unless they decide to delegate it for some very good reasons. 

## Iterative collaboration on problems and projects  {#iterative-collaboration-on-problems-and-projects}

Every problem and project has a **permanent integrated videocall** meeting (e.g. [jitsi.org](https://jitsi.org/)) that every citizen can join to discuss the problem or project and a **live chat** to share text messages during and between calls. 

Description of every problem and project is written collaboratively as a **versioned [markdown](https://en.wikipedia.org/wiki/Markdown) document**. All their other displayed attributes are also editable and versioned. 

**Every version of every problem and project is public and can be searched and opened for editing by any citizen.** 

Letting citizens continue editing any version of a project, even Proposed, Expired, Enacted, In Implementation and Implemented versions, ensures that citizens who followed and voted on the initial project will also find out about, and likely vote on, next phases of Enacted projects and new approaches to Expired or forgotten projects. This way the lineage of ideas and authorship of contributions is also preserved and citizens can focus on the proposed changes instead of wasting time re-analyzing whole projects whose previous versions they have already read and approved or disapproved. 

### Iterative committing and approval of versions 

Every time a citizen edits a version of a problem or a project and **commits** their edits, they become a **follower** of this problem or project and their edits are saved and published as a new **Committed version**. Voters following this problem or project are notified to **approve** or **disapprove** the edits. The commit's author is automatically counted as approving of it, if they are also of voting age. 

Problem versions can have following state flows: 

   Committed → Candidate ↔ Past   
                   ↓	       ↑  
                  🕥 → Current

Project versions can have following state flows: 

   Committed → Candidate ↔ Past   
                   ↓  
  Expired ←🕥← Proposed → Enacted →🕥→ In Implementation →🕥→ Implemented
                   ↓
               Rejected

Every problem and project can have any number of Committed and Past versions and up to one Candidate version**.** Problems can also have up to one Current version. Projects can also have any number of Proposed, Expired, Rejected, Enacted, In Progress and Implemented versions. Each version can only be in one of these states at once. 

Every voter can approve or disapprove any Committed, Candidate, Current or Past version of a problem or a project at any time. They approve or disapprove a version with their own vote and with all the votes delegated to them. 

Votes delegated within specific ministerial domains only apply to approvals/disapprovals of problem and project versions categorized under any of the delegated domains. If the problem or project version has a parent version, then the parent version's ministerial domains are used instead of the version's own domains. This prevents citizens from changing domains to ones where their allies have more delegations just to get their changes accepted. 

Whenever a Committed or Past version is approved or disapproved by a voter, if there is no other Candidate, Current or Past version of this problem or project that has more **net approvals** (approvals in excess of disapprovals) than this version, then this version becomes the new **Candidate version** and any other Candidate becomes a **Past version**. This ensures that there is always up to one Candidate version of a problem or a project. 

When a user views a project, the Candidate version is displayed by default. If there is no Candidate version, the latest version is displayed. 

When a user views a problem, they see the Current version by default. If there is no Current version, the Candidate version is displayed. If the Candidate is also missing, then the latest version is displayed.

A voter can create a new problem or project by committing its first version. It automatically gains an approval from its author and immediately becomes a Candidate version, as it has no parent version whose number of net approvals it would have to match to become a Candidate. So these rules don't get in the way of agile collaborative writing in a small group while gradually growing more stable, legitimate and resilient to vandalism as the number of interested voters increases. 

Every commit including the first one is limited to 3600 added and 5400 removed characters (amount set by law). This limit motivates authors to express their thoughts concisely and to facilitate frequent iterative approvals. Additionally, every voter (except for lawyers hired to standardize the language of proposals) is limited to the same total characters added and removed per day across all their commits and reviews. This limits spam and vandalism while still fitting a whole prolific "writer's career" on the platform. 

While a citizen is editing a project, a language model can be used to continuously point out any conflicts that their edited version has with the constitution, other existing laws and treaties. The citizen can ignore a conflict if they think it's a false positive or address it by removing conflicting parts from their changes or by including changes to elements of existing laws, treaties and the constitution that are in conflict. 

### Candidate problems becoming Current 

If a problem's Candidate version remains the only Candidate for a week, it becomes **the Current version** and any other Current version becomes a Past version. This ensures that there is always up to one Current version of a problem. Voters who have prioritized the problem highly (e.g. above 5 on a 1..10) get notified to read the new Current version and change its priority grade if they want to. 

Any priority ratings that voters have given to any version of a problem only give weight to metrics included in its Current version. This limitation focuses the contributions of citizens to the version with the most net approvals instead of each writing their individual versions. 

Also, there is no way to fork a problem or a project. This encourages building consensus within one problem or project document incrementally, one commit at a time instead of everyone describing their own version of the same problem or solution without any sign of trust or approval from the majority. It also discourages duplication and encourages defining a state-wide or global problem at its highest common administrative scope instead of describing the same problem repeatedly for each administrative division. 

Problems don't have a Resolved state, as it is contentious to declare a problem resolved when there could always be someone for whom the problem is still unresolved. Instead the state of any problem can be evaluated based on the most recent measurement of its metrics. 

### Getting Candidate projects Proposed 

Projects don't become Current. Instead any voter can propose to put the Candidate version to a vote. Followers of the project are invited to vote in favour or against Enacting the Candidate version. If it gathers at least as many **net votes** (votes in favour in excess of votes against) as it got net approvals, it turns into a Proposed version and all voters who have voted on other versions of this project are invited to vote on this one. 

If a Proposed project contains time sensitive actions or for some other reason it cannot be implemented as described after a certain date, a voting deadline has to be set, after which this version of the project will Expire unless it is Enacted earlier. 

If a Proposed project cannot be implemented as described without some other projects being Enacted first or without some other Institutional or Executive projects being implemented first, then such projects have to be referenced by the Proposed project. Then it will not become Enacted until all projects required to be enacted become Enacted and all Institutional and Executive projects required to be implemented become Implemented. 

## Prediction of expected project outcomes

When a project becomes Proposed, two non-monetary [prediction markets](https://mason.gmu.edu/~rhanson/futarchy.html) (like those on [Metaculus](https://www.metaculus.com/)) are automatically opened for each of its metrics that ask voters to predict the value of the metric at the end of the project's period \- one market asks to predict it given the project is Enacted, the other asks to predict it given the project is not Enacted. The difference is the project's expected effect on the metric as predicted by one participant. 

In case of a binary discrete metric (a yes/no question or statement) predictors give a probability for the 'yes' answer or for the statement being true at the end of the project's implementation period and then the distance measured is the distance of their assigned probability from the realized probability (0% for 'no', 100% for 'yes'). 

Instead of risking losing money, participants risk reducing their **domain accuracy** scores. As participants have different areas of expertise, each participant has a separate accuracy score for each ministerial domain. They are updated as described in chapter [Updating domain accuracy scores](#updating-domain-accuracy-scores). 

Predictions can be made and changed until a project is Enacted. Only each participant's last prediction pair is used to calculate the project's expected effect and later to update the participant's domain accuracy score. 

Each participant's prediction is weighted by their accuracy score in the project's ministerial domain. The weighted average of all predictions is displayed next to each project to inform voters on its **predicted effect**. So a participant with a higher accuracy score in that domain has a stronger influence on the project's predicted effects, but their votes in favour or against the Proposed project still have the same weight as everyone else's. 

To disincentivize participants from giving negative predictions to a project's effects in the hopes that the project will not be enacted and thus no measurement will be made to reduce their accuracy score, **predictions are only accepted in pairs** \- each participant has to predict the expected metric both with and without the project Enacted, so regardless of the project's voting outcome, one of these predictions will be compared to the metric's actual value at the end of the project's period and the participant's accuracy score will be updated. 

Only voters can participate in policy prediction markets to prevent sabotage by foreign states. Voters who get notified of the new Proposed project version are also recommended to participate in its new prediction markets. 

## Notifications

Every citizen gets notifications about the problems and projects they are following (either individually or by following a whole ministerial domain) and on milestone amounts of votes on their project reviews or approvals/disapprovals of their committed project or problem versions. 

They can see their notifications where every notification links to its source \- a review, a problem version or a project version. A notification can be dismissed or the related problem, project or whole ministerial domain unfollowed without opening it. 

Notification settings let the user turn on/off forwarding of the in-app notifications as email or push notifications.

## Browsing 

### Browsing problems 

Every unauthenticated user can filter and browse a list of societal problems. Only problems with a Current version are shown. This excludes problems that have not had a single Candidate version that lasted longer than a week. 

Each problem is displayed with its title, total priority and ministerial domains. 

An authenticated citizen can also see the priority grades that they or their delegate has assigned to the problems and visually distinguish "unread" problems (they have not viewed its Current version yet) as well as additional filters to only show "unread" or ungraded problems.

Selecting a scope (global, union/federal, state, regional or local) will only show problems of the selected scope. If the user is authenticated, the problems are automatically filtered down to the user's administrative division of residence. They can select to view problems of another administrative division manually or clear the filter to view problems of all administrative divisions of the selected scope. 

Selecting a ministerial domain will only show problems of that domain. 

Problems can be sorted by:

* 🐥 newest Current version first (default), 

* 🤝 widest consensus first (see [Building consensus](#building-consensus) below), 

* 💸 most underpaid first (smallest ratio of total budget of Enacted projects that target any of the problem's metrics to total priority), 

* 💰 most spoiled first (largest ratio of total budget of Enacted projects that target any of the problem's metrics to total priority), 

* 🔥 highest increase in total priority in the past week/month/year, 

* 📉 most degraded first (most fallen metrics in the past month/year), 

* 📈 most improved first (most increased metrics in the past month/year), 

* 🔻 highest personal priority grade first. 

* 🥇 highest total priority first. 

### Browsing project versions

Project versions can be browsed and filtered in a list view. 

By default, only Proposed versions are shown, but other states can be selected.

An authenticated citizen can see the votes that they or their delegate has cast for the project versions and visually distinguish "unread" versions (that they have not viewed yet) as well as additional filters to only show "unread" or unvoted versions.

Selecting Legislative, Executive and/or Institutional project types will only show versions of the selected types. 

Selecting a scope (global, union/federal, state, regional or local) will only show versions of the selected scope. If the user is authenticated, the project versions are automatically filtered down to the user's administrative division of residence. They can select to view projects of another administrative division manually or clear the filter to view projects of all administrative divisions of the selected scope. 

Selecting a ministerial domain will only show project versions where this domain is set as the responsible domain. 

Project versions can be sorted by: 

* ⚖️ votes closest to a tie first (default, see [Tiebreaking](#tiebreaking) below. Excludes Committed, Candidate and Past versions, as they have not been put to vote), 

* 🤝 widest consensus first (see [Building consensus](#building-consensus) below), 

* 💸 most neglected first (highest ratio of predicted relative improvement of any metric to the project version's budget), 

* 🔥 most approvals, disapprovals and votes in the past week first, 

* 🐥 newest first, 

* 📈 highest predicted relative improvement of any metric first, 

* 💰 largest budget first, 

* 🔺 least approvals, disapprovals and votes first, 

* 🔻 most approvals, disapprovals and votes first. 

### Building consensus  {#building-consensus}

We can bring out problems, project versions and reviews that build consensus by sorting them using an algorithm similar to that of [vTaiwan](https://info.vtaiwan.tw/) \- show first the problems, project versions and reviews that gather the most support (in favour votes and approvals) from pairs of voters who have given the most opposite votes, approvals/disapprovals and reactions on past matters:

* One approved a problem or project version while the other disapproved it. 

* One prioritized a problem high while the other \- low. 

* One voted in favour of a project Proposal while the other \- against it. 

* One left a [Supportive review](#reviewing-a-project) of a Proposal while the other \- an Opposing one. 

* One liked a review while the other disliked it. 

So at the end of such a sorted list would be problems, project versions or reviews whose each pair of supporters have given the least amount of total opposing votes, approvals/disapprovals and reactions in the past. 

### Tiebreaking {#tiebreaking}

Aside from consensus, projects should also be ordered by how close they are to the number of votes needed to Enact a Proposed version. So if a project has to have 1% of votes more in favour than against to get Enacted, then projects with 0.99% or 1.01% more votes in favour than against would be some of the first projects to be shown to users while projects that are far ahead (e.g. 31%) or far behind (e.g. \\-29%) in votes in favour minus votes against as a ratio of total eligible votes would be low in the sorting order. This helps prevent minorities from forcing through projects opposed by the majority by bringing close call projects to voters' attention. 

## Reviewing a project {#reviewing-a-project}

Problems and projects have no comments section. To direct citizens away from high frequency and low quality personal interactions and toward low frequency and high quality on-topic expression of opinions, every citizen can leave one **review** per every Proposed version of every project. 

Each review is one of these types: 

* Support 

* Oppose 

* Inform 

Citizens can edit their review and its type as long as the project is in Proposed state. 

In addition, permissioned state lawyers can post a Legal type review that is displayed first. 

## Flagging and moderation

The application must employ moderators who hide illegal content. Content rules of such legislative applications are so important, that citizens may want to enshrine them in law so breaking them would indeed be illegal. 

Citizens can flag each review and problem or project version, which lands it into a queue for human moderators to review. The application needs to support integration with moderation and automatic spam detection tools to flag content for human review and automate labelling and prioritization of cases in the queue. 

It might make sense to disable image embedding altogether to reduce prevalence of memes over original thought. Citizens would still be able to link to external images. 

Citizens are notified if their content is hidden. Any voter can review all cases of hidden content in a separate view with a content warning, where they can verify that these are not cases of political censorship, and initiate a dispute if necessary. 

To warn users of potentially misinforming content that doesn't clearly break content rules, a language model can be used to validate claims against reliable and neutral sources of facts and display the relevant facts next to the suspect content with references to sources. 

## Viewing profiles and vote delegation

A voter can search citizens by their pseudonym.

A voter can click a pseudonym or a randomly generated thumbnail of an author of a problem version, proposal version, approval, disapproval, vote, review or videocall chat message to open their profile, where they can:

* See the pseudonymized citizen's prediction accuracy score in each domain.

* See the pseudonymized citizen's timeline of problem and project version commits, approvals and disapprovals, Proposed project votes, reviews and metric predictions, candidacies in elections, etc. The timeline can be filtered by type of content. 

* Delegate their vote to this pseudonymized citizen indefinitely or until a selected date, in all or only selected ministerial domains. 

## Voting on Proposed projects

Every voter can vote once in favour or against each project's each Proposed version. They can change their vote as long as the project version is in Proposed state, which means until this version becomes Enacted, Rejected or Expired (by reaching its voting deadline, if any). 

The count and percentage of eligible voters who voted in favour and against a project is displayed on Proposed, Enacted, In Implementation, Implemented, Rejected and Expired project versions. 

### Voting on local problems and projects

**In case of problems whose scope is set to a single administrative division** (as defined in the problem's Current version) **and Executive projects that tackle only problems of a single administrative division** (as defined in the project's Proposed version)**, only voters registered as residents in that administrative division or holding delegations from such residents are eligible to prioritize such problems, vote on such Proposed project versions and their reviews and approve or disapprove of changes to these problem or project versions.** In case of all other problems, all other Executive projects and all Legislative and Institutional projects, all of the state's voters are eligible voters, because the problem or project either changes legislation or affects more than one administrative division. 

Constraining the number of eligible voters to local residents allows even the smallest county level initiatives (e.g. to build some benches in a park) to gather enough support and get implemented quickly. It also incentivizes authors to constrain the scope of their problems and projects, so problems that can be solved locally are solved locally. 

To be able to constrain voting to only voters registered in a region or county that is defined as the problem's scope, the government has to provide a service to digital identity wallets that are used to authenticate with the application. This service has to return a credential verifying the wallet holder's region and county of residence (or any other administrative division levels used in the state) at the time of issuing. The wallet used for authentication has to be able to generate an anonymous version of the credential, verifying the holder's residence to the application. 

Defining too granular administrative division levels risks revealing the identity of voters. 

### Free legal consultation on projects that are gaining traction

If a Proposed version of a state-wide or international project gains e.g. over 0.01% of votes of all voters (ratio set by law), then a government employed lawyer is assigned to review it and post a "Legal" type review within a set number of workdays with references to remaining unresolved legal conflicts. This review informs voters on whether this Proposed version would require a majority or a supermajority of votes to be Enacted and what would be the resulting legal changes. 

### Educating voters 

When a citizen contributes for the first time to a ministerial domain in any way (with a commit, vote, approval/disapproval, review, reaction, etc), a dialogue window opens, where a language model asks some questions that show the citizen's understanding of core causal relations relevant to the problems and projects of this ministerial domain or, if the citizen answers that they don't know or ask for explanations, then the language model explains these relations as well as terms that are frequently misunderstood and corrects the user's answer to help them form an informed decision. This way the average voter will be better informed before casting their vote or contributing to a new domain. It would increase the quality of projects, reviews and votes and even allow lowering the voting age limit. 

## Project funding {#project-funding}

Every voter can pledge both their personal money and government's budget to a Proposed project version if they voted in favour of it.

Participatory budgeting would work as a crowdfunding platform where every year the government provides every voter with an equal pledging budget that they can allocate among all Proposed Executive and Institutional projects and their stretch goals. 

The pledged sum will only be spent if the Proposed project version becomes Enacted and only within the project's duration period (In Implementation status) and only according to the budget of its core activities and stretch goals. 

The amount that each voter can pledge to projects from the government's budget is defined by law and stays the same until a Legislative project is Enacted to change this law. It is reasonable to change this amount each year to make sure that the government spending balances out the excess or lack of private spending and smooths out the business cycle. 

When a voter creates a new problem or project, it reduces the amount that they can pledge from next year's government budget by e.g. 1/10 of the total amount (a ratio set by law). This sets a hard limit of 10 new problems and projects per year per voter, prevents flooding the platform with spam and incentivizes voters to collaborate and build consensus, to focus on quality over quantity and to contribute to existing similar problems and projects instead of creating duplicates. 

## Enacting or Rejecting a project {#enacting-or-rejecting-a-project}

**Any Proposed project version automatically becomes permanently Rejected, if at least a majority of eligible voters votes against it.**

**A Proposed version of a Legislative project automatically becomes Enacted, if at least a majority or supermajority of voters supports it as required by the constitution** (E.g. over 2/3 to change the constitution and over 1/2 to pass laws) **and all its prerequisite projects are fulfilled** (those that had to be Enacted are Enacted and those that had to be Implemented are Implemented)**.** 

Requiring less than a majority of votes to pass laws would be problematic, as there could arise two non-overlapping groups of voters who are both large enough to pass laws but want to pass conflicting laws. In a direct democracy reaching such proportions on a regular basis would be extremely time consuming, but in a liquid democracy it works similarly to how it works in a representative democracy \- voters only vote directly on questions they care about and leave the rest to domain experts whom they trust and share values with. 

**A Proposed version of an Institutional project automatically becomes Enacted, if it reaches its minimum budget goal and the support of at least a majority or supermajority of voters as required by the constitution.** All its prerequisite projects also have to be fulfilled.

**A Proposed version of an Executive project automatically becomes Enacted, if it reaches its minimum budget goal, all its prerequisite projects are fulfilled and if votes in its favour** **exceed votes against it** (a.k.a. its net votes) **by at least a certain fraction** (e.g. 0.1%) **of all eligible voters for at least a number of consecutive days** (e.g. 7 days in a row). This period gives voters enough time to notice and vote down malicious or humorous projects. 

## Implementing a project

When an Executive or an Institutional project is Enacted, the institution responsible for its ministerial domain also becomes the institution responsible for leading this project's implementation. It is constitutionally obliged to execute the project within constraints of the law, within its ministerial domain (also defined by law) and to the best of its ability, following both spirit and letter of the project. The leading institution can collaborate with other institutions in implementing this project, sharing its funding and responsibilities. 

## Updating domain accuracy scores {#updating-domain-accuracy-scores}

A **realized prediction** is one of the pair of predictions whose assumption came true. So if a Proposed project did not become Enacted, then the realized prediction is one that predicted the project's metric given the project is not Enacted and vice versa.

Regardless of whether a Proposed project became Enacted or not, when its planned implementation period's end date arrives, each of its realized predictions is compared to the metric's value as calculated using the latest statistics and administrative data. 

The participant's accuracy score for this prediction relative to other participants is then calculated as [a Metaculus Peer score](https://www.metaculus.com/help/scores-faq/). Benefits of the **Peer score are**:

* It is simple to understand \- the average difference between a realized prediction's log score, and the log scores of all other realized predictions of this metric at the project's end. 

* It is a proper scoring rule, so more extreme predictions will not score higher than more accurate predictions. 

* The sum of all Peer scores in the same prediction market is 0, an average prediction's score is 0, a more accurate prediction's score is positive and a less accurate prediction's score is negative. So participants who try to participate in as many easy metric predictions as possible to raise their score will achieve no gain on average. 

* Peer scores of predictions of different discrete and continuous metrics get a similarly sized increase or decrease for predictions that are similarly more or less accurate than an average prediction. So a voter's **domain accuracy score** can be calculated by adding up the Peer scores of all their realized predictions of metrics related to projects categorized under that ministerial domain. 

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

 

## Using the application as a learning resource 

A secondary use for this governance application is to serve as a free and open learning and research resource where users can read about problems facing society, learn about past and current competing policy proposals and their pros and cons, not from a critical or adversarial stance of any specific ideology, but from a constructive approach of an egalitarian and rational problem solver who wants to make life better for everyone. By answering questions posed by a language model a user could test their understanding of a problem, its causal links with other problems and important terms used to describe the problem and the proposed solutions and arguments. 

## Aggregating values of society {#aggregating-values-of-society}

What the whole society values \- a **social welfare index** can be expressed as the combination of all metrics, each weighted by its importance \- a kind of [cardinal](https://en.wikipedia.org/wiki/Cardinal_utility) [social welfare function](https://en.wikipedia.org/wiki/Social_welfare_function). For that, metrics have to first be scaled to a comparable size (normalized): 

* A discrete metric can be normalized by mapping its target or ideal value to 1 and its worst value on record to 0\. 

* A continuous metric with no target value and one target direction (like healthy life expectancy at birth) can be normalized by mapping its best value on record to 1 and scaling its worst value on record to 0\. If the target direction is to minimize the metric, then such scaling will flip the sign of the metric (decrease in the metric will increase the normalized value). 

* A continuous metric with one target value and one target direction (like to get involuntary unemployment anywhere below the frictional rate) can be normalized by mapping its target value to 1 and scaling its worst value on record to 0\. 

* A continuous metric with one target value and two target directions (like inflation/deflation) can be normalized by mapping its target value to 1, scaling its worst deviation in any direction on record to 0 and calculating its each value before normalization as its absolute deviation from the target instead of its raw value. 

### Shifting metric importance to root causes

When one metric measures an effect (e.g. poverty) that causes downstream effects (e.g. homelessness, crime, etc) measured by other metrics, then to focus society's efforts on solving the upstream problems that are the root causes, we can calculate the covariance of downstream metrics to the upstream metric (the portion of their change that can be explained by change in the upstream metric like poverty) and give a proportional part of the importance of downstream metrics to the importance of the upstream metric. For example, if problems measured by a relative poverty rate metric give it a total priority of 40 while problems measured by homelessness rate and crime rate get more attention from voters and give them priorities of 100 and 60 respectively, then if half of both homelessness and crime can be reliably predicted by the relative poverty rate, then half the priority of homelessness and crime rate (so 50 and 30\) are subtracted from their total priority and added to the total priority of the relative poverty rate (40 \+ 50 \+ 30 \= 120). This is a simplified example and there are likely mathematically more precise ways of achieving this, but simply moving total priorities upstream based on covariance of metrics that are reliably causally linked already shifts focus to root causes quite fairly. Creating such a causal link between metrics is a scientifically grounded proposal, but to avoid conflicts of interest, it still has to be Enacted as a project (see below on projects and see chapter [Enacting a project](#enacting-or-rejecting-a-project) on enactment).

### Preventing duplication from increasing a problem's weight in the index

A group of voters could intentionally create similar problems with similar metrics to inflate the weight of these problems through importance of their metrics in the index. There is no way of knowing whether this duplication is intentional or unintentional, so instead of trying to discern such duplicate problems, the application can treat all metrics with an improbably high correlation over a sufficiently long period as duplicates and only use one of them that has the highest importance. 

The downside is that priority grades given in good faith to problems with unintentionally duplicate metrics would lose part of their importance. To avoid this, each time a metric formula is added or changed, the application should calculate its correlation to every other metric that uses any of the same statistics or administrative variables. If any existing metric has a correlation above a reasonable limit, e.g. 0.9, show a warning message to the user who defined the formula and also a permanent warning on all problem versions where any duplicate metrics are used, except for the metric used in calculating the index (the one with the highest importance among the duplicates). Such a warning would give feedback to intentional duplicators and let them create near duplicates that would slip by, but not showing such a warning would make the governance system opaque \- a far worse outcome. So instead a good balance has to be found with the value of the correlation limit. 

# In search of metrics of societal progress

## Stocks and flows as metrics

A flow is an amount of something moving from one stock to another in a period of time. For example, consumption is a total amount of currency flowing from households to firms in a year and reflects the opposite flow of goods and services from firms to households in the same year. A flow does not inform us about the stocks it is moving between \- how many goods do the firms and the households hold before and after the flows are accounted for. 

Whether a metric should be a stock or a flow of some measurable quantity depends on whether reaching a certain higher or lower stock or a certain positive, negative or zero flow helps or hinders in achieving a valuable goal or mitigating an important problem. 

For example whether a population's total consumption since the beginning of written records is high or low doesn't help us evaluate the population's current or future welfare, but last year's consumption in combination with metrics of income distribution inequality and consumer price index would be much more informative. 

In other instances a stock is a better metric of improvement than the flow of that stock. For example building more infrastructure, like energy storage, could be good, but it could also be wasteful, if we already had enough. Here setting a goal as a stock is more useful. 

## Combining metrics into a single measure of progress

To add up different metrics into a single aggregate measure of how well the society is doing, we would need to convert them to a common unit. As so much is already priced in currency, we might as well evaluate every stock and flow that the society values in terms of currency that would need to be spent to reproduce this stock or flow at the society's current productive capacity and indexed prices. But the price to reproduce a stock or a flow is not its value. Its value also depends on what problems it helps to mitigate and how much the society values solving these problems, reflected in priorities set to the problems that the measured stock or flow is meant to improve. Something that the market price often fails to incorporate. 

So a metric can be made comparable to other metrics by converting it to the cost of reproducing its stock or flow and then weighting it by its importance, as derived from the priority grades assigned to problems that this metric measures and the importance share of this metric in each of these problems. 

As we are interested in cost in real prices, not nominal prices, they should be indexed to prices at a certain year to prevent price inflation from inflating our metrics as well. 

## Beyond GDP

Gross Domestic Product is a sum of the prices of goods and services that a state's economy has provided in a year. Whether these goods and services are the optimal way to increase society's current and future welfare depends on how much potential welfare is not reached:

* Due to inefficient distribution of spending power \- some waste society's productive potential on luxuries while others lack money to buy necessities or lack access to, or even awareness of, the markets that affect their welfare. 

* Due to externalization of costs of production and distribution \- goods and services are provided at a price that internalizes only the cost to producer and suppliers, not hidden costs to the buyer, workers, the government, society and to other species. 

* Due to the conflict of interests between workers who want higher wages, better working conditions and reduced externalities to their living environment and firm owners who want to reduce costs for higher profits and are often remote shareholders not directly impacted by externalities of production. 

* Due to the buyers lacking information about the product or service they are buying, foresight of the long-term consequences of its production and understanding of the world and the motives of other actors. 

A society that tries to maximize its productive capacity risks ignoring the reason why it needs this productive capacity in the first place, mistaking a means for an end, forgetting to strive for human and animal welfare and to mitigate risks of extinction, suffering and backsliding of technological, scientific and civic progress. 

## Measuring societal benefit instead of productive capacity 

GDP is a faulty starting point even as a macroeconomic aggregate metric. 

GDP \= Consumption \+ Investment \+ Government spending \+ Exports \- Imports.

* Investment and government spending are costs \- This money is used to employ real resources and people's time that could have been used otherwise. Whatever benefit comes out of investment is reflected in higher consumption. Whatever benefits result from government spending are reflected in metrics of welfare and risk mitigation not included in the GDP. So both have negative utility for society and should be subtracted, not added to a metric of societal benefit. 

* Export is a cost on society in terms of hours worked, energy used, soil eroded, minerals used, etc. Likewise, import is a benefit to society \- necessary goods received in exchange for the dominant international trade currency (currently USD). Exports are a necessary evil to earn just enough international trade currency to buy all the necessary imports, no more. So exports should be subtracted as a cost to society and imports added as a benefit. 

* Taxation should be included. A sovereign government that issues its own currency doesn't tax to earn that currency. Its spending is not constrained by the amount of currency it can issue. Taxes for such a government are tools to reduce spending power of buyers of certain goods or services in case of inelastic demand to prevent price inflation and as a tool to reduce the production of certain goods or services in case of elastic demand to price in externalities of producing these goods and services. So if more taxes were collected in markets with elastic demand, it means that more economic activity that the taxes were meant to prevent happened anyway. So collected taxes reflect negative utility for society and should be subtracted (in states with monetary sovereignty). 

Using the same macroeconomic flows we can construct a measure of the economy's benefit to society. Let's call it **Net Domestic Benefit** \= Consumption \- Investment \- Government spending \- Exports \+ Imports \- Taxes collected from markets with elastic demand. 

## Evaluating society's capital

It might seem cold-hearted to evaluate everything in terms of money, but we can only know if we progressed on something if we measure it. Some stocks that would need to be evaluated are: 

* **Environmental capital** \- Accessible and unused soil, minerals, fossil fuels and sources of renewable energy. Energy can be evaluated at projected prices of renewable energy. Finite resources like fossil fuels, soil and minerals can be evaluated in terms of the cost to synthesize the fuel, restore the soil if eroded or retrieve the minerals from a landfill; 

* **Civic capital** \- Institutions and civic organizations that provide social services and defend human rights and democratic values; 

* **Physical capital** \- Unamortized infrastructure and commodity stockpiles; 

* **Cultural capital** \- Works of art, music, literature, architecture, etc whose value could be measured by the amount of intentional viewers, listeners or readers per year globally. Intentional here could mean a person who chose to experience the work or began experiencing a long work incidentally and stayed until the end; 

* **Intellectual capital** \- The number and level of specialists in each area of expertise that can be measured using statistics on education, research and employment. 

## Evaluating welfare

The **change of welfare** (a flow) **of all humans, farmed animals and wild animals** per year can be made comparable to other stocks and flows by transforming it to the measure of cost \- evaluated in terms of the [average cost of modern effective charities](https://www.givewell.org/charities/top-charities) in gaining one disability-adjusted life year (DALY) for a human or a [comparable amount of farmed](https://rethinkpriorities.org/research-area/welfare-range-estimates/) or [wild animal](https://www.youtube.com/watch?v=zK_rSjEV7x0) welfare improvement. 

A more granular set of metrics of human suffering caused by ongoing problems could be:

1. Annual expected new cases of …

   1. death, 

   2. injury or onsets of disability, 

   3. violence; 

2. Annual expected person-days experiencing… 

   1. absolute poverty,

   2. untreated pain or malnutrition, 

   3. threats of violence to self or family, 

   4. treated or untreated symptoms of disease or mental illness, 

   5. illegal detention or involuntary separation from living family, 

   6. censorship of tolerant expression of thought or art, 

   7. disinformation or intentionally limited access to truth, 

   8. life under autocratic government. 

## Evaluating risk of loss 

**Risk of extinctions, suffering, technological and scientific regress** can be evaluated by multiplying their likelihood by the estimates of existing and future welfare loss that these risks would cause, if realized. 