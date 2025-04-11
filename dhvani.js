const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` Leja Re<br>
        <div class="subtitle">leja Re</div>`,
        poster: "img/dhvani img/1.jpg"
    },
    {
        id:'2',
        songName:` Vaaste <br>
        <div class="subtitle">Vaaste</div>`,
        poster: "img/dhvani img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Candy<br><div class="subtitle"> candy</div>`,
        poster: "img/dhvani img/3.jpg",
    },
    {
        id:"4",
        songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
        poster: "img/dhvani img/4.jpeg",
    },
    {
        id:"5",
        songName: `NA JA TU <br><div class="subtitle">NA JA TU </div>`,
        poster: "img/dhvani img/5.jpg",
    },
    {
        id:"6",
        songName: `Dilbar <br><div class="subtitle">satyamev Jayte</div>`,
        poster: "img/dhvani img/6.jpg",
    },
    {
        id:"7",
        songName: `Vaaste <br><div class="subtitle">Vaaste</div>`,
        poster: "img/dhvani img/7.jpg",
    },
    {
        id:"8",
        songName: `Duniya<br><div class="subtitle">Luka Chuppi</div>`,
        poster: "img/dhvani img/8.jpg",
    },
    {
        id:"9",
        songName: `kinna sona <br><div class="subtitle">Marjaavan</div>`,
        poster: "img/dhvani img/9.jpg",
    },
    {
        id:"10",
        songName: `Baby Girl<br><div class="subtitle">Baby Girl</div>`,
        poster: "img/dhvani img/10.jpg",
    },
    {
        id:"11",
        songName: `Nayan<br><div class="subtitle">nayan</div>`,
        poster: "img/dhvani img/11.jpg",
    },
    {
        id:"12",
        songName: `Kudi Meri<br><div class="subtitle">Kudi Meri</div>`,
        poster: "img/dhvani img/12.jpg",
    },
    {
        id:"13",
        songName: `Tum Hi AAna<br><div class="subtitle">Marjaavan</div>`,
        poster: "img/dhvani img/13.jpg",
    },
    {
        id:"14",
        songName: `Psycho Saiyaan<br><div class="subtitle">Saaho</div>`,
        poster: "img/dhvani img/14.jpg",
    },
    {
        id:"15",
        songName: `I AM Dyanamite<br><div class="subtitle">I AM Dynamite</div>`,
        poster: "img/dhvani img/15.jpg",
    },
    {
        id:"16",
        songName: `Gallan Goriyan<br><div class="subtitle">Gallan Goriyan</div>`,
        poster: "img/dhvani img/16.jpg",
    },{
        id:"17",
        songName: `Mukhda Vekh ke <br><div class="subtitle">De De Pyaar De</div>`,
        poster: "img/dhvani img/17.jpg",
    },{
        id:"18",
        songName: `Sauda Khara Khara <br><div class="subtitle">Good Newz</div>`,
        poster: "img/dhvani img/18.jpg",
    },{
        id:"19",
        songName: `Coca Cola <br><div class="subtitle">Khandani Safakhana</div>`,
        poster: "img/dhvani img/19.jpg",
    },{
        id:"20",
        songName: `Notebook<br><div class="subtitle">Notebook</div>`,
        poster: "img/dhvani img/20.jpg",
    },{
        id:"21",
        songName: `Veere Di Wedding  <br><div class="subtitle">Veere di wedding</div>`,
        poster: "img/dhvani img/21.jpg",
    },{
        id:"22",
        songName: `Welcome To Newyork <br><div class="subtitle">Welcome To Newyork </div>`,
        poster: "img/dhvani img/22.jpg",
    },{
        id:"23",
        songName: `Welcome To Newyork  <br><div class="subtitle">Welcome To Newyork </div>`,
        poster: "img/dhvani img/23.jpg",
    },{
        id:"24",
        songName: `Radha<br><div class="subtitle">radha</div>`,
        poster: "img/dhvani img/24.jpg",
    },{
        id:"25",
        songName: `Main Teri Hoon <br><div class="subtitle">Main Teri Hoon</div>`,
        poster: "img/dhvani img/25.jpg",
    },{
        id:"26",
        songName: `Mehendi<br><div class="subtitle">JMehendi</div>`,
        poster: "img/dhvani img/26.jpg",
    },{
        id:"27",
        songName: `Mera Yaar <br><div class="subtitle">Mera Yaar</div>`,
        poster: "img/dhvani img/27.jpg",
    },{
        id:"28",
        songName: `Candy<br><div class="subtitle">candy</div>`,
        poster: "img/dhvani img/28.jpg",
    },{
        id:"29",
        songName: `Parda Daari <br><div class="subtitle">Parda Daari</div>`,
        poster: "img/dhvani img/29.jpg",
    },{
        id:"30",
        songName: `uda Gulaal Ishq Wala <br><div class="subtitle">Pink Love</div>`,
        poster: "img/dhvani img/30.jpg",
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
        music.src = `audio/dhvani/${index}.mp3`;
        poster_master_play.src =`img/dhvani img/${index}.jpg`;
        music.play();
        download_music.href = `audio/${index}.mp3`;
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
    music.src = `audio/dhvani/${index}.mp3`;
    poster_master_play.src =`img/dhvani img/${index}.jpg`;
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
    music.src = `audio/dhvani/${index}.mp3`;
    poster_master_play.src =`img/dhvani img/${index}.jpg`;
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