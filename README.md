#  Little Creatures Feel Big

 A full-stack emotional intelligence app for young children, built with React, Vite, JavaScript, Spring Boot and Java.

---

## About the Project

Little Creatures Feel Big is an educational and enrichment app for children from preschool through early elementary, made up of mini-games that help kids practice affirmations and name their feelings. Kids help friendly creatures feel amazing by choosing kind affirmations and match emotions to expressive faces. Every affirmation and feeling is read aloud in a real, recorded human voice, so pre-readers can play independently. Parents create an account, manage child profiles, and can choose who is playing, or jump right in with guest mode.

## Features

- **Kind Creatures:** help a creature feel amazing by choosing the right affirmation, with voice audio for every option
- **Feeling Friends:** explore and identify feelings using emojis paired with recorded audio
- **Parent accounts:** secure registration and login with BCrypt password hashing and session-based authentication
- **Child profiles:** parents can create, view, update, and delete child profiles
- **Guest mode:** try the games without creating an account
- **Custom voice recordings:** all audio was recorded and edited by the developer

## Technologies Used

| Layer | Technology |
| --- | --- |
| Frontend | React, Vite, JavaScript, CSS, HTML |
| Backend | Java 21, Spring Boot 4.1.0 |
| Data | Spring Data JPA, MySQL |
| Security | Spring Security, BCrypt |
| Audio | Recorded and edited in Audacity |
| Tools | VS Code, Git, GitHub, IntelliJ |

## Installation and Local Setup

This project has two parts, a backend and a frontend, and both need to be running at the same time.

### Prerequisites

Make sure you have these installed:

- [Java 21](https://adoptium.net/)
- [Node.js](https://nodejs.org/) (which includes npm)
- [MySQL](https://dev.mysql.com/downloads/)
- [Git](https://git-scm.com/)

### 1. Set up the backend

```bash
# Clone the backend repo
git clone https://github.com/Lyndseydj1808/little-creatures-backend.git
cd little-creatures-backend
```

**Create the database.** Make sure MySQL is running, then open it and run:

```sql
CREATE DATABASE little_creatures_db;
```

**Set your database credentials.** The app reads your MySQL username and password from environment variables named `db_username` and `db_password`, so you don't need to edit any files. In the terminal you'll use to start the server, run the commands for your system (swap in your own MySQL details):

```bash
# Mac or Linux
export db_username=YOUR_MYSQL_USERNAME
export db_password=YOUR_MYSQL_PASSWORD

# Windows PowerShell
$env:db_username="YOUR_MYSQL_USERNAME"
$env:db_password="YOUR_MYSQL_PASSWORD"
```

If you run the project from IntelliJ instead, add the same two variables under **Run > Edit Configurations > Environment variables**.

**Start the server** in that same terminal:

```bash
./mvnw spring-boot:run
```

The backend runs at `http://localhost:8080`. The tables are created automatically the first time it starts.

### 2. Set up the frontend

Open a **second terminal window**:

```bash
# Clone the frontend repo
git clone https://github.com/Lyndseydj1808/unit-1-project-Lyndsey-C
cd unit-1-project-Lyndsey-C

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open the link Vite prints in your terminal (usually `http://localhost:5173`) and the app should load. If the parent login or child profile pages say "Failed to fetch," check that the backend from step 1 is still running.

## Wireframes

[View the wireframes in Figma](https://www.figma.com/design/2f5I48JQLq5B0xIryxQlaY/Unit-1-project-wireframes--Unit-2-?node-id=0-1&t=YNpf0iBwOadqCVOP-1)

## ER Diagram 

A **Parent** can have many **Children** (one-to-many). Each child belongs to exactly one parent.

[View the ER diagram](https://drive.google.com/file/d/1Qr39eI9lqJTFUaKdW-N-_LcgUwdSu9-M/view?usp=sharing)

## Unsolved Problems and Future Features

**Known issues**

- The project is only running locally right now.

**Planned features**

- Deploy so the full app is live online
- Incorporate additional games
- Implement a reward system for children
- Implement a timer for parents to set time-limits

## Author

**Lyndsey** | [GitHub: Lyndseydj1808](https://github.com/Lyndseydj1808)

Built as a capstone project for the LaunchCode Women+ software development program.
