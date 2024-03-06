import { useState, useRef, useEffect } from 'react'
import './App.css'
import Player from './Player.jsx'
import Contact from './Contact.jsx'
import MyForm from './Contact.jsx';
import ParentComponent from './Patent.jsx';


function App() {
    const [songs] = useState([
        
      {
        title: " Delilah",
        artist: "The Cranberries",
        img_src: "https://images.genius.com/46547d688cddb2559be13aab0bf3580a.1000x1000x1.jpg",
        src: "https://www.ashleecadell.com/xyzstorelibrary/The%20Cranberries/Greatest%20Hits/11%20-%20Delilah.mp3"
      },
      
      {
        title: "Disappointment",
        artist: "The Cranberries",
        img_src: "https://i.ytimg.com/vi/liViDk5ejEE/sddefault.jpg",
        src: "https://www.ashleecadell.com/xyzstorelibrary/The%20Cranberries/Greatest%20Hits/05%20-%20Disappointment.mp3"
      },

        {
        title: "Politik",
        artist: "Coldplay",
        img_src: "https://broadcast-images.nporadio.nl/w_300,h_300,c_center/16890f1a-7efb-4acd-a0cc-0ef971c4ed00/d2da8b51-a1e0-4b4c-954c-352dfbd153c2.jpg",
        src: "https://www.ashleecadell.com/xyzstorelibrary/Coldplay/A%20Rush%20Of%20Blood%20To%20The%20HeadClean/01%20-%20Politik.mp3" 
        },
      
        {
        title: "Africa",
        artist: "Toto",
        img_src: "https://i.guim.co.uk/img/media/00920ba3b9628dad73e84bbcf107b5c442c4f49c/0_0_1012_1008/master/1012.jpg?width=700&quality=85&auto=format&fit=max&s=ace53f7d55b847a54d8f1df11825aadd",
        src: "https://files.duspectacle.com/mp3/top80/09%20Toto%20-%20Africa.mp3"
      },
      {
        title: "Baby blue",
        artist: "The Cranberries",
        img_src: "https://media.pitchfork.com/photos/6126a0e31e033dc1474e3cbe/master/pass/100000x100000-999.jpeg",
        src: "https://www.ashleecadell.com/xyzstorelibrary/The%20Cranberries/Greatest%20Hits/12%20-%20Baby%20Blues.mp3"
      },
      {
        title: "Animal Instinct",
        artist: "The Cranberries",
        img_src: "https://i.scdn.co/image/ab67616d00001e02685628de68cfc204f3f8dbd5",
        src: "https://www.ashleecadell.com/xyzstorelibrary/The%20Cranberries/Greatest%20Hits/10%20-%20Animal%20Instinct.mp3"
      },
      {
        title: "Dreams",
        artist: "The Cranberries",
        img_src: "https://i1.sndcdn.com/artworks-000081381955-6949qt-t500x500.jpg",
        src: "https://www.ashleecadell.com/xyzstorelibrary/The%20Cranberries/Greatest%20Hits/03%20-%20Dreams.mp3"
      },
      {
        title: "Free to decide",
        artist: "The Cranberries",
        img_src: "https://upload.wikimedia.org/wikipedia/it/thumb/5/5c/Free_to_Decide.png/1200px-Free_to_Decide.png",
        src: "https://www.ashleecadell.com/xyzstorelibrary/The%20Cranberries/Greatest%20Hits/08%20-%20Free%20To%20Decide.mp3"
      }
      ,
      {
        title: "I still do it",
        artist: "The Cranberries",
        img_src: "https://www.limerickleader.ie/resizer/640/-1/true/GN4_DAT_9327398.jpg--the_late_dolores_o_riordan_and_her_cranberries_bandmates_having_fun_at_a_civic_reception_in_the_group_s_honour_in_1993__below__with_her_mum_eileen_and_meeting_pope_john_paul_ii.jpg",
        src: "https://www.ashleecadell.com/xyzstorelibrary/The%20Cranberries/Greatest%20Hits/02%20-%20I%20Still%20Do.mp3"
      },
      {
        title: "No need to argue",
        artist: "The cranberries",
        img_src: "https://i1.sndcdn.com/artworks-000072483102-na6m99-t500x500.jpg",
        src: "https://www.ashleecadell.com/xyzstorelibrary/The%20Cranberries/Greatest%20Hits/06%20-%20No%20Need%20To%20Argue.mp3"
      },
      {
        title: "Ode to my family",
        artist: "The Cranberries",
        img_src: "https://e.snmc.io/i/1200/s/cebd95cb662d0e8880e938af81c64f81/3937930",
        src: "https://www.ashleecadell.com/xyzstorelibrary/The%20Cranberries/Greatest%20Hits/04%20-%20Ode%20To%20My%20Family.mp3"
      },
      {
        title: "The scientist",
        artist: "Coldplay",
        img_src: "https://i.ytimg.com/vi/RB-RcX5DS5A/sddefault.jpg",
        src: "https://www.ashleecadell.com/xyzstorelibrary/Coldplay/A%20Rush%20Of%20Blood%20To%20The%20HeadClean/04%20-%20The%20Scientist.mp3"
      },
      {
        title: "War child",
        artist: "The Cranberries",
        img_src: "https://m.media-amazon.com/images/M/MV5BMjMxNjY5MjAyNV5BMl5BanBnXkFtZTgwMDY0Mjg1NDM@._V1_FMjpg_UX1000_.jpg",
        src: "https://www.ashleecadell.com/xyzstorelibrary/The%20Cranberries/Greatest%20Hits/09%20-%20War%20Child.mp3"
      },
      {
        title: "Yellow",
        artist: "ColdPlay",
        img_src: "https://i.scdn.co/image/ab67616d0000b2733d92b2ad5af9fbc8637425f0",
        src: "https://ai.stanford.edu/~bangpeng/download/music/rmn/Coldplay%20-%20Yellow.mp3"
      },
      {
        title: "In my place",
        artist: "ColdPlay",
        img_src: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2020/07/11/22/yellowcoldplay.png?width=1200&auto=webp&quality=75",
        src: "https://www.ashleecadell.com/xyzstorelibrary/Coldplay/A%20Rush%20Of%20Blood%20To%20The%20HeadClean/02%20-%20In%20My%20Place.mp3"
      },
      {
        title: "Clock",
        artist: "Coldplay",
        img_src: "https://i1.sndcdn.com/artworks-000242120362-x0fw9a-t500x500.jpg",
        src: "https://www.ashleecadell.com/xyzstorelibrary/Coldplay/A%20Rush%20Of%20Blood%20To%20The%20HeadClean/05%20-%20Clocks.mp3"
      },
      {
        title: "Champion of the world ",
        artist: "Coldplay",
        img_src: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1610023532/project-covers/001/018/965/1018965-original.jpg?1610023532",
        src: "https://www.ashleecadell.com/xyzstorelibrary/Coldplay/Everyday%20Life%20%5bClean%5d/(Disc%202)%2007%20-%20Champion%20Of%20The%20World.mp3"
      },
      {
        title: "Viva la vida",
        artist: "ColdPlay",
        img_src: "https://images.squarespace-cdn.com/content/v1/5099306be4b0f629c2afcc25/1394041945918-OFEO83X3PTNZ2END8XYI/coldplay.jpg",
        src: "https://www.ashleecadell.com/xyzstorelibrary/Coldplay/Viva%20La%20Vida%20Or%20Death%20And%20All%20His%20Friends/07%20-%20Viva%20La%20Vida.mp3"
      },
      {
        title: "Fix you",
        artist: "Coldplay",
        img_src: "https://www.coldplay.com/wp/wp-content/uploads/2015/11/fixyou.jpg",
        src: "https://www.ashleecadell.com/xyzstorelibrary/Coldplay/X%20&%20Y/06%20-%20X%20&%20Y.mp3"
      },
      {
        title: "Paradise",
        artist: "Coldplay",
        img_src: "https://i1.sndcdn.com/artworks-000420469914-cs5k2q-t500x500.jpg",
        src: "https://www.ashleecadell.com/xyzstorelibrary/Coldplay/Mylo%20Xyloto/314%20-%20Paradise.mp3"
      },{
        title: "Every teardrop is a waterfall",
        artist:"Coldplay",
        img_src: "https://m.media-amazon.com/images/M/MV5BNGE1ZDRhOWItYTE3Yy00MTFiLTg1MTAtNjI3MmNlYTNjMTI5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg",
        src: "https://www.ashleecadell.com/xyzstorelibrary/Coldplay/Mylo%20Xyloto/714%20-%20Every%20Teardrop%20Is%20A%20Waterfall.mp3"
      }
    ]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
  
    useEffect(() => {
      setNextSongIndex(() => {
        if (currentSongIndex + 1 > songs.length - 1) {
          return 0;
        } else {
          return currentSongIndex + 1;
        }
      });
    }, [currentSongIndex]);



    
    
    
    return (
      <div className="App">
    
        <Player 
          currentSongIndex={currentSongIndex} 
          setCurrentSongIndex={setCurrentSongIndex} 
          nextSongIndex={nextSongIndex} 
          songs={songs}
        /> 

       <div className="butt"><ParentComponent /></div>
       
        
      
      
      
      
      
      
      
       <p>🔥Update:<b>Dreams-The Cranberries.</b> <i>Requested by</i> <b>Ifad</b>&nbsp;[<i>3-4-2024</i> 7:45am] </p>
       
     
     
     
     
     
     
     
     
     
     
     <br/><br /> <p><i>Created by -Fardus wahid. (Proto-type)</i></p>
     
      </div>
    );
  }
export default App










