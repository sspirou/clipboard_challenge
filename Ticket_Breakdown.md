# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

#### Ticket 1: Add custom id fields to database
- Add entry for agents to have a facility specific `custom_id`
- 1 agent can have many custom id's (1 per facility worked at)
- Perform any necessary migrations
- Validate db integrity after change
Estimate: Easy, 1 hour

#### Ticket 2: Add `setCustomID` endpoint
- Provide an endpoint that facilities can use to set an agent's custom id
- Write unit tests
Estimate: Easy, 2 hours
----
- This likely requires adding UI for facilities to do this in the app. I don't know specifics, but it should include:
- add button opening agent edit form for facility
- add custom id entry to agent edit form for facility
Estimate: Easy, 2 hours

#### Ticket 3: Update `getShiftsByFacility` to include custom id's
- Update the metadata returned by the function to include facility specific custom id's
- if no custom id exists, use internal db id of agent like before
- Update unit tests
Estimate: Easy, 2 hours