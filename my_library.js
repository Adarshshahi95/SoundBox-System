const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` LIL<br>
        <div class="subtitle">Wayne Milli</div>`,
        poster: "img/rap img/1.jpg"
    },
    {
        id:'2',
        songName:` Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/rap img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Slow Down <br><div class="subtitle"> Jay Kingh</div>`,
        poster: "img/rap img/3.jpg",
    },
    {
        id:"4",
        songName: `Trust Yourself <br><div class="subtitle">Trust Yourself</div>`,
        poster: "img/rap img/4.jpg",
    },
    {
        id:"5",
        songName: `HOMEOPATHY<br><div class="subtitle">PANTHER</div>`,
        poster: "img/rap img/5.jpg",
    },
    {
        id:"6",
        songName: `REST IN PEACE <br><div class="subtitle">REST IN PEACE</div>`,
        poster: "img/rap img/6.jpg",
    },
    {
        id:"7",
        songName: `Solow Redline  <br><div class="subtitle">Homelessrapper</div>`,
        poster: "img/rap img/7.jpg",
    },
    {
        id:"8",
        songName: `Forgotten Kings<br><div class="subtitle">King Franky</div>`,
        poster: "img/rap img/8.jpg",
    },
    {
        id:"9",
        songName: `COMPANY <br><div class="subtitle">EMIWAY BANTAI</div>`,
        poster: "img/rap img/9.jpg",
    },
    {
        id:"10",
        songName: `DRILL <br><div class="subtitle">EMIWAY BANTAI</div>`,
        poster: "img/rap img/10.jpg",
    },
    {
        id:"11",
        songName: `ABBU <br><div class="subtitle">ABBU</div>`,
        poster: "img/rap img/11.jpg",
    },
    {
        id:"12",
        songName: `RAPMAN <br><div class="subtitle">RAPMAN</div>`,
        poster: "img/rap img/12.jpg",
    },
    {
        id:"13",
        songName: `Made In The Stars <br><div class="subtitle">Made In The Stars</div>`,
        poster: "img/rap img/13.jpg",
    },
    {
        id:"14",
        songName: `BADNAAM <br><div class="subtitle">BADNAAM</div>`,
        poster: "img/rap img/14.jpg",
    },
    {
        id:"15",
        songName: `HAATH VARTHI<br><div class="subtitle">MC STAN & KSHMR</div>`,
        poster: "img/rap img/15.jpg",
    },
    {
        id:"16",
        songName: `ME <br><div class="subtitle">ME</div>`,
        poster: "img/rap img/16.jpg",
    }, {
        id:"17",
        songName: `Kya Bolti Public<br><div class="subtitle">Emiway bantai & young Galib</div>`,
        poster: "img/rap img/17.jpg",
    }, {
        id:"18",
        songName: `Sports Marathon <br><div class="subtitle">YOYO Honey Singh</div>`,
        poster: "img/rap img/18.jpg",
    }, {
        id:"19",
        songName: `Laddu Ke Bhaiya <br><div class="subtitle">Laddu Ke Bhaiya</div>`,
        poster: "img/rap img/19.jpg",
    }, {
        id:"20",
        songName: `Kulfa-kar-AAA <br><div class="subtitle">Kulfa-kar-AAA</div>`,
        poster: "img/rap img/20.jpg",
    }, {
        id:"21",
        songName: `CHHOD DALA <br><div class="subtitle">Emiway Bantai</div>`,
        poster: "img/rap img/21.jpg",
    }, {
        id:"22",
        songName: `Scene Change<br><div class="subtitle">Emiway Bantai</div>`,
        poster: "img/rap img/22.jpg",
    }, {
        id:"23",
        songName: `SUFI<br><div class="subtitle">SUFI</div>`,
        poster: "img/rap img/23.jpg",
    }, {
        id:"24",
        songName: `Never Back Down <br><div class="subtitle">Raftaar</div>`,
        poster: "img/rap img/24.jpg",
    }, {
        id:"25",
        songName: `Tell Me Once <br><div class="subtitle">Yoyo honey Singh & Alfaaz</div>`,
        poster: "img/rap img/25.jpg",
    }, {
        id:"26",
        songName: `LEGEND <br><div class="subtitle">LEGEND</div>`,
        poster: "img/rap img/26.jpg",
    }, {
        id:"27",
        songName: `TRAP-PRAA <br><div class="subtitle">TRAP-PRAA</div>`,
        poster: "img/rap img/27.jpg",
    }, {
        id:"28",
        songName: `HELLO <br><div class="subtitle">HELLO</div>`,
        poster: "img/rap img/28.jpg",
    }, {
        id:"29",
        songName: `MERI BAARI <br><div class="subtitle">Milind Gaba</div>`,
        poster: "img/rap img/29.jpg",
    }, {
        id:"30",
        songName: `NOTE fENKO <br><div class="subtitle">Yoyo honey singh </div>`,
        poster: "img/rap img/30.jpg",
    }, {
        id:"31",
        songName: `BABLI  <br><div class="subtitle">YOUNG GALIB</div>`,
        poster: "img/rap img/31.jpg",
    }, {
        id:"32",
        songName: `Mummy Aa Gayi kya 2.0<br><div class="subtitle">ZB</div>`,
        poster: "img/rap img/32.jpg",
    }, {
        id:"33",
        songName: `Mazze Me<br><div class="subtitle">Bellar</div>`,
        poster: "img/rap img/33.jpg",
    }, {
        id:"34",
        songName: `Holi Ke Rasiya <br><div class="subtitle">Holi Ke Rasiya</div>`,
        poster: "img/rap img/34.jpg",
    }, {
        id:"35",
        songName: `Meri Soulmate <br><div class="subtitle">Drill Version</div>`,
        poster: "img/rap img/35.jpg",
    },{
        id:"36",
        songName: `Maan Meri Jaan <br><div class="subtitle">KING</div>`,
        poster: "img/rap img/36.jpg",
    },{
        id:"37",
        songName: `Jiye Toh Jiye Kaise 2.0<br><div class="subtitle">Jiye Toh Jiye Kaise 2.0</div>`,
        poster: "img/rap img/37.jpg",
    },{
        id:"38",
        songName: `BHAROSA <br><div class="subtitle">Vishal Mishra & Nishwan Bhullar</div>`,
        poster: "img/rap img/38.jpg",
    },{
        id:"39",
        songName: `Teri Bewafai<br><div class="subtitle">Teri Bewafai</div>`,
        poster: "img/rap img/39.jpg",
    },{
        id:"40",
        songName: `Rula Deti Hai <br><div class="subtitle">Rula Deti Hai</div>`,
        poster: "img/rap img/40.jpg",
    },{
        id:"41",
        songName: `Dil Ko Thug Liya<br><div class="subtitle">Dil Ko Thug Liya</div>`,
        poster: "img/rap img/41.jpg",
    },{
        id:"42",
        songName: `DHOKA<br><div class="subtitle">DHOKA</div>`,
        poster: "img/rap img/42.jpg",
    },{
        id:"43",
        songName: `Aaj Phir <br><div class="subtitle">Aaj Phir</div>`,
        poster: "img/rap img/43.jpg",
    },{
        id:"44",
        songName: `kahani Suno 2.0 <br><div class="subtitle">Kahani Suno 2.0</div>`,
        poster: "img/rap img/44.jpg",
    },{
        id:"45",
        songName: `Dil Tod Ke<br><div class="subtitle">Dil Tod ke</div>`,
        poster: "img/rap img/45.jpg",
    },{
        id:"46",
        songName: `Kabhi Tumhe <br><div class="subtitle">Shershah</div>`,
        poster: "img/rap img/46.jpg",
    },{
        id:"47",
        songName: `Dil Tut Gya<br><div class="subtitle">Dil Tut Gya</div>`,
        poster: "img/rap img/47.jpg",
    },{
        id:"48",
        songName: `Narazgi <br><div class="subtitle">Narazgi</div>`,
        poster: "img/rap img/48.jpg",
    },{
        id:"49",
        songName: `Chann Sitare <br><div class="subtitle">oye Makhna</div>`,
        poster: "img/rap img/49.jpg",
    },{
        id:"50",
        songName: `Besharam Rang<br><div class="subtitle">Pathaan</div>`,
        poster: "img/rap img/50.jpg",
    },{
        id:"51",
        songName: `Do Pal<br><div class="subtitle">lata mangeshkar</div>`,
        poster: "img/rap img/51.jpg",
    },{
        id:"52",
        songName: `Ye Duniya Ye Mehfil Mere Kaam Ki Nahin <br><div class="subtitle">Heer Ranjha</div>`,
        poster: "img/rap img/52.jpg",
    },{
        id:"53",
        songName: `Agar Tum Saath ho <br><div class="subtitle">Agar Tum Saath Ho</div>`,
        poster: "img/rap img/53.jpg",
    },{
        id:"54",
        songName: `Hawayein<br><div class="subtitle">Dear Zindagi</div>`,
        poster: "img/rap img/54.jpg",
    },{
        id:"55",
        songName: `Hamari Adhuri Kahani <br><div class="subtitle">Hamari Adhuri Kahani</div>`,
        poster: "img/rap img/55.jpg",
    },{
        id:"56",
        songName: `Tera Yaar Hoon Main<br><div class="subtitle">Sonu Ke Titu Ki Sweety</div>`,
        poster: "img/rap img/56.jpg",
    },{
        id:"57",
        songName: `Ae Dil Hai Mushkil<br><div class="subtitle">Ae Dil hai Hai Mushkil</div>`,
        poster: "img/rap img/57.jpg",
    },{
        id:"58",
        songName: `Soch Na Sake<br><div class="subtitle">Airlift</div>`,
        poster: "img/rap img/58.jpg",
    },{
        id:"59",
        songName: `Naino Ki Jo Baat <br><div class="subtitle">Naino ki Jo Baat </div>`,
        poster: "img/rap img/59.jpg",
    },{
        id:"60",
        songName: `Channa Mereya<br><div class="subtitle">Ae Dil hai mushkil</div>`,
        poster: "img/rap img/60.jpg",
    },{
        id:"61",
        songName: `Sukoon Mila <br><div class="subtitle">Palak Rannkka</div>`,
        poster: "img/rap img/61.jpg",
    },{
        id:"62",
        songName: `Thodi Jagah <br><div class="subtitle">Marjaavan</div>`,
        poster: "img/rap img/62.jpg",
    },{
        id:"63",
        songName: `Kyon? <br><div class="subtitle">B PRAAK</div>`,
        poster: "img/rap img/63.jpg",
    },{
        id:"64",
        songName: `SAWAAN <br><div class="subtitle">CREATURE 3D</div>`,
        poster: "img/rap img/64.jpg",
    },{
        id:"65",
        songName: `City Lights<br><div class="subtitle">City lights</div>`,
        poster: "img/rap img/65.jpg",
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
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/rap/${index}.mp3`;
        poster_master_play.src =`img/rap img/${index}.jpg`;
        music.play();
        download_music.href = `audio/rap/${index}.mp3`;
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName)
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
    music.src = `audio/rap/${index}.mp3`;
    poster_master_play.src =`img/rap img/${index}.jpg`;
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
    music.src = `audio/rap/${index}.mp3`;
    poster_master_play.src =`img/rap img/${index}.jpg`;
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