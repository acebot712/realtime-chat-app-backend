# Test Your Endpoints

You can test your endpoints using a tool like Postman or cURL. Here are some example commands using cURL:

1. **Create a new user**:
   ```bash
   curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"email": "bob@prisma.io", "name": "Bob"}'
   ```

2. **Get all users**:
   ```bash
   curl http://localhost:3000/users
   ```

3. **Get a single user by ID**:
   ```bash
   curl http://localhost:3000/users/1
   ```

4. **Update a user by ID**:
   ```bash
   curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{"email": "alice@prisma.io", "name": "Alice Updated"}'
   ```

5. **Delete a user by ID**:
   ```bash
   curl -X DELETE http://localhost:3000/users/1
   ```
