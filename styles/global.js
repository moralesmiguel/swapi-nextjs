import css from 'styled-jsx/css'

export default css.global`
  *{
      margin: 0;
  }

  body {
    overflow-x: hidden;
    z-index: 1;
    margin: 0;
    padding: 0;
  }

  .fa-journal-whills{
    left:0;
  }

  .header-text{
    color: white;
    text-shadow: 2px 2px 4px yellow;
    font-size: 52px;
    text-align: center;
  }

  .header2-text{
    color: white;
    text-shadow: 2px 2px 4px yellow;
    font-size: 52px;
    text-align: center;
  }

  nav{
    z-index: 20;
    position: fixed;
  }
 
  nav li{
    display: inline-block;
    margin-top: 5px;
    margin-left: 20px;
  }

  .nav-link{
    cursor: pointer;
    text-decoration: none;
    color: white;
    opacity: .9;
    padding: 10px;
    font-size: 19px;
  }

  .nav-link:hover{
    opacity: 1;
  }

  .header-section{
    min-height:100vh;
    background: url("/static/background3.jpg");
    background-size: cover;
    width: 100%;
  }

  .options-container{
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .options-image{
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px 10px;
    margin: 15px 15px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .options-image:hover{
    cursor: pointer;
    opacity: .5;
  }

  .Planets-Container{
    min-height:100vh;
    background: url("/static/background1.jpg");
    background-size: cover;
    width: 100%;
  }

  .file-list{
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }

  .file-list li{
    display: inline-block;
    background: rgb(230, 230, 230);
    border-radius: 8px;
    border: 1px solid black;
    padding: 20px 20px;
    margin: 0 auto;
    margin-top: 50px;
  }

  .file-links{
    text-decoration: none;
    font-size: 25px;
    color: black;
  }

  .black-background{
    background: black;
    color: green;
    background-size: cover;
    width: 100%;
    min-height:100vh;
    font-family: monospace;
    font-size: 25px;
  }

  .blue-background{
    background: blue;
    color: white;
    background-size: cover;
    width: 100%;
    min-height:100vh;
    font-family: monospace;
    font-size: 25px;
  }

  #one{
    background:black;
    font-color: green;
    border: 1px solid green;
  }

  #two{
    background:blue;
    font-color: white;
    border: 1px solid white;
  }

  #three{
    background:black;
    font-color: green;
    border: 1px solid green;
  }

  .Species-Container{
    min-height:100vh;
    background: url("/static/background2.jpg");
    background-size: cover;
    width: 100%;
  }
`