Elegant Context
Elegant Context is a premium, minimalist e-commerce frontend experience. It features a curated clothing collection with a focus on sophisticated design, fluid animations, and a seamless checkout experience. Built with React and Tailwind CSS, it leverages modern patterns like the Context API for global state and React Portals for an accessible modal system. 
DEV Community
DEV Community
 +3
🚀 Features
Dynamic Shopping Cart: Real-time updates for adding, removing, and adjusting item quantities without page reloads.
Responsive Design: Mobile-first architecture that scales beautifully from smartphones to 4K desktops.
Elegant UI: High-end aesthetic using Merriweather (serif) and Quicksand (sans-serif) typography with a Gold & Stone color palette.
Accessible Modals: Built using native HTML <dialog> elements and React Portals for perfect focus management and backdrop handling.
PDF Invoice Generation: Instant, downloadable professional invoices generated in-browser using jsPDF.
Toast Notifications: Smooth visual feedback for all user actions via react-toastify. 
Learn to Code — For Free
Learn to Code — For Free
 +1
🛠️ Tech Stack
Frontend: React (Hooks, Context API, Portals)
Styling: Tailwind CSS (v4 ready)
Icons: Lucide React
PDF Logic: jsPDF & jsPDF-AutoTable
Notifications: React-Toastify 
Lucide
Lucide
 +5
📦 Installation
To get a local copy up and running, follow these simple steps:
Clone the repository
bash
git clone https://github.com
cd elegant-context
Use code with caution.

Install dependencies
bash
npm install
Use code with caution.

Start the development server
bash
npm run dev
# or
npm start
Use code with caution.

Open the app
Navigate to http://localhost:3000 (or the port shown in your terminal) to view the shop. 
GitHub
GitHub
 +4
📂 Project Structure
text
src/
 ├── assets/        # Images and dummy data
 ├── components/    # Reusable UI components (Product, Shop, Header)
 ├── store/         # CartContext and state management logic
 ├── utilities/     # Helper components like the Modal portal
 └── index.css      # Tailwind directives and custom @theme styles
Use code with caution.

--------------------------------------------------------------------------------------------------------------------------

Software Requirements Specification (SRS): Elegant Context

1. Introduction
    1.1 Purpose
        The purpose of this document is to define the functional and non-functional requirements for the Elegant Context web application. This is a front-end e-commerce platform designed to allow users to browse apparel and manage a shopping cart.
    1.2 Scope
        The system is a single-page application (SPA) built with React and Tailwind CSS. It manages a product catalog and a dynamic shopping cart using the React Context API.


2. Overall Description
    2.1 Product Perspective
        The application serves as a standalone frontend interface that interacts with a central state managed by CartContext. It uses React Portals for a high-priority modal overlay system.
    2.2 User Classes and Characteristics
        Customers: General users who browse products, add them to a cart, and adjust quantities.


3. Functional Requirements
    3.1 Product Display
        Listing: The system shall display products in a responsive grid layout.
        Details: Each product card must display an image, title, price (in Indian Rupees), and a brief description.
        Action: Users must be able to add a product to the cart directly from the product card.
    3.2 Shopping Cart Management
        Real-time Updates: The cart must update dynamically when items are added, removed, or quantities are changed.
        Quantity Control: Users shall be able to increment or decrement the quantity of individual items within the cart modal.
        Item Removal: If an item's quantity is reduced to zero, it should be removed from the cart.
        Total Calculation: The system must calculate and display a formatted total price of all items in the cart.
    3.3 User Interface Elements
        Persistent Header: The header must display the store name and a cart button with a dynamic item counter.
        Modal Overlay: The cart must be displayed in a modal that can be opened from the header and closed via a "Close" button or the native dialog "Escape" key.
        Feedback: The system shall provide visual feedback (toasts) when items are added to the cart.


