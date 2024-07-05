# Fiverr Clone

A comprehensive MERN stack application that replicates core functionalities of Fiverr, the popular freelance services marketplace. This project aims to provide a platform for users to browse, offer, and purchase various digital services.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Key Components](#key-components)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Images](#Images)
- [Dependencies](#dependencies)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Payment Integration](#payment-integration)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:**
  - Sign up with email
  - Login with existing credentials
  - Password reset functionality
  - OTP verification for enhanced security

- **Service Browsing:**
  - View a wide range of services on the homepage
  - Search for specific services
  - Filter services by category, price, and rating

- **Detailed Service Listings:**
  - View comprehensive information about each service
  - See seller profiles and ratings

- **Secure Payments:**
  - Integration with Razorpay for safe transactions
  - Support for multiple currency options

- **Responsive Design:**
  - Optimized for various screen sizes (mobile, tablet, desktop)

- **User Profiles:**
  - Personalized dashboards for buyers and sellers

## Tech Stack

- **Frontend:**
  - React (with Hooks and Context API for state management)
  - Chakra UI for responsive and accessible component design
  - Axios for HTTP requests
  - React Router for navigation

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database
  - Mongoose for object modeling

- **Authentication:**
  - JSON Web Tokens (JWT) for secure user sessions

- **Payment:**
  - Razorpay API for processing transactions

## Key Components

- **Home (Home.jsx):** Landing page showcasing featured services, categories, and promotional content.

- **Products (Products.jsx):** Displays a grid of available services with filtering and sorting options.

- **SingleProduct (SingleProduct.jsx):** Detailed view of a specific service, including description, pricing, and seller information.

- **Authentication:**
  - Register (Register.jsx): User sign-up form
  - Login (Login.jsx): User login form
  - Forget (Forget.jsx): Initiates password reset process
  - OTPverification (OTPverification.jsx): Validates one-time passwords for secure actions
  - SetNewPassword (SetNewPassword.jsx): Allows users to set a new password after verification

- **Navbar (Navbar.jsx):** Navigation component present across all pages.

- **Footer (Footer.jsx):** Consistent footer component with site links and information.

## Getting Started

1. Clone the repository:
   - git clone https://github.com/your-username/fiverr-clone.git
   - cd fiverr-clone
2. Install dependencies:
   - cd Fiverr
   - npm install
3. Set up environment variables:
   - **Create a `.env` file in the root directory and add the following:**
       - MONGODB_URI=your_mongodb_connection_string
       - JWT_SECRET=your_jwt_secret_key
       - RAZORPAY_KEY_ID=your_razorpay_key_id
       - RAZORPAY_KEY_SECRET=your_razorpay_key_secret
4. Run the development server:
   - npm run dev
5. Open `http://localhost:3000` in your browser to view the application.

## Project Structure
    Fiverr_Clone/
    ├── Fiverr/
    │   ├── public/
    │   ├── src/
    │   │   ├── allRoutes/
    │   │   │   └── AllRoutes.jsx
    │   │   ├── assets/
    │   │   ├── component/
    │   │   │   ├── Navbar.jsx
    │   │   │   └── Footer.jsx
    │   │   ├── contexts/
    │   │   │   └── AuthContextProvider.jsx
    │   │   ├── pages/
    │   │   │   ├── Home.jsx
    │   │   │   ├── Products.jsx
    │   │   │   ├── SingleProduct.jsx
    │   │   │   ├── Forget.jsx
    │   │   │   ├── OTPverification.jsx
    │   │   │   ├── SetNewPassword.jsx
    │   │   │   └── Reset.jsx
    │   │   ├── styles/
    │   │   ├── utils/
    │   │   ├── App.css
    │   │   ├── App.jsx
    │   │   ├── index.css
    │   │   └── main.jsx
    │   ├── .eslintrc.cjs
    │   ├── .gitignore
    │   ├── index.html
    │   ├── package.json
    │   ├── README.md
    │   └── vite.config.js

## Images

<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Fiverr_Clone/assets/112779948/c5462922-8e19-4427-8d06-68da6f6ab6bb">
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Fiverr_Clone/assets/112779948/f34e5c16-0976-4665-aea7-b2fdff446b35">
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Fiverr_Clone/assets/112779948/c0dc3385-2846-4493-a054-3b4a38b09151">

# Login Page Image
<img width="958" alt="image" src="https://github.com/Mohd-Murtaza/Fiverr_Clone/assets/112779948/e424274f-8f1e-4925-a386-d8001b909c06">

# Sign Up Page Image
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Fiverr_Clone/assets/112779948/e889174a-3e43-4100-aa96-adae71664263">

# Services Page Image
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Fiverr_Clone/assets/112779948/9081ddfb-3183-4a3e-bdce-c17d71105ccb">
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Fiverr_Clone/assets/112779948/a401ab98-10e7-4330-b90b-6e6a1d106827">

# Detailed Service Page Image
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Fiverr_Clone/assets/112779948/d46c11d4-b447-4a80-9f18-50da6fce27f5">

# Payment Page Image
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Fiverr_Clone/assets/112779948/a2ff8a75-de98-4db0-a66a-fcf39fc09aa2">
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Fiverr_Clone/assets/112779948/e1a043c9-6722-4c2b-8eb8-f210b010d2f0">


## Dependencies

Key dependencies include:

- react
- react-dom
- react-router-dom
- @chakra-ui/react
- axios
- swiper
- react-icons

For a full list, refer to the `package.json` file.

## API Endpoints

- `/user/register` - User registration
- `/user/login` - User login
- `/user/otpRequest` - Request OTP for password reset
- `/user/otpVerify` - Verify OTP
- `/user/forget` - Set new password after verification
- `/product/allProducts` - Fetch all products or filter by category
- `/payment/checkout` - Initiate payment process
- `/payment/payment-verification` - Verify payment status

## Authentication

The project uses JWT for authentication. Tokens are stored in localStorage and included in the headers of authenticated requests.

## Payment Integration

Razorpay is integrated for secure payment processing. The `checkoutHandler` function in `SingleProduct.jsx` initiates the payment flow.

## Responsive Design

The application uses Chakra UI's responsive design system and custom media queries to ensure a seamless experience across devices.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
