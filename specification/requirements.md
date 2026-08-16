# How are requirements organized?

Most requirements in Volit are functional - they describe expectations to the application's behavior in response to user interaction in a particular view. To make requirements easy to find and minimize their duplication, they are organized into Markdown files in the `requirements/views/` folder and named after the views whose behavior they define. 

The visual conventions for reusable interface components are documented in `requirements/ui-design-system.md`.

As cron jobs are not user initiated, they should be described in a separate `requirements/cron-jobs.md` file.

Non-functional requirements should be defined in `requirements/non-functional-requirements.md`.

## Good functional requirements documentation ..

.. ensures the smoothest possible development and testing and allows you to intuitively find the latest valid requirements for any functionality. To achieve this:

1. Each displayed section or complex component in a view should be described as a separate chapter in order it is displayed in from top to bottom.

2. Each chapter should have a numbered list of requirements for its content.

3. Each requirement should be testable as an acceptance criterium and should describe in full sentences what should the user see in this content block from top to bottom. All sentences essentially answer the impersonal question “How to develop the component?” or “How does the component behave?”. The chapter at hand can be taken as an example of how to write requirements linguistically.

4. Texts that should be displayed verbatim in the UI are highlighted in requirements in bold. This also makes it quicker to visually spot requirements related to the UI element. For example, behavior of a **Commit** button or validation rules for a **Voting deadline** datepicker.

5. If a requirement describes a button or other interactive component, then what happens when the button is pressed or some other conditional behavior should be described as sub-list of this requirement.

    1. For example, like this.

6. If a component should behave differently depending on the user's role, the status of a displayed document or other condition, then first describe requirements to the common behavior in all cases and then below it make a sub-list of all cases describing the difference in behavior for each case and the conditions under which this case should be displayed. For example:

    1. “If the user has the Election Manager privilege and the election's nomination period is in the future, then display an **Edit** button.”

7. It is worth mentioning the user privileges and document states in the requirements with their unique code or exact name, so that the developer does not have to guess and so that it is easy to find all the requirements that refer to a specific privilege, state or classifier code.

8. If the requirement describes the display or storage of data, then it is worth referring to the specific table and attribute that needs to be displayed or where the entered value should be stored. For example, “**Domain** (project_version.responsible_domain), a single select typeahead that filters over names of all ministerial domain codes”.

9. Duplication of requirements should be avoided in the code repository and even outside of it, like in task descriptions. Instead the file, chapter and item numbers of requirements should be referenced. For example "(see points 2 to 4 of the Filters chapter in specification/requirements/views/problems.md)"
