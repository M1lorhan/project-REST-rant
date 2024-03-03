# Project REST-Rant

Rest-Rant is an app where users can review restaurants.

| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | / | Home Page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/edit/:id | Form page for editing existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a praticular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a praticular place |
| GET | * | 404 page (matches any route not defined above) |

| Field | Type |
| ----- | ---- |
| name | string |
| city | string |
| state | string |
| cuisines | string |
| pic | string |