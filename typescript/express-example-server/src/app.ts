import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Initialize the number value
let number: number = 0;

// Middleware to parse JSON bodies (if needed in the future)
app.use(express.json());

// Getter: Retrieve the current number
app.get('/get-number', (req: Request, res: Response) => {
  res.json({ currentValue: number });
});

// Setter: Increment the number by 1
app.post('/add-one', (req: Request, res: Response) => {
  number += 1;
  res.json({ message: 'Number incremented', newValue: number });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});