# Lab 5.2 Short Documentation Section

## 1. What Changes you want(ed) to make in your application?

Pagination change:

- The changes I wanted to make were adding pagination to my employees as there are many employees within the application.

Organization Role-Based Authorization change:

- The changes I wanted to make were to have it so only members that are logged in can view the data about existing employees and leadership members. And also prevent members of low authorization level from having access to creating new members, updating and or deleting members.

## 2. What tool or tools you've made use of to make this change?

Pagination change:

- I had to update the backend to take in page values with different limitation for names, not including departments, and it was simply just using TypeScript, then I had to reflect that sage pagination to the frontend as a state, so then it pulls information from the backend for the next 10 users. The page total is simply calculated by the total pages and total employees found to the nearest whole number using ceiling operation.

Organization Role-Based Authorization Change:

- For this, I utilized the same tools as used for Lab 5.1, Clerk, and implemented the Organization components clerk provides. That way, I was able to simply have two users, part of one organization, one being a member, one being an admin while testing, but also allowing managerial position and permission as well if the user is authenticated so.
- I had to update the backend to accept based on role, which I simply verify using a middleware which utilized express's and clerk's getAuth and getting the organization role (orgRole) of the member that is logged in/authenticated, which then I limit operations from outside if they do not have the right Bearer authentication token for either admin or member (like using Postman) if there are attempts.
- As of right now, people who are not registered do have access to the data if they use Postman, but that can change quite easily by just requiring them to authenticate themselves, but the GET methods are staying public for now.
- To summarize, I used clerk with react, clerk with express, in-general, I used clerk for this and it's organization features.

## 3. How this change affects the user experience?

Pagination change:

- The way this change affects user experience is by preventing the need to scroll too far down to find out certain departments. That way you can focus on the ones you see infront of you.
- Another thing it helps with, is whenever a Manager or an Admin is trying to create a user, the only allows departments viewed (as in the ones returned from the database), will be applicable to add to within the department log. That way, it prevents creating an employee for a department that does not exist, personally, I would probably change this as it is not that good of a change, but it's unique.

Organization Role-Based Authorization Change:

- The way this change affects user experience, is by limiting the functionalities and possible changes that can be made within the application to just members who are trusted. Members with low authentication should not have the ability to view certain, lets say, forms such as the forms that add, or the buttons that let you edit or delete, especially since they do not have the same authorization level.
- Member at least can "refresh" by the click of a button in case they think there has been an update.

## 4. How this change affects your understanding, or conceptualization, of the app?

- For both, trying to simplifiy operations for users that should not have permissions as others, is quite important, it keeps the safety of the app but also the stability. Certain users obviously should have certain permissions, but those same users can at least have access to the basics.
- Being able to think for the betterment of the application, solving issues that existed for lets say, access and authorization bypass issues such as tokens and being able to bypass using the backend, and then having to fix that by requiring authentication for the important functionality of the application.
- Overall, it is good to brainstorm and re-think the applications flow, who should have access to what, what can be seen, what shouldn't be seen as it helps understand the structure better and keep the application safe as well.
