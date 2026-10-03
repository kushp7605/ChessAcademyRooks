#  The Rook's Chess Academy

A modern, responsive, and interactive website developed for **The Rook's Chess Academy (RCA)**.

The website provides visitors with information about the academy, chess courses, services, coaches, reviews, and contact details. It also includes interactive course enrollment and contact forms with **PHP and MySQL database integration**.

---

##  Project Overview

**The Rook's Chess Academy** is a full-stack academic web project designed to provide a professional online presence for a chess academy.

The project combines a responsive frontend with PHP-based backend processing and MySQL database connectivity.

Visitors can explore the academy, view available courses, submit course enrollment requests, and send messages through the contact form.

---

##  Key Features

###  Home

- Professional chess-themed landing page
- Academy introduction
- Responsive hero section
- Chess-themed visual design
- Fixed navigation header

###  About

- Academy introduction
- Information about the academy
- Learning-focused content
- Responsive layout

###  Services

- Academy services displayed using interactive cards
- Responsive card layout
- Hover effects and visual styling

###  Courses

The academy provides three different chess learning levels:

#### Beginner's Edge
**Basic Level**

Designed for students beginning their chess journey and learning the fundamentals.

#### Master Tactics
**Intermediate Level**

Designed for players who want to improve tactical thinking and intermediate chess strategies.

#### Grandmaster's Path
**Advanced Level**

Designed for advanced players focusing on higher-level tactics, endgames, and overall improvement.

###  Course Enrollment

Users can click the **Join Now** button for a course and complete the enrollment form.

The enrollment form collects:

- Course Level
- Student Name
- Age
- Gender
- Parent / Guardian Name
- Parent / Guardian Phone
- Email Address
- Address
- Preferred Date
- Preferred Time
- Previous Chess Experience
- Additional Message

The submitted enrollment information is processed using PHP and stored in the MySQL database.

###  Coaches

- Coach profiles
- Chess coaching information
- Responsive coach cards

###  Reviews

- Student reviews
- Feedback section
- Responsive review cards

###  Contact

Visitors can contact the academy through the contact form.

The form collects:

- Email
- Mobile Number
- Message

Contact information is processed using PHP and stored in MySQL.

---

#  Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Website structure |
| CSS3 | Styling and responsive design |
| JavaScript | Interactivity and client-side validation |
| PHP | Backend form processing |
| MySQL | Database management |
| phpMyAdmin | Database administration |
| XAMPP | Local Apache and MySQL environment |
| VS Code | Development environment |

---

#  Project Architecture

The project follows a simple frontend-backend-database architecture:

```text
                   ┌─────────────────────┐
                   │      Website UI     │
                   │      HTML / CSS     │
                   │     JavaScript      │
                   └──────────┬──────────┘
                              │
                              │ Form Submission
                              ▼
                   ┌─────────────────────┐
                   │        PHP          │
                   │  insert.php         │
                   │  contact.php        │
                   └──────────┬──────────┘
                              │
                              │ MySQL Connection
                              ▼
                   ┌─────────────────────┐
                   │       MySQL         │
                   │    rook_chess       │
                   ├─────────────────────┤
                   │   enrollments       │
                   │   contacts          │
                   └─────────────────────┘