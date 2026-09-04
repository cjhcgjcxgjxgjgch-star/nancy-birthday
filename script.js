window.addEventListener("load",()=>{
  setTimeout(()=>document.getElementById("loader").classList.add("loader-hide"),900);
});

function startSurprise(){
  const surprise=document.getElementById("surprise");
  surprise.classList.remove("hidden");
  setTimeout(()=>surprise.scrollIntoView({behavior:"smooth",block:"start"}),100);
  megaBurst(80);
}

function birthdayMagic(){
  document.getElementById("wishMessage").textContent =
  "💫 Your wish has officially been delivered to the universe! Now the universe better behave itself 😤💗✨";
  megaBurst(120);
}

function secretSurprise(){
  const el=document.getElementById("secretMessage");
  el.innerHTML="🤫 SECRET MESSAGE: You are genuinely a very special friend... but don't let this make you too proud, Suarr 😂💗🎀";
  megaBurst(60);
}

function megaBurst(amount){
  const symbols=["🎉","💗","🎀","✨","🌸","💖","🩷","🎂"];
  for(let i=0;i<amount;i++){
    const el=document.createElement("div");
    el.className="sparkle";
    el.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left=(35+Math.random()*30)+"vw";
    el.style.top=(20+Math.random()*25)+"vh";
    el.style.fontSize=(14+Math.random()*24)+"px";
    el.style.setProperty("--x",(Math.random()*1000-500)+"px");
    el.style.setProperty("--y",(Math.random()*900-250)+"px");
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),1000);
  }
}

setInterval(()=>{
  const heart=document.createElement("div");
  heart.className="heart";
  heart.textContent=["💗","💕","🌸","🎀","✨"][Math.floor(Math.random()*5)];
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(13+Math.random()*20)+"px";
  heart.style.animationDuration=(5+Math.random()*5)+"s";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(()=>heart.remove(),11000);
},800);
