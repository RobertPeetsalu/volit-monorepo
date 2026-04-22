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

