**CS-465 Full Stack Development with MEAN Stack**

**Travlr Getaways – Full Stack Web Application**
**Khem Khatiwada | Southern New Hampshire University | CS-465**

**Architecture**

**Compare and contrast the types of frontend development used in this project, including Express HTML, JavaScript, and the single-page application (SPA).**

This project used three frontend approaches: static HTML for the initial customer-facing pages, Express with Handlebars templating to dynamically render trip data from MongoDB without duplicating content, and an Angular SPA for the admin interface. Unlike static HTML and server-rendered Express pages that reload with every request, the Angular SPA loads once in the browser and updates views dynamically through RESTful API calls. This makes the admin interface faster and more interactive, while the customer-facing site benefits from server-side rendering with live database data. Each approach served a distinct purpose within the full-stack architecture.

**Why did the backend use a NoSQL MongoDB database?**

MongoDB was selected because it stores data as JSON-like documents, which aligns naturally with the JavaScript-based MEAN stack. Travel data such as trip packages, pricing, descriptions, and itineraries does not fit neatly into rigid relational tables. MongoDB's flexible document schema allowed trip records to be structured and updated without requiring database migrations every time the data model changed. MongoDB also integrates seamlessly with Mongoose, which provides schema validation, data modeling, and query building on the Node.js backend, making the database layer both flexible and maintainable.

**Functionality**

**How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?**

JSON is a lightweight data format derived from JavaScript syntax but used strictly for storing and transmitting structured data, while JavaScript is a full programming language capable of logic, functions, and execution. In this project, JSON served as the common language connecting every layer of the stack. MongoDB stored trip data as BSON; the Express API returned JSON responses; the Angular SPA consumed those responses to populate the admin interface; and Handlebars rendered JSON data into HTML for the customer site. Unlike JavaScript, JSON cannot contain executable code, making it a safe and universal format for passing data between the frontend and backend.

**Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable UI components.**

Several refactoring efforts improved the application throughout development. The most significant was moving from static HTML pages to Handlebars templates, which eliminated duplicated markup and allowed a single template to render any number of trip records dynamically from the database. Another refactoring effort involved moving hardcoded trip data out of a JSON flat file and into MongoDB, which centralized data management and made the API the single source of truth for both the customer site and the admin SPA. On the Angular side, the TripCardComponent and TripListingComponent were built as reusable components, meaning that a single card component could render any trip record passed to it as an input. This component-based approach reduced code duplication, made the interface easier to maintain, and made it straightforward to extend the admin SPA with new views without rewriting existing functionality.

**Testing**

**Explain your understanding of methods, endpoints, and security in a full stack application.**

HTTP methods define the operation being performed: GET retrieves data, POST creates records, PUT updates them, and DELETE removes them — each mapped to endpoints such as /api/trips and /api/trips/:tripCode. Testing required verifying both successful and error responses, confirming that GET requests returned correct JSON with 200 OK status codes and that POST and PUT requests returned 201 Created or 404 Not Found as appropriate. Security added complexity to testing because the POST, PUT, and DELETE endpoints were protected by JWT middleware, requiring a valid Bearer Token in the Authorization header, so testing first called /api/login to obtain a token and then included it in all protected requests, a two-step process verified in both Postman and through the Angular SPA to confirm the full login, token storage, and transmission flow worked correctly.
Reflection

**How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?**

This course gave me hands-on experience building a complete, production-style web application using the MEAN stack, connecting a public-facing website, RESTful API, NoSQL database, and secured Angular SPA into a single working system , something I had not done before despite having foundational knowledge of the individual technologies. The specific skills I developed include building and consuming RESTful APIs with Node.js and Express, modeling data with MongoDB and Mongoose, building component-based SPAs with Angular, and implementing JWT authentication with Passport.js and bcrypt, along with practical experience using the Angular CLI, Postman, MongoDB Compass, and Git. These skills make me a more marketable candidate because full stack JavaScript development is one of the most in-demand skill sets in the industry, and this project demonstrates that ability with a real, functional application I can present in my portfolio.
Repository Structure

CS-465_Fullstack/
├── app_admin/          # Angular SPA (admin interface, port 4200)
├── app_api/            # RESTful API routes, controllers, models
├── app_server/         # Express MVC routes, controllers, views
├── public/             # Static assets (CSS, images, JS)
├── .env                # Environment variables (MongoDB URI, JWT secret)
├── app.js              # Main Express application entry point
└── package.json

**How to Run**
Prerequisites: Node.js, MongoDB running locally

powershell

# Terminal 1 - Start Express server (port 3000)

cd CS-465_Fullstack

npm start


# Terminal 2 - Start Angular admin SPA (port 4200)

cd CS-465_Fullstack/app_admin

ng serve

•	Customer site: http://localhost:3000  

•	Admin SPA: http://localhost:4200

