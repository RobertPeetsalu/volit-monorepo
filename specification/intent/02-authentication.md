# A web application to practice liquid democracy

Here's how a continuous liquid democracy could work in an app. 

## Authentication

The application's content is public, but only strongly authenticated citizens can participate. Until [zero-knowledge proofs](https://en.wikipedia.org/wiki/Zero-knowledge_proof) were invented, there was no way to do online voting so that voters could stay pseudonymous while allowing anyone to verify that the vote was signed by a unique citizen. Now it is possible. To support this: 

* A user has to possess a personal digital identity wallet that contains their citizenship and birth date credentials and credentials for any additional responsibilities they have in the application like moderator, election manager or lawyer. 

* The government has to issue these cryptographically signed credentials and publish the issuer's public key so that anyone can verify the validity of these credentials and all signatures and proofs derived from them. 

* The user's identity wallet has to be able to derive and present anonymous versions of these government issued credentials, a value called a scoped **nullifier** and a zero-knowledge proof that the nullifier was computed correctly from the liquid democracy app's web domain and the secret of the user's citizenship credential without revealing the credential to the application. 

  * The liquid democracy app will use the nullifier as the user's **trustful pseudonym**, identifying the user across sessions and persisting as long as their citizenship credential is valid. If they get a new citizenship credential, they will also get a new pseudonym the first time they use it to authenticate on the liquid democracy app. 

  * The nullifier calculation is deterministic \- same input always results in same output. As each citizen only has one valid citizenship credential, this ensures that they can only generate one nullifier that will validate against the citizenship issuer's public key and the application's web domain. This ensures one active account per citizen. This also allows **making all voting results public** and enables anyone to validate that all votes are signed by users with different pseudonyms and valid proofs of citizenship and voting age, meaning that they are all **unique citizens without finding out who they are**. 

  * This solution relies on the citizenship issuer to revoke citizenship credentials once they expire or the citizen dies and to only issue them to real citizens. 

  * Using liquid democracy application's web address as input ensures that the resulting pseudonym is different from the user's pseudonyms in other applications and cannot be linked to them to identify them. 

  * The [EUDI standard](https://digital-strategy.ec.europa.eu/en/policies/eudi-regulation) requires wallets to be able to present credentials anonymously, but does not yet require wallets to support nullifier presentation, so EU Digital Identity Wallets would need to extend their cryptographic functionality to support them. It would already be enough if at least one open source EUDI wallet is extended to support nullifier presentation as part of developing the liquid democracy application. 

### Pseudonymity 

Displaying real names would increase the quality and civility of discourse, as every citizen would participate with their personal reputation at stake. But this can only work in a society where the public does not tolerate persecution for political views and defends freedom of speech. History shows that this is rarely the case and can change unexpectedly within one's lifetime. 

So instead all content in the application is **pseudonymous** \- each citizen's trustful pseudonym is a unique unchangeable identifier that lets anyone find and view the citizen's political activity on the application, but does not identify them in person, not even to the application itself. 

As long as citizens don't reveal their identity: 

* Pseudonymity protects them from political repression, physical violence, economic coercion and social pressure to vote in a certain way or as a punishment for having voted in a certain way or having expressed their true values on the application. 

* Pseudonymity increases participation, as citizens are more willing to engage in controversial issues and vulnerable groups, minorities and dissenters feel safer. 

* Pseudonymity still incentivizes citizens to be civil and post only when they have something to contribute if they want to receive delegations from others, as their past activity can be easily viewed and informs others about their values, consistency of thought, domain-specific expertise and accuracy of past predictions (see [below](#updating-domain-accuracy-scores)). 

* Pseudonymity ensures that project reviews are liked or disliked, changes to problems and projects are approved or disapproved, problems are prioritized and projects are voted on based on the soundness of their reasoning and referenced evidence, not based on authority, status, credentials or social identity of the author. Appeal to authority is a cognitive shortcut that makes sense in day-to-day decisions but contributes no new information to decision making and leads to reduced participation and sliding to autocracy in governance. 

