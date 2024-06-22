import React, { useState } from 'react'

export default function About(props) {

//    const [myStyle, setMyStyle] = useState(

//         {
//             color: 'white',
//             backgroundColor: 'Black'
//         }
//     )
let myStyle =
{
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#47566b':'white'
}
  
     
    
    return (
        <>
        <div classNameName="container">

            <h1 className="my-3" style={{    color: props.mode==='dark'?'white':'black'
}}>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item my-3">
                    <h2 className="accordion-header" id='headingOne'>
                        <button className="accordion-button" type="button" style={myStyle}           data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                          <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby='headingOne' data-bs-parent="#accordianExample" >
                        <div className="accordion-body " style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-3">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"  style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                           <strong  > Free to use</strong> 
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body " style={myStyle} >
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-3">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"   style={myStyle}           type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" >
                           <strong> Browser Compatible</strong> 
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse ">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        
            </div>

            
            </>

    )
}
