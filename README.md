Procurement Automation App

Overview:
The Procurement Automation App is a full-stack application built using React and Next.js for the frontend and Node.js with Express for the backend. The application allows users to create, view, update, and delete purchase orders. It features a dashboard for listing orders, individual pages for order details, and forms for creating and editing orders. The backend uses an in-memory data structure for storing purchase orders.

Features
Dashboard: Displays a list of purchase orders with relevant details (order ID, item name, quantity, status).
Order Details Page: Displays the full details of a purchase order.
Create Order Page: A form to create a new purchase order.
Edit Order Page: A form to edit an existing purchase order.
Delete Order: Ability to delete a purchase order.

Technologies Used:
Frontend: React, Next.js
Backend: Node.js, Express
Styling: CSS Modules
Testing: Jest, React Testing Library, node-mocks-http

Installation:

1. Clone the repository:
   git clone https://github.com/your-username/procurement-automation-app.git
   cd procurement-automation-app

2. Install dependencies:

```bash
npm install
```

Running the application:

1. Run the development server:

```bash
npm run dev
```

2. Open the application in your browser:
   Go to http://localhost:3000

Running Test:

1. To run the tests, use the following command:

```bash
npm test
```

Overview of the Approach

Frontend

1. React and Next.js: The frontend is built using React for component-based architecture and Next.js for server-side rendering and client-side routing.
2. Pages: Next.js pages are used to define different routes for the application (index.js, order/[id].js, order/new.js, and order/edit/[id].js).
3. Components: Reusable components like Layout, OrderList, OrderForm, and OrderDetails are created for modularity.
4. Styling: CSS Modules are used for local scoping of styles, ensuring no conflicts and easier maintenance.

Backend

1. Node.js and Express: The backend is implemented using Node.js and Express to handle API requests.
2. API Routes: Next.js's built-in API routes are used to handle the backend logic, with endpoints defined for CRUD operations on purchase orders.
3. In-memory Data Structure: For simplicity, an in-memory data structure (JSON file or object) is used to store purchase orders instead of a database.

Testing

1. Jest: Jest is used as the testing framework for running unit and integration tests.
2. React Testing Library: This library is used for testing React components, ensuring they render correctly and handle interactions.
3. node-mocks-http: This module is used for mocking HTTP requests and responses in the backend tests.

API Endpoints:

1. GET /api/orders: Fetch all purchase orders.
2. GET /api/orders/:id: Fetch a single purchase order by ID.
3. POST /api/orders: Create a new purchase order.
   Body Parameters:
   . itemName (string): Name of the item.
   . quantity (number): Quantity of the item.
   . status (string): Status of the order.
4. PUT /api/orders/:id: Update an existing purchase order by ID.
   Body Parameters:
   . itemName (string): Name of the item.
   . quantity (number): Quantity of the item.
   . status (string): Status of the order.
5. DELETE /api/orders/:id: Delete a purchase order by ID.
