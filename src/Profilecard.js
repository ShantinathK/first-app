
// function Profilecard(props){
    function Profilecard({title, handle, imageSrc, description}){
    // Condesend way
    // const title  = props.title;
    // const handle = props.handle

    // Using Argument Destructing
    // const{title, handle} = props;

return (

    
    //Inline styling
    // <div className="container" style={{width:"17%", display:"flex",
    //                                 flexDirection: "column" ,
    //                                 border:"1px solid black", 
    //                                 borderRadius:"5px",
    //                                 position:"relative",
    //                                 alignContent:"center"}}>
        
    <div className="card">
        {/* normal way */}
        {/* <h5>The title is {props.title}</h5>
        <h5>The handle is {props.handle}</h5> */}
        {/* Better condensed way */}
        {/* <h5>The title is {title}</h5>
        <h5>The handle is {handle}</h5> */}
        {/* Using Argument destructin{{g */}
        {/* Inline Styling */}
        {/* <div className="logo" style={{display:"grid",
                                    placeItems:"center",
                                    paddingTop:"2%"}}>
            <img src={imageSrc} alt="LogoImage" style={{width:"90%",height:"auto"}} />
        </div> */}
        
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={imageSrc} alt="LogoImage" 
                    // style={{width:"90%",height:"auto"}} 
                    />
                </figure>
                
            </div>
        <hr/>
        {/* inline styling  */}
        {/* <div style={{display:"flex",
                     flexDirection:"column",
                     placeContent:"center"}}>
        <h5>The title is {title}</h5>
        <h5>The handle is {handle}</h5>
        </div> */}
        <div className="card-content">
            <div className="media-content">
            
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
                <div className="content">
                    {description}
                </div>
                
            </div>
        </div>  
    </div>
    
    
);
}


export default Profilecard;