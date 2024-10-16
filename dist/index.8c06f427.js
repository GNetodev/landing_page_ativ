const e=new Date("Feb 15, 2025, 00:00:01").getTime();setInterval(function(){let o=e-new Date().getTime(),t=Math.floor(o/864e5),l=Math.floor(o%864e5/36e5),n=Math.floor(o%36e5/6e4),a=Math.floor(o%6e4/1e3);console.log(t),console.log(l),console.log(n),console.log(a),document.getElementById("contador").innerHTML=`${t}d ${l}h ${n}m ${a}s`},1e3);
//# sourceMappingURL=index.8c06f427.js.map
