const express = require('express');

const port = parseInt(process.env.PORT || 5000, 10);
const app = express();

app.use(express.json());
app.use('/', express.Router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app;
