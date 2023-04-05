import React,{useState} from 'react'



export default function Textform(props) {

const [text, settext] = useState('')
const [info, setinfo] = useState( 
<div className="card card-body invisible text-center position" hidden style={{width: '300px'}}>
  i am info
</div>
)
const [info1, setinfo1] = useState( 
  <div className="card card-body invisible text-center position" hidden style={{width: '300px'}}>
    i am info
  </div>
  )
  const [info2, setinfo2] = useState( 
    <div className="card card-body invisible text-center position" hidden style={{width: '300px'}}>
      i am info
    </div>
    )



// text to upper case
const toupper =()=>{
  if (text === text.toUpperCase()) {
    props.alert({
      message : 'Already UpperCase',
      message1 : ' ',
      value : "warning"
    })
    setTimeout(() => {
      props.alert({
        message : '',
        value : null
        
      })
    },1800);
    
  }
  else{
    let newtext = text.toUpperCase();
    settext(newtext)
    props.alert({
      message : 'Text Converted To UpperCase',
      message1 : 'Success : ',
      value : "success"
    })
    setTimeout(() => {
      props.alert({
        message : '',
        value : null
        
      })
    },1800);
  }
}

// text to lower case
const tolower =()=>{
  if (text === text.toLowerCase()) {
    props.alert({
      message : 'Already LowerCase',
      message1 : ' ',
      value : "warning"
    })
  }
  else{
    settext(text.toLowerCase())
    props.alert({
      message : 'Text Converted To LowerCase',
      message1 : 'Success : ',
      value : "success"
    })
  }

    setTimeout(() => {
      props.alert({
        message : '',
        value : null
        
      })
    },1800);
   
}



// add spaces
const addspace1 = (phrase) => {
    
  return phrase
    // .toLowerCase()
    .split('')
    // .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
const addspace =()=>{
  let result = addspace1(text);
  settext(result)
  props.alert({
    message : 'Spaces Added',
    message1 : 'Success : ',
    value : "success"
  })
  setTimeout(() => {
    props.alert({
      message : '',
      value : null
      
    })
  },1800);
}  

// to oneline
const oneline1 = (phrase) => {
    
  return phrase
    // .toLowerCase()
    .split(/\n/g)
    // .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
const oneline =()=>{
  if (text === oneline1(text)) {
    props.alert({
      message : 'Text Already In Single-Line',
      message1 : '',
      value : "warning"
    })
    setTimeout(() => {
      props.alert({
        message : '',
        value : null
        
      })
    },1800);
    setinfo(<div className="collapse" style={{color:props.textarea.backgroundColor === "white"?'black':'black'}} id="collapseExample">
    <div className="card card-body">
      To Use This Feature You Have To Add Text In Multiple Lines And Try Again.
    </div>
  </div>)
    
  }
  else{
  let result = oneline1(text);
  settext(result)
  props.alert({
    message : 'Text Converted To Single-Line',
    message1 : 'Success : ',
    value : "success"
  })
  setTimeout(() => {
    props.alert({
      message : '',
      value : null
      
    })
  },1800);
  setinfo('')
  }
}  

// to capitalize
const toTitleCase = str => str.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())

const tocapital =()=>{
  if (text === toTitleCase(text)) {
    props.alert({
      message : 'Text Already Capitalize',
      message1 : '',
      value : "warning"
    })
    setTimeout(() => {
      props.alert({
        message : '',
        value : null
        
      })
    },1800);
  }
  else{
    let result = toTitleCase(text);
    settext(result)
    props.alert({
      message : 'Text Converted To Capitalize',
      message1 : 'Success : ',
      value : "success"
    })
    setTimeout(() => {
      props.alert({
        message : '',
        value : null
        
      })
    },1800);
  }
}  


// to title
const check = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
const totitle =()=>{
  if (text === check) {
    props.alert({
      message : 'Text Already Title Case ',
      message1 : ' ',
      value : "info"
    })
    setTimeout(() => {
      props.alert({
        message : '',
        value : null
        
      })
    },1800);
  }
  else{
    settext(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
    props.alert({
      message : 'Text Converted To Title Case ',
      message1 : 'Success : ',
      value : "success"
    })
    setTimeout(() => {
      props.alert({
        message : '',
        value : null
        
      })
    },1800);
  }
}

// to title pro
const titlepro1 = (phrase) => {
    
  return phrase
    .toLowerCase()
    .split(/\n/g)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('\n');
};


const titlepro =()=>{
  if (text === oneline1(text)) {props.alert({
    message : 'Title Pro Not Enabled',
    message1 : 'Try Again : ',
    value : "warning"
  })
  setTimeout(() => {
    props.alert({
      message : '',
      value : null
      
    })
  },1800);
    setinfo1(<div className="collapse" style={{color:props.textarea.backgroundColor === "white"?'black':'black'}} id="collapseExample1">
    <div className="card card-body">
      To Use This Feature You Have To Add Text In Multiple Lines And Try Again.
    </div>
  </div>)
  }
  else{
let result = titlepro1(text);
settext(result)
props.alert({
  message : 'Title Case Enabled For Every Line',
  message1 : 'Success : ',
  value : "success"
})
setTimeout(() => {
  props.alert({
    message : '',
    value : null
    
  })
},1800);
setinfo1("")
  }
}  

// copy to clipboard
function copyToClipboard() {
  if(navigator.clipboard) {
      navigator.clipboard.writeText(text);
      props.alert({
        message : 'Text Copied To Clipboard',
        message1 : 'Success : ',
        value : "success"
      })
      setTimeout(() => {
        props.alert({
          message : '',
          value : null
          
        })
      },1800);
  }
  else{
    props.alert({
      message : 'Unable To Copy Text',
      message1 : 'Error : ',
      value : "danger"
    })
    setTimeout(() => {
      props.alert({
        message : '',
        value : null
        
      })
    },1800);;
  }
}

// to clear all text
const toclear=()=>{
    settext("")
    props.alert({
      message : 'Text Clear',
      message1 : 'Success : ',
      value : "success"
    })
    setTimeout(() => {
      props.alert({
        message : '',
        value : null
        
      })
    },1800);;
}

// onchange event for textarea
const onchange=(event)=>{
    settext(event.target.value)
}

// remove all spaces
const removespace=()=>{
  
    settext(text.split('\n').map(x => x.replace(/\s+/g," ")).join('\n'))
props.alert({
      message : 'Extra Spaces Removed',
      message1 : 'Success : ',
      value : "success"
    })
    setTimeout(() => {
      props.alert({
        message : '',
        value : null
        
      })
    },1800);;
}
const removeallspace=()=>{
  
  settext(text.replace(/\s+|\s+$/g,""))
props.alert({
      message : 'All Spaces Removed',
      message1 : 'Success : ',
      value : "success"
    })
    setTimeout(() => {
      props.alert({
        message : '',
        value : null
        
      })
    },1800);;
}

// text to multiple lines
const tomultipleline=()=>{
  if (text === text.replace(/\s+|\s+$/g,"")) {
    props.alert({
      message : 'You Have To Add Space Between Words To Use This Feature',
      message1 : ' ',
      value : "warning"
    })
    setTimeout(() => {
      props.alert({
        message : '',
        value : null
        
      })
    },1800);;
    setinfo2(<div className="collapse" style={{color:props.textarea.backgroundColor === "white"?'black':'black'}} id="collapseExample2">
    <div className="card card-body">
      Please Add Some Spaces Between Each Word.
    </div>
  </div>)
  }
  else{
  settext(text.replace(/\s+|\s+$/g,"\n"))
props.alert({
      message : 'Text Converted To Multiple Lines',
      message1 : 'Success : ',
      value : "success"
    })
    setTimeout(() => {
      props.alert({
        message : '',
        value : null
        
      })
    },1800);;
    setinfo2("")

  }
}


// to count seconds
// function secondsToTime(e){
//   const Hours = Math.floor(e / 3600).toString().padStart(2,'0'),
//         Minutes = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
//         Seconds = Math.floor(e % 60).toString().padStart(2,'0');
  
//   return Hours + ':' + Minutes + ':' + Seconds;
  //return `${h}:${m}:${s}`;
// }







// to count minutes and seconds for each word
const count = 0.003 * text.split(/\s+/).filter((element)=>{return element.length !==0 }).length
let Minute = Math.trunc(count)
let tofixed = count.toFixed(3)*120
let second = tofixed.toFixed(2)

  return (
    <div className={`container min-vh-100 ${props.style}`}  >
        <form>
  
  <div className="form-group mx-auto py-2 ">
    <label htmlFor="exampleFormControlTextarea1 text-center"> <h2>Enter Text To Analyse</h2></label>
    <textarea className="form-control" value={text} onChange={onchange}  placeholder='Enter Text Here' style={props.textarea}   id="exampleFormControlTextarea1" rows="7"></textarea>
    <div className='py-2'>
      
    <button disabled={text.length === 0} type="button" onClick={toupper} className="btn btn-primary mx-1 my-1" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">UpperCase</button>
    

    <button disabled={text.length === 0} type="button" onClick={tolower}  className="btn btn-primary mx-1 my-1" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1"  aria-controls="collapseWidthExample1">LowerCase</button>
    
  
    <button disabled={text.length === 0} type="button" onClick={tocapital}  className="btn btn-primary mx-1 my-1">Capitalize</button>
    <button disabled={text.length === 0} type="button" onClick={totitle}  className="btn btn-primary mx-1 my-1">Title Case</button>
    <button disabled={text.length === 0} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" onClick={titlepro}  className="btn btn-primary mx-1 my-1">Title Pro</button>
    {info1}
    <button disabled={text.length === 0} type="button" onClick={addspace}  className="btn btn-primary mx-1 my-1">Add Space</button> 
    <button disabled={text.length === 0} type="button" onClick={removespace}  className="btn btn-primary mx-1 my-1">Remove Space</button>
    <button disabled={text.length === 0} type="button" onClick={removeallspace}  className="btn btn-primary mx-1 my-1">Remove All Space</button>
    <button disabled={text.length === 0} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={oneline}  className="btn btn-primary mx-1 my-1">To Single-Line</button>
    {info}
    <button disabled={text.length === 0}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2" onClick={tomultipleline}  className="btn btn-primary mx-1 my-1">To Multi-Line</button>
    {info2}
    <button disabled={text.length === 0} type="button" onClick={copyToClipboard}  className="btn btn-primary mx-1 my-1">Copy Text</button>
    <button disabled={text.length === 0} type="button" onClick={toclear}  className="btn btn-primary mx-1 my-1">Clear</button>
    </div>
    <div>

    <p>{text.split(/\s+/).filter(function(n) { return n !== '' }).length} Words And {text.replace(/\s/g, "").length} Characters <br />
    {Minute} Minutes {second} Seconds To Read</p>
    <h2>Preview Here</h2>
    <p className='text-wrap text-justify  text-break' >{text.length===0? 'No Text To Preview':text }</p>
    </div>
  </div>
  


</form>
    </div>
  )
}
