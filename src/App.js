import "./App.css";

// function App() {
//   return (
//     <div className="App">
//     <p>ReDI</p>
//     <h2>ReDI</h2>
//     <h1>ReDI</h1>
//     <h1>ReDI</h1>
//     </div>
//   );
// }

// function App() {
//   const name = "ReDI is cool";
//   return (
//     <div className="App">
//     <h1>{name}</h1>
//     <h1>.</h1>
//     <h1>{name}</h1>
//     <h1>ReDI</h1>

//     </div>
//   );
// }

// function App() {
//   const header = <h1>ReDI Home Website</h1>;
//   return (
//     <div className="App">
//     {header}
//     </div>
//   );
// }

// function App() {
//   const name = <h1>student</h1>;
//   const age = <h2>23</h2>;
//   const email = <h3>me@student.com</h3>;
//   return (
//     <div className="App">
//     {name}
//     {age}
//     {email}
//     </div>
//   );
// }

// function App() {
//   const name = <h1>student</h1>;
//   const age = <h1>23</h1>;
//   const email = <h1>me@student.com</h1>;
//   return (
//     <div className="App">
//       <div>
//         {name}
//         {age}
//         {email}
//       </div>
//       <div>
//         {name}
//         {age}
//         {email}
//       </div>
//       <div>
//         {name}
//         {age}
//         {email}
//       </div>
//     </div>
//   );
// }

// function App() {
//   const name = <h1>student</h1>;
//   const age = <h1>23</h1>;
//   const email = <h1>me@student.com</h1>;
//   const user = (
//     <div>
//       {name}
//       {age}
//       {email}
//     </div>
//   );
//   return <div className="App">
//     {user}
//     {user}
//     {user}
//     </div>;
// }
// => better now to introduce "components"

// const GetName = () => {
//   return "ReDI";
// }
// // components start with capital letter!
// const GetNameComponent = () => {
//   return <h1>"ReDI"</h1>;
// }

// ###########################################

// function App() {
//   return (
//     <div className="App">
//      <User />
//      <User />
//     </div>
//   );
// }

// const User = () => {
//   return (
//     <div className = "test">
//       <h1>student</h1>
//       <h1>23</h1>
//       <h1>me@student.com</h1>
//     </div>

//   );
// };

// => better now to introduce "props" to reflect data (different names) inside the component

// function App(props) {
//   return (
//     <div className="App">
//      <User name="student" age = {29} email ="me@student.com"/>
//      <User name="teacher" age = {63} email ="old@school.com"/>
//     </div>
//   );
// }

// props object looks like....and are put into the component "User"
// const props = {
//   name: "student",
//   age: 23,
//   email: "me@student.com"
// }

// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// };

// Exercise: Display this on screen
function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon" /><br/>
      <Job salary={12000} position="Junior SDE" company="Google" /><br/>
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
}
// ############ SOLUTION ##################

const Job = (props) => {
  return(
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  )
}

export default App;
