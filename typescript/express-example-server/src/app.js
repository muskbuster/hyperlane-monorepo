'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const app = (0, express_1.default)();
const port = 3000;
// Initialize the number value
let number = 0;
// Middleware to parse JSON bodies (if needed in the future)
app.use(express_1.default.json());
// Getter: Retrieve the current number
app.get('/get-number', (req, res) => {
  res.json({ currentValue: number });
});
// Setter: Increment the number by 1
app.post('/add-one', (req, res) => {
  number += 1;
  res.json({ message: 'Number incremented', newValue: number });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
