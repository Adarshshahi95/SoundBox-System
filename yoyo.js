const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` Party Getting Hot<br>
        <div class="subtitle">Party getting hot</div>`,
        poster: "img/yoyo img/1.jpg"
    },
    {
        id:'2',
        songName:`Blue Eyes<br>
        <div class="subtitle">Blue Eyes</div>`,
        poster: "img/yoyo img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Love Dose<br><div class="subtitle"> Love Dose</div>`,
        poster: "img/yoyo img/3.jpeg",
    },
    {
        id:"4",
        songName: `One Bottle Down<br><div class="subtitle">One Bottle Down</div>`,
        poster: "img/yoyo img/4.jpg",
    },
    {
        id:"5",
        songName: `Breakup Party <br><div class="subtitle">Breakup Party</div>`,
        poster: "img/yoyo img/5.jpg",
    },
    {
        id:"6",
        songName: `Ankhon Ankhon<br><div class="subtitle">Ankhon Ankhon</div>`,
        poster: "img/yoyo img/6.jpg",
    },
    {
        id:"7",
        songName: `Makhna<br><div class="subtitle">Makhna</div>`,
        poster: "img/yoyo img/7.jpeg",
    },
    {
        id:"8",
        songName: `Achko Machko<br><div class="subtitle">Achko Machko</div>`,
        poster: "img/yoyo img/8.jpg",
    },
    {
        id:"9",
        songName: `Call Aundi<br><div class="subtitle">Call Aundi</div>`,
        poster: "img/yoyo img/9.jpg",
    },
    {
        id:"10",
        songName: `Chaar Botal Vodka<br><div class="subtitle">Ragini MMS 2</div>`,
        poster: "img/yoyo img/10.jpg",
    },{
        id:"11",
        songName: `Raat Zashan Di<br><div class="subtitle">Raat Jashan Di</div>`,
        poster: "img/yoyo img/11.jpg",
    },{
        id:"12",
        songName: `Saiyaan Jii<br><div class="subtitle">Saiyaan Jii</div>`,
        poster: "img/yoyo img/12.jpg",
    },{
        id:"13",
        songName: `Dheere Dheere<br><div class="subtitle">Dheere Dheere</div>`,
        poster: "img/yoyo img/13.jpeg",
    },{
        id:"14",
        songName: `Gatividhi<br><div class="subtitle">Gatividhi</div>`,
        poster: "img/yoyo img/14.jpg",
    },{
        id:"15",
        songName: `Tell Me Once<br><div class="subtitle">Tell Me Once</div>`,
        poster: "img/yoyo img/15.jpeg",
    },{
        id:"16",
        songName: `Desi Kalakar<br><div class="subtitle">Desi Kalakar</div>`,
        poster: "img/yoyo img/16.jpeg",
    },{
        id:"17",
        songName: `Sunny Sunny<br><div class="subtitle">Sunny Sunny</div>`,
        poster: "img/yoyo img/17.jpg",
    },{
        id:"18",
        songName: `Birthday Bash<br><div class="subtitle">Birthday Bash</div>`,
        poster: "img/yoyo img/18.jpg",
    },{
        id:"19",
        songName: `Loca<br><div class="subtitle">Loca</div>`,
        poster: "img/yoyo img/19.jpg",
    },{
        id:"20",
        songName: `Dil Chori<br><div class="subtitle">Sonu Ke Titu Ki Sweety</div>`,
        poster: "img/yoyo img/20.jpeg",
    },
    
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

//search data start
let search_results = document.getElementsByClassName('search_results')[0];
songs.forEach(element =>{
    const{id,songName,poster} = element;
    //console.log(songName);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML =`
    <img src="${poster}">
                    <div class="content">
                        ${songName}
                    </div>`;
    search_results.appendChild(card);
})  

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup' , ()=>{
   let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
       let as = items[index].getElementsByClassName('content')[0];
       let text_value = as.textContent || as.innerHTML;

       if(text_value.toUpperCase().indexOf(input_value) > -1){
        items[index].style.display = "flex";
       } else {
        items[index].style.display = "none";
       }

       if(input.value == 0 ){
        search_results.style.display = "none";
       } else {
        search_results.style.display = "";
       }
    }
})
//search data end
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/yoyo/${index}.mp3`;
        poster_master_play.src =`img/yoyo img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/yoyo/${index}.mp3`;
    poster_master_play.src =`img/yoyo img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/yoyo/${index}.mp3`;
    poster_master_play.src =`img/yoyo img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})