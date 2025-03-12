class SoundManager
{
    constructor(_soundNodes)
    {             
        for(let i=0; i<_soundNodes.length; i++)
        {
             this[_soundNodes[i].getAttribute(`name`)]=_soundNodes[i]
        }
    }
    play(_sound, _start=0, _loop=false)
    {
        try
        {
            this[_sound].currentTime=_start
            this[_sound].loop = _loop
            this[_sound].play();
        }
        catch
        {
           throw new Error(`Sound is not loaded`)
        }
    }
    stop(_sound)
    {
        try
       {
           this[_sound].pause()
           this[_sound].currentTime=0
       }
       catch
       {
           throw new Error(`Sound is not loaded`)
       }
    }
}
let soundNodes=document.querySelectorAll(`audio`)
if(soundNodes.length>0) var sounds=new SoundManager(soundNodes)
soundNodes=null

//sounds.play('ambient', 0, true);





//document.addEventListener(`click`, ()=>  sounds.play(`splode`,.5))
document.addEventListener(`w`, ()=>  sounds.play(`jump`,.5))
document.addEventListener(`l`, ()=>  sounds.play(`ambient`,.5))