4. Non-Functional Requirements
    4.1 Usability
        The UI must be mobile-responsive, adapting its layout for various screen sizes using Tailwind's utility classes.
        The interface must follow a consistent "Elegant" theme using Merriweather and Quicksand fonts.
    4.2 Performance
        The application should feel instantaneous for all cart operations (add/update/remove) as they are handled in local state.
        Modal transitions should follow a defined 0.35s ease-out animation for a smooth user experience.
    4.3 Reliability
        The system must handle empty cart states by displaying a fallback message ("Your cart is empty").


5. System Evolution
    Phase 2: Integration of a persistent data layer (e.g., localStorage) to save the cart across sessions.
    Phase 3: Implementation of a full checkout flow and payment gateway integration (e.g., Stripe).

--------------------------------------------------------------------------------------------------------------------------
Business Requirements Document (BRD): Elegant Context


1. Project Overview
    Elegant Context is a premium, minimalist e-commerce web application. The goal is to provide a seamless, high-end shopping experience for users browsing curated clothing collections. The project focuses on high performance, clean aesthetics, and mobile-first accessibility.

2. Business Objectives
    Brand Positioning: Establish a "boutique" digital presence with a sophisticated UI.
    Conversion Optimization: Minimize friction in the "Add to Cart" process using real-time state management.
    User Retention: Ensure a fast, responsive experience across all device types to reduce bounce rates.
    
3. Stakeholders
    Project Owner: Lead Developer / Brand Manager.
    End Users: Online shoppers looking for a premium interface.
    Technical Team: Frontend Developers (React/Tailwind specialists).

4. Target Audience
    Modern consumers who value simplicity and speed.
    Users primarily shopping on mobile and tablet devices.

5. Functional Requirements (Business View)
    ID	             Requirement	                                                                    Business Priority
    BR-01	Product Discovery: Users must be able to view a curated grid of products with high-quality imagery.	     High
    BR-02	Seamless Cart Interaction: Users must be able to add items and adjust quantities without page reloads.	 High
    BR-03	Visual Feedback: Instant notifications (Toasts) must confirm successful user actions.	               Medium
    BR-04	Responsive Layout: The store must maintain its "Elegant" look on screens ranging from 320px to 4K.	     High
    BR-05	Cart Persistence: (Future) User cart data should survive browser refreshes.	                           Medium

6. Non-Functional Requirements
    Aesthetics: Must use the "Gold & Stone" color palette and serif typography (Merriweather).
    Performance: The application must achieve a 90+ score on Google Lighthouse for Performance and Accessibility.
    Scalability: The architecture must allow for easy addition of new product categories.

7. User Experience (UX) Requirements
    Accessibility: Buttons must be touch-friendly (min 44x44px).
    Feedback: Cart updates should happen within an animated Modal to keep the user in their current browsing context.

--------------------------------------------------------------------------------------------------------------------------
1. User Flow Diagram (Logical Path)
    This outlines the journey from landing on the "Elegant Context" shop to completing a cart interaction.
    Entry: User lands on Shop 
    Browses Product grid.
    Action: User clicks "Add to Cart".
    System: Triggers addItemToCart in CartContext.
    System: Fires react-toastify success message.
    System: Updates Header cart badge count.
    Review: User clicks "Cart" button in Header.
    System: CartModal opens via showModal() portal.
    Adjustment: User clicks "+" or "-" inside Cart.
    System: updatedCartItemQuantity runs; totalPrice re-calculates instantly.
    Exit: User clicks "Checkout" (Logic Pending) or "Close".

--------------------------------------------------------------------------------------------------------------------------

1. Test Plan (Unit & Integration)
    Using a tool like Vitest and React Testing Library, you should verify these three core areas:
    Unit Test: Cart Logic
    Test: Adding an item that already exists should increment quantity, not add a new row.
    Test: Decrementing a quantity of 1 should remove the item from the array.
    Test: totalPrice must accurately sum price * quantity for all items.
    Integration Test: Modal Interaction
    Test: Clicking "Cart" in the Header must call the showModal method on the ref.
    Test: The "Checkout" button should only be visible if items.length > 0.
    Visual/CSS Test
    Test: Verify IndianRupee icon renders next to all price values.
    Test: Ensure ToastContainer is present in the DOM (z-index check).

--------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------
