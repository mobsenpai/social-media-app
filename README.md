# My social media full stack app

```tree
social-media-app/
├── server/                   # Server-side Application Root
│   ├── src/                  # All backend source code
│   │   ├── config/           # Database configurations
│   │   ├── controllers/      # Route handler business logic
│   │   ├── middleware/       # Auth guards and error handlers
│   │   ├── models/           # Database schemas (Mongoose)
│   │   ├── routes/           # Express API route definitions
│   │   └── server.js         # Backend Entry Point
│   ├── .env                  # Private backend environment variables
│   ├── .gitignore            # Ignores node_modules/ and .env
│   └── package.json          # Backend dependencies and run scripts
│
├── client/                   # Client-side Application Root
│   ├── public/               # Raw static browser assets
│   ├── src/                  # All frontend source code
│   │   ├── assets/           # Global styles and image assets
│   │   ├── components/       # Reusable UI elements
│   │   ├── context/          # Global application state management
│   │   ├── hooks/            # Custom reusable React hooks
│   │   ├── pages/            # View components mapped to routes
│   │   ├── services/         # Axios API connection layers
│   │   ├── App.jsx           # App layout and route configurations
│   │   └── main.jsx          # React DOM mounting entry point
│   ├── .env                  # Frontend public configuration variables
│   ├── .gitignore            # Ignores node_modules/ and dist/
│   ├── index.html            # Main HTML structural target
│   └── package.json          # Frontend dependencies and Vite scripts
│
├── .gitignore                # Global git ignore configuration
└── README.md                 # Project initialization guide

````
