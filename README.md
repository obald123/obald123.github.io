# Portfolio

A simple portfolio website built with React and Tailwind CSS, designed for hosting on GitHub Pages.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production
To build the app for production:
```
npm run build
```

This builds the app to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment to GitHub Pages

1. Create a new repository on GitHub named `yourusername.github.io` (replace `yourusername` with your actual GitHub username).

2. Push your code to the repository:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin master
   ```

3. In your repository settings, go to "Pages" and select "Deploy from a branch". Choose the `master` branch and `/ (root)` folder.

4. Your portfolio will be available at `https://yourusername.github.io`.

## Customization

- Edit `src/App.js` to update the content (name, skills, projects, etc.).
- Modify the Tailwind classes in `src/App.js` to change the styling.
- Update `public/index.html` for meta tags and title.

## Technologies Used
- React
- Tailwind CSS
