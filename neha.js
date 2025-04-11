const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` Baarish mein Tum<br>
        <div class="subtitle">Baarish mein Tum</div>`,
        poster: "img/neha img/1.jpg"
    },
    {
        id:'2',
        songName:`Oh Humsafar<br>
        <div class="subtitle">Oh Humsafar</div>`,
        poster: "img/neha img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Taaron ke seher <br><div class="subtitle"> Taaron ke seher</div>`,
        poster: "img/neha img/3.jpg",
    },
    {
        id:"4",
        songName: `Bol Kaffra Kya Hoga<br><div class="subtitle">Bol Kaffra Kya Hoga</div>`,
        poster: "img/neha img/4.jpg",
    },
    {
        id:"5",
        songName: `Chand Mera Naraaz Hai <br><div class="subtitle">Chand Mera Naraaz Hai</div>`,
        poster: "img/neha img/5.jpg",
    },
    {
        id:"6",
        songName: `Chad Gayi <br><div class="subtitle">Chad Gayi</div>`,
        poster: "img/neha img/6.jpg",
    },
    {
        id:"7",
        songName: `Chalti hai Kya 9 se 12<br><div class="subtitle">Judwaa 2</div>`,
        poster: "img/neha img/7.jpg",
    },
    {
        id:"8",
        songName: `Chhote Chhote Peg<br><div class="subtitle">Sonu Ke Titu ki Sweety</div>`,
        poster: "img/neha img/8.jpg",
    },
    {
        id:"9",
        songName: `Chitta Kukkad<br><div class="subtitle">Loveshuda</div>`,
        poster: "img/neha img/9.jpg",
    },
    {
        id:"10",
        songName: `Daiyya<br><div class="subtitle">Hunterr</div>`,
        poster: "img/neha img/10.jpg",
    }, {
        id:"11",
        songName: `De taali<br><div class="subtitle">Bal Ganesh</div>`,
        poster: "img/neha img/11.jpg",
    }, {
        id:"12",
        songName: `Dhating Naach<br><div class="subtitle">Phata Poster Nikla Hero</div>`,
        poster: "img/neha img/12.jpg",
    }, {
        id:"13",
        songName: `Dholida<br><div class="subtitle">Love yatri</div>`,
        poster: "img/neha img/13.jpg",
    }, {
        id:"14",
        songName: `Botal khol<br><div class="subtitle">Botal khol</div>`,
        poster: "img/neha img/14.jpg",
    }, {
        id:"15",
        songName: `Cheez Badi <br><div class="subtitle">Machine</div>`,
        poster: "img/neha img/15.jpg",
    },{
        id:"16",
        songName: `Coca Cola<br><div class="subtitle">Lukka Chuppi</div>`,
        poster: "img/neha img/16.jpg",
    },{
        id:"17",
        songName: `Dekhega Raja Trailer<br><div class="subtitle">Mastizaade</div>`,
        poster: "img/neha img/17.jpg",
    },{
        id:"18",
        songName: `Dheeme Dheeme<br><div class="subtitle">Dheeme Dheeme</div>`,
        poster: "img/neha img/18.jpg",
    },{
        id:"19",
        songName: `Dil Chahiye<br><div class="subtitle">Dil Chahiye</div>`,
        poster: "img/neha img/19.jfif",
    },{
        id:"20",
        songName: `Dil Ko Karaar Ayaa<br><div class="subtitle">Dil Ko Karaar Ayaa</div>`,
        poster: "img/neha img/20.jpg",
    },{
        id:"21",
        songName: `Dilbar<br><div class="subtitle">Satyamev jayte</div>`,
        poster: "img/neha img/21.jpg",
    },{
        id:"22",
        songName: `Do Peg Maar<br><div class="subtitle">One Night Stand</div>`,
        poster: "img/neha img/22.jpg",
    },{
        id:"23",
        songName: `Dono Ke Dono<br><div class="subtitle">Loveshuda</div>`,
        poster: "img/neha img/23.jfif",
    },{
        id:"24",
        songName: `Ek Do Teen Chaar<br><div class="subtitle">leela</div>`,
        poster: "img/neha img/24.jfif",
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
        music.src = `audio/neha/${index}.mp3`;
        poster_master_play.src =`img/neha img/${index}.jpg`;
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
    music.src = `audio/neha/${index}.mp3`;
    poster_master_play.src =`img/neha img/${index}.jpg`;
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
    music.src = `audio/neha/${index}.mp3`;
    poster_master_play.src =`img/neha img/${index}.jpg`;
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