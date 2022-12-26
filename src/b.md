/\* body {
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

code {
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
monospace;
} \*/

html,
body {
padding: 0;
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
flex-shrink: 0;
height: 100px;
}

a {
color: inherit;
text-decoration: none;
}

- {
  box-sizing: border-box;
  }
  body {
  background-color: #000022;
  color: rgb(196, 195, 195);
  /_ font-family: cursive; _/
  }
  .title-container {
  margin-top: 2rem;
  position: relative;
  }

.container {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
hr {
color: #601ba9;
}
.from,
.to {
height: 30vh;
width: 30vw;
background-color: rgb(211, 211, 211);
border-radius: 2rem;
box-shadow: inset -1.99px -1.67px 3.66px -0.46px rgba(0, 0, 0, 0.15),
inset 2.99px 2.51px 3.66px -0.46px rgba(0, 0, 0, 0.3),
-5.97px -5.02px 2.75px -1.37px rgba(0, 0, 0, 0.6);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 2rem;
padding: 1rem;
}
.from input,
.to input {
background-color: transparent;
border: none;
outline: none;
color: white;
font-size: 3rem;
}
.to input {
text-align: right;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type="number"] {
-moz-appearance: textfield;
}
.from {
background: linear-gradient(30deg, hsl(240, 100%, 17%), white);
margin-right: 0.5rem;
align-items: flex-start;
}
.to {
background: linear-gradient(150deg, white, hsl(240, 100%, 17%));
margin-left: 0.5rem;
align-items: flex-end;
}
.card-container {
display: flex;
justify-content: space-around;
width: 60vw;
margin-top: 2rem;
margin-bottom: 2rem;
position: relative;
}
.exchange {
display: flex;
justify-content: center;
align-items: center;
color: #601ba9;
font-size: 1.4rem;
height: 4rem;
width: 4rem;
margin-top: 7rem;
position: absolute;
z-index: 1;
background-color: #000022;
border-radius: 2rem;
}
.exchange-bg {
position: absolute;
height: 80%;
width: 80%;
/_ background-color: red; _/
z-index: -1;
background: rgb(196, 195, 195);
border-radius: 2rem;

    /* position: absolute; */
    box-shadow: inset -1.99px -1.67px 3.66px -0.46px rgba(0, 0, 0, 0.15),
      inset 2.99px 2.51px 3.66px -0.46px rgba(0, 0, 0, 0.3),
      -5.97px -5.02px 2.75px -1.37px rgba(0, 0, 0, 0.6);
    transition: 0.3s ease-in-out;

}
.exchange-bg:hover {
background: rgb(235, 233, 233);
}
.measurements {
display: flex;
flex-direction: column;
align-items: center;
width: 50vw;
justify-content: center;
height: 32vh;
overflow-y: auto;
}
.measurements h3 {
padding-top: 2rem;
}

.measurements::-webkit-scrollbar {
width: 10px;
}
.measurements::-webkit-scrollbar-thumb {
background-color: black;
border-radius: 10px;
}
.measurements::-webkit-scrollbar-thumb:hover {
background-color: gray;
}
.measurements::-webkit-scrollbar-track-piece {
width: 1px;
background-image: linear-gradient(to bottom, white, rgb(196, 196, 196));
border-radius: 10px;
}

.arrows-up {
display: block;
}
.arrows-down {
display: none;
}
@media screen and (width < 769px) {
.card-container {
flex-direction: column;
align-items: center;
}
.from,
.to {
width: 80vw;
height: 20vh;
margin: 0;
font-size: 1.8rem;
}
.from {
margin-bottom: 0.5rem;
background: linear-gradient(150deg, hsl(240, 100%, 17%), white);
}
.to {
margin-top: 0.5rem;
margin-bottom: -3rem;
background: linear-gradient(30deg, hsl(240, 100%, 17%), white);
align-items: flex-start;
}
h1 {
font-size: 1.4rem;
margin-top: -0.3rem;
}
.exchange {
margin: 0;
margin-top: 4vh;
margin-left: 40vw;
}
.arrows-up {
display: none;
}
.arrows-down {
display: block;
}
.measurements {
width: 85vw;
}
.to input {
text-align: left;
}
}
