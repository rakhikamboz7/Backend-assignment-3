Week 3 Assignment Instructions – Express Refactoring (ES Modules)
🎯 Objective
The goal of this assignment is to help you understand how a real-world backend application should be structured using Express.js.

You will refactor an existing messy codebase into a clean, scalable, and maintainable architecture.

🚀 Getting Started
1. Clone / Download Starter Code
You will be provided with a basic Express application (app.js) where:

Routes and logic are mixed
No validation is present
No proper error handling exists
2. Setup the Project
Make sure your package.json includes:

{
  "type": "module"
}
Install dependencies:

npm install express
Run the server:

node app.js
📁 Folder Structure Requirements
You must restructure your project as follows:

/controllers
/routes
/middlewares
/utils
app.js
🧠 What You Need to Implement
1. Separate Controllers
Move all business logic into the /controllers folder
Controllers should ONLY handle logic (no validation)
2. Create Routes Layer
Define all routes inside /routes
Use express.Router()
Keep routes clean and minimal
3. Add Validation Middleware
Create a middleware to validate user input
Validate:

name (required)
email (required)
👉 If validation fails:

Do NOT send response directly
Pass error using next(error)
4. Centralized Error Handling
Create a global error middleware
It should:

Catch all errors
Send consistent error responses
5. Standard Response Format
All API responses MUST follow this format:

✅ Success
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
❌ Error
{
  "success": false,
  "message": "Something went wrong"
}
6. Proper Use of Middleware Chain
Use next() correctly
Do not mix response handling and error propagation
⚠️ Important Rules
Do NOT keep logic inside routes
Do NOT send raw strings like "User created"
Do NOT handle errors inside controllers directly
Always use ES Modules (import/export)
Always include .js in import paths
🧪 Testing Your API
You can use:

Postman
Thunder Client
curl
Test Cases:
Create user (valid & invalid)
Get all users
Get user by ID (valid & invalid)
Delete user (valid & invalid)
📤 Submission Guidelines
Push your code to GitHub
Ensure the project runs using:
node app.js
Your repository should include:

Clean folder structure
Proper middleware usage
Consistent response format
💡 Tips
Think like a backend engineer, not just a coder
Keep your code modular and reusable
Follow a clear separation of concerns
🔥 Bonus (Optional)
Add email format validation
Add unique email check
Use UUID instead of Date.now()
🎯 Final Goal
By completing this assignment, you should clearly understand:

How Express middleware chain works
How to structure scalable backend applications
How real-world APIs handle errors and responses
Good luck 🚀