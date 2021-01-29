export function E(){
    let result=setInterval(function(){
            let buttond=document.querySelector('.day');
            let buttonh=document.querySelector('.hour');
            let buttonm=document.querySelector('.minute');
            let buttons=document.querySelector('.second');
            let input=document.querySelector('.time');
            let eventn=document.querySelector('.eventn');
            let name=document.querySelector('.end');
            let datetime= new Date(input.value).getTime()- new Date().getTime();
            let day = Math.floor(datetime / (1000 * 60 * 60 * 24));
            let hour=Math.floor((datetime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minute=Math.floor((datetime % (1000 * 60 * 60)) / (1000 * 60));
            let second= Math.floor((datetime % (1000 * 60)) / 1000);
            name.value= " The remained time for   "+eventn.value+"  "+" is : " +day+"  "+"DAYS " +hour+" HOURS"+" "+minute+" MINUTES "+second+" SECONDES ";
          },1000)
 
   
    
}
