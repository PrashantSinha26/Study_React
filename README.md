# NAMASTE_REACT

# Parcel

- Dev Build
- Local Server
- HMR [Hot Module Replace]
- File Watching Algorithum - written in C++
- Caching - Faster Builds
- Image Optimization
- Bundling
- Compressing
- Consistent Hashing
- Code Spliting
- Differential Bundling
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking Algorithum

//Planning for food ordering app

//------Planning-------

1.Header - LOGO - Navigation Item( Home, About, Cart)
2.Body - Search Item Button
2.1- Container - Resturant Card - image - rating - name of resturant
3.Footer - Copyright - Links, Address,Contact

// There are two types of Import and Export

1. Default Import/Export
2. Normal Import/export

# Syntax of Default

    Export ->  export default Filename
    Import ->  import fileName from "path of the file"

# Syntax of Normal

    Export -> export const Componenet Name
    Import ->

// React Hooks

It's a normal utility JavaScript function which is given by React and it is written by Facebook Developer.

# Types of hooks(important)

1. useState() - Superpowerful State Variable in React
2. useEffect()

# There are two types of Routing that we have in an application:

1. Client Side Routing
2. Server Side Routing

# componentDidUpdate(){
    It will update when the component lifecycle end. 
  }

# componentWillUnmount(){
    It will call when the component is unmount.
    Unmount - When the component is disappear from the html/webpage/API. As we jump to the next page. 
  }

# CSS Code Start( When not using Tailwind )
.header {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
}

.logo {
  width: 200px;
}

.navigation-item {
  padding-right: 40px;
}

.navigation-item > ul {
  font-size: 20px;
  display: flex;
  list-style-type: none;
}

.navigation-item > ul > li {
  padding: 20px;
  margin: 5px;
}

.res-card {
  width: 200px;
  height: 320px;
  padding: 5px;
  margin: 10px;
}

.res-container {
  display: flex;
  flex-wrap: wrap;
}
.res-card:hover {
  cursor: pointer;
  border: 2px solid black;
}

.filter-btn {
  margin: 10px;
  cursor: pointer;
}

.res-logo {
  width: 100%;
}

.shimmer-container {
  display: flex;
  flex-wrap: wrap;
}

.shimmer-card {
  margin: 20px;
  height: 300px;
  width: 200px;
  background-color: #f0f0f0;
}

.login {
  padding: 0 20px;
  cursor: pointer;
}

.filter {
  display: flex;
}

.user-card {
  padding: 10px;
  border: 1px solid black;
}
# CSS Code End

# Redux Toolkit

- Installing @reduxjs/toolkit and React Redux
- Built our store
- Connect store to an app
- Slice (cartSlice) 
- Dispatch(action)
- Selector

# Types of Testing (Developer can do)
- Unit Testing
- Intregration Testing
- End to End Testing [ e2e Testing ]

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react -> to make JSX work in test cases
- Include @babel/preset-react inside babel config
- Include npm i -D @testing-library/jest-dom -> for toBeInTheDocument() function

