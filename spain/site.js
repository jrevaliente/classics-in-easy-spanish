"use strict";
(()=>{const search=document.getElementById("track-search");const tracks=[...document.querySelectorAll(".audio-card")];const none=document.getElementById("no-results");
if(search){search.addEventListener("input",()=>{const q=search.value.trim().toLocaleLowerCase();let visible=0;tracks.forEach(t=>{const found=t.dataset.search.includes(q);t.hidden=!found;if(!found)t.open=false;if(found)visible++});if(none)none.hidden=visible>0});}
tracks.forEach(t=>t.addEventListener("toggle",()=>{if(t.open){tracks.forEach(other=>{if(other!==t)other.open=false;});}}));
document.querySelectorAll("audio").forEach(player=>player.addEventListener("play",()=>document.querySelectorAll("audio").forEach(other=>{if(other!==player)other.pause();})));
})();