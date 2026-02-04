# Recipe App

Recipe App is a simple web application built with Node.js and Express.js.
The project demonstrates basic routing, form handling, and server-side logic
using GET and POST requests by using req.body, req.params, req.route

---

## Team Members
- Fariza Arstanbek — SE-2424
- Ulzhan Nabiyeva — SE-2424

---

## Project Description
The Recipe App allows users to browse recipes displayed as cards and send
messages using a contact form. The project focuses on backend fundamentals
such as routing, handling user input, and maintaining a clean project structure.

---

## Implemented Routes

| Method | Route     | Description |
|------|----------|-------------|
| GET  | `/`       | Home page with navigation |
| GET  | `/search`  | Uses query parameter q |
| GET  | `/item/:id`| Uses route parameter id |
| POST | `/contact`| Handles POST request from contact form |
| GET | `/api/info`| Returns project information in JSON format |
| ALL  | `*`       | 404 page for unknown routes |

---

## Contact Form
The contact form includes:
- Name
- Email
- Message
