function Random(){
  let num=Math.random()*100;
 return <h1 style={{'background-color':'pink'}}> Random number:{Math.round(num)}</h1>
}

export default Random